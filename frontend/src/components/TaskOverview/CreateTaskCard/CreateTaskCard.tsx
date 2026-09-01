function CreateTaskCard() {
    return (
        <div className="create-task-card">
            <div className="create-task-card__meta">
                <span className="create-task-card__label">Quick Add</span>
            </div>
            <div className="create-task-card__body">
                <h3 className="create-task-card__title">Create New Task</h3>
                <button type="button" className="create-task-card__button">+ Add</button>
            </div>
        </div>
    );
}

export default CreateTaskCard;