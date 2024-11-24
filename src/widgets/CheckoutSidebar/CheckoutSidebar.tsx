import { Button, CheckoutItemDetail, WhiteBlock } from '@/shared/components';
import { cn } from '@/shared/lib';
import { Package, Percent, Truck, ArrowRight } from 'lucide-react';
import { FC } from 'react'

interface IProps {
    totalAmount: number;
    className?: string;
}
const VAT = 22
const DELIVERY_PRICE = 250; 

const CheckoutSidebar: FC<IProps> = ({ totalAmount, className }) => {
    const vatPrice = (totalAmount * VAT) / 100;
    const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;
    return (
        <div className={cn('w-450px', className)}>
            <WhiteBlock className='p-6 sticky top-4'>
                <div className='flex flex-col gap-1'>
                    <span className='text-xl'>Итого:</span>
                    <span className='text-[34px] font-extrabold'>{totalPrice} ₽</span>
                </div>
                <CheckoutItemDetail
                    icon={<Package size={20} className='mr-2 text-gray-400' />}
                    title='Стоимость корзины:'
                    value={`${totalAmount} ₽`}
                />
                <CheckoutItemDetail
                    icon={<Percent size={20} className='mr-2 text-gray-400' />}
                    title='Налоги:'
                    value={`${vatPrice} ₽`}
                />
                <CheckoutItemDetail
                    icon={<Truck size={20} className='mr-2 text-gray-400' />}
                    title='Доставка:'
                    value={`${DELIVERY_PRICE} ₽`}
                />

                <Button type='submit' className='w-full h-14 rounded-2x mt-6 text-base font-bold'>
                    Перейти к оплате
                    <ArrowRight className='w-5 ml-2' />
                </Button>
            </WhiteBlock>
        </div>
    );
};

export default CheckoutSidebar