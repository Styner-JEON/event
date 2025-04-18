'use client'

import { useEventList } from "@/hooks/use-event";
import { EventResponse } from "@/types/event";

export default function EventsPage() {
  const { eventResponse, isLoading, isError } = useEventList();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      {eventResponse.map((event: EventResponse) => (
        <div key={event.contentId}>
          <h2>{event.contentId}</h2>
          <p>{event.title}</p>
        </div>
      ))}
    </main>
  );
}
