import Link from "next/link";

export default function EventCard() {
  return (
    <Link href={`/events/${event.contentId}`} className="relative w-60 h-60">
    {event.firstImage && (
      <p className="relative w-60 h-40 ">
        <Image 
          src={event.firstImage}
          alt={event.title ?? "event image"}
          className="object-cover"
          fill
        />
      </p>
    )}
    <p>{event.title}</p>
    <p>{event.eventStartDate} ~ {event.eventEndDate}</p>
  </Link>
  )
}