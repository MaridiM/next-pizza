export const paths = {
    home: '/',
    cart: '/cart',
    product: (id: string | number): string => `/product/${id}`,
    category: (name: string): string => `/#${name}`,
};
