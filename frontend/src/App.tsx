import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import TaskList from './components/Tasks/TaskList/TaskList';

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
        <header className="content-panel__header">
          <div>
            <p className="eyebrow">Today</p>
            <h2>Tasks</h2>
          </div>
        </header>

        <TaskList tasks={tasks} />
      </main>
    </div>
  );
}

export default App;