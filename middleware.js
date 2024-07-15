// // middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const host = req.headers.get('host');
  const protocol = req.headers.get('x-forwarded-proto') || 'http';
  const fullUrl = `${protocol}://${host}`;

  req.headers.set('x-full-url', fullUrl);
  return NextResponse.next();
}
