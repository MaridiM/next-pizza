import { X } from 'lucide-react';
import { cn } from '@/shared/lib';

interface IProps {
    className?: string;
    onClick?: VoidFunction;
}

const ClearButton: React.FC<IProps> = ({ onClick, className }) => (
    <button
        onClick={onClick}
        className={cn(
            'absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer',
            className,
        )}
    >
        <X className='h-5 w-5' />
    </button>
);

export default ClearButton;
