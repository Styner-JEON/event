  import { cookies } from "next/headers";
  import Link from "next/link";

  export default async function Home() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

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