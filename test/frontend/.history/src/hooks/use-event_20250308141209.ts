import { fetcher } from "@/libs/fetcher"
import useSWR from "swr"

export function useEventList() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events`, 
    fetcher
  )

  return {
    content: data?.content || [],
    page: {
      pageable: data?.pageable,
      last: data?.last || false,
      totalPages: data?.totalPages || 0,
      totalElements: data?.totalElements || 0,
      first: data?.first || false,
      size: data?.size || 0,
      number: data?.number || 0,
      sort: data?.sort || {},
      numberOfElements: data?.numberOfElements || 0,
      empty: data?.empty || true,
    },
    isError: error,
    isLoading    
  };
  // return {
  //   content: data.content,
  //   page: {
  //     pageable: data.pageable, 
  //     last: data.last,
  //     totalPages: data.totalPages,
  //     totalElements: data.totalElements,
  //     first: data.first,
  //     size: data.size,
  //     number: data.number,
  //     sort: data.sort,
  //     numberOfElements: data.numberOfElements,
  //     empty: data.empty,
  //   },
  //   isError: error,
  //   isLoading    
  // };
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
