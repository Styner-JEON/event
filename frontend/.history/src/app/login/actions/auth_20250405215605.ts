'use server'

import { redirect } from "next/navigation"
import { FormState, LoginFormSchema } from "../_libs/definitions"
import { createSession } from "../_libs/session"

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

  const { accessToken, refreshToken } = await response.json();
  console.log('accessToken', accessToken);
  console.log('refreshToken', refreshToken);
  createSession('accessToken', accessToken);
  createSession('refreshToken', refreshToken);

  redirect('/');
}

// export async function logout() {
//   redirect('/login')
// }