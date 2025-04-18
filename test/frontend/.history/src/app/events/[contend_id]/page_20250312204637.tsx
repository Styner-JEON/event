'use client'

import { useEvent } from "@/hooks/use-event";
import { useParams } from "next/navigation";

// export default function DetailPage({ contentId }: { contentId: string }) {
// export default function DetailPage({ params }: { params: { contentId: string } }) {
  // const contentId = params.contentId;
  // console.log("contentId 값:", contentId);
  // console.log("contentId 타입:", typeof contentId);


// export default function DetailPage() {
//   const { contentId } = useParams();

//   console.log("contentId 값:", contentId);
//   console.log("contentId 타입:", typeof contentId); 

//   const { event, isError, isLoading } = useEvent(Number(contentId));


export default function DetailPage({ params }: { params: { contentId: string } }) {
  console.log("params 전체:", params); // params 객체 전체 출력
  const contentId = params?.contentId; // params가 undefined일 경우를 대비
  console.log("contentId 값:", contentId);
  console.log("contentId 타입:", typeof contentId);

  if (!contentId) {
    return <div>contentId가 정의되지 않았습니다.</div>;
  }

  const parsedContentId = Number(contentId);
  if (isNaN(parsedContentId)) {
    return <div>Invalid event ID</div>;
  }

  const { event, isError, isLoading } = useEvent(parsedContentId);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading event details.</div>;
  if (!event) return <div>Event not found.</div>;

  return (
    <main>
      <h1>{event.title}</h1>
      <p><strong>Address:</strong> {event.addr1} {event.addr2}</p>
      {/* <p><strong>Area:</strong> {event.area}</p>
      <p><strong>Start Date:</strong> {event.eventStartDate}</p>
      <p><strong>End Date:</strong> {event.eventEndDate}</p>
      <p><strong>Overview:</strong> {event.overview}</p> */}
    </main>
  );
}