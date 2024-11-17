import { mapPizzaType, PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { ICartStateItem } from './getCartDetails';

export const getCartItemDetails = (
    ingredients: ICartStateItem['ingredients'],
    pizzaTipe: PizzaType,
    pizzaSize: PizzaSize,
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
