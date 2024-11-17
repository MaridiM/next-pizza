import { useRouter } from 'next/navigation';
import QueryString from 'qs';
import { useEffect } from 'react';
import { IFileters } from './useFilters';

export const useQueryFilters = (filters: IFileters) => {
    const router = useRouter();

    useEffect(() => {
        const params = {
            sizes: Array.from(filters.sizes),
            pizzaTypes: Array.from(filters.pizzaTypes),
            ...filters.prices,
            ingredients: Array.from(filters.selectedIngredients),
        };
        const query = QueryString.stringify(params, { arrayFormat: 'comma' });
        router.push(`?${query}`, { scroll: false });
    }, [router, filters]);
};
