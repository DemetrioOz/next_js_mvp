import { dashboardMock } from "@/app/mocks/dashboardMock";

export async function GET(request: Request) {
  const data = dashboardMock;
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
