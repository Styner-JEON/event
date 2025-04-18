import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEventList() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events`, 
    fetcher
  )
 
  // return {
  //   eventResponse: data,
  //   isLoading,
  //   isError: error
  // }
}
