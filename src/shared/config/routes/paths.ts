export const paths = {
    home: '/',
    cart: '/cart',
    checkout: '/checkout',
    product: (id: string | number): string => `/product/${id}`,
    category: (name: string): string => `/#${name}`,
};
