import { cn } from '@/shared/lib/utils';
import { CartItemProps } from '../CartItemProps.types';

interface Props extends CartItemProps {
    className?: string;
}

export const CartItemInfo: React.FC<Props> = ({ name, className, details }) => (
    <div>
        <div className={cn('flex items-center justify-between', className)}>
            <h2 className='text-lg font-bold flex-1 leading-6'>{name}</h2>
        </div>
        {!!details.length && <p className='text-xs text-gray-400 w-[90%]'>{details}</p>}
    </div>
);
