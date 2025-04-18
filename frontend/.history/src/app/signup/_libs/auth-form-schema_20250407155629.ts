import { z } from 'zod'
 
export const AuthFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: '유저명은 2개 이상의 문자로 작성되어야 합니다' })
    .trim(),
  email: z
    .string()
    .email({ message: '잘못된 이메일 형식입니다.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: '비밀번호는 8글자 이상이어야 합니다.' })
    .regex(/[a-zA-Z]/, { message: '비밀번호는 1개 이상의 문자를 작성해야 합니다.' })
    .regex(/[0-9]/, { message: '비밀번호는 1개 이상의 숫자를 포함해야 합니다.' })
    .regex(/[^a-zA-Z0-9]/, { message: '비밀번호는 1개 이상의 특수문자를 포함해야 합니다.', })
    .trim(),
})
