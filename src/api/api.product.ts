import { CartType, Product } from '../util/Product';
import api from './api';
export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get<Product[]>('/products');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const buyProducts = async (products: CartType[] | null) => {
    try {
        await api.post('/products/carts', products);
        return 'success!';
    } catch (error) {
        console.log(error);
        return null;
    }
};
