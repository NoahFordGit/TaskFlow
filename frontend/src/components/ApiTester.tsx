import { getTasks, getTask, createTask, updateTask, deleteTask } from '../services/taskService';
import {useState, useEffect} from 'react';
import type { Priority } from '../types/task';

function ApiTester() {
    const [taskId, setTaskId] = useState<number>(0);

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [priority, setPriority] = useState<Priority>('medium');
    const [due_date, setDueDate] = useState<string>('');

    async function handleGetTasks() {
        const tasks = await getTasks();

        console.log('Tasks:', tasks);
    }

    async function handleGetTask(event: React.SubmitEvent) {
        event.preventDefault();

        const task = await getTask(taskId);

        console.log('Task:', task);
    }
    
    async function handleCreateTask(event: React.SubmitEvent) {
        event.preventDefault();

        const newTask = {
            title,
            description,
            priority,
            due_date
        };

        const createdTask = await createTask(newTask);
        console.log('Created Task:', createdTask);
    }

    return (
        <div>
            <h2>API Tester</h2>
            <button 
                onClick={handleGetTasks}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Get Tasks
            </button>

            <form onSubmit={handleGetTask}>
                <label>
                    Task ID:
                    <input 
                        type="number"
                        value={taskId}
                        onChange={(event) => 
                            setTaskId(Number(event.target.value))
                        }
                    />
                </label>

                <button type="submit">
                    Get Task
                </button>
            </form>

            <form onSubmit={handleCreateTask}>
                <label>
                    Title:
                    <input 
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </label>
                <label>
                    Description:
                    <input 
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </label>
                <label>
                    Priority:
                    <select 
                        value={priority}
                        onChange={(event) => setPriority(event.target.value as Priority)}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <label>
                    Due Date:
                    <input 
                        type="date"
                        value={due_date}
                        onChange={(event) => setDueDate(event.target.value)}
                    />
                </label>
                <button type="submit">
                    Create Task
                </button>
            </form>
        </div>
    );
}

export default ApiTester;