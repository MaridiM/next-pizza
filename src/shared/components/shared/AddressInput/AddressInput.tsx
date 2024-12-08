'use client';

import { useEffect, useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from '@/shared/components';

const AddressInput: React.FC = () => {
    const { control } = useFormContext();

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Controller
            control={control}
            name='address'
            render={({ field, fieldState }) => (
                <>
                    <AddressSuggestions
                        token='60633224172389197f3eaa9b56b0a90f066c24b9'
                        onChange={(data) => field.onChange?.(data?.value)}
                        inputProps={{
                            placeholder: 'Enter your address',
                            className:
                                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-12 text-md',
                            value: field.value,
                            autoComplete: 'off',
                        }}
                    />

                    {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
                </>
            )}
        />
    );
};

export default AddressInput;
