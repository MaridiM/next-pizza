import { Ingredient } from '@prisma/client';
import { axiosInstance, pathsApi } from '../config';

export const getAll = async (): Promise<Ingredient[]> =>
    (await axiosInstance.get<Ingredient[]>(pathsApi.INGREDIENTS)).data;
