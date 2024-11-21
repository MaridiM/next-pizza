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

        const findCartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: userCart.id,
                productItemId: data.productItemId,
                ingredients: { every: { id: { in: data.ingredients } } },
            },
        });

        if (findCartItem) {
            await prisma.cartItem.update({
                where: { id: findCartItem.id },
                data: { quantity: findCartItem.quantity + 1 },
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
