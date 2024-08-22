import { FC } from 'react';
import { ShoppingCartButton } from '@/entities/ui';
import { Button } from '@/shared/components';
import { User } from 'lucide-react';

interface IProps {}

const HeaderActions: FC<IProps> = ({}) => {
    return (
        <div className='flex items-center gap-3'>
            <Button variant='outline' className='flex items-center gap-1'>
                <User size={16} />
                Войти
            </Button>

            <ShoppingCartButton />
        </div>
    );
};

export default HeaderActions;
