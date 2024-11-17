import { create } from 'zustand';
import { Api } from '@/entities/api';
import { ICartDTO, ICreateCartItemValues } from '@/entities/api/services/dtos/cart.dto';
import { getCartDetails } from '../helpers';
import { ICartStateItem } from '../helpers/getCartDetails';

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: ICartStateItem[];

    /* Получение товаров из корзины */
    fetchCartItems: () => Promise<void>;

    /* Запрос на обновление количества товара */
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;

    /* Запрос на добавление товара в корзину */
    addCartItem: (values: any) => Promise<void>;

    /* Запрос на удаление товара из корзины */
    removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: false,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({ loading: true, error: false });
            const data: ICartDTO = await Api.cart.getCart();
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    addCartItem: async (values: ICreateCartItemValues) => {
        try {
            set({ loading: true, error: false });
            const data: ICartDTO = await Api.cart.addCartItem(values);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    updateItemQuantity: async (id: number, quantity: number) => {
        try {
            set({ loading: true, error: false });
            const data: ICartDTO = await Api.cart.updateItemQuantity(id, quantity);
            console.log(data);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    removeCartItem: async (id: number) => {
        try {
            set({ loading: true, error: false });
            const data: ICartDTO = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },
}));
