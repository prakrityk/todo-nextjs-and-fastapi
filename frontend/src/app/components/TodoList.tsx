import TodoItem from "./TodoItem";


interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoList({ todos, deleteTodo, toggleTodo }: { todos: Todo[], deleteTodo: (id: string) => void, toggleTodo: (id: string) => void }) {
  return (
    <ul className='px-6 py-3 text-left' >
      {todos.map((todo) => (
        <TodoItem   key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}
