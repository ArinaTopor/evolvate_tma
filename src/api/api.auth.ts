import api from './api';
const REGISTER_URL = '/auth/registration';
const LOGIN_URL = '/auth/login';
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

export type AuthData = {
    email: string;
    password: string;
};
export type AuthResponse = {
    accessToken: string;
    refreshToken: string;
    username: string;
    email: string;
    last_name: string;
    first_name: string;
    phone: string;
    coins_count: number;
};

export type CustomError = {
    status?: number;
    message: string;
};
export const signUp = async (regData: RegData) => {
    try {
        const response = await api.post(REGISTER_URL, regData);
        return response.data; // Возвращаем данные успешного ответа
    } catch (error) {
        return { error: 'Что-то пошло не так. Попробуйте позже.' };
    }
};
export const signIn = async (
    authData: AuthData
): Promise<AuthResponse | null> => {
    try {
        const response = await api.post<AuthResponse>(LOGIN_URL, authData);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
