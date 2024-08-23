import Image from 'next/image';
import { FC } from 'react';
import { logoImage } from '@/shared/assets';
import { cn } from '@/shared/lib';

interface IProps {
    className?: string;
}

const Logo: FC<IProps> = ({ className }) => (
    <div className={cn('flex items-center gap-6', className)}>
        <Image src={logoImage} alt='Next Pizza' width={36} height={36} />
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl uppercase font-black'>NEXT PIZZA</h1>
            <p className='text-base text-gray-400 leaging-3'>Вкусней уже некуда</p>
        </div>
    </div>
);

export default Logo;
