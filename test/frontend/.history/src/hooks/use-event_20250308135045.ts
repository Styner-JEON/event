import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEventList() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events`, 
    fetcher
  )
 
  return {
    eventResponse: data.content,
    pagination: {
      pageable: data.pageable, 
      last: data.last,
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      first: data.first,
      size: data.size,
      number: data.number,
      sort: data.sort,
      numberOfElements: data.numberOfElements,
      empty: data.empty,
    },
  };
}


// export function useEventList() {
//   const { data, error, isLoading } = useSWR(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events/test`, 
//     fetcher
//   )
 
//   return {
//     eventResponse: data,
//     isError: error,
//     isLoading    
//   }
// }
