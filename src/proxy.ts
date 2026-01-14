// import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

import { NextRequest, NextResponse } from "next/server";

// const publicRoutes = [
//   { path: "/pricing", whenAuthenticated: "redirect" },
//   { path: "/sign-in", whenAuthenticated: "next" },
// ] as const;

// const REDIRECT_ROUTER = "./";

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
//   const publicRoute = publicRoutes.find((route) => route.path === path);
//   const authToken = request.cookies.get("token");

//   // if (!authToken && publicRoute) {
//   //   return NextResponse.next();
//   // }

//   // if (!authToken && !publicRoute) {
//   //   const redirectUrl = request.nextUrl.clone();
//   //   redirectUrl.pathname = REDIRECT_ROUTER;
//   //   return NextResponse.redirect(redirectUrl);
//   // }

//   // if (
//   //   authToken &&
//   //   publicRoute &&
//   //   publicRoute.whenAuthenticated === "redirect"
//   // ) {
//   //   const redirectUrl = request.nextUrl.clone();
//   //   redirectUrl.pathname = "/";
//   //   return NextResponse.redirect(redirectUrl);
//   // }

//   // if (authToken && !publicRoute) {
//   //   return NextResponse.next();
//   // }

//   return NextResponse.next();
// }

// export const config: MiddlewareConfig = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//   ],
// };

export function proxy(request: NextRequest) {
  const url = new URL(request.url);
  const path = url.pathname;
  const token = request.cookies.get("token")?.value;

  const isPublic = path === "/pricing" || path === "/sign-in";
  const isAuthTarget = path === "/sign-in";
  const redirectTo: string = "/"; // home

  // Se já estamos no destino, não redireciona de novo
  if (path === redirectTo && !token) return NextResponse.next();

  // Visitante sem token tentando rota privada → manda para sign-in
  if (!token && !isPublic) {
    if (path !== "/sign-in") {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    return NextResponse.next();
  }

  // Usuário logado tentando rota pública que deve redirecionar
  if (token && isPublic) {
    // Evita loop: só redireciona se não estiver na home
    if (path !== redirectTo) {
      return NextResponse.redirect(new URL(redirectTo, request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
