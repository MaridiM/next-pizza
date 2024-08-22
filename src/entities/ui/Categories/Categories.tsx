import { cn } from '@/shared/lib';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
    className?: string;
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты', 'Десерты'];
const activeIndex = 0;

const Categories: FC<IProps> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {cats.map((name, idx) => {
                return (
                    <Link
                        href=''
                        key={idx}
                        className={cn(
                            'flex items-center font-bold h-11 rounded-2xl px-5 cursor-default',
                            activeIndex === idx &&
                                'bg-white shadow-md shadow-gray-200 text-primary',
                        )}
                    >
                        {name}
                    </Link>
                );
            })}
        </div>
    );
};

export default Categories;
