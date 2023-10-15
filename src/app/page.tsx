import { AddTodoDialog } from "@/app/components/AddTodoDialog";
import { TodoListContainer } from "@/app/components/TodoList";
import { Container } from "@radix-ui/themes";

const HomePage = () => {
  return (
    <div>
      <Container>
        <AddTodoDialog />
        <TodoListContainer />
      </Container>
    </div>
  );
};

export default HomePage;
