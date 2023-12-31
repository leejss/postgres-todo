import { NewTodo, Todo } from "@/app/db/schema";
import { api } from "@/app/lib/api";

export const getTodos = async () => {
  const todos = await api.get("todos").json<Todo[]>();
  return todos;
};

export const addTodo = async ({ content }: NewTodo) => {
  const todos = await api.post("todos", { json: { content } }).json<Todo[]>();
  return todos;
};

export const toggleTodo = async ({ id }: { id: number }) => {
  const todo = await api.put(`todos/${id}`).json();
  return todo;
};

export const deleteTodo = async ({ id }: { id: number }) => {
  const todo = await api.delete(`todos/${id}`).json();
  return todo;
};
