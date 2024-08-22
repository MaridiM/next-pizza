import { Button } from '@/shared/components';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { FC } from 'react';

interface IProps {}

const ShoppingCartButton: FC<IProps> = ({}) => {
    return (
        <Button className='group relative'>
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
    );
};

export default ShoppingCartButton;
