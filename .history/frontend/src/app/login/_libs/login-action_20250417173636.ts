'use server'

import { redirect } from "next/navigation"
import { loginFormSchema } from "./login-form-schema"
import { createSession } from "./session"
import { loginFormState } from "@/app/login/_types/login-form-state"

// export const dynamic = 'force-dynamic'

export async function loginAction(state: loginFormState, formData: FormData) {  
  const validatedFields = loginFormSchema.safeParse({
    username: formData.get('username'),    
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {  
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { username, password } = validatedFields.data

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/${process.env.NEXT_PUBLIC_AUTH_API_VERSION}/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username, 
        password 
      }),
      cache: 'no-store',
    }
  )

  const responseData = await response.json()

  if (!response.ok) {
    return {
      errors: {
        general:
          response.status === 401
            ? '잘못된 사용자 이름 또는 비밀번호입니다.'
            : response.status === 429
            ? '너무 많은 요청입니다. 잠시 후 다시 시도해주세요.'
            : response.status === 500
            ? '서버에 문제가 발생했습니다. 나중에 다시 시도해주세요.'
            : '로그인에 실패했습니다. 다시 시도해주세요.',
      },
    }
  }
  
  
  const { accessToken, refreshToken, user } = responseData;
  console.log('accessToken: ', accessToken);
  console.log('refreshToken: ', refreshToken);
  console.log('userId: ', user.id);
  console.log('username: ', user.name);
  console.log('userRole: ', user.role);

  const accessTokenExpiry = new Date(Date.now() + Number(process.env.ACCESS_TOKEN_EXPIRY!))
  const refreshTokenExpiry = new Date(Date.now() + Number(process.env.REFRESH_TOKEN_EXPIRY!))

  await createSession('username', user.name, '/', accessTokenExpiry);
  await createSession('accessToken', accessToken, '/', accessTokenExpiry);  
  await createSession('refreshToken', refreshToken, '/', refreshTokenExpiry);    

  redirect('/');
}

// export async function logout() {
//   redirect('/login')
// }