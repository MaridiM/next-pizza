// 'use client';

import { notFound } from 'next/navigation';
import { Container, PizzaImage, ProductVariants, Title } from '@/shared/components';
import { pizzaSizes } from '@/shared/constants/pizza';
import { prisma } from '@/shared/lib/prisma';

interface IProps {
    productId: string;
}

async function ProductScreen({ productId }: IProps) {
    const product = await prisma.product.findFirst({ where: { id: Number(productId) } });

    if (!product) return notFound();
    return (
        <Container className='flex flex-col my-24'>
            <div className='flex flex-1 '>
                <PizzaImage src={product.imageUrl} size={30} />

                <div className='w-[490px] bg-[#f7f6f5] p-7'>
                    <Title text={product.name} size='md' className='font-extrabold mb-1' />
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorem
                        vitae, adipisci omnis sequi iste dolorum accusamus voluptatibus quam labore,
                        architecto corporis ad.
                    </p>

                    <ProductVariants
                        title='Размер пиццы:'
                        value='2'
                        items={pizzaSizes}
                        // onClick={() => console.log('SIZE')}
                    />
                </div>
            </div>
        </Container>
    );
}

export default ProductScreen;
