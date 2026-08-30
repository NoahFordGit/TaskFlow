from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime, date

from app.models.task import PriorityEnum

class TaskCreate(BaseModel):
    title: str = Field(..., min_length=1,max_length=255)
    description: str | None = Field(None, max_length=1000)
    priority: PriorityEnum = PriorityEnum.MEDIUM
    due_date: date | None = None

class TaskUpdate(BaseModel):
    title: str | None = Field(None, min_length=1,max_length=255)
    description: str | None = Field(None, max_length=1000)
    completed: bool | None = None
    priority: PriorityEnum | None = None
    due_date: date | None = None
    
class TaskResponse(BaseModel):

    model_config = ConfigDict(from_attributes=True)
    
    id: int
    title: str
    description: str | None = None
    completed: bool
    priority: PriorityEnum
    due_date: date | None = None
    created_at: datetime
    updated_at: datetime
