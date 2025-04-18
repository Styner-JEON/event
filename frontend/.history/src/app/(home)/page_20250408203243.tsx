import Link from "next/link";
import Cookies from "../_components/cookies";
import Test from "./_components/test";

export default async function Home() {
  return (
    <main>
      <h1>home page</h1>
      <section>          
        <p>
          <Link href="/login">Login</Link>
        </p>
        <p>
          <Link href="/signup">Sign Up</Link>
        </p>
        {/* <Cookies /> */}
      </section>
      <Test />
    </main>
  );
}