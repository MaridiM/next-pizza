'use client';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { PizzaForm, ProductForm } from '@/features';
import { Dialog, DialogContent, DialogTitle } from '@/shared/components';
import { cn } from '@/shared/lib';
import { useCartStore } from '@/shared/lib/store/cart';
import { ProductWithRelations } from '@/shared/types/prisma';

interface IProps {
    product: ProductWithRelations;
    className?: string;
}

const ProductModal: React.FC<IProps> = ({ product, className }) => {
    const router = useRouter();
    const firstItem = product.variants[0];
    const isPizzaForm = Boolean(product.variants[0].pizzaType);

    const { addCartItem, loading } = useCartStore();

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id;

            await addCartItem({ productItemId: itemId, ingredients });

            toast.success(`${product.name} добавленна в корзину`);
            router.back();
        } catch (error) {
            toast.error('Не удалось добавить товар в корзину');
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <VisuallyHidden>
                <DialogTitle>{product.name}</DialogTitle>
            </VisuallyHidden>
            <DialogContent
                className={cn(
                    'p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden',
                    className,
                )}
                aria-describedby={undefined}
            >
                {isPizzaForm ? (
                    <PizzaForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        ingredients={product.ingredients}
                        variants={product.variants}
                        onSubmit={onSubmit}
                        loading={loading}
                    />
                ) : (
                    <ProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        onSubmit={onSubmit}
                        price={firstItem.price}
                        loading={loading}
                    />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;
