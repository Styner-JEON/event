'use client'

import { useEventList } from "@/hooks/use-event";
import { EventResponse, TestResponse } from "@/types/event";

export default function EventsPage() {
  const { eventResponse, isLoading, isError } = useEventList();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      {eventResponse.contentId}
      {eventResponse.title}
    </main>
  );
}
