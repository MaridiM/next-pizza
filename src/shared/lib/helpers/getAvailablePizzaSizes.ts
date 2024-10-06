import { ProductItem } from '@prisma/client';
import { Variant } from '@/shared/components';
import { pizzaSizes, PizzaType } from '@/shared/constants/pizza';

/**
 * Get available pizza sizes
 * @param type - pizza dough thickness
 * @param variants - list of variants
 * @returns array - pizza sizes
 */
export const getAvailablePizzaSizes = (type: PizzaType, variants: ProductItem[]): Variant[] => {
    const availablePizzasByType = variants.filter((item) => item.pizzaType === type);
    return pizzaSizes.map((item) => ({
        name: item.name,
        value: item.value,
        disabled: !availablePizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
    }));
};
