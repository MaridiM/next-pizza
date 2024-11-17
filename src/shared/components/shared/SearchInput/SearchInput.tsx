'use client';

import { Search } from 'lucide-react';
import { Dispatch, FC, SetStateAction } from 'react';
import { cn } from '@/shared/lib';
import { Input } from '../../ui';

interface IProps {
    className?: string;
    setFocused: Dispatch<SetStateAction<boolean>>;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const SearchInput: FC<IProps> = ({ className, setFocused, value, setValue }) => (
    <div className={cn('flex rounded-2xl flex-1 justify-between items-center h-11', className)}>
        <Search size={20} className='absolute left-3 text-gray-400' />
        <Input
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='rounded-2xl outline-none w-full bg-gray-50 pl-11'
            placeholder='Найти пиццу...'
            onFocus={() => setFocused(true)}
        />
    </div>
);

export default SearchInput;
