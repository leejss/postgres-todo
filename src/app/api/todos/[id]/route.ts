import { db } from "@/app/db/drizzle";
import { todos } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = +params.id;
  const todo = await db.query.todos.findFirst({ where: (todos, { eq }) => eq(todos.id, id) });
  if (todo) {
    const prevCompleted = todo.completed;
    const result = await db.update(todos).set({ completed: !prevCompleted }).where(eq(todos.id, id)).returning();
    return new Response(JSON.stringify(result), { status: 200 });
  }

  // return new Response
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = +params.id;
  await db.delete(todos).where(eq(todos.id, id));
  return new Response(JSON.stringify("ok"), { status: 200 });
}
