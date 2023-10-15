import { todos } from "@/app/lib/db";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    return new Response(JSON.stringify(todo));
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const targetIndex = todos.findIndex((todo) => todo.id === id);
  if (targetIndex > -1) {
    todos.splice(targetIndex, 1);
    return new Response(JSON.stringify({ id }));
  }
}
