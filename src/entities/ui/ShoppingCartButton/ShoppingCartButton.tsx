import { ShoppingCart, ArrowRight } from 'lucide-react';
import { FC } from 'react';
import { Button } from '@/shared/components';
import { cn } from '@/shared/lib';
import { CartDrawer } from '../CartDrawer';

interface IProps {
    className?: string;
}

const ShoppingCartButton: FC<IProps> = ({ className }) => (
    <CartDrawer>
        <Button className={cn('group relative', className)}>
            <b>500 ₽</b>
            <span className='h-full w-[1px] bg-white/30 mx-3' />
            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart size={16} className='relative' strokeWidth={2} />
                <b>3</b>
            </div>
            <ArrowRight
                size={20}
                className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
            />
        </Button>
    </CartDrawer>
);

export default ShoppingCartButton;
