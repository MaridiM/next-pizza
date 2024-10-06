'use client';

import { FC } from 'react';
import { cn } from '@/shared/lib';

export type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
};

interface IProps {
    title?: string;
    items: readonly Variant[];
    onClick?: (value: Variant['value']) => void;
    value?: Variant['value'];
    className?: string;
}

const ProductVariants: FC<IProps> = ({ title, items, onClick, className, value }) => (
    <div>
        {title && <h3 className='text-base font-semibold py-2'>{title}</h3>}
        <div
            className={cn(
                'flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none border-[0.15px] border-black/5',
                className,
            )}
        >
            {items.map((item) => (
                <button
                    key={item.name}
                    onClick={() => onClick?.(item.value)}
                    className={cn(
                        'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl  transition-all duration-400 text-sm font-medium',
                        {
                            'bg-white shadow border-[0.15px] border-black/5': item.value === value,
                            'text-gray-500 opacity-50 pointer-events-none': item.disabled,
                        },
                    )}
                >
                    {item.name}
                </button>
            ))}
        </div>
    </div>
);

export default ProductVariants;
