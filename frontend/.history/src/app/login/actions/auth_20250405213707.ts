'use server'

import { redirect } from "next/navigation"
import { FormState, LoginFormSchema } from "../_libs/definitions"
import { cookies } from "next/headers"

// export const dynamic = 'force-dynamic'

export async function login(state: FormState, formData: FormData) {  
  const validatedFields = LoginFormSchema.safeParse({
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
      body: JSON.stringify({ username, password }),
      cache: 'no-store',
    }
  )

  if (!response.ok) {
    try {
      const errorData = await response.json()
      console.error('Error Data:', errorData)
      return errorData
    } catch (e) {
      console.error('Failed to parse error response', e)
      return { message: 'Login failed' }
    }
  }

  const { accessToken, refreshToken } = await response.json()

  const cookieStore = cookies()
  cookieStore.set("access_token", accessToken, {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 15, // 15분 (예시)
  })

  cookieStore.set("refresh_token", refreshToken, {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7일 (예시)
  })

  redirect('/')
}

// export async function logout() {
//   redirect('/login')
// }