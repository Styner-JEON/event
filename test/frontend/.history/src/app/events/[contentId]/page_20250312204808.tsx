'use client'

import { useEvent } from "@/hooks/use-event";
import { useParams } from "next/navigation";

// export default function DetailPage({ contentId }: { contentId: string }) {
export default function DetailPage({ params }: { params: { contentId: string } }) {


  const { event, isError, isLoading } = useEvent(Number(contentId));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading event details.</div>;
  if (!event) return <div>Event not found.</div>;

  return (
    <main>
      <h1>{event.title}</h1>
      <p><strong>Address:</strong> {event.addr1} {event.addr2}</p>
      {/* <p><strong>Area:</strong> {event.area}</p>
      <p><strong>Start Date:</strong> {event.eventStartDate}</p>
      <p><strong>End Date:</strong> {event.eventEndDate}</p>
      <p><strong>Overview:</strong> {event.overview}</p> */}
    </main>
  );
}