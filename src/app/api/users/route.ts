import { prisma } from "@/app/lib/prisma";

export async function GET(request: Request) {
  const users = await prisma.user.findMany()

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
