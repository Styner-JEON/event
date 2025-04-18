import { cookies } from "next/headers";

export default async function LoginForm() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;
  return (
    <section>
      <h2>Cookies</h2>
      <p>
        
      </p>
      <p>
        {cookieStore.get('refreshToken')?.value}
      </p>
    </section>
  )
}