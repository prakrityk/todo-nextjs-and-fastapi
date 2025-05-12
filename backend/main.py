from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from uuid import uuid4, UUID
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://crud-todo-nine.vercel.app/"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Or  ["GET", "POST", "PUT", "DELETE"]
    allow_headers=["*"],
)


#  schema for a Todo
class Todo(BaseModel):
    id: UUID
    text: str
    completed: bool = False


class TodoCreate(BaseModel):
    text: str

# In-memory list to store todos
todos: List[Todo] = []

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.get("/todos", response_model=List[Todo])
def get_todos():
    return todos

@app.post("/todos", response_model=Todo)
def create_todo(todo_data: TodoCreate):
    print(todo_data)  # Log the received data
    new_todo = Todo(id=uuid4(), text=todo_data.text, completed=False)
    todos.append(new_todo)
    return new_todo




@app.delete("/todos/{todo_id}", response_model=Todo)
def delete_todo(todo_id: UUID):
    for todo in todos:
        if todo.id == todo_id:
            todos.remove(todo)
            return todo

    raise HTTPException(status_code=404, detail="Todo not found")

@app.put("/todos/{todo_id}", response_model=Todo)
def toggle_todo(todo_id: UUID):
    for todo in todos:
        if todo.id == todo_id:
            todo.completed = not todo.completed
            return todo
    raise HTTPException(status_code=404, detail="Todo not found")
