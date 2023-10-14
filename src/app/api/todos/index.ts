import { api } from "@/app/lib/api";
import { Todo } from "@/app/lib/db";

export const getTodos = async () => {
  const todos = await api.get("todos").json<Todo[]>();
  return todos;
};

export const addTodo = async (todo: Todo) => {
  const todos = await api.post("todos", { json: todo }).json<Todo[]>();

  return todos;
};

export const toggleTodo = async (id: string) => {
  const todo = await api.put(`/todos/${id}`).json();
  return todo;
};

export const deleteTodo = async (id: string) => {
  const todo = await api.delete(`/todos/${id}`).json();
  return todo;
};
