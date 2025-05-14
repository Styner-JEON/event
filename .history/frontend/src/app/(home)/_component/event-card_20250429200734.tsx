
import { EventList } from "@/app/_types/event-list";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }: { event: EventList }) {
  return (
    <Link href={`/events/${event.contentId}`} className="">
      {event.firstImage && (
        <div className="">
          <Image 
            src={event.firstImage}
            alt={event.title ?? "event image"}            
            // fill
            className="w-100 h-100 " 
          />
        </div>
      )}
      <p>{event.title}</p>
      <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
    </Link>
  )
}

// export default function EventCard({ event }: { event: EventList }) {
//   return (
//     <Link href={`/events/${event.contentId}`} className="relative w-60 h-60">
//       {event.firstImage && (
//         <div className="relative w-60 h-40 ">
//           <Image 
//             src={event.firstImage}
//             alt={event.title ?? "event image"}
//             className="object-cover"
//             fill
//           />
//         </div>
//       )}
//       <p>{event.title}</p>
//       <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
//     </Link>
//   )
// }