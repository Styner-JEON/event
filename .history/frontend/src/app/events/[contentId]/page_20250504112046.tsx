import { fetchEvent } from "@/_libs/fetching";
import Image from "next/image";
import Link from 'next/link';
import TextareaClient from "./_component/textarea-client";

export default async function DetailPage(props: { params: Promise<{ contentId: string }> }) {
  const params = await props.params;
  const contentId = params.contentId;
  const event = await fetchEvent(contentId);

  // Overview에 있는 <br>들을 \n로 변경
  const overviewText = event.overview?.replace(/<br\s*\/?>/gi, '\n') ?? '';

  // Homepage에 있는 <a>를 <Link>로 변경
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
        <strong>Overview:</strong> 
        <div className="mt-2 whitespace-pre-wrap">{overviewText}</div>
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
      <TextareaClient />
    </main>
  );
}
