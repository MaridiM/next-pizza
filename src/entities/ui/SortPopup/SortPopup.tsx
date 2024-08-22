import { cn } from '@/shared/lib'
import { ArrowUpDown } from 'lucide-react';
import React, { FC } from 'react'

interface IProps {
    className?: string
}

const SortPopup: FC<IProps> = ({ className }) => {
    return (
        <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 py-1 h-[52px] rounded-2xl cursor-default', className)}>
            <ArrowUpDown size={16} />
            <b>Сортировка:</b>
            <b className='text-primary'>популярное</b>
        </div>
    )
};

export default SortPopup