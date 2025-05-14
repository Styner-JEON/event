import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(key: string, value: string, path: string, expires?: Date) {  
  const cookieStore = await cookies()
  
  // expires가 전달되지 않은 경우 기본값으로 30일 후의 날짜 설정
  const defaultExpires = expires || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
 
  cookieStore.set(key, value, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    expires: defaultExpires,
    path: path,
  })
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('username');
  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');
}