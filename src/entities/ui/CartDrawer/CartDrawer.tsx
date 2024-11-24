'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import {
    Button,
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Title,
} from '@/shared/components';
import { paths } from '@/shared/config/routes';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { getCartItemDetails } from '@/shared/lib/helpers';
import { useCartStore } from '@/shared/lib/store/cart';
import CartDrawerItem from '../CartDrawerItem/CartDrawerItem';
import Image from 'next/image';
import { emptyBox } from '@/shared/assets';
import { cn } from '@/shared/lib';

interface IProps extends PropsWithChildren {
    children: ReactNode;
}

const CartDrawer: FC<IProps> = ({ children }) => {
    const { fetchCartItems, totalAmount, items, updateItemQuantity, removeCartItem } =
        useCartStore();

    useEffect(() => {
        fetchCartItems();
    }, [fetchCartItems]);

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
                <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
                    {!!totalAmount && (
                        <SheetHeader>
                            <SheetTitle>
                                В Корзине <span className='font-bold'>{items.length} товара</span>
                            </SheetTitle>
                        </SheetHeader>
                    )}

                    {!totalAmount && (
                        <div className='flex flex-col items-center justify-center w-72 mx-auto'>
                            <Image src={emptyBox} alt='Empty cart' width={120} height={120} />
                            <Title
                                size='sm'
                                text='Корзина пустая'
                                className='text-center font-bold my-2'
                            />
                            <p className='text-center text-neutral-500 mb-5'>
                                Добавьте хотя бы одну пиццу, чтобы совершить заказ
                            </p>

                            <SheetClose>
                                <Button className='w-56 h-12 text-base' size='lg'>
                                    <ArrowLeft className='w-5 mr-2' />
                                    Вернуться назад
                                </Button>
                            </SheetClose>
                        </div>
                    )}

                    {!!totalAmount && (
                        <>
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
                                        disabled={item.disabled}
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
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
