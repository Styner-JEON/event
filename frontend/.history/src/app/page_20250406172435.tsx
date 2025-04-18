  
  import Link from "next/link";

  export default async function Home() {
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
          <Cookies />
        </section>
      </main>
    );
  }