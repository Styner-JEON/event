'use server'

import { redirect } from "next/navigation"
import { FormState, LoginFormSchema } from "../_libs/definitions"
import { cookies } from "next/headers"

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

  const response = await fetch( `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/${process.env.NEXT_PUBLIC_AUTH_API_VERSION}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,      
      password: password,
    }),
    credentials: 'include',
  })

  if (!response.ok) {
    try {
      const errorData = await response.json();
      console.error('Error Data:', errorData);
      return errorData;
    } catch (e) {
      const fallback = { message: 'Failed to parse error response' };
      console.error(fallback.message, e);
      return fallback;
    }
  }
  
  const responseData = await response.json();
  console.log('Response Status:', response.status);
  console.log('Response Data:', responseData);

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  console.log('Access Token from cookie:', accessToken || 'Not found');
  console.log('Refresh Token from cookie:', refreshToken || 'Not found');

  redirect('/')
}

export async function logout() {
  redirect('/login')
}