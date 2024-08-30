import { Product } from '@prisma/client';
import { pathsApi } from '@/shared/config/routes';
import { axiosInstance } from './instance';

export const search = async (query: string = '') => {
    return (await axiosInstance.get<Product[]>(pathsApi.productSearch, { params: { query } })).data;
}
