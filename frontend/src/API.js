import axios from "axios";

export const getTodos = async () => {
  const response = await axios.get("http://localhost:4001/todos");
  return response;
};

export const createTodo = async (formData) => {
  const response = await axios.post("http://localhost:4001/todos", formData);
  return response;
};

export const deleteTodo = async (todoId) => {
  const response = await axios.delete(`http://localhost:4001/todos/${todoId}`);
  return response; 
};
