import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  let username = null

  if (accessToken) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/${process.env.NEXT_PUBLIC_AUTH_API_VERSION}/me`, {
        method: 'GET',
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        credentials: 'include',
        cache: 'no-store',
      })

      if (res.ok) {
        const data = await res.json()
        username = data.username
      }
    } catch (err) {
      console.error('Failed to fetch user info', err)
    }
  }

  return (
    <main>
      <h1>main page</h1>
      <section>
        {username ? (
          <p>Welcome, {username}!</p>
        ) : (
          <p>
            <Link href="/login">Login</Link> or <a href="/signup">Sign Up</a>
          </p>
        )}
      </section>
      <section>
        <p>
          <Link href="/login">로그인 링크</Link>
        </p>
        <p>
          <Link href="/signup">회원가입 링크</Link>
        </p>     
      </section>
    </main>
  );
}
