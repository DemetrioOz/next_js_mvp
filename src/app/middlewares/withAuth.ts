import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function withAuth(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    if (!token) {
      return NextResponse.json(
        {
          error: 'não autorizado',
        },
        {
          status: 401,
        }
      );
    }
    return handler(req);
  };
}
