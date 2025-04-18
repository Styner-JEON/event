import Image from 'next/image';
import { Event } from "@/types/event";

export default function EventsPage({ event }: { event: Event }) {
  return (
    <article>
          <p>
            {event.firstImage && (
              <div className="relative w-40 h-40">
                <Image
                  className="object-cover"
                  fill
                  src={event.firstImage}
                  alt={event.title ?? "event image"}
                  height={160}
                  width={240}                  
                />
              </div>
            )}
          </p>
          <p>{event.title}</p>
          <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
    </article>
  );
}