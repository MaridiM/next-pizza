import { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/lib';

interface Props {
    className?: string;
}

const Container: FC<PropsWithChildren<Props>> = ({ className, children }) => (
    <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
);

export { Container };
