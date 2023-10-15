"use client";

import { useDeleteTodoMutation, useTodos, useToggleTodoMutation } from "@/app/hooks/server/useTodos";
import { Todo } from "@/app/lib/db";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Card, Checkbox, Flex, IconButton, Text } from "@radix-ui/themes";

type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => {
  const { mutate: toggleTodo } = useToggleTodoMutation();
  const { mutate: deleteTodo } = useDeleteTodoMutation();
  return (
    <Flex direction="column" gap="2">
      {todos.map((todo, index) => {
        return (
          <Card
            key={index}
            variant="classic"
            style={{
              maxWidth: "300px",
            }}
          >
            <Flex align="center" justify="between" gap="3">
              <Text size="3">{todo.content}</Text>
              <Flex align="center" gap="2">
                <Checkbox
                  onClick={() => {
                    toggleTodo({
                      id: todo.id,
                    });
                  }}
                  checked={todo.completed}
                />
                <IconButton
                  onClick={() => {
                    deleteTodo({
                      id: todo.id,
                    });
                  }}
                  size="1"
                  color="crimson"
                >
                  <Cross1Icon />
                </IconButton>
              </Flex>
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};

export const TodoListContainer = () => {
  const { data, isLoading } = useTodos();
  if (isLoading || !data) return null;
  return <TodoList todos={data} />;
};
