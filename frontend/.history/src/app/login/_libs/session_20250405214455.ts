import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(tokenType: string, tokenValue: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const cookieStore = await cookies()
 
  cookieStore.set(tokenType, tokenValue, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}