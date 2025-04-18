'use client'

import { useEventList } from "@/hooks/use-event";
import { EventResponse } from "@/types/event";
import Image from 'next/image';

export default function EventsPage() {
  const { content, page, isError, isLoading } = useEventList();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      {content.map((event: EventResponse) => (
        <div key={event.contentId}>
          <p>{event.title}</p>
          <p>{event.eventStartDate}</p>
          <p>{event.e}</p>
          <p>{event.firstImage && <Image src={event.firstImage} alt={event.title} width={250} height={150} />}</p>
        </div>
      ))}
    </main>
  );
}

// export default function EventsPage() {
//   const { eventResponse, isError, isLoading } = useEventList();

//   if (isError) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
  
//   return (
//     <main>      
//       <h1>Events</h1>
//       {eventResponse.contentId}    
//       <Image src={eventResponse.firstImage} alt={eventResponse.title} width={300} height={300} />
//       <Image src={eventResponse.firstImage2} alt={eventResponse.title} width={300} height={300} />
//     </main>
//   );
// }
