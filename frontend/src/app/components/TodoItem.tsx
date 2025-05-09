export default function TodoItem({ todo, deleteTodo, toggleTodo }: { todo: any, deleteTodo: (id: number) => void, toggleTodo: (id: number) => void }) {
    return (
      <li className="flex justify-between items-center px-4 py-2">
  <div className="flex items-center gap-2">
        <input  className="w-5 h-5 accent-amber-400 rounded hover:cursor-pointer"  type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
       <span> {todo.text}</span>

        </div>
        <button  className=' px-4 py-1 border-none bg-amber-400 rounded-2xl hover:cursor-pointer'onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    );
  }
  