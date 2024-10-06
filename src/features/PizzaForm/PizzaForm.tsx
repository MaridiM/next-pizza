'use client';

import { Ingredient, ProductItem } from '@prisma/client';
import { FC } from 'react';
import { IngredientItem } from '@/entities/ui';
import { Button, PizzaImage, ProductVariants, Title } from '@/shared/components';
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { cn } from '@/shared/lib';
import { getPizzaDetails } from '@/shared/lib/helpers';
import { usePizzaOptions } from '@/shared/lib/hooks';

interface IProps {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    variants: ProductItem[];
    loading?: boolean;
    onClickAddCart: VoidFunction;
    className?: string;
}

const PizzaForm: FC<IProps> = ({
    name,
    imageUrl,
    ingredients,
    variants,
    onClickAddCart,
    className,
}) => {
    const { size, type, selectedIngredients, availableSizes, setSize, setType, addIngredient } =
        usePizzaOptions(variants);

    const { textDetail, totalPrice } = getPizzaDetails(
        type,
        size,
        variants,
        ingredients,
        selectedIngredients,
    );

    const handleClickAddCard = () => {
        onClickAddCart?.();
        console.log({
            size,
            type,
            ingredients: selectedIngredients,
        });
    };

    return (
        <div className={cn('flex flex-1', className)}>
            <PizzaImage src={imageUrl} size={size} />

            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <p className='text-gray-400'>{textDetail}</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 mt-5'>
                        <ProductVariants
                            value={String(size)}
                            items={availableSizes}
                            onClick={(value) => setSize(Number(value) as PizzaSize)}
                        />
                        <ProductVariants
                            value={String(type)}
                            items={pizzaTypes}
                            onClick={(value) => setType(Number(value) as PizzaType)}
                        />
                    </div>

                    <div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar'>
                        <div className='grid grid-cols-3 gap-3'>
                            {!!ingredients.length &&
                                ingredients.map((ingredient) => (
                                    <IngredientItem
                                        key={ingredient.id}
                                        name={ingredient.name}
                                        price={ingredient.price}
                                        imageUrl={ingredient.imageUrl}
                                        onClick={() => addIngredient(ingredient.id)}
                                        active={selectedIngredients.has(ingredient.id)}
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <Button
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
                    onClick={handleClickAddCard}
                >
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};

export default PizzaForm;
