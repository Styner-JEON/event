export default function EventsPage() {
  return (
    <article>
          <p>
            {event.firstImage && (
              <div className="relative w-[250px] h-[150px]">
                <Image 
                  src={event.firstImage}
                  alt={event.title ?? "Event Image"}
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