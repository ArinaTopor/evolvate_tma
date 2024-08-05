import { TagCount, Task, TaskTag } from '../util/Task';
import api from './api';

export const getAllTags = async (): Promise<TaskTag[]> => {
    try {
        const response = await api.get<TaskTag[]>('/tasks/tags');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getCountTagTasks = async (): Promise<TagCount[]> => {
    try {
        const response = await api.get<TagCount[]>('/tasks/tagsCount');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAllTasks = async (): Promise<Task[]> => {
    try {
        const response = await api.get<Task[]>('/tasks');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getTask = async (id: string): Promise<Task> => {
    try {
        const response = await api.get<Task>(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const completeTask = async (data: FormData) => {
    try {
        const response = await api.post('/user/userTask', data);
        return response.status;
    } catch (error) {
        console.log(error);
    }
};
