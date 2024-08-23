import { FC } from 'react';
import { HeaderActions } from '@/features';
import { Container, Logo } from '@/shared/components';
import { cn } from '@/shared/lib';

interface IProps {
    className?: string;
}

const Header: FC<IProps> = ({ className }) => (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center p-8 justify-between'>
            <Logo />
            <HeaderActions />
        </Container>
    </header>
);

export default Header;
