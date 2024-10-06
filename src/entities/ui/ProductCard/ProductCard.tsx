import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';
import Link from 'next/link';
import { FC } from 'react';
import { Button, Title } from '@/shared/components';
import { paths } from '@/shared/config/routes';
import { cn } from '@/shared/lib';

interface IProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    ingredients: Ingredient[];
    className?: string;
}

const ProductCard: FC<IProps> = ({ id, name, price, ingredients, imageUrl, className }) => (
    <div className={cn('', className)}>
        <Link href={paths.product(id)}>
            <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />
            </div>

            <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

            <p className='text-sm text-gray-400'>
                {!!ingredients.length &&
                    ingredients.map((ingredient) => ingredient.name).join(', ')}
            </p>
            <footer className='flex justify-between items-center mt-4'>
                <span className='text-[20px]'>
                    от <b>{price} ₽</b>
                </span>

                <Button variant='secondary' className='text-base font-bold'>
                    <Plus size={20} className='mr-1' />
                    Добавить
                </Button>
            </footer>
        </Link>
    </div>
);

export default ProductCard;
