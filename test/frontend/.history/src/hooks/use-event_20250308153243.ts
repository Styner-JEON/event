import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEventList() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events`, 
    fetcher,
    {
      revalidateIfStale: t,
      revalidateOnFocus: false,
      revalidateOnReconnect: true
    }

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
