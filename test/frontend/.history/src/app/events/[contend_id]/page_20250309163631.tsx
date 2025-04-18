

import { useEvent } from "@/hooks/use-event";

export default function DetailPage({ params }: { params: { content_id: string }) {
  const { content_id } = params;
  const { event, isError, isLoading } = useEvent(content_id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading event details.</div>;
  if (!event) return <div>Event not found.</div>;

  return (
    <main>
      <h1>{event.title}</h1>
      <p><strong>Address:</strong> {event.addr1} {event.addr2}</p>
      <p><strong>Area:</strong> {event.area}</p>
      <p><strong>Start Date:</strong> {event.eventStartDate}</p>
      <p><strong>End Date:</strong> {event.eventEndDate}</p>
      <p><strong>Overview:</strong> {event.overview}</p>
    </main>
  );
}