import { fetcher } from "@/libs/fetcher";
import { Event } from "@/types/event";
import useSWR from "swr";

export function useEvent(contentId: string) {
  const { data, error, isLoading } = useSWR<Event>(
    `${process.env.BASE_URL}/api/${API_VERSION}/events/${contentId}`,
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