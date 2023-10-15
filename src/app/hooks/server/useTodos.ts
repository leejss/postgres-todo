import { addTodo, deleteTodo, getTodos, toggleTodo } from "@/app/api/todos";
import { queryClient } from "@/app/components/ReactQueryContainer";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useTodos = () => {
  const res = useQuery(["todos"], () => {
    return getTodos();
  });

  return res;
};

export const useAddTodoMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ content }: { content: string }) => {
      return addTodo({ content });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return mutation;
};

export const useToggleTodoMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ id }: { id: number }) => {
      return toggleTodo({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return mutation;
};

export const useDeleteTodoMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ id }: { id: number }) => {
      return deleteTodo({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return mutation;
};
