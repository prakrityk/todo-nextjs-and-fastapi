"use client";

import { useEffect, useState } from "react";
import TodoForm from "../app/components/TodoForm";
import TodoList from "../app/components/TodoList";
import { fetchTodos, createTodo, deleteTodoById, toggleTodoStatus } from "../app/lib/api";

export default function Home() {

  interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

  const [todos, setTodos] = useState<Todo[]>([]);

  // 🔁 Fetch todos when component mounts
  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  const addTodo = async (text: string) => {
    const newTodo = await createTodo(text);
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id: string) => {
    const updatedTodo = await toggleTodoStatus(id);
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
  };

  const deleteTodo = async (id:string) => {
    await deleteTodoById(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4 ">My To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo}  toggleTodo={(id: string) => toggleTodo(id)} />
      </div>
    </div>
  );
}
