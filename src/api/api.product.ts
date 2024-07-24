import { CartType, Product } from '../util/Product';
import api from './api';
const BUY_PRODUCT_URL = '/products/cart';
const PRODUCT_URL = '/products';
export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get<Product[]>(PRODUCT_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const buyProducts = async (products: CartType[]) => {
    try {
        const response = await api.post(BUY_PRODUCT_URL, products);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
