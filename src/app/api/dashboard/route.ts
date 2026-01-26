import { dashboardMock } from '@/app/mocks/dashboardMock';
import { withAuth } from '@/app/middlewares/withAuth';
import { NextRequest, NextResponse } from 'next/server';

// export const GET = withAuth(async (request: NextRequest) => {
//   const data = dashboardMock;
//   return NextResponse.json(data, {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// });

export async function GET(request: NextRequest) {
  const data = dashboardMock;
  return NextResponse.json(JSON.stringify(data), {
    status: 200, headers: { "Content-Type": "application/json" }
  });
};
