import { notFound } from 'next/navigation';
import { FC } from 'react';
import { prisma } from '@/shared/lib/prisma';
import { ProductModal } from '@/widgets';

interface IProps {
    params: { id: string };
}
const ProductModalPage: FC<IProps> = async ({ params }) => {
    const product = await prisma.product.findFirst({
        where: { id: Number(params.id) },
        include: {
            ingredients: true,
            variants: true,
        },
    });
    if (!product) return notFound();

    return <ProductModal product={product} />;
};

export default ProductModalPage;
