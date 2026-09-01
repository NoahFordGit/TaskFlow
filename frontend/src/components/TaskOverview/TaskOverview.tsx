import { useState, useEffect } from 'react';
import { getTasks } from '../../services/taskService';
import type { Task } from '../../types/task';

import './TaskOverview.css';
import './TaskCountCard/TaskCountCard.css';
import './CreateTaskCard/CreateTaskCard.css';
import TaskCountCard from './TaskCountCard/TaskCountCard';
import CreateTaskCard from './CreateTaskCard/CreateTaskCard';

function TaskOverview() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        async function loadTasks() {
            const data = await getTasks();
            setTasks(data);
        }

        loadTasks();
    }, []);

    // Come back to this after allowing editting, deletion, and task creation
    const totalTasks = tasks.length;
    const pendingTasks = tasks.filter(task => !task.completed).length;
    const overdueTasks = tasks.filter(task => task.due_date && new Date(task.due_date) < new Date()).length;

    return (
        <section className="task-overview" aria-label="Task overview">
            <div className="task-overview__cards">
                <CreateTaskCard />
                <TaskCountCard count={totalTasks} title="Total Tasks" />
                <TaskCountCard count={pendingTasks} title="Pending Tasks" variant="default" />
                <TaskCountCard count={overdueTasks} title="Overdue Tasks" variant={overdueTasks > 0 ? 'overdue' : 'default'} />
            </div>
        </section>
    );
}

export default TaskOverview;