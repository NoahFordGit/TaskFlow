import './TaskList.css';
import type { Task } from "../../../types/task";
import TaskCard from "../TaskCard/TaskCard";
import TaskListHeader from "../TaskListHeader/TaskListHeader";

interface TaskListProps {
    tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
    return (
        <section className="task-list" aria-label="Task list">
            <TaskListHeader />

            <div className="task-list__content">
                {tasks.length === 0 ? (
                    <div className="task-list__empty">No tasks yet. Add one to get started.</div>
                ) : (
                    tasks.map((task) => {
                        const isOverdue = !!task.due_date && task.due_date < new Date().toISOString().split('T')[0] && !task.completed;

                        return (
                            <TaskCard
                                key={task.id}
                                task={task}
                                variant={isOverdue ? 'overdue' : 'default'}
                            />
                        );
                    })
                )}
            </div>
        </section>
    );
}

export default TaskList;