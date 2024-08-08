import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.url);

  return NextResponse.next({ headers });
}
