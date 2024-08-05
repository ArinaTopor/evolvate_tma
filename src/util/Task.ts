export type TaskTag = {
    id: number;
    name: string;
    image: string;
};

export type TagCount = {
    id: number;
    count: number;
};

export type TaskCompleted = {
    user_id: number;
    image?: object;
    video?: object;
    message?: string;
    status: 2;
    task_id: number;
    emails?: string[];
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
