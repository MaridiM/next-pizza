import { TopBar } from '@/features';
import { Container, Title } from '@/shared/components';
import { Filters } from '@/widgets';
import { FC } from 'react';

interface IProps {}

const Home: FC<IProps> = ({}) => {
    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>
            <TopBar />

            <Container className='mt-10 pb-14'>
                <div className='flex gap-[60px]'>
                    <Filters className='w-[250px]' />
                    
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            PRODUCT LIST
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
};

export default Home;
