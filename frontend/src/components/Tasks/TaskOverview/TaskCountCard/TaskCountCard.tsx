interface TaskCountCardProps {
    count: number;
    title: string;
    variant?: 'default' | 'overdue';
}

function TaskCountCard({
    count,
    title,
    variant = 'default'
}: TaskCountCardProps) {
    return (
        <div className={`task-count-card task-count-card--${variant}`}>
            <div className="task-count-card__meta">
                <span className="task-count-card__label">Overview</span>
            </div>
            <div className="task-count-card__body">
                <h3 className="task-count-card__title">{title}</h3>
                <p className="task-count-card__count">{count}</p>
            </div>
        </div>
    );
}

export default TaskCountCard;