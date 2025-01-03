import { Product } from '@prisma/client';
import { axiosInstance, pathsApi } from '../config';

export const search = async (query: string = '') =>
    (await axiosInstance.get<Product[]>(pathsApi.SEARCH_PRODUCT, { params: { query } })).data;
