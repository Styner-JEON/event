import Link from "next/link";
import Search from "./_component/search";
import EventCard from "./_component/event-card";
import { fetchEventList } from "@/_libs/fetching";
import { EventList } from "../_types/event-list";

export default async function Home() {  
  const eventList = await fetchEventList();

  // const eventCards = events.content.map((event: Event) => (
    // <li key={event.contentId}><EventCard event={event}/>
    //   {/* <EventCard /> */}
    // </li>
  // ))

  return (
    <>
      <input />
      {/* <Search placeholder="search"/> */}
      <main>
        <h1>home page</h1>
        <nav>
          <ul>
            {eventList.content.map((eventList: EventList) => (
              <li key={eventList.contentId}>
                <EventCard eventList={eventList}/>                
              </li>
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