'use client'

import { useEvent } from "@/hooks/use-event";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";


interface Params {
  contentId: string;
}

interface DetailPageProps {
  params: Promise<Params>;
}

// export default function DetailPage({ contentId }: { contentId: string }) {
// export default function DetailPage({ params }: { params: { contentId: string } }) {
export default function DetailPage({ params }: DetailPageProps) {
  const resolvedParams = use(params);
  const router = useRouter(); 
  const contentId = resolvedParams.contentId;

  const { event, isError, isLoading } = useEvent(Number(contentId));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading event details.</div>;
  if (!event) return <div>Event not found.</div>;

  return (
    <main>
      <button 
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-gray-200 rounded-md"
      >
        ← Back
      </button>
      <h1>{event.title}</h1>
      {event.firstImage && (
        <Image
          src={event.firstImage}
          alt={event.title ?? "event image"}
          width={600}
          height={400}
        />
      )}
      <p><strong>Address:</strong> {event.addr1} {event.addr2}</p>
      <p><strong>Area:</strong> {event.area}</p>
      <p><strong>Start Date:</strong> {event.eventStartDate}</p>
      <p><strong>End Date:</strong> {event.eventEndDate}</p>
      <p><strong>Overview:</strong> {event.overview}</p>
      <p><strong>Homepage:</strong> {event.homepage}</p>
      <p><s</p>
    </main>
  );
}