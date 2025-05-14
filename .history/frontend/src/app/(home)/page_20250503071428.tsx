import Link from "next/link";
import EventCard from "./_component/event-card";
import { fetchEventList } from "@/_libs/fetching";
import { EventList } from "../_types/event-list";
import EventPagination from "./_component/event-pagination";

export default async function Home() {  
  const eventList = await fetchEventList();

  return (
    <>      
      {/* <Search placeholder="search"/> */}
      <main>
        <h1>home page</h1>
        <nav>
          <ul className="grid grid-cols-4 gap-10">
            {eventList.content.map((event: EventList) => (
              <li key={event.contentId}>                
                <EventCard event={event}/>                
              </li>
            ))}
          </ul>
        </nav>
        <EventPagination />
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