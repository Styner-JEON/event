'use client'

import { useEventList } from "@/hooks/use-event";

export default function EventsPage() {
  const { eventResponse, isError, isLoading } = useEventList();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      {eventResponse.contentId}
      {eventResponse.title}
      <Img
    </main>
  );
}
