'use client';

import { ChangeEvent, FC, useState } from 'react';
import { FilterCheckbox, IFilterChecboxProps, Input, SkeletonLoader } from '@/shared/components';

type Item = IFilterChecboxProps;

interface IProps {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    loading?: boolean;
    className?: string;
    onSelectItem?: (id: string) => void;
    selected?: Set<string>;
    name?: string;
}

const CheckboxFiltersGroup: FC<IProps> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    loading,
    className,
    onSelectItem,
    selected,
    name,
}) => {
    const [showALl, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    if (loading) {
        return <SkeletonLoader className={className} title={title} limit={limit} />;
    }

    const listItems = showALl
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : (defaultItems || items).slice(0, limit);

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
                            name={name}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={selected.has(item.value)}
                            onCheckedChange={() => onSelectItem(item.value)}
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
