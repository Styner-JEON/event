import { fetchEvent } from "@/_libs/fetching";
import Image from "next/image";
import Link from 'next/link';

export default async function DetailPage(props: { params: Promise<{ contentId: string }> }) {
  const params = await props.params;
  const contentId = params.contentId;
  const event = await fetchEvent(contentId);

  const overviewText = event.overview?.replace(/<br\s*\/?>/gi, '\n') ?? '';

  const raw = event.homepage || '';
  const hrefMatch = raw.match(/href="([^"]+)"/);
  const textMatch = raw.match(/>([^<]+)</);
  const href = hrefMatch ? hrefMatch[1] : raw;  
  const label = textMatch ? textMatch[1] : href;

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{event.title}</h1>

      <p className="relative w-150 h-100">
        {event.firstImage && (
          <Image
            src={event.firstImage}
            alt={event.title}
            fill
            className="object-cover rounded-md"
          />
        )}
      </p>

      <p>
        <strong>Address:</strong> {event.addr1} {event.addr2}
      </p>
      <p>
        <strong>Area:</strong> {event.area}
      </p>
      <p>
        <strong>Start Date:</strong> {event.eventStartDate}
      </p>
      <p>
        <strong>End Date:</strong> {event.eventEndDate}
      </p>
      <p>
        <strong>Overview:</strong> {event.overview}
      </p>

      <p>
        <strong>Homepage:</strong>{' '}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {label}
        </Link>
      </p>
    </main>
  );
}


// 'use client'

// import { useEvent } from "@/hooks/use-event";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { use } from "react";


// interface Params {
//   contentId: string;
// }

// interface DetailPageProps {
//   params: Promise<Params>;
// }

// // export default function DetailPage({ contentId }: { contentId: string }) {
// // export default function DetailPage({ params }: { params: { contentId: string } }) {
// export default function DetailPage({ params }: DetailPageProps) {
//   const resolvedParams = use(params);
//   const router = useRouter(); 
//   const contentId = resolvedParams.contentId;

//   const { event, isError, isLoading } = useEvent(Number(contentId));

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error loading event details.</div>;
//   if (!event) return <div>Event not found.</div>;

//   return (
    // <main>
    //   <button 
    //     onClick={() => router.back()}
    //     className="mb-4 px-4 py-2 bg-gray-200 rounded-md"
    //   >
    //     ← Back
    //   </button>
    //   <h1>{event.title}</h1>
    //   {event.firstImage && (
    //     <Image
    //       src={event.firstImage}
    //       alt={event.title ?? "event image"}
    //       width={600}
    //       height={400}
    //     />
    //   )}
    //   <p><strong>Address:</strong> {event.addr1} {event.addr2}</p>
    //   <p><strong>Area:</strong> {event.area}</p>
    //   <p><strong>Start Date:</strong> {event.eventStartDate}</p>
    //   <p><strong>End Date:</strong> {event.eventEndDate}</p>
    //   <p><strong>Overview:</strong> {event.overview}</p>
    //   <p><strong>Homepage:</strong> {event.homepage}</p>
    //   <p><strong>ModifiedTime:</strong> {event.modifiedTime}</p>
    // </main>
//   );
// }