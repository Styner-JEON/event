import Image from 'next/image';
import { Event } from "@/types/event";

export default function EventsPage({ event }: { event: Event }) {
  return (
    <article>
          <p>
            {event.firstImage && (
              <div>
                <Image 
                  src={event.firstImage}
                  alt={event.title ?? "event image"}
                  height={160} // h-40 (40 * 4)
                  width={240} // w-60 (60 * 4)
                  className='w-60 h-40'                  
                />
              </div>
            )}
          </p>
          <p>{event.title}</p>
          <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
    </article>
  );
}