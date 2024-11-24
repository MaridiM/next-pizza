'use client';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useRouter } from 'next/navigation';
import { ProductItemForm } from '@/features';
import { Dialog, DialogContent, DialogTitle } from '@/shared/components';
import { cn } from '@/shared/lib';
import { ProductWithRelations } from '@/shared/types/prisma';

interface IProps {
    product: ProductWithRelations;
    className?: string;
}

const ProductModal: React.FC<IProps> = ({ product, className }) => {
    const router = useRouter();

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
                <ProductItemForm product={product} _onSubmit={() => router.back()} />
            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;
