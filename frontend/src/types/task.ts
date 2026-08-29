export type Priority = "low" | "medium" | "high";

export interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    priority: Priority;
    due_date?: string;
}

export interface TaskCreate {
    title: string;
    description?: string;
    priority: Priority;
    due_date?: string;
}

export interface TaskUpdate {
    title?: string;
    description?: string;
    completed?: boolean;
    priority?: Priority;
    due_date?: string;
}