'use client';

import { Category } from '@prisma/client';
import { FC } from 'react';
import { CategoryItem } from '@/shared/components';
import { paths } from '@/shared/config/routes';
import { cn } from '@/shared/lib';
import { useCategoryStore } from '@/shared/lib/store';

interface IProps {
    items: Category[];
    className?: string;
}

const Categories: FC<IProps> = ({ className, items }) => {
    const { activeId } = useCategoryStore((state) => state);
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {items.map((cat) => (
                <CategoryItem
                    href={paths.category(cat.name)}
                    key={cat.id}
                    text={cat.name}
                    className={cn(
                        activeId === cat.id && 'bg-white shadow-md shadow-gray-200 text-primary',
                    )}
                />
            ))}
        </div>
    );
};

export default Categories;
