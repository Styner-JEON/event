// 'use server'

import { FormState, SignupFormSchema } from "../_libs/definitions"

export async function signup(state: FormState, formData: FormData) {  
  // console.log('state', state);
  // console.log('formData', formData);

  // 1. Validate form fields
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
  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data

  // e.g. Hash the user's password before 
  const hashedPassword = await bcrypt.hash(password, 10)
 
  // 3. Insert the user into the database or call an Auth Library's API 
  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }
 
  // TODO:
  // 4. Create user session
  // 5. Redirect user
}