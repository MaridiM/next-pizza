import { Trash2Icon } from 'lucide-react';
import { FC } from 'react';
import * as CartItem from '@/entities/ui/CartItemDetails';
import { cn } from '@/shared/lib';
import { CountButton } from '../CountButton';

interface IProps extends CartItem.CartItemProps {
    onClickCountButton?: (type: 'plus' | 'minus') => void;
    onClickRemove?: () => void;
    className?: string;
}

const CartDrawerItem: FC<IProps> = ({
    id,
    imageUrl,
    details,
    name,
    price,
    quantity,
    disabled,
    onClickCountButton,
    onClickRemove,
    className,
}) => (
    <div
        className={cn(
            'flex bg-white p-5 gap-6',
            {
                'opacity-50 pointer-events-none': disabled,
            },
            className,
        )}
    >
        <CartItem.Image src={imageUrl} />

        <div className='flex-1'>
            <CartItem.Info name={name} details={details} />

            <hr className='my-3' />

            <div className='flex items-center justify-between'>
                <CountButton onClick={onClickCountButton} value={quantity} />

                <div className='flex items-center gap-3'>
                    <CartItem.Price value={price} />
                    <Trash2Icon
                        size={16}
                        onClick={onClickRemove}
                        className='text-gray-400 cursor-pointer hover:text-gray-600'
                    />
                </div>
            </div>
        </div>
    </div>
);
export default CartDrawerItem;