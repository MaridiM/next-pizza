'use client';

import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { ProductCard } from '@/entities/ui';
import { Title } from '@/shared/components';
import { cn } from '@/shared/lib';
import { useCategoryStore } from '@/shared/lib/store';
import { ProductWithRelations } from '@/shared/types/prisma';

interface IProps {
    title: string;
    items: ProductWithRelations[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

const ProductsGroupList: FC<IProps> = ({ title, items, categoryId, listClassName, className }) => {
    const { setActiveId } = useCategoryStore((state) => state);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId);
        }
    }, [intersection?.isIntersecting, title, categoryId, setActiveId]);

    return (
        <div className={cn(className)} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className={cn('font-extrabold mb-5', className)} />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {!!items.length &&
                    items.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.variants[0].price}
                            ingredients={item.ingredients}
                            imageUrl={item.imageUrl}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ProductsGroupList;
