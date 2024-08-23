import { User } from 'lucide-react';
import { FC } from 'react';
import { ShoppingCartButton } from '@/entities/ui';
import { Button } from '@/shared/components';

interface IProps {}

const HeaderActions: FC<IProps> = ({}) => (
    <div className='flex items-center gap-3'>
        <Button variant='outline' className='flex items-center gap-1'>
            <User size={16} />
            Войти
        </Button>

        <ShoppingCartButton />
    </div>
);

export default HeaderActions;
