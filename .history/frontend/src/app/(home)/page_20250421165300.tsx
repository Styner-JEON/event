import Link from "next/link";
import { Event } from "../_types/event";
// import Cookies from "../_components/cookies";


export default async function Home() {  
  const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}/login`,)
  co

  return (
    <main>
      <h1>home page</h1>
      <ul>
        {posts.map((post: Event) => (
          <li key={post.contentId}>{post.title}</li>
        ))}
      </ul>
      {/* <ul className="grid grid-cols-4 gap-10">                  
        {eventCards}   
      </ul> */}
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