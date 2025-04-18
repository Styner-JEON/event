import Link from "next/link";
import Cookies from "../_components/cookies";


export default function Home() {  

  return (
    <main>
      <h1>home page</h1>
      <section> 
        <p>
          <button>
            <Link href="/login">Login button</Link>
          </button>
        </p>
        <p>
          <button>
            <Link href="/signup">Signup button</Link>
          </button>
        </p>         
        {/* <Cookies /> */}
      </section>      
    </main>
  );
}