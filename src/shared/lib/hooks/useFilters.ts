'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useSet } from 'react-use';

interface IPriceRange {
    priceFrom?: number;
    priceTo?: number;
}

interface IQueryFilters extends IPriceRange {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}

export interface IFileters {
    sizes: Set<string>;
    pizzaTypes: Set<string>;
    selectedIngredients: Set<string>;
    prices: IPriceRange;
}

export interface IFiltersReturn extends IFileters {
    setPrices: (name: keyof IPriceRange, value: number) => void;
    setSize: (key: string) => void;
    setPizzaType: (key: string) => void;
    setSelectedIngredients: (key: string) => void;
}

export const useFilters = (): IFiltersReturn => {
    const searchParams = useSearchParams() as unknown as Map<keyof IQueryFilters, string>;

    const [selectedIngredients, { toggle: toggleSelectedIngredients }] = useSet(
        new Set<string>(
            searchParams.get('ingredients') ? searchParams.get('ingredients').split(',') : [],
        ),
    );

    const [sizes, { toggle: toggleSize }] = useSet(
        new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes').split(',') : []),
    );
    const [pizzaTypes, { toggle: togglePizzaType }] = useSet(
        new Set<string>(
            searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes').split(',') : [],
        ),
    );

    const [prices, setPrices] = useState<IPriceRange>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    });

    const updatePrice = (name: keyof IPriceRange, value: number) => {
        setPrices((prevState) => ({ ...prevState, [name]: value }));
    };

    return useMemo(
        () => ({
            sizes,
            prices,
            pizzaTypes,
            selectedIngredients,
            setPrices: updatePrice,
            setSize: toggleSize,
            setPizzaType: togglePizzaType,
            setSelectedIngredients: toggleSelectedIngredients,
        }),
        [
            sizes,
            prices,
            pizzaTypes,
            selectedIngredients,
            toggleSize,
            togglePizzaType,
            toggleSelectedIngredients,
        ],
    );
};
