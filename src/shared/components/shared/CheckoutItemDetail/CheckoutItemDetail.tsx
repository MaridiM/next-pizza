import { FC, ReactNode } from 'react';
import { cn } from '@/shared/lib';

interface IProps {
    icon?: ReactNode;
    title?: string;
    value?: ReactNode;
    className?: string;
}

const CheckoutItemDetail: FC<IProps> = ({ icon, title, value, className }) => (
    <div className={cn('flex my-4', className)}>
        <span className='flex flex-1 justify-center text-lg text-neutral-500'>
            {icon}
            {title}
            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
        </span>
        <span className='font-bold text-lg'>{value}</span>
    </div>
);

export default CheckoutItemDetail;
