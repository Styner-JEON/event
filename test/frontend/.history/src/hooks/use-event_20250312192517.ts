import { fetcher } from "@/libs/fetcher";
import { Event } from "@/types/event";
import useSWR from "swr";

export function useEvent(contentId: number) {
  const { data, error, isLoading } = useSWR<Event>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/events/${contentId}`,
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}
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