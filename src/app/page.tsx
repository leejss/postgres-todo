import { AddTodoDialog } from "@/app/components/AddTodoDialog";
import { TodoListContainer } from "@/app/components/TodoList";

const HomePage = () => {
  return (
    <div>
      <TodoListContainer />
      <AddTodoDialog />
    </div>
  );
};

export default HomePage;
