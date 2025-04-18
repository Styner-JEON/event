import Image from 'next/image';
import { Event } from "@/types/event";
import Link from 'next/link';

export default function EventsPage({ event }: { event: Event }) {
  return (
    <Link href={`/events/${event.contentId}`} className="relative w-60 h-60">
      <p>
        {event.firstImage && (
          <div className="relative w-60 h-40 ">
            <Image 
              src={event.firstImage}
              alt={event.title ?? "event image"}
              className="object-cover"
              fill
            />
          </div>
        )}
      </p>
      <p>{event.title}</p>
      <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
    </Link>
  );
}