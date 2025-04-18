import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEvent() {
  const { data, error, isLoading } = useSWR(`/api/user/${contentId}`, fetcher)
 
  return {
    event: data,
    isLoading,
    isError: error
  }
}
