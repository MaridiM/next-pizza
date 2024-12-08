import { useEffect } from 'react';
import { ICreateCartItemValues } from '@/entities/api/services/dtos/cart.dto';
import { ICartStateItem } from '../helpers';
import { useCartStore } from '../store/cart';

type ReturnProps = {
    totalAmount: number;
    items: ICartStateItem[];
    loading: boolean;
    updateItemQuantity: (id: number, quantity: number) => void;
    removeCartItem: (id: number) => void;
    addCartItem: (values: ICreateCartItemValues) => void;
    onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
};

export function useCart(): ReturnProps {
    const cartState = useCartStore();

    useEffect(() => {
        cartState.fetchCartItems();
    }, []);

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const currentQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        cartState.updateItemQuantity(id, currentQuantity);
    };

    return { onClickCountButton, ...cartState };
}
