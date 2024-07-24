import api from './api';

export type TaskTag = {
    id: number;
    name: string;
    image: string;
};

export type TaskCompleted = {
    id: number;
    image?: string;
    video?: string;
    message?: string;
    status: number;
    task_id: number;
};
export interface Task {
    id: number;
    type_id: number;
    tag_id: number;
    is_solo: number;
    name: string;
    description: string;
    status: number;
    score: number;
    tag: TaskTag;
}

const TASKS_URL = '/tasks';
const ALL_TAGS_URL = '/tasks/tag';

export const getAllTags = async (): Promise<TaskTag[]> => {
    try {
        const response = await api.get<TaskTag[]>(ALL_TAGS_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getAllTasks = async () => {
    try {
        const response = await api.get<Task[]>(TASKS_URL);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const completeTask = async (task: TaskCompleted) => {
    try {
        const response = await api.post(TASKS_URL, task);
        return response;
    } catch (error) {
        console.log(error);
    }
};
