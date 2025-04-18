import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEvent() {
  const { data, error, isLoading } = useSWR(`/api/v1/events/test`, fetcher)
 
  return {
    events: data,
    isLoading,
    isError: error
  }
}
