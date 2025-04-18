import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEvent() {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events/test`, fetcher)
 
  return {
    events: data,
    isLoading,
    isError: error
  }
}
