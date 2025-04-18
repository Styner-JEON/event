import { fetcher } from "@/libs/fetcher";
import { Event } from "@/types/event";
import useSWR from "swr";

export function useEvent(contentId: number) {
  const { data, error, isLoading } = useSWR<Event>(
    `${process.env.NEXT_PUBLIC_EVENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_EVENT_API_VERSION}/${contentId}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 1000 * 60 * 60 * 12  // 12시간
    }
  );

  return {
    event: data,
    isError: error,
    isLoading,
  };
}