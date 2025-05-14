import Link from "next/link";
import EventCard from "./_component/event-card";
import { fetchEventList } from "@/_libs/fetching";
import { EventList } from "../_types/event-list";

export default async function Home() {  
  const eventList = await fetchEventList();

  return (
    <>
      <input />
      {/* <Search placeholder="search"/> */}
      <main>
        <h1>home page</h1>
        <nav>
          <ul>
            {eventList.content.map((event: EventList) => (
    
              <EventCard event={event} />
            ))}
          </ul>
        </nav>
        {/* <ul className="grid grid-cols-4 gap-10">                  
          {eventCards}   
        </ul> */}
        <section> 
          <p>            
            <Link href="/login">Login button</Link>            
          </p>
          <p>            
            <Link href="/signup">Signup button</Link>            
          </p>         
          {/* <Cookies /> */}
        </section>      
      </main>
    </>
  );
}