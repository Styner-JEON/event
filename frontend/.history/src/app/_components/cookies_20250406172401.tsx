import { cookies } from "next/headers";

export default async function LoginForm() {
  const cookieStore = await cookies()
  return (
    <section>
      <h2>Cookies</h2>
      <p>
        {cookieStore.get('')?.value}
      </p>
      <p>
        {cookieStore.get('refreshToken')?.value}
      </p>
    </section>
  )
}