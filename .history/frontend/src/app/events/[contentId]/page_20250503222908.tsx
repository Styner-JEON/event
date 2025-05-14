import { fetchEvent } from "@/_libs/fetching";
import Image from "next/image";
import Link from 'next/link';

export default async function DetailPage(props: { params: Promise<{ contentId: string }> }) {
  const params = await props.params;
  const contentId = params.contentId;
  const event = await fetchEvent(contentId);  

  const raw = event.homepage || '';
  const hrefMatch = raw.match(/href="([^"]+)"/);
  const textMatch = raw.match(/>([^<]+)</);
  const href = hrefMatch ? hrefMatch[1] : raw;         
  const label = textMatch ? textMatch[1] : href;       

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
        {/* ... 다른 필드들 ... */}

        {/* Homepage */}
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

        <p>
          <strong>Modified Time:</strong>{' '}
          {new Date(event.modifiedTime).toLocaleString()}
        </p>
      </div>
    </main>
  );
}