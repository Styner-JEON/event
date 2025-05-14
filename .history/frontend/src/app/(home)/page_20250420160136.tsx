import Link from "next/link";
import Cookies from "../_components/cookies";


export default function Home() {  

  return (
    <main>
      <h1>home page</h1>
      const eventCards = events.map((event: Event) => (
    <li key={event.contentId}>
      <EventCard event={event} />
    </li>
  ));
  
  return (
    <main>
      <ul className="grid grid-cols-4 gap-10">                  
        {eventCards}   
      </ul>
    </main>
  );
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