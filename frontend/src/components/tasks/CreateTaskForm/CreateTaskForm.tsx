import { useState } from "react";
import type { TaskCreate, Priority } from "../../../types/task";
import "./CreateTaskForm.css";

interface CreateTaskFormProps {
    onSubmit: (task: TaskCreate) => void;
}

function CreateTaskForm({ onSubmit }: CreateTaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<Priority>("medium");
    const [dueDate, setDueDate] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const task: TaskCreate = {
            title,
            description,
            priority,
            due_date: dueDate || undefined,
        };

        onSubmit(task);
    };

    return (
        <form className="create-task-form" onSubmit={handleSubmit}>
            <h2>Create New Task</h2>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task title"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description"
                />
            </div>

            <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="dueDate">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>

            <button type="submit">Create Task</button>
        </form>
    );
}

export default CreateTaskForm;