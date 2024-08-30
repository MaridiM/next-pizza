'use client';

import { Product } from '@prisma/client';
import Link from 'next/link';
import { FC } from 'react';
import { paths } from '@/shared/config/routes';
import { cn } from '@/shared/lib';

interface IProps {
    focused: boolean;
    className?: string;
    products: Product[];
    onSelectItem: () => void
}

const SearchList: FC<IProps> = ({ className, focused, products, onSelectItem }) => (
    <div
        className={cn(
            'absolute w-full bg-white rounded-xl p-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12',
            className,
        )}
    >
        {products.map((product) => (
            <Link
                key={product.id}
                href={paths.product(product.id)}
                className='flex items-center gap-5 rounded-sm px-3 py-2 hover:bg-primary/10'
                onClick={onSelectItem}
            >
                <img className='rounded-sm h-8 w-8' src={product.imageUrl} alt={product.name} />
                <span>{product.name}</span>
            </Link>
        ))}
    </div>
);

export default SearchList;
