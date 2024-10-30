import axios, { AxiosResponse } from 'axios';
import IProduct from "@/types/IProduct.ts";

const API_BASE_URL = "https://volunteers.atlants.kg/api/";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

const api = {
    get: async <T>(url: string): Promise<T> => {
        const response: AxiosResponse<T> = await apiClient.get(url);
        return response.data;
    },
    post: async <T>(url: string, data: unknown): Promise<T> => {
        const response: AxiosResponse<T> = await apiClient.post(url, data);
        return response.data;
    },
    put: async <T>(url: string, data: unknown): Promise<T> => {
        const response: AxiosResponse<T> = await apiClient.put(url, data);
        return response.data;
    },
    delete: async <T>(url: string): Promise<T> => {
        const response: AxiosResponse<T> = await apiClient.delete(url);
        return response.data;
    },
};

export const getProducts = async (): Promise<IProduct[]> => {
    return await api.get<IProduct[]>('products/');
};
