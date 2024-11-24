'use client';

import { CheckoutItem } from '@/entities/ui';
import {
    Container,
    Input,
    Title,
    WhiteBlock,
    Textarea,
    Button,
    CheckoutItemDetail,
} from '@/shared/components';
import { PizzaType, PizzaSize } from '@/shared/constants/pizza';
import { getCartItemDetails } from '@/shared/lib/helpers';
import { useCart } from '@/shared/lib/hooks';
import { CheckoutSidebar } from '@/widgets';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { FC } from 'react';

const VAT = 22
const DELIVERY_PRICE = 250; 

const Checkout: FC = () => {
    const { totalAmount, items, onClickCountButton, removeCartItem } = useCart();

    const vatPrice = (totalAmount * VAT) / 100
    const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

    return (
        <Container className='mt-5'>
            <Title text='Оформление заказа' className='font-extralight text-[36px] mb-8' />
            <div className='flex gap-10'>
                {/* Left Aside */}
                <div className='flex flex-col gap-10 flex-1 mb-20'>
                    <WhiteBlock title='1. Корзина' className=''>
                        <div className='flex flex-col gap-5'>
                            {items.map((item) => (
                                <CheckoutItem
                                    key={item.id}
                                    id={item.id}
                                    imageUrl={item.imageUrl}
                                    details={getCartItemDetails(
                                        item.ingredients,
                                        item.pizzaType as PizzaType,
                                        item.pizzaSize as PizzaSize,
                                    )}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    disabled={item.disabled}
                                    onClickCountButton={(type) =>
                                        onClickCountButton(item.id, item.quantity, type)
                                    }
                                    onClickRemove={() => removeCartItem(item.id)}
                                />
                            ))}
                        </div>
                    </WhiteBlock>
                    <WhiteBlock title='2. Персональные данные'>
                        <div className='grid grid-cols-2 gap-5'>
                            <Input name='firstName' className='text-base' placeholder='Имя' />
                            <Input name='lastName' className='text-base' placeholder='Фамилия' />
                            <Input name='email' className='text-base' placeholder='E-Mail' />
                            <Input name='phone' className='text-base' placeholder='Телефон' />
                        </div>
                    </WhiteBlock>
                    <WhiteBlock title='3. Адрес доставки'>
                        <div className='grid grid-cols gap-5'>
                            <Input name='phone' className='text-base' placeholder='Телефон' />
                            <Textarea
                                className='text-base'
                                placeholder='Комментарий к заказу'
                                rows={5}
                            />
                        </div>
                    </WhiteBlock>
                </div>
                
                <CheckoutSidebar totalAmount={totalAmount} />
            </div>
        </Container>
    );
};

export default Checkout;
