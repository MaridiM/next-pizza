'use client';

import { FC } from 'react';
import toast from 'react-hot-toast';
import { useCartStore } from '@/shared/lib/store/cart';
import { ProductWithRelations } from '@/shared/types/prisma';
import { PizzaForm, ProductForm } from './ui';

interface IProps {
    product: ProductWithRelations;
    _onSubmit?: VoidFunction;
}

const ProductItemForm: FC<IProps> = ({ product, _onSubmit }) => {
    const { addCartItem, loading } = useCartStore();

    const firstItem = product.variants[0];
    const isPizzaForm = Boolean(firstItem.pizzaType);

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id;

            await addCartItem({
                productItemId: itemId,
                ingredients,
            });

            toast.success(product.name + ' добавлена в корзину');

            _onSubmit?.();
        } catch (err) {
            toast.error('Не удалось добавить товар в корзину');
            console.error(err);
        }
    };
    if (isPizzaForm) {
        return (
            <PizzaForm
                imageUrl={product.imageUrl}
                name={product.name}
                ingredients={product.ingredients}
                variants={product.variants}
                onSubmit={onSubmit}
                loading={loading}
            />
        );
    }
    return (
        <ProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
        />
    );
};

export default ProductItemForm;
