import { fetcher } from "@/libs/fetcher";
import { Event } from "@/types/event";
import useSWR from "swr";

export function useEvent(contentId: number) {
  const shouldFetch = contentId > 0; // 유효한 경우만 fetch

  const { data, error, isLoading } = useSWR<Event>(
  shouldFetch
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/events/${contentId}`
      : null, // shouldFetch가 false면 요청 안 함
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