import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEvent() {
  const { data, error, isLoading } = useSWR<Event>(`http://localhost:18080/api/v1/events/test`, fetcher)
 
  return {
    events: data ?? null, // 기본값을 `null`로 설정
    isLoading,
    isError: error
  }
}
