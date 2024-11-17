'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import {
    Button,
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/shared/components';
import { paths } from '@/shared/config/routes';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { getCartItemDetails } from '@/shared/lib/helpers';
import { useCartStore } from '@/shared/lib/store/cart';
import CartDrawerItem from '../CartDrawerItem/CartDrawerItem';

interface IProps extends PropsWithChildren {
    className?: string;
    children: ReactNode;
    // totalAmount: number;
}

const CartDrawer: FC<IProps> = ({ children, className }) => {
    const { fetchCartItems, totalAmount, items, updateItemQuantity, removeCartItem } =
        useCartStore();

    useEffect(() => {
        fetchCartItems();
    }, []);

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const currentQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, currentQuantity);
    };
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>

            <SheetContent
                className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'
                aria-describedby={undefined}
            >
                <SheetHeader>
                    <SheetTitle>
                        В Корзине <span className='font-bold'>{items.length} товара</span>
                    </SheetTitle>
                </SheetHeader>

                <div className='-mx-6 mt-5 overflow-auto scrollbar flex flex-col flex-1 gap-2'>
                    {items.map((item) => (
                        <CartDrawerItem
                            key={item.id}
                            id={item.id}
                            imageUrl={item.imageUrl}
                            details={
                                item.pizzaSize && item.pizzaType
                                    ? getCartItemDetails(
                                          item.ingredients,
                                          item.pizzaType as PizzaType,
                                          item.pizzaSize as PizzaSize,
                                      )
                                    : ''
                            }
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            onClickCountButton={(type) =>
                                onClickCountButton(item.id, item.quantity, type)
                            }
                            onClickRemove={() => removeCartItem(item.id)}
                        />
                    ))}
                </div>

                <SheetFooter className='sm:flex-col -mx-6 bg-white p-8'>
                    <div className='w-full'>
                        <div className='flex mb-4'>
                            <span className='flex flex-1 text-lg text-neutral-500'>
                                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'>
                                    Итого
                                </div>
                            </span>
                            <span className='font-bold text-lg'>{totalAmount} ₽</span>
                        </div>
                    </div>

                    <Link href={paths.cart}>
                        <Button type='submit' className='w-full h-12 text-base'>
                            Оформить заказ
                            <ArrowRight className='w-5 ml-2' />
                        </Button>
                    </Link>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
