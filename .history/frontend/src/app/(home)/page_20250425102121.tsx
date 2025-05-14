import Link from "next/link";
import { Event } from "../_types/event";
import Search from "./_component/search";
import EventCard from "./_component/event-card";
// import Cookies from "../_components/cookies";

export default async function Home() {  
  const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
  const events = await data.json()
  const eventCards = events.content.map((event: Event) => (
    <li key={event.contentId}><EventCard event={event}/>
      {/* <EventCard /> */}
    </li>
  ))

  return (
    <>
      {/* <input>input</input> */}
      {/* <Search placeholder="search"/> */}
      <main>
        <h1>home page</h1>
        {/* <ul>
          {events.content.map((event: Event) => (
            <li key={event.contentId}>{event.title}</li>
          ))}
        </ul> */}
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
    </>
  );
}