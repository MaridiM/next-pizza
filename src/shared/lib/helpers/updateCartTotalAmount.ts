import { prisma } from '../prisma';
import { calcCartItemTotalPrice } from './calcCartItemTotalPrice';

export const updateCartTotalAmount = async (token: string) => {
    const userCart = await prisma.cart.findFirst({
        where: { token },
        include: {
            cartItems: {
                orderBy: { createdAt: 'desc' },
                include: { productItem: { include: { product: true } }, ingredients: true },
            },
        },
    });

    if (!userCart) return;

    const totalAmount = userCart?.cartItems.reduce(
        (acc, item) => acc + calcCartItemTotalPrice(item),
        0,
    );

    return await prisma.cart.update({
        where: { id: userCart.id },
        data: { totalAmount },
        include: {
            cartItems: {
                orderBy: { createdAt: 'desc' },
                include: { productItem: { include: { product: true } }, ingredients: true },
            },
        },
    });
};