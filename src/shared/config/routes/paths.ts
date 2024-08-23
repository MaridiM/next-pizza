export const paths = {
    home: '/',
    product: (id: string | number): string => `/product/${id}`,
    category: (name: string): string => `/#${name}`,
};
