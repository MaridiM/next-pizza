import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/shared/lib/prisma';

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.product.findMany({
        // where: { name: query },  // Use if need ===
        where: {
            name: {
                mode: 'insensitive', // Case-insensitive search
                contains: query, // Use if need includes in string
            },
        },
        take: 5, //  how much get to show
    });

    return NextResponse.json(products);
}
