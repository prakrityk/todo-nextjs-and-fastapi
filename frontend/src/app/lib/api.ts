
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todos`);
  return response.data;
};

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}


export async function createTodo(text: string): Promise<Todo> {
  try {
    const response = await axios.post(`${API_BASE_URL}/todos`, { text });
    return response.data as Todo;
  } catch (error: unknown) {
    throw error;
  }
}



export const toggleTodoStatus = async (id: string) => {
 try {
    const response = await axios.put(`${API_BASE_URL}/todos/${id}`, {});
    return response.data;
  } catch (error) {
    console.error('Error toggling todo:', error);
    throw error;
  }
};

export const deleteTodoById = async (id: string) => {
  await axios.delete(`${API_BASE_URL}/todos/${id}`);
};
