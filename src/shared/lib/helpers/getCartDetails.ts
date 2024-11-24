import { ICartDTO } from '@/entities/api/services/dtos/cart.dto';
import { calcCartItemTotalPrice } from './calcCartItemTotalPrice';

export interface ICartStateItem {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    disabled?: boolean;
    pizzaSize?: number | null;
    pizzaType?: number | null;
    ingredients: Array<{ name: string; price: number }>;
}

interface IReturnProps {
    items: ICartStateItem[];
    totalAmount: number;
}

export const getCartDetails = (data: ICartDTO): IReturnProps => {
    const items = data.cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.imageUrl,
        price: calcCartItemTotalPrice(item),
        pizzaSize: item.productItem.size,
        pizzaType: item.productItem.pizzaType,
        disabled: false,
        ingredients: item.ingredients.map((ingredient) => ({
            name: ingredient.name,
            price: ingredient.price,
        })),
    })) as ICartStateItem[];

    return {
        items,
        totalAmount: data.totalAmount,
    };
};
