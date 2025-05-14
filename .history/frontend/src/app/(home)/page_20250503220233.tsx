import Link from "next/link";
import EventCard from "./_component/event-card";
import { fetchEventList } from "@/_libs/fetching";
import { EventList } from "../_types/event-list";
import EventPagination from "./_component/event-pagination";
import Greeting from "./_component/greeting";

export default async function Home() {  
  const eventList = await fetchEventList();

  return (
    <>      
      {/* <Search placeholder="search"/> */}
      <Greeting />
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
      </main>
    </>
  );
}