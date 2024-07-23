import api from './axios';
const REGISTER_URL = '/auth/registration';
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
};
export const signUp = async (regData: RegData) => {
    try {
        const response = await api.post(REGISTER_URL, regData);
        console.log('User registered:', response.data);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};
export const signIn = async (authData: AuthData): Promise<void> => {
    try {
        const response = await api.post<AuthResponse>('/auth/login', authData);
        const token = response.data.accessToken;
        localStorage.setItem('token', token);
        console.log('User logged in:', response.data);
    } catch (error) {
        console.error('Error logging in user:', error);
    }
};
