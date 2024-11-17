'use client';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useRouter } from 'next/navigation';
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

    const { addCartItem } = useCartStore();

    const onAddProduct = () => {
        addCartItem({ productItemId: firstItem.id });
    };
    const onAddPizza = async (productItemId: number, ingredients: number[]) => {
        try {
            await addCartItem({ productItemId, ingredients });
        } catch (error) {
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
                        onSubmit={onAddPizza}
                    />
                ) : (
                    <ProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        onSubmit={onAddProduct}
                        price={firstItem.price}
                    />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;
