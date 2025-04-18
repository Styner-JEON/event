import Image from 'next/image';
import { Event } from "@/types/event";

export default function EventsPage({ event }: { event: Event }) {
  return (
    <article>
          <p>
            {event.firstImage && (
              <div className="relative w-[250px] h-[150px]">
                <Image 
                  src={event.firstImage}
                  alt={event.title ?? "an event image"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </p>
          <p>{event.title}</p>
          <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
    </article>
  );
}