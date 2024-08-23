import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '@/widgets';
import type { Metadata } from 'next';
import './globals.css';

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Next Pizza | Главная',
    description: 'Заказать пиццу онлайн.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={nunito.className}>
                <main className='min-h-screen'>
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    );
}
