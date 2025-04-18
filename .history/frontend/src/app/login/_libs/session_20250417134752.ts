import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(key: string, value: string, path: string, expires: Date) {  
  const cookieStore = await cookies()
 
  cookieStore.set(key, value, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    expires: expires,
    path: '/',
  })
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');
}