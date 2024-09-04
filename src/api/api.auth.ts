import api from './api';

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
    user_id: number;
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
        const response = await api.post('/auth/registration', regData);
        return response.data;
    } catch (error) {
        return { error: 'Что-то пошло не так. Попробуйте позже.' };
    }
};
export const signIn = async (
    authData: AuthData
): Promise<AuthResponse | null> => {
    try {
        const response = await api.post<AuthResponse>('/auth/login', authData);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('user_id', response.data.user_id.toString());
        localStorage.setItem(
            'coins_count',
            response.data.coins_count.toString()
        );

        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
