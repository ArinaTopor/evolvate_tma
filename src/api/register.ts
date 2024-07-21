import { api } from './axios';
const REGISTER_URL = '/registration';
export type RegData = {
    username: string;
    password: string;
    last_name: string;
    first_name: string;
    middle_name?: string;
    email: string;
    phone: string;
    division_id: number;
    division: string;
    position: string;
};
export const signUp = async (regData: RegData) => {
    try {
        const response = await api.post(REGISTER_URL, regData);
        return response.data;
    } catch (error) {
        return 'Что то пошло не так. Попробуйте позже.';
    }
};
