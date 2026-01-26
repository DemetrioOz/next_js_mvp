import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = new URL(request.url);
  const path = url.pathname;
  const token = request.cookies.get('token')?.value;

  const isPublic = path === '/pricing' || path === '/';
  // const isAuthTarget = path === "/dashb:";
  const redirectTo: string = '/sign-in'; // home

  if (path === redirectTo && !token) return NextResponse.next();

  if (path === redirectTo && token)
    return NextResponse.redirect(new URL('/dashboard', request.url));

  if (!token && !isPublic) {
    if (path !== '/sign-in') {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
    return NextResponse.next();
  }

  // if (token && isPublic) {
  //   if (path !== redirectTo) {
  //     return NextResponse.redirect(new URL(redirectTo, request.url));
  //   }
  //   return NextResponse.next();
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
