import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { ICreateCartItemValues } from '@/entities/api/services/dtos/cart.dto';
import { findOrCreateCart, updateCartTotalAmount } from '@/shared/lib/helpers';
import { prisma } from '@/shared/lib/prisma';

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('cartToken')?.value;

        if (!token) return NextResponse.json(null);

        const userCart = await prisma.cart.findFirst({
            where: {
                OR: [{ token }],
            },
            include: {
                cartItems: {
                    orderBy: { createdAt: 'desc' },
                    include: { productItem: { include: { product: true } }, ingredients: true },
                },
            },
        });

        return NextResponse.json(userCart);
    } catch (error) {
        console.log('[CART_GET] Server error', error);
        return NextResponse.json({ message: 'Не удалось получит корзину' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        let token = req.cookies.get('cartToken')?.value;

        if (!token) {
            token = crypto.randomUUID();
        }

        const userCart = await findOrCreateCart(token);

        const data = (await req.json()) as ICreateCartItemValues;

        const findAllCartItems = await prisma.cartItem.findMany({
            where: {
                cartId: userCart.id,
                productItemId: data.productItemId,
            },
            include: { ingredients: true },
        });

        let currentCartItem = null;
        findAllCartItems.forEach((cartItem) => {
            if (cartItem.ingredients.length !== data.ingredients.length) return;
            if (cartItem.ingredients.length && data.ingredients.length) {
                const foundIngredients = cartItem.ingredients.filter(
                    (ingredient) => !data.ingredients.includes(ingredient.id),
                );

                if (foundIngredients.length) return;
            }
            currentCartItem = cartItem;
            return;
        });

        if (currentCartItem) {
            await prisma.cartItem.update({
                where: { id: currentCartItem.id },
                data: { quantity: currentCartItem.quantity + 1 },
            });
        } else {
            await prisma.cartItem.create({
                data: {
                    cartId: userCart.id,
                    productItemId: data.productItemId,
                    quantity: 1,
                    ingredients: { connect: data.ingredients?.map((id) => ({ id })) },
                },
            });
        }

        const updatedUserCart = await updateCartTotalAmount(token);
        const response = NextResponse.json(updatedUserCart);
        response.cookies.set('cartToken', token, { maxAge: 60 * 60 * 24 * 7 });

        return response;
    } catch (error) {
        console.log('[CART_POST] Server error', error);
        return NextResponse.json({ message: 'Не удалось создать корзину' }, { status: 500 });
    }
}
