import { axiosInstance } from '../config';
import { ICartDTO, ICreateCartItemValues } from './dtos/cart.dto';

export const getCart = async (): Promise<ICartDTO> =>
    (await axiosInstance.get<ICartDTO>('/cart')).data;

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<ICartDTO> =>
    (await axiosInstance.patch<ICartDTO>('/cart/' + itemId, { quantity })).data;

export const removeCartItem = async (id: number): Promise<ICartDTO> =>
    (await axiosInstance.delete<ICartDTO>('/cart/' + id)).data;

export const addCartItem = async (values: ICreateCartItemValues): Promise<ICartDTO> =>
    (await axiosInstance.post<ICartDTO>('/cart', values)).data;
