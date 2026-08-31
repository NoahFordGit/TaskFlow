import './TaskCard.css';
import type { Task } from "../../../types/task";

interface TaskCardProps {
    task: Task;
}

function TaskCard({ task }: TaskCardProps) {
    const priorityClass = `task-card__priority task-card__priority--${task.priority}`;

    return (
        <article className={`task-card ${task.completed ? 'task-card--completed' : ''}`}>
            <label className="task-card__checkbox-wrap">
                <input
                    className="task-card__checkbox"
                    type="checkbox"
                    checked={task.completed}
                    readOnly
                />
            </label>

            <div className="task-card__content">
                <div className="task-card__header">
                    <h3 className="task-card__title">{task.title}</h3>
                    <span className={priorityClass}>{task.priority}</span>
                </div>

                {task.description && (
                    <p className="task-card__description">{task.description}</p>
                )}

                {task.due_date && (
                    <span className="task-card__due-date">Due {task.due_date}</span>
                )}
            </div>
        </article>
    );
}

export default TaskCard;