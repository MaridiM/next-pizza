import { FC } from 'react';
import { Search } from '@/entities/ui';
import { HeaderActions } from '@/features';
import { Container, Logo } from '@/shared/components';
import { cn } from '@/shared/lib';

interface IProps {
    hasSearch?: boolean
    hasCart?: boolean
    className?: string;
}

const Header: FC<IProps> = ({ className, hasSearch = true, hasCart = true }) => (
    <header className={cn('border-b', className)}>
        <Container className='flex items-center p-8 justify-between '>
            <Logo />
            {hasSearch && <Search />}
            <HeaderActions hasCart={hasCart} />
        </Container>
    </header>
);

export default Header;
