'use client'

import { useEvent } from "@/hooks/use-event";

export default function EventsPage() {
  const { events, isLoading, isError } = useEvent();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      <p>{events?.contentId}</p>
      <p>{events?.title}</p>
      <ㅔ
    </main>
  );
}
