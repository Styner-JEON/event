import Image from 'next/image';
import { Event } from "@/types/event";

export default function EventsPage({ event }: { event: Event }) {
  return (
    <article className="grid grid-cols-4 gap-4">
          <p>
            {event.firstImage && (
              <div className="relative w-60 h-40 ">
                <Image 
                  className="object-cover"
                  fill
                  src={event.firstImage}
                  alt={event.title ?? "event image"}
                />
              </div>
            )}
          </p>
          <p>{event.title}</p>
          <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
    </article>
  );
}