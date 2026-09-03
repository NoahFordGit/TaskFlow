import './TaskCard.css';
import type { Task } from "../../../types/task";

interface TaskCardProps {
    task: Task;
    variant?: 'default' | 'overdue';
}

function TaskCard({ task, variant = 'default' }: TaskCardProps) {
    const priorityClass = `task-card__priority task-card__priority--${task.priority}`;
    const isOverdue = variant === 'overdue' && !task.completed;

    return (
        <article className={`task-card ${task.completed ? 'task-card--completed' : ''} ${isOverdue ? 'task-card--overdue' : ''}`}>
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

                {(task.due_date || isOverdue) && (
                    <div className="task-card__badges">
                        {task.due_date && (
                            <span className="task-card__due-date">Due {task.due_date}</span>
                        )}
                        {isOverdue && (
                            <span className="task-card__late-badge">LATE</span>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}

export default TaskCard;