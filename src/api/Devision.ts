import { api } from './axios';

export type Devision = {
    id: number;
    name: string;
};
export const getDevisions = async () => {
    try {
        const response = await api.get('profile/division');
        return response.data;
    } catch (error) {
        return console.log(error);
    }
};
