'use client'

import { useEventList } from "@/hooks/use-event";
import { Event } from "@/types/event";
import EventCard from "./_components/EventCard";

export default function EventsPage() {
  const { events, page, isError, isLoading } = useEventList();

  if (isError) return <div>Error loading events. Please try again later.</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>            
      <div  className="grid grid-cols-4 gap-0.5">
      {events.map((event: Event) => (
        <div key={event.contentId}>
          <EventCard event={event} />
        </div>
      ))}
      </div>
    </main>
  );
}

