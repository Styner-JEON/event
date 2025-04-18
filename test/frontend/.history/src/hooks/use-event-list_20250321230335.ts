import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEventList() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_EVENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_EVENT_API_VERSION}`, 
    fetcher, 
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 1000 * 60 * 60 * 12  // 12시간
    }
  )
지금 이 숙ㅏ
  return {
    events: data?.content || [],
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
