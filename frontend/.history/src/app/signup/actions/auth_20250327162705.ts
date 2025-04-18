// 'use server'

import { FormState, SignupFormSchema } from "../_libs/definitions"

export async function signup(state: FormState, formData: FormData) {
  console.log('runnning on server');
  console.log('state', state);

  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {  
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Call the provider or db to create a user...
}