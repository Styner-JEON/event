import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(tokenType: string, tokenValue: string, expiresAt: Date) {  
  const cookieStore = await cookies()
 
  cookieStore.set(tokenType, tokenValue, {
    httpOnly: true,
    secure: false,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');
}