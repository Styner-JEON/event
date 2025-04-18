import Image from 'next/image';
import { Event } from "@/types/event";

export default function EventsPage({ event }: { event: Event }) {
  return (
    <article>
          <p>
            {event.firstImage && (
              <div className=relative w-[250px] h-[150px] ">
                <Image 
                  className="object-cove"
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