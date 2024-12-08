'use client';

import { useFormContext } from 'react-hook-form';
import { Textarea, ClearButton } from '@/shared/components';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    name: string;
    label?: string;
    required?: boolean;
}

const FormTextarea: React.FC<Props> = ({ className, name, label, required, ...props }) => {
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
            <p className='font-medium mb-2'>
                {label} {required && <span className='text-red-500'>*</span>}
            </p>

            <div className='relative'>
                <Textarea className='h-12 text-md' {...register(name)} {...props} />

                {Boolean(value) && <ClearButton onClick={onClickClear} />}
            </div>

            {Boolean(errorText) && <p className='text-red-500 text-sm mt-2'>{errorText}</p>}
        </div>
    );
};

export default FormTextarea;
