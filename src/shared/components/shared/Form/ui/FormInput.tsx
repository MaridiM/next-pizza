'use client';

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorText, Input, RequiredSymbol, ClearButton } from '@/shared/components';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

const FormInput: FC<IProps> = ({ name, label, required, className, ...props }) => {
    //Позволяет обрабатаывать input с помощью FormProvider
    const {
        register, // Register fields in FormProvider
        formState: { errors },
        watch, // watch all changes in FormProvider
        setValue,
    } = useFormContext();

    const value = watch(name);
    const errorText = errors[name]?.message as string;

    const onClickClear = () => {
        // setValue, ищет поле c name и очищает его
        // { shouldValidate: true } - указивает  что нужно валидировать поле
        setValue(name, '', { shouldValidate: true });
    };
    return (
        <div className={className}>
            {label && (
                <p className='font-medium mb-2'>
                    {label} {required && <RequiredSymbol />}
                </p>
            )}
            <div className='relative'>
                <Input className='h-12 text-md' {...register(name)} {...props} />

                {Boolean(value) && <ClearButton onClick={onClickClear} />}
            </div>
            {Boolean(errorText) && <ErrorText text={errorText} className='mt-2' />}
        </div>
    );
};
export default FormInput;
