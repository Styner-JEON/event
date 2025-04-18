import { fetcher } from "@/libs/fetcher"
import { EventResponse } from "@/types/event"
import useSWR from "swr"

export function useEventList() {
  const { data, error, isLoading } = useSWR<Page<EventResponse>>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events`, 
    fetcher
  )
 
  return {
    eventResponse: data,
    isError: error,
    isLoading    
  }
}
