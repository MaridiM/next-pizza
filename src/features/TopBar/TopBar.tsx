import { FC } from 'react';
import { Categories, SortPopup } from '@/entities/ui';
import { Container } from '@/shared/components';
import { cn } from '@/shared/lib';

interface IProps {
    className?: string;
}

const TopBar: FC<IProps> = ({ className }) => (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-20', className)}>
        <Container className='flex w-full justify-between'>
            <Categories />
            <SortPopup />
        </Container>
    </div>
);

export default TopBar;
