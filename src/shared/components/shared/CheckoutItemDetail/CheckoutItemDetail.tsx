import { cn } from '@/shared/lib';
import { FC, ReactNode } from 'react';

interface IProps {
    icon?: ReactNode;
    title?: string;
    value?: string;
    className?: string;
}

const CheckoutItemDetail: FC<IProps> = ({ icon, title, value, className }) => {
    return (
        <div className={cn('flex my-4', className)}>
            <span className='flex flex-1 items-center text-lg text-neutral-500'>
                {icon}
                {title}
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
            </span>
            <span className='font-bold text-lg'>{value}</span>
        </div>
    );
};

export default CheckoutItemDetail;
