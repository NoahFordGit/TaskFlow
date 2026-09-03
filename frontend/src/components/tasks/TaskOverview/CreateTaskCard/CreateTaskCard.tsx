import { useState } from 'react';
import Modal from '../../../modal/Modal';
import CreateTaskForm from '../../../tasks/CreateTaskForm/CreateTaskForm';
import type { TaskCreate } from '../../../../types/task';
import { createTask } from '../../../../services/taskService';

interface CreateTaskCardProps {
    onTaskCreated: () => Promise<void>;
}

function CreateTaskCard({ onTaskCreated }: CreateTaskCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function handleCreateTask(task: TaskCreate) {
        console.log('Creating task:', task);
        await createTask(task);
        await onTaskCreated();
        setIsModalOpen(false);
    }

    return (
        <div className="create-task-card">
            <div className="create-task-card__meta">
                <span className="create-task-card__label">Quick Add</span>
            </div>
            <div className="create-task-card__body">
                <h3 className="create-task-card__title">Create New Task</h3>
                <button 
                    className="create-task-card__button"
                    onClick={() => setIsModalOpen(true)}
                >
                    + Add
                </button>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <CreateTaskForm onSubmit={handleCreateTask} />
                </Modal>
            </div>
        </div>
    );
}

export default CreateTaskCard;