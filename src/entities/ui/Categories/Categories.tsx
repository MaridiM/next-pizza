'use client';

import { CategoryItem } from '@/shared/components';
import { paths } from '@/shared/config/routes';
import { cn } from '@/shared/lib';
import { useCategoryStore } from '@/shared/store';
import { FC, useEffect } from 'react';

interface IProps {
    className?: string;
}

const cats = [
    { id: 1, name: 'Пиццы' },
    { id: 2, name: 'Комбо' },
    { id: 3, name: 'Закуски' },
    { id: 4, name: 'Коктейли' },
    { id: 5, name: 'Кофе' },
    { id: 6, name: 'Напитки' },
    { id: 7, name: 'Десерты' },
];

const Categories: FC<IProps> = ({ className }) => {
    const { activeId } = useCategoryStore((state) => state);
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map((cat) => {
                return (
                    <CategoryItem
                        href={paths.category(cat.name)}
                        key={cat.id}
                        text={cat.name}
                        className={cn(
                            activeId === cat.id &&
                                'bg-white shadow-md shadow-gray-200 text-primary',
                        )}
                    />
                );
            })}
        </div>
    );
};

export default Categories;
