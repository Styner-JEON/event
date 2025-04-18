import { cookies } from "next/headers";

export default async function LoginForm() {
  const cookieStore = await cookies();
  return (
    <section>
      <p>
        {cookieStore.get('accessToken')?.value}
      </p>
    </section>
  )
}