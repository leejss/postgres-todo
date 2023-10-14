export type Todo = {
  id: string;
  content: string;
  completed: boolean;
};
export const todos: Todo[] = [];

export const seed = () => {
  todos.push(
    { id: "1", content: "Buy milk", completed: false },
    { id: "2", content: "Buy eggs", completed: false },
    { id: "3", content: "Buy bread", completed: false },
  );
};

seed();
