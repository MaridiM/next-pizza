import { User } from 'lucide-react';
import { FC } from 'react';
import { ShoppingCartButton } from '@/entities/ui';
import { Button } from '@/shared/components';
import { cn } from '@/shared/lib';

interface IProps {
    className?: string;
}

const HeaderActions: FC<IProps> = ({ className }) => (
    <div className={cn('flex items-center gap-3', className)}>
        <Button variant='outline' className='flex items-center gap-1'>
            <User size={16} />
            Войти
        </Button>

        <ShoppingCartButton />
    </div>
);

export default HeaderActions;
