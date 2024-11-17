import { Cart, CartItem, Ingredient, Product, ProductItem } from '@prisma/client';

export type ICartItemDTO = CartItem & {
    productItem: ProductItem & {
        product: Product;
    };
    ingredients: Ingredient[];
};

export interface ICartDTO extends Cart {
    cartItems: ICartItemDTO[];
}

export interface ICreateCartItemValues {
    productItemId: number;
    ingredients?: number[];
}
