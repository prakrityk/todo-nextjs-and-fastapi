import {useState} from "react";
import axios from "axios";


export default function TodoForm({ addTodo }: { addTodo: (text: string) => void }) {
    const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (text.trim()) {
    try {
  
      await addTodo(text);
      setText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }
};







    return (
        <form onSubmit={handleSubmit}>
          <input
          className=" outline-none border-none focus:ring-0 focus:border-none"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new todo"
          />
          <button className="px-4 py-1 text-black text-2xl bg-white border border-black rounded-3xl shadow hover:cursor-pointer"
  type="submit">Add Todo</button>
        </form>
      );
    }