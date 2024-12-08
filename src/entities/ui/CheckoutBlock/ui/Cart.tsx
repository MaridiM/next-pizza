'use client';

import { FC } from 'react';
import { CheckoutItem } from '@/entities/ui';
import { CheckoutItemSkeleton, WhiteBlock } from '@/shared/components';
import { PizzaType, PizzaSize } from '@/shared/constants/pizza';
import { getCartItemDetails } from '@/shared/lib/helpers';
import { useCart } from '@/shared/lib/hooks';

interface IProps {
    loading?: boolean;
}
const Cart: FC<IProps> = ({ loading }) => {
    const { items, onClickCountButton, removeCartItem } = useCart();
    return (
        <WhiteBlock title='1. Корзина' className=''>
            <div className='flex flex-col gap-5'>
                {loading
                    ? [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />)
                    : items.map((item) => (
                          <CheckoutItem
                              key={item.id}
                              id={item.id}
                              imageUrl={item.imageUrl}
                              details={getCartItemDetails(
                                  item.ingredients,
                                  item.pizzaType as PizzaType,
                                  item.pizzaSize as PizzaSize,
                              )}
                              name={item.name}
                              price={item.price}
                              quantity={item.quantity}
                              disabled={item.disabled}
                              onClickCountButton={(type) =>
                                  onClickCountButton(item.id, item.quantity, type)
                              }
                              onClickRemove={() => removeCartItem(item.id)}
                          />
                      ))}
            </div>
        </WhiteBlock>
    );
};

export default Cart;
