
export default function DetailPage({ params }: { params: { content_id: string }) {
  const { content_id } = params;
  const { event, isError, isLoading } = useEvent(content_id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading event details.</div>;
  if (!event) return <div>Event not found.</div>;

  return (
    <div>
      <h1>{event.title}</h1>
      {event.firstImage && (
        <Image
          src={event.firstImage}
          alt={event.title ?? "event image"}
          width={600}
          height={400}
          className="object-cover"
        />
      )}
      <p><strong>Address:</strong> {event.addr1} {event.addr2}</p>
      <p><strong>Area:</strong> {event.area}</p>
      <p><strong>Start Date:</strong> {event.eventStartDate}</p>
      <p><strong>End Date:</strong> {event.eventEndDate}</p>
      <p><strong>Overview:</strong> {event.overview}</p>
      {/* 필요에 따라 추가 필드 렌더링 */}
    </div>
  );
}