import { Header } from '@/widgets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Next Pizza | Главная',
    description: 'Заказать пиццу онлайн.',
};

export default function MainLayout({
    children,
<<<<<<< HEAD
    modal,
=======
    modal
>>>>>>> 453d3a01983e673d12b1ee780da1d71cc0e06d80
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <main className='min-h-screen scrollbar-hide'>
            <Header />
            {children}
            {modal}
        </main>
    );
}
