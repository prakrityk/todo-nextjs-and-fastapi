
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todos`);
  return response.data;
};



export async function createTodo(text: string) {
    console.log("Sending to backend:", text); 
  try {
    const response = await axios.post(`${API_BASE_URL}/todos`, {
      text, // Send only the `text` property in the request body
    });

    console.log('Response from server:', response.data); // Log the response data
    return response.data; // Return the created todo item
  } catch (error: any) {
    if (error.response) {
      console.error('Backend returned error:', error.response.data); // Log backend error message
      console.error('Error status:', error.response.status); // Log status code
    } else {
      console.error('Network error or no response:', error.message); // Log network error message
    }
    throw error; // Rethrow the error for further handling
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
