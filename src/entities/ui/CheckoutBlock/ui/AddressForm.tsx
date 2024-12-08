import { FC } from 'react';
import { AddressInput, FormTextarea, WhiteBlock } from '@/shared/components';

interface IProps {
    className?: string;
}

const AddressForm: FC<IProps> = ({ className }) => (
    <WhiteBlock title='3. Адрес доставки' className={className}>
        <div className='grid grid-cols gap-5'>
            <AddressInput />
            <FormTextarea
                name='comment'
                className='text-base'
                placeholder='Комментарий к заказу'
                rows={5}
            />
        </div>
    </WhiteBlock>
);

export default AddressForm;
