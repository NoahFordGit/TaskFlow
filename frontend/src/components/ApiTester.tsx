import { getTasks, getTask, createTask, updateTask, deleteTask } from '../services/testService';
import {useState, useEffect} from 'react';

function ApiTester() {
    const [taskId, setTaskId] = useState<number>(0);
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
            title: "New Task",
            description: "This is a new task",
            completed: false,
            priority: "medium",
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

            // go back in here and make this work
            <form onSubmit={handleCreateTask}>
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
        </div>
    );
}

export default ApiTester;