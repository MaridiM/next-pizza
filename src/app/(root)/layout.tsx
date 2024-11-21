import { Header } from '@/widgets';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Next Pizza | Главная',
    description: 'Заказать пиццу онлайн.',
};

export default function MainLayout({
    children,
    modal
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
