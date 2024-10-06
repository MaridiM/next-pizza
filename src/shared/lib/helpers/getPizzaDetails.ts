import { ProductItem, Ingredient } from '@prisma/client';
import { PizzaType, PizzaSize, mapPizzaType } from '@/shared/constants/pizza';
import { calcTotalPizzaPrice } from './calcTotalPizzaPrice';

/**
 *  Function for creating detail for pizza
 *
 * @example ```getPizzaDetails(1, 20, variants, ingredients, selectedIngredients)```
 *
 * @param type - pizza dough thickness
 * @param size - pizza size
 * @param variants - list of variants
 * @param ingredients list of ingredients
 * @param selectedIngredients - selected ingredients
 *
 * @returns number - total price
 */

export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    variants: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number> = new Set<number>(),
) => {
    const totalPrice = calcTotalPizzaPrice(type, size, variants, ingredients, selectedIngredients);
    const textDetail = `${size}см, ${mapPizzaType[type]} пицца`;

    return { totalPrice, textDetail };
};
