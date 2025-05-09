"use client";

import { useState } from "react";
import TodoForm from "../app/components/TodoForm";
import TodoList from "../app/components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState<any[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4 ">My To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}