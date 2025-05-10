from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from uuid import uuid4, UUID

app = FastAPI()

# Define the schema for a Todo
class Todo(BaseModel):
    id: UUID
    text: str
    completed: bool = False

# In-memory list to store todos
todos: List[Todo] = []

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.get("/todos", response_model=List[Todo])
def get_todos():
    return todos

@app.post("/todos", response_model=Todo)
def create_todo(todo: Todo):
    todo.id = uuid4()  # Generates a unique UUID
    todos.append(todo)
    return todo


@app.delete("/todos/{todo_id}", response_model=Todo)
def delete_todo(todo_id: UUID):
    for todo in todos:
        if todo.id == todo_id:
            todos.remove(todo)
            return {"detail": "Todo deleted successfully"}

    raise HTTPException(status_code=404, detail="Todo not found")

@app.put("/todos/{todo_id}", response_model=Todo)
def toggle_todo(todo_id: UUID):
    for todo in todos:
        if todo.id == todo_id:
            todo.completed = not todo.completed
            return todo
    raise HTTPException(status_code=404, detail="Todo not found")
