from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import select

from app.models.task import Task
from app.schemas.task import TaskCreate, TaskUpdate, TaskResponse

from app.database import get_db

router = APIRouter(prefix="/tasks")

@router.get("/", response_model=list[TaskResponse])
def get_tasks(db: Session = Depends(get_db)):
    result = db.execute(select(Task))
    tasks = result.scalars().all()

    return tasks

@router.get("/{task_id}", response_model=TaskResponse)
def get_task(task_id: int, db: Session = Depends(get_db)):
    result = db.execute(select(Task).where(Task.id == task_id))
    task = result.scalar_one_or_none()

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    return task

@router.post("/", response_model=TaskResponse, status_code=201)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    new_task = Task(**task.model_dump())

    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    
    return new_task

@router.patch("/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, task: TaskUpdate, db: Session = Depends(get_db)):
    result = db.execute(select(Task).where(Task.id == task_id))
    existing_task = result.scalar_one_or_none()

    if not existing_task:
        raise HTTPException(status_code=404, detail="Task not found")

    for key, value in task.model_dump(exclude_unset=True).items():
        setattr(existing_task, key, value)

    db.commit()
    db.refresh(existing_task)

    return existing_task

@router.delete("/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    result = db.execute(select(Task).where(Task.id == task_id))
    existing_task = result.scalar_one_or_none()

    if not existing_task:
        raise HTTPException(status_code=404, detail="Task not found")

    db.delete(existing_task)
    db.commit()

    return {"message": "Task deleted successfully"}