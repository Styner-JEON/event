import { fetcher } from "@/libs/fetcher";
import useSWR from "swr";

export function useEvent(contentId: string) {
  const { data, error, isLoading } = useSWR<Event>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/events/${contentId}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      
    }
  );

  return {
    event: data,
    isError: error,
    isLoading,
  };
}