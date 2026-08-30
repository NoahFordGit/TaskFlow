import type { Task, TaskCreate, TaskUpdate } from "../types/task";

const API_URL = "http://127.0.0.1:8000";

export async function getTasks(): Promise<Task[]> {
    const response = await fetch(`${API_URL}/tasks/`);

    if (!response.ok) {
        throw new Error(`Failed to fetch tasks: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export async function getTask(taskId: number): Promise<Task> {
    const response = await fetch(`${API_URL}/tasks/${taskId}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch task ${taskId}: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export async function createTask(task: TaskCreate): Promise<TaskCreate> {
    const response = await fetch(`${API_URL}/tasks/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error(`Failed to create task: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export async function updateTask(taskId: number, task: TaskUpdate): Promise<Task> {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error(`Failed to update task ${taskId}: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

export async function deleteTask(taskId: number) {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error(`Failed to delete task ${taskId}: ${response.status} ${response.statusText}`);
    }

    return response.json();
}