import { getTodos } from "@/app/api/todos";
import { Card, Checkbox, Flex, Text } from "@radix-ui/themes";

export const TodoList = async () => {
  const todos = await getTodos();
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
              <Checkbox checked={todo.completed} />
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};
