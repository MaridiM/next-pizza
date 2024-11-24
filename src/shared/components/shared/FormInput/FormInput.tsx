import { FC } from 'react';
import { ErrorText, Input, RequiredSymbol } from '../../ui';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

const FormInput: FC<IProps> = ({ name, label, required, className, ...props }) => {
    // const {} =  useFormContext()
    return (
        <div className={className}>
            {label && (
                <p className='font-medium mb-2'>
                    {label} {required && <RequiredSymbol />}
                </p>
            )}
            <div className='relative'>
                <Input className='h-12 text-md' {...props} />
            </div>
            <ErrorText text='Поле обязятельно для заполнения' className='mt-2' />
        </div>
    );
};

export default FormInput;
