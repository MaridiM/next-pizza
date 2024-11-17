import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';

/**
 *  Function for calculation total price for pizza
 * 
 * @example ```useCalcTotalPizzaPrice(1, 20, variants, ingredients, selectedIngredients)```
 * 
 * @param type - pizza dough thickness
 * @param size - pizza size
 * @param variants - list of variants
 * @param ingredients list of ingredients
 * @param selectedIngredients - selected ingredients
 * 
 * @returns number - total price
 */
export const calcTotalPizzaPrice = (
    type: PizzaType,
    size: PizzaSize,
    variants: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number> = new Set<number>(),
) => {
    const pizzaPrice =
        variants.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
    const totalIngredientsPrice = ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0);
    return pizzaPrice + totalIngredientsPrice;
};
