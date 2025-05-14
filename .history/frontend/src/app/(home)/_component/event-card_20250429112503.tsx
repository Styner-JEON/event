
import { EventList } from "@/app/_types/event-list";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ eventList }: { eventList: EventList }) {
  return (
    <Link href={`/events/${eventList.contentId}`} className="relative w-60 h-60">
      {eventList.firstImage && (
        <div className="relative w-60 h-40 ">
          <Image 
            src={eventList.firstImage}
            alt={eventList.title ?? "event image"}
            className="object-cover"
            fill
          />
        </div>
      )}
      <p>{eventList.title}</p>
      <p>{eventList.eventStartDate} ~ {eventList.eventEndDate}</p>
    </Link>
  )
}