import { todos } from "@/app/lib/db";

export async function GET() {
  return new Response(JSON.stringify(todos));
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTodo = {
    id: "4",
    completed: false,
    content: body.content,
  };
  todos.push(newTodo);
  return new Response(JSON.stringify(todos));
}
