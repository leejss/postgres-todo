import { AddTodoDialog } from "@/app/components/AddTodoDialog";
import { Container } from "@radix-ui/themes";

const HomePage = () => {
  return (
    <div>
      <Container>
        <AddTodoDialog />
      </Container>
    </div>
  );
};

export default HomePage;
