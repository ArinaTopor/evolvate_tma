import api from './axios';

export type Division = {
    id: number;
    name: string;
};
export const getDivisions = async (): Promise<Division[]> => {
    try {
        const response = await api.get<Division[]>('profile/division');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
