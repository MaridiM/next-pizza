import { FC } from 'react';
import { ProductsGroupList, TopBar } from '@/features';
import { Container, Title } from '@/shared/components';
import { Filters } from '@/widgets';

interface IProps {}

const Home: FC<IProps> = ({}) => (
    <>
        <Container className='mt-10'>
            <Title text='Все пиццы' size='lg' className='font-extrabold' />
        </Container>
        <TopBar />

        <Container className='mt-10 pb-14'>
            <div className='flex gap-[60px]'>
                <Filters className='w-[250px]' />

                <div className='flex-1'>
                    <div className='flex flex-col gap-16'>
                        <ProductsGroupList
                            title={'Пиццы'}
                            items={[
                                {
                                    id: 1,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 5,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 6,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 7,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                            ]}
                            categoryId={1}
                        />
                        <ProductsGroupList
                            title={'Комбо'}
                            items={[
                                {
                                    id: 1,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 5,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 6,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 7,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                            ]}
                            categoryId={2}
                        />
                        <ProductsGroupList
                            title={'Закуски'}
                            items={[
                                {
                                    id: 1,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 2,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 3,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 4,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 5,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 6,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                                {
                                    id: 7,
                                    name: 'Диабло',
                                    imageUrl:
                                        'https://media.dodostatic.net/image/r:292x292/11EE7D6149EB101D8727573088FA2EFF.avif',
                                    price: 550,
                                    items: [{ price: 550 }],
                                    ingredients: [
                                        'Острая чоризо',
                                        'острый перец халапеньо',
                                        'соус барбекю',
                                        'митболы',
                                        'томаты',
                                        'сладкий перец',
                                        'красный лук',
                                        'моцарелла',
                                    ],
                                },
                            ]}
                            categoryId={3}
                        />
                    </div>
                </div>
            </div>
        </Container>
    </>
);

export default Home;
