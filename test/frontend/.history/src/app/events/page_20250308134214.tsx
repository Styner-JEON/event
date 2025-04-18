'use client'

import { useEventList } from "@/hooks/use-event";
import Image from 'next/image';

export default function EventsPage() {
  const { eventResponse, isError, isLoading } = useEventList();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      {eventResponse.contentId}    
      <Image src={eventResponse.firstImage} alt={eventResponse.title} width={300} height={300} />
      <Image src={eventResponse.firstImage2} alt={eventResponse.title} width={300} height={300} />
    </main>
  );
}
