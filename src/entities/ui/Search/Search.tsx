'use client';

import { Product } from '@prisma/client';
import { FC, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { Api } from '@/entities/api/services';
import { SearchInput, SearchList } from '@/shared/components';

const Search: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState<Product[]>([]);
    const [focused, setFocused] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
        console.log('OUTSIDE BLOCK');
    });

    useDebounce(
        () => {
            Api.products.search(searchQuery).then((items) => setProducts(items));
        },
        250,
        [searchQuery],
    );

    return (
        <>
            {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30' />}

            <div ref={ref} className='flex-1 mx-10 z-30'>
                <div className='relative'>
                    <SearchInput
                        setFocused={setFocused}
                        value={searchQuery}
                        setValue={setSearchQuery}
                    />
                    {!!products.length && (
                        <SearchList
                            focused={focused}
                            products={products}
                            onSelectItem={() => setFocused(false)}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Search;
