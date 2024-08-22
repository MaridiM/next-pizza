import { cn } from '@/shared/lib';
import { FC } from 'react';
import { Container } from '@/shared/components';
import { Categories, SortPopup } from '@/entities/ui';

interface IProps {
    className?: string;
}

const TopBar: FC<IProps> = ({ className }) => {
    return (
        <div
            className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-20',
                className,
            )}
        >
            <Container className='flex w-full justify-between'>
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};

export default TopBar;
