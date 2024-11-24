import { notFound } from 'next/navigation';
import { ProductItemForm } from '@/features';
import { Container } from '@/shared/components';
import { prisma } from '@/shared/lib/prisma';

interface IProps {
    productId: string;
}

async function ProductScreen({ productId }: IProps) {
    const product = await prisma.product.findFirst({
        where: { id: Number(productId) },
        include: {
            ingredients: true,
            category: {
                include: {
                    products: {
                        include: {
                            variants: true,
                        },
                    },
                },
            },
            variants: true,
        },
    });

    if (!product) return notFound();

    return (
        <Container className='flex flex-col my-10'>
            <ProductItemForm product={product} />
        </Container>
    );
}

export default ProductScreen;
