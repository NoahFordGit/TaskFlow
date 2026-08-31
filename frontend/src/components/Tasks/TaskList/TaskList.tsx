import './TaskList.css';
import type { Task } from "../../../types/task";
import TaskCard from "../TaskCard/TaskCard";

interface TaskListProps {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
    return (
        <section className="task-list" aria-label="Task list">
            {tasks.length === 0 ? (
                <div className="task-list__empty">No tasks yet. Add one to get started.</div>
            ) : (
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))
            )}
        </section>
    );
}

export default TaskList;