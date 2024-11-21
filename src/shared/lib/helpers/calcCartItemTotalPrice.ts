import { ICartItemDTO } from '@/entities/api/services/dtos/cart.dto';

export const calcCartItemTotalPrice = (item: ICartItemDTO): number => {
    const ingredientsPrice = item.ingredients.reduce(
        (acc, ingredient) => acc + ingredient.price,
        0,
    );

    return (ingredientsPrice + item.productItem.price) * item.quantity;
};
