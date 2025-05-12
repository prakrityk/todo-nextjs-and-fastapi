import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, toggleTodo }: { todos: any[], deleteTodo: (id: string) => void, toggleTodo: (id: string) => void }) {
  return (
    <ul className='px-6 py-3 text-left' >
      {todos.map((todo) => (
        <TodoItem   key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}
