import { FC } from 'react';
import { Skeleton } from '../../ui';

interface IProps {
    title: string;
    className?: string;
    limit?: number;
}

const SkeletonLoader: FC<IProps> = ({ className, limit = 5, title }) => (
    <div className={className}>
        <p className='font-bold mb-3'>{title}</p>

        {...Array(limit)
            .fill(0)
            .map((_, idx) => <Skeleton key={idx} className='h-6 mb-5 rounded-md' />)}
        <Skeleton className='w-28 h-6 mb-5 rounded-md' />
    </div>
);

export default SkeletonLoader;
