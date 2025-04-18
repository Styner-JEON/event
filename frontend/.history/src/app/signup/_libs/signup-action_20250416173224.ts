'use server'

import { signupFormState } from "@/app/signup/_types/signup-form-state"
import { signupFormSchema } from "./signup-form-schema"
import { redirect } from "next/navigation"
// import bcrypt from 'bcrypt'

export async function signupAction(state: signupFormState, formData: FormData) {  
  // console.log('state', state);
  // console.log('formData', formData);

  // 1. Validate form fields
  const validatedFields = signupFormSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {  
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Call the provider or db to create a user...
  
  // 2. Prepare data
  const { username, email, password } = validatedFields.data

  // e.g. Hash the user's password before 
  // const hashedPassword = await bcrypt.hash(password, 10)
 
  // 3. Call an Auth Library's API
  const response = await fetch( `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/${process.env.NEXT_PUBLIC_AUTH_API_VERSION}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      // password: hashedPassword,
      password: password,
    }),
    // credentials: 'include',
  })

  const responseData = await response.json();

  if (!response.ok) {
    const errorData = await response.json();
    console.error(responseData);
    return responseData;
  }
  
  
  // console.log('response HTTP status: ', response.status);
  console.log(responseData);
 
  // TODO:
  // 4. Create user session
  // 5. Redirect user              

  // await updateSession(user.id);
  // await updateSession();

  redirect('/')

}
