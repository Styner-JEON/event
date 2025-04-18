  import { cookies } from "next/headers";
  import Link from "next/link";

  export default async function Home() {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refreshToken')?.value;

    return (
      <main>
        <h1>main page</h1>
        <section>          
          <p>
            <Link href="/login">Login</Link>
          </p>
          <p>
            <Link href="/signup">Sign Up</Link>
          </p>
        </section>
      </main>
    );
  }