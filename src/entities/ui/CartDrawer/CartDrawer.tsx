'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';
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
import { getCartItemDetails } from '@/shared/lib/helpers';
import CartDrawerItem from '../CartDrawerItem/CartDrawerItem';

interface IProps extends PropsWithChildren {
    className?: string;
    children: ReactNode;
    // totalAmount: number;
}

const CartDrawer: FC<IProps> = ({ children, className }) => (
    <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>

        <SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
            <SheetHeader>
                <SheetTitle>
                    В Корзине <span className='font-bold'>3 товара</span>
                </SheetTitle>
            </SheetHeader>

            <div className='-mx-6 mt-5 overflow-auto scrollbar flex flex-col flex-1 gap-2'>
                <CartDrawerItem
                    id={1}
                    imageUrl={
                        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'
                    }
                    details={getCartItemDetails(2, 30, [])}
                    name={'Pizza Name'}
                    price={0}
                    quantity={1}
                />
            </div>

            <SheetFooter className='sm:flex-col -mx-6 bg-white p-8'>
                <div className='w-full'>
                    <div className='flex mb-4'>
                        <span className='flex flex-1 text-lg text-neutral-500'>
                            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'>
                                Итого
                            </div>
                        </span>
                        <span className='font-bold text-lg'>500 ₽</span>
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

export default CartDrawer;
