
import { EventList } from "@/app/_types/event-list";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }: { event: EventList }) {
  return (
    <Link href={`/events/${event.contentId}`} className="block w-60">
      <p className="relative w-60 h-40">
        {event.firstImage && (
          <Image 
            src={event.firstImage}
            alt={event.title}        
            fill={true}
            className="object-cover"
          />
        )}
      </p>
      <p>{event.title}</p>
      <p>{event.eventStartDate} ~ {event.eventEndDate}</p>      
    </Link>
  )
}
