import { FC } from 'react';
import { ProductsGroupList, TopBar } from '@/features';
import { Container, Title } from '@/shared/components';
import { prisma } from '@/shared/lib/prisma';
import { Filters } from '@/widgets';

const Home: FC = async () => {
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    ingredients: true,
                    variants: true,
                },
            },
        },
    });

    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>
            <TopBar categories={categories.filter((category) => category.products.length > 0)} />

            <Container className='mt-10 pb-14'>
                <div className='flex gap-[60px]'>
                    <Filters className='w-[250px]' />

                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            {categories.map(
                                (category) =>
                                    category.products.length > 0 && (
                                        <ProductsGroupList
                                            key={category.id}
                                            title={category.name}
                                            categoryId={category.id}
                                            items={category.products}
                                        />
                                    ),
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
