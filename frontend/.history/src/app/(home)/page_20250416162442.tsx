import Link from "next/link";
import Cookies from "../_components/cookies";


export default function Home() {
  console.log('haha server now: ', new Date());

  return (
    <main>
      <h1>home page</h1>
      <section>          
        <button>
          <Link href="/login">Login</Link>
        </button>
        <p>
          <Link href="/signup">Sign Up</Link>
        </p>
        {/* <Cookies /> */}
      </section>      
    </main>
  );
}