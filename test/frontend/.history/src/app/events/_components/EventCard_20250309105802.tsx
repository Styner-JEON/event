import Image from 'next/image';
import { Event } from "@/types/event";

export default function EventsPage({ event }: { event: Event }) {
  return (
    <article>
          <p>
            {event.firstImage && (
              <div className="bg-purple-300 w-60 h-40 ">
                <Image 
                  src={event.firstImage}
                  alt={event.title ?? "event image"}
                  fill
                  className="object-cove"
                />
              </div>
            )}
          </p>
          <p>{event.title}</p>
          <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
    </article>
  );
}