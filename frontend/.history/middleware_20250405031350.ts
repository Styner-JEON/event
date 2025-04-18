// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  console.log('🔒 Access Token (middleware):', accessToken);

  return NextResponse.next();
}
