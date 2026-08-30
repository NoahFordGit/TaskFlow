import { getTasks, getTask, createTask } from '../../services/taskService';
import { useState } from 'react';
import type { Priority } from '../../types/task';
import './ApiTester.css';

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
        <div className="api-tester">
            <header className="api-tester__header">
                <h2 className="api-tester__title">API Tester</h2>
                <p className="api-tester__subtitle">Quick route checks for tasks and API requests.</p>
            </header>

            <section className="api-tester__section">
                <div className="api-tester__actions">
                    <button
                        type="button"
                        onClick={handleGetTasks}
                        className="api-tester__button api-tester__button--primary"
                    >
                        Get Tasks
                    </button>
                </div>
            </section>

            <section className="api-tester__section">
                <form className="api-tester__form" onSubmit={handleGetTask}>
                    <div className="api-tester__field">
                        <label htmlFor="task-id">Task ID</label>
                        <input
                            id="task-id"
                            className="api-tester__input"
                            type="number"
                            value={taskId}
                            onChange={(event) => setTaskId(Number(event.target.value))}
                        />
                    </div>

                    <button type="submit" className="api-tester__button">
                        Get Task
                    </button>
                </form>
            </section>

            <section className="api-tester__section">
                <form className="api-tester__form" onSubmit={handleCreateTask}>
                    <div className="api-tester__grid">
                        <div className="api-tester__field">
                            <label htmlFor="task-title">Title</label>
                            <input
                                id="task-title"
                                className="api-tester__input"
                                type="text"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>

                        <div className="api-tester__field">
                            <label htmlFor="task-priority">Priority</label>
                            <select
                                id="task-priority"
                                className="api-tester__select"
                                value={priority}
                                onChange={(event) => setPriority(event.target.value as Priority)}
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>

                    <div className="api-tester__field">
                        <label htmlFor="task-description">Description</label>
                        <input
                            id="task-description"
                            className="api-tester__input"
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>

                    <div className="api-tester__field">
                        <label htmlFor="task-due-date">Due Date</label>
                        <input
                            id="task-due-date"
                            className="api-tester__input"
                            type="date"
                            value={due_date}
                            onChange={(event) => setDueDate(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="api-tester__button api-tester__button--primary">
                        Create Task
                    </button>
                </form>
            </section>
        </div>
    );
}

export default ApiTester;