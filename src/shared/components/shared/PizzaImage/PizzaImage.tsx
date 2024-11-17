import { FC } from 'react';
import { cn } from '@/shared/lib';

interface IProps {
    src: string;
    size: 20 | 30 | 40;
    alt?: string;
    className?: string;
}

const PizzaImage: FC<IProps> = ({ src, alt = 'Logo', size, className }) => (
    <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
        <img
            src={src}
            alt={alt}
            className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
                'w-[300] h-[300px]': size === 20,
                'w-[400] h-[400px]': size === 30,
                'w-[500] h-[500px]': size === 40,
            })}
        />

        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-300 w-[450px] h-[450px]' />
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-200 w-[370px] h-[370px]' />
    </div>
);

export default PizzaImage;