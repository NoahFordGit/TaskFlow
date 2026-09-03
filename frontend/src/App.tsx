import './App.css';
import Sidebar from './components/dashboard/Sidebar/Sidebar';
import DashboardHeader from './components/dashboard/DashboardHeader/DashboardHeader';
import TaskList from './components/tasks/TaskList/TaskList';
import TaskOverview from './components/tasks/TaskOverview/TaskOverview';

import type { Task } from './types/task';
import { useState, useEffect } from 'react';
import { getTasks } from './services/taskService';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await getTasks();
      setTasks(data);
    }

    loadTasks();
  }, [])

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="content-panel">
        <DashboardHeader />
        <TaskOverview />
        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;