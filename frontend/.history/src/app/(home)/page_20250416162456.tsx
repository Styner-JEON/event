import Link from "next/link";
import Cookies from "../_components/cookies";


export default function Home() {
  console.log('haha server now: ', new Date());

  return (
    <main>
      <h1>home page</h1>
      <section> 
        <p>
        <button>
          <Link href="/login">Login</Link>
        </button>
        </p>         
        <button>
          <Link href="/signup">Sign Up</Link>
        </button>
        {/* <Cookies /> */}
      </section>      
    </main>
  );
}