import { FC } from 'react';
import { Button, Title } from '@/shared/components';
import { cn } from '@/shared/lib';

interface IProps {
    imageUrl: string;
    name: string;
    loading?: boolean;
    onClickAdd: VoidFunction;
    className?: string;
}

const ProductForm: FC<IProps> = ({ name, imageUrl, loading, onClickAdd, className }) => {
    const textDetail = '30см, традиционное тесто 30';
    const totalPrice = '350';

    return (
        <div className={cn('flex flex-1', className)}>
            <div
                className={cn('flex items-center justify-center flex-1 relative w-full', className)}
            >
                <img
                    src={imageUrl}
                    alt={name}
                    className={cn(
                        'relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]',
                    )}
                />
            </div>

            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <p className='text-gray-400'>{textDetail}</p>

                <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};

export default ProductForm;
