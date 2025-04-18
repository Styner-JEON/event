'use client'

import { useEventList } from "@/hooks/use-event";
import { EventResponse } from "@/types/event";
import Image from 'next/image';

export default function EventsPage() {
  const { content, page, isError, isLoading } = useEventList();

  if (isError) return <div>Error loading events. Please try again later.</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>            
      {content.map((event: EventResponse) => (
        <div key={event.contentId}>
          <p>
            {event.firstImage 
              && 
            <Image src={event.firstImage} alt={event.title ?? "Event Image"} width={250} height={150} />}</p>
          <p>{event.title}</p>
          <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
        </div>
      ))}
    </main>
  );
}

