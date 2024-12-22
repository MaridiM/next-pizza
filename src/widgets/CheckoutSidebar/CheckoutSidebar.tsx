'use client';

import { Package, Percent, Truck, ArrowRight } from 'lucide-react';
import { FC } from 'react';
import {
    Button,
    CheckoutItemDetail,
    Skeleton,
    SkeletonLoader,
    WhiteBlock,
} from '@/shared/components';
import { cn } from '@/shared/lib';

interface IProps {
    totalAmount: number;
    loading?: boolean;
    className?: string;
}
const VAT = 22;
const DELIVERY_PRICE = 250;

const CheckoutSidebar: FC<IProps> = ({ totalAmount, loading, className }) => {
    const vatPrice = (totalAmount * VAT) / 100;
    const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

    return (
        <div className={cn('w-450px', className)}>
            <WhiteBlock className='p-6 sticky top-4'>
                <div className='flex flex-col gap-1 pb-4'>
                    <span className='text-xl'>Итого:</span>
                    {loading ? (
                        <Skeleton className='w-48 h-11' />
                    ) : (
                        <span className='h-11 text-[34px] font-extrabold'>{totalPrice} ₽</span>
                    )}
                </div>
                <div className='py-2 border-y border-dashed border-b-neutral-200'>
                    <CheckoutItemDetail
                        icon={<Package size={20} className='mr-2 text-gray-400' />}
                        title='Стоимость корзины:'
                        value={
                            loading ? (
                                <Skeleton className='w-16 h-6 rounded-[8px]' />
                            ) : (
                                `${totalAmount} ₽`
                            )
                        }
                    />
                    <CheckoutItemDetail
                        icon={<Percent size={20} className='mr-2 text-gray-400' />}
                        title='Налоги:'
                        value={
                            loading ? (
                                <Skeleton className='w-16 h-6 rounded-[8px]' />
                            ) : (
                                `${vatPrice} ₽`
                            )
                        }
                    />
                    <CheckoutItemDetail
                        icon={<Truck size={20} className='mr-2 text-gray-400' />}
                        title='Доставка:'
                        value={
                            loading ? (
                                <Skeleton className='w-16 h-6 rounded-[8px]' />
                            ) : (
                                `${DELIVERY_PRICE} ₽`
                            )
                        }
                    />
                </div>
                <Button type='submit' className='w-full h-14 rounded-2x mt-6 text-base font-bold'>
                    Оформить заказ
                    <ArrowRight className='w-5 ml-2' />
                </Button>
            </WhiteBlock>
        </div>
    );
};

export default CheckoutSidebar;
