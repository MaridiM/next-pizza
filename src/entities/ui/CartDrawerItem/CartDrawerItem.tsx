import { Trash2Icon } from 'lucide-react';
import { FC } from 'react';
import * as CartItem from '@/entities/ui/CartItemDetails';
import { cn } from '@/shared/lib';
import { CountButton } from '../CountButton';

interface IProps extends CartItem.CartItemProps {
<<<<<<< HEAD
    onClickCountButton?: (type: 'plus' | 'minus') => void;
    onClickRemove?: () => void;
=======
>>>>>>> 453d3a01983e673d12b1ee780da1d71cc0e06d80
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
<<<<<<< HEAD
    onClickCountButton,
    onClickRemove,
=======
>>>>>>> 453d3a01983e673d12b1ee780da1d71cc0e06d80
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
<<<<<<< HEAD
                <CountButton onClick={onClickCountButton} value={quantity} />
=======
                <CountButton onClick={(type) => console.log(type)} value={quantity} />
>>>>>>> 453d3a01983e673d12b1ee780da1d71cc0e06d80

                <div className='flex items-center gap-3'>
                    <CartItem.Price value={price} />
                    <Trash2Icon
                        size={16}
<<<<<<< HEAD
                        onClick={onClickRemove}
=======
>>>>>>> 453d3a01983e673d12b1ee780da1d71cc0e06d80
                        className='text-gray-400 cursor-pointer hover:text-gray-600'
                    />
                </div>
            </div>
        </div>
    </div>
);
export default CartDrawerItem;
