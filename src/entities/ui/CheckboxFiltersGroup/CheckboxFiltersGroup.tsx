'use client';

import { FilterCheckbox, IFilterChecboxProps, Input } from '@/shared/components';
import { ChangeEvent, FC, useState } from 'react';

type Item = IFilterChecboxProps;

interface IProps {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    className?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
}

const CheckboxFiltersGroup: FC<IProps> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
}) => {
    const [showALl, setShowAll] = useState(false)
    const [searchValue, setSearchValue] = useState<string>('')

    const listItems = showALl
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0, limit);

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>

            {showALl && (
                <div className='mb-5'>
                    <Input
                        placeholder={searchInputPlaceholder}
                        className='bg-gray-50 border-none'
                        onChange={onChangeSearchInput}
                    />
                </div>
            )}

            <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
                {!!listItems.length &&
                    listItems.map((item, idx) => (
                        <FilterCheckbox
                            key={idx}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={false}
                            onCheckedChange={(ids) => console.log(ids)}
                        />
                    ))}
            </div>

            {items.length > limit && (
                <div className={showALl ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showALl)} className='text-primary mt-3'>
                        {showALl ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CheckboxFiltersGroup;
