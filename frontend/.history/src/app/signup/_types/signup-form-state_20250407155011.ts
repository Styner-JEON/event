export type FormState = 
  | {
      errors?: {
        username?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined