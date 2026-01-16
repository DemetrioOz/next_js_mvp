import { notebookMock } from "@/app/mocks/notebookMock";

export async function GET(request: Request) {
  const data = notebookMock;
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
