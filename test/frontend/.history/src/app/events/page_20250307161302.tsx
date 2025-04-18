import { useEvent } from "@/hooks/use-event";

export default function EventsPage() {
  const { events, isLoading, isError } = useEvent();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError?.message || "An unknown error occurred"}</p>
  
  return (
    <main>      
      <h1>Events</h1>
      {events?.contentId}
      {events?.title}
    </main>
  );
}
