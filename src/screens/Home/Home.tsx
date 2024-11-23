import { FC, Suspense } from 'react';
import { ProductsGroupList, TopBar } from '@/features';
import { Container, Title } from '@/shared/components';
import { findPizzas, GetSearchParams } from '@/shared/lib/helpers';
import { Filters } from '@/widgets';

interface IProps {
    searchParams: GetSearchParams;
}

const Home: FC<IProps> = async ({ searchParams }) => {
    const categories = await findPizzas(searchParams);

    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>
            <TopBar categories={categories.filter((category) => category.products.length > 0)} />

            <Container className='mt-10 pb-14'>
                <div className='flex gap-[60px]'>
                    <Suspense>
                        <Filters className='w-[250px]' />
                    </Suspense>

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
