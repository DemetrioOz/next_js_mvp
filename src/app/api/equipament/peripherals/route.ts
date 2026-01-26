import { perifericosMocks } from '@/app/mocks/perifericosMocks';

export async function GET(request: Request) {
  const data = perifericosMocks;
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
