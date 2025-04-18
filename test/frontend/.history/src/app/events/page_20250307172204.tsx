'use client'

import { useEvent } from "@/hooks/use-event";

export default function EventsPage() {
  const { events, isLoading, isError } = useEvent();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      {events.map((event?) => (
        <div key={event.cont}>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </main>
  );
}
