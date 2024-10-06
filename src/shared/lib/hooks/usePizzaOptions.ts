import { ProductItem } from '@prisma/client';
import { useEffect, useState } from 'react';
import { useSet } from 'react-use';
import { Variant } from '@/shared/components';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { getAvailablePizzaSizes } from '../helpers';

interface ReturnProps {
    size: PizzaSize;
    type: PizzaType;
    selectedIngredients: Set<number>;
    availableSizes: Variant[];
    setSize: (size: PizzaSize) => void;
    setType: (type: PizzaType) => void;
    addIngredient: (id: number) => void;
}

export const usePizzaOptions = (variants: ProductItem[]): ReturnProps => {
    const [size, setSize] = useState<PizzaSize>(30);
    const [type, setType] = useState<PizzaType>(1);
    const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

    const availableSizes = getAvailablePizzaSizes(type, variants);

    useEffect(() => {
        const isAvailableSize = availableSizes?.find(
            (item) => Number(item.value) === size && !item.disabled,
        );
        const availableSize = availableSizes?.find((item) => !item.disabled);

        if (!isAvailableSize && availableSize) {
            setSize(Number(availableSize.value) as PizzaSize);
        }
    }, [availableSizes, size, type]);

    return {
        size,
        type,
        availableSizes,
        selectedIngredients,
        setSize,
        setType,
        addIngredient,
    };
};
