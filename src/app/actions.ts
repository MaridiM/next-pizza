'use server';

import { OrderStatus } from '@prisma/client';
import { TCheckoutFormValues } from '@/entities/ui';
import { prisma } from '@/shared/lib/prisma';

export async function createOrder(data: TCheckoutFormValues) {
    console.log(data);
    const token = '123';
    await prisma.order.create({
        data: {
            token,
            totalAmount: 1500,
            status: OrderStatus.PENDING,
            items: [],
            fullName: data.firstName + ' ' + data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            comment: data.comment,
        },
    });
}
