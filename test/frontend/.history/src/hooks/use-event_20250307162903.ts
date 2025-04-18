import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEvent() {
  const { data, error, isLoading } = useSWR(`http://localhost:18080/api/v1/events/test`, fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return {
    events: data,
    isLoading,
    isError: error
  }
}
