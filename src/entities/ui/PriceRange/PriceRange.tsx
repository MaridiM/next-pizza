import { FC } from 'react';
import { Input, RangeSlider } from '@/shared/components';
import { IFiltersReturn } from '@/shared/lib/hooks/useFilters';

interface IProps {
    filters: IFiltersReturn;
}

const PriceRange: FC<IProps> = ({ filters }) => {
    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0]);
        filters.setPrices('priceTo', prices[1]);
    };
    return (
        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Цена от и до:</p>
            <div className='flex gap-3 mb-5'>
                <Input
                    type='number'
                    placeholder='0'
                    min={0}
                    max={1000}
                    value={String(filters.prices.priceFrom || 0)}
                    onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                />
                <Input
                    type='number'
                    placeholder='1000'
                    min={100}
                    max={1000}
                    value={String(filters.prices.priceTo || 1000)}
                    onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                />
            </div>
            <RangeSlider
                min={0}
                max={1000}
                step={10}
                value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
                onValueChange={updatePrices}
            />
        </div>
    );
};

export default PriceRange;
