import { fetchEvent } from '@/_libs/fetching';
import Image from 'next/image';
import Link from 'next/link';

interface DetailPageProps {
  params: { contentId: string };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const event = await fetchEvent(params.contentId);

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">{event.title}</h1>

      {event.firstImage && (
        <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden">
          <Image
            src={event.firstImage}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="space-y-2">
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
            href={event.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {event.homepage.replace(/^https?:\/\//, '')}
          </Link>
        </p>
        <p>
          <strong>Modified Time:</strong>{' '}
          {new Date(event.modifiedTime).toLocaleString()}
        </p>
      </div>
    </main>
  );
}