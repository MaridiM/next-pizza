import { TopBar } from '@/features';
import { Container, Title } from '@/shared/components';
import { FC } from 'react';

interface IProps {}

const Home: FC<IProps> = ({}) => {
    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>
            <TopBar />
        </>
    );
};

export default Home;
