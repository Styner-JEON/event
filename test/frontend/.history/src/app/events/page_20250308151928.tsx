'use client'

import { useEventList } from "@/hooks/use-event";
import { EventResponse } from "@/types/event";
import Image from 'next/image';

export default function EventsPage() {
  const { content, page, isError, isLoading } = useEventList();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>            
      {content.map((event: EventResponse) => (
        <div key={event.contentId}>
          <p>{event.firstImage && <Image src={event.firstImage} alt={event.title} width={250} height={150} />}</p>
          <h1>{event.title}</h1>
          <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
        </div>
      ))}
    </main>
  );
}

import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEventList() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events`, 
    fetcher
  )

  return {
    content: data?.content || [],
    page: {
      pageable: data?.pageable || {},
      last: data?.last || false,
      totalPages: data?.totalPages || 0,
      totalElements: data?.totalElements || 0,
      first: data?.first || true,
      size: data?.size || 0,
      number: data?.number || 0,
      sort: data?.sort || {},
      numberOfElements: data?.numberOfElements || 0,
      empty: data?.empty || false,
    },
    isError: error,
    isLoading    
  };
}
