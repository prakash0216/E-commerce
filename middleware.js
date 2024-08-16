import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const validRoutes = ["/listings", "/cart", "/checkout"];

  // Allow requests to static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") || // Next.js internals like static files, webpack, etc.
    pathname.startsWith("/api") || // API routes
    pathname.startsWith("/favicon.ico") || // favicon
    pathname.match(/\.(jpg|jpeg|png|gif|css|js)$/i) // Static assets
  ) {
    return NextResponse.next(); // Let the request pass through
  }

  if (!validRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/listings", request.url));
  }

  return NextResponse.next();
}
