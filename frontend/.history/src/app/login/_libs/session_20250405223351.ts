import 'server-only'
import { cookies } from 'next/headers'
 
export function createSession(tokenType: string, tokenValue: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const cookieStore = cookies()
 
  aync cookieStore.set(tokenType, tokenValue, {
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