'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as CheckoutBlock from '@/entities/ui/CheckoutBlock';
import { Container, Title } from '@/shared/components';
import { useCart } from '@/shared/lib/hooks';
import { CheckoutSidebar } from '@/widgets';

const Checkout: FC = () => {
    const { totalAmount, loading } = useCart();

    const form = useForm<CheckoutBlock.TCheckoutFormValues>({
        resolver: zodResolver(CheckoutBlock.checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        },
    });

    const onSubmit = (formData: CheckoutBlock.TCheckoutFormValues) => {
        console.log('formData', formData);
    };

    return (
        <Container className='mt-5'>
            <Title text='Оформление заказа' className='font-extralight text-[36px] mb-8' />
            {/*
                FormProvider - позволяет  работать с несколькоми формами, отлавливая их через
                <form onSubmit={form.handleSubmit(onSubmit)}> - который отлавливает  все действия с input
                проверяет  с помощью form.handleSubmit() если  все в порядке то вызывает onSubmit
            */}
            <FormProvider {...form}>
                <form className='flex gap-10' onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-10 flex-1 mb-20'>
                        <CheckoutBlock.Cart loading={loading} />
                        <CheckoutBlock.PersonalForm
                            className={loading && 'opacity-40 pointer-events-none'}
                        />
                        <CheckoutBlock.AddressForm
                            className={loading && 'opacity-40 pointer-events-none'}
                        />
                    </div>

                    <CheckoutSidebar totalAmount={totalAmount} loading={loading} />
                </form>
            </FormProvider>
        </Container>
    );
};

export default Checkout;
