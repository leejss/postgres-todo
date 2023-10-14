import { AddTodoDialog } from "@/app/components/AddTodoDialog";
import { TodoList } from "@/app/components/TodoList";
import { Container } from "@radix-ui/themes";

const HomePage = () => {
  return (
    <div>
      <Container>
        <AddTodoDialog />
        <TodoList />
      </Container>
    </div>
  );
};

export default HomePage;
