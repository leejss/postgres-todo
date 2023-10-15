import { db } from "@/app/db/drizzle";
import { NewTodo, todos } from "@/app/db/schema";

export async function GET() {
  const result = await db.select().from(todos);
  return new Response(JSON.stringify(result));
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTodo: NewTodo = {
    content: body.content,
  };

  return new Response(JSON.stringify(await db.insert(todos).values(newTodo).returning()));
}
