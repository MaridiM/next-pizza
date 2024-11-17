'use client';

import { FC } from 'react';
import { useIngredients } from '@/entities/api/hooks';
import { CheckboxFiltersGroup, PriceRange } from '@/entities/ui';
import { Title } from '@/shared/components';
import { cn } from '@/shared/lib';
import { useFilters, useQueryFilters } from '@/shared/lib/hooks';

interface IProps {
    className?: string;
}

const Filters: FC<IProps> = ({ className }) => {
    const filters = useFilters();
    const { ingredients, loading } = useIngredients();
    useQueryFilters(filters);

    const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

    return (
        <div className={cn(className)}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
            <CheckboxFiltersGroup
                name='sizes'
                className='mb-5'
                title='Размеры'
                onSelectItem={filters.setSize}
                selected={filters.sizes}
                items={[
                    { text: '20 см', value: '20' },
                    { text: '30 см', value: '30' },
                    { text: '40 см', value: '40' },
                    { text: '50 см', value: '50' },
                ]}
            />
            <CheckboxFiltersGroup
                name='pizzaTypes'
                className='mb-5'
                title='Тип теста'
                onSelectItem={filters.setPizzaType}
                selected={filters.pizzaTypes}
                items={[
                    { text: 'Тонкое', value: '1' },
                    { text: 'Толстое', value: '2' },
                ]}
            />
            <PriceRange filters={filters} />
            <CheckboxFiltersGroup
                title='Ингредиенты'
                name='ingredients'
                className='mt-5'
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                selected={filters.selectedIngredients}
                onSelectItem={filters.setSelectedIngredients}
            />
        </div>
    );
};

export default Filters;
