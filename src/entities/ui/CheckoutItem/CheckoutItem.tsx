'use client';

import { X } from 'lucide-react';
import React from 'react';
import * as CartItem from '@/entities/ui/CartItemDetails';
import { cn } from '@/shared/lib/utils';

interface Props extends CartItem.CartItemProps {
    onClickCountButton?: (type: 'plus' | 'minus') => void;
    onClickRemove?: () => void;
    className?: string;
}

const CheckoutItem: React.FC<Props> = ({
    name,
    price,
    imageUrl,
    quantity,
    details,
    className,
    disabled,
    onClickCountButton,
    onClickRemove,
}) => (
    <div
        className={cn(
            'flex items-center justify-between',
            {
                'opacity-50 pointer-events-none': disabled,
            },
            className,
        )}
    >
        <div className='flex items-center gap-5 flex-1'>
            <CartItem.Image src={imageUrl} />
            <CartItem.Info name={name} details={details} />
        </div>

        <CartItem.Price value={price} />

        <div className='flex items-center gap-5 ml-20'>
            <CartItem.CountButton onClick={onClickCountButton} value={quantity} />
            <button type='button' onClick={onClickRemove}>
                <X className='text-gray-400 cursor-pointer hover:text-gray-600' size={20} />
            </button>
        </div>
    </div>
);

export default CheckoutItem;
