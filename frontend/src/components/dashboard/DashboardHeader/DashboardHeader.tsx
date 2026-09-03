import './DashboardHeader.css';
import { getTasks } from '../../../services/taskService';
import { useState, useEffect } from 'react';
import type { Task } from '../../../types/task';

function DashboardHeader() {
    const now = new Date();
    const day = now.getDate();

    const suffix =
        day % 10 === 1 && day !== 11 ? 'st' :
        day % 10 === 2 && day !== 12 ? 'nd' :
        day % 10 === 3 && day !== 13 ? 'rd' : 
        'th';


    const date = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) + suffix;
    const [tasksDueToday, setTasksDueToday] = useState<Task[]>([]);
    
    useEffect(() => {
        async function loadTasksDueToday() {
            const tasks = await getTasks();
            const today = new Date().toISOString().split('T')[0];

            const dueToday = tasks.filter(task => task.due_date === today && !task.completed);

            setTasksDueToday(dueToday);
        }

        loadTasksDueToday();
    }, []);

    return (
        <header className="dashboard-header">
            <div className="dashboard-header__content">
                <h1 className="dashboard-header__title">{date}</h1>
            </div>
            <p className="dashboard-header__subtitle">You have {tasksDueToday.length === 0 ? 'no' : tasksDueToday.length} {tasksDueToday.length === 1 ? 'task' : 'tasks'} due today.</p>
        </header>
    );
}

export default DashboardHeader;