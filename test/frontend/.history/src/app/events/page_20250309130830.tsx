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
      {events.map((event: Event) => (
        <div key={event.contentId} className="">
          <EventCard event={event} />
        </div>
      ))}
    </main>
  );
}

