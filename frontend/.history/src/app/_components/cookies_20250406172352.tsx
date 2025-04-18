import { cookies } from "next/headers";

export default async function LoginForm() {
  const cookieStore = await cookies()
  return (
    <section>
      <h2>Cookies</h2>
      <p>
        {cookieStore.get('re')?.value}
      </p>
    </section>
  )
}