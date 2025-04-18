'use client'

import { useEvent } from "@/hooks/use-event";

export default function EventsPage() {
  const { events, isLoading, isError } = useEvent();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      {events.map((event: Event) => (
      <div key={event.contentId}>
        <h2>{event.contentId}</h2>
        <p>{event.title}</p>
      </div>
      ))}
    </main>
  );
}
