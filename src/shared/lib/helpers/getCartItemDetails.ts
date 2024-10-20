import { Ingredient } from '@prisma/client';
import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants/pizza';

export const getCartItemDetails = (
    pizzaTipe: PizzaType,
    pizzaSize: PizzaSize,
    ingredients: Ingredient[],
): string => {
    const details: string[] = [];

    if (pizzaSize) {
        const typeName = mapPizzaType[pizzaTipe];
        details.push(`${typeName} ${pizzaSize} см`);
    }

    if (ingredients) {
        details.push(...ingredients.map((ingredient) => ingredient.name));
    }

    return details.join(', ');
};
