import { FC } from 'react';
import { Container, Logo} from '@/shared/components';
import { HeaderActions } from '@/features';
import { cn } from '@/shared/lib';

interface IProps {
    className?: string;
}

const Header: FC<IProps> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center p-8 justify-between'>
                <Logo />
                <HeaderActions />
            </Container>
        </header>
    );
};

export default Header;
