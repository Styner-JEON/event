import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const cookieStore = await cookies(); // ✅ await 추가
  const accessToken = cookieStore.get('accessToken')?.value;

  let username = null;

  if (accessToken) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/${process.env.NEXT_PUBLIC_AUTH_API_VERSION}/me`, {
        method: 'GET',
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        credentials: 'include',
        cache: 'no-store',
      });

      if (res.ok) {
        const data = await res.json();
        username = data.username;
      }
    } catch (err) {
      console.error('Failed to fetch user info', err);
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
            <Link href="/login">Login</Link> or <Link href="/signup">Sign Up</Link>
          </p>
        )}
      </section>
    </main>
  );
}