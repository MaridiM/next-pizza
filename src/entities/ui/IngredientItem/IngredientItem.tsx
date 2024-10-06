import { CircleCheck } from 'lucide-react';
import { FC } from 'react';
import { cn } from '@/shared/lib';

interface IProps {
    imageUrl: string;
    name: string;
    price: number;
    active?: boolean;
    onClick?: VoidFunction;
    className?: string;
}

const IngredientItem: FC<IProps> = ({ className, active, price, name, imageUrl, onClick }) => (
    <div
        className={cn(
            'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md border border-transparent bg-white',
            { 'border-primary': active },
            className,
        )}
        onClick={onClick}
    >
        {active && <CircleCheck className='absolute top-2 right-2 text-primary' />}
        <img width={110} height={110} src={imageUrl} />
        <span className='text-xs mb-1'>{name}</span>
        <span className='font-bold'>{price} ₽</span>
    </div>
);

export default IngredientItem;
;
