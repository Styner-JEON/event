'use client'

import { useEventList } from "@/hooks/use-event";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from 'next/image';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function EventsPage() {
  const { content, page, isError, isLoading } = useEventList();

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <main>      
      <h1>Events</h1>
      {content.map((event: { contentId: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; firstImage: string | StaticImport; firstImage2: string | StaticImport; }) => (
        <div key={event.contentId}>
          <h2>{event.title}</h2>
          <Image src={event.firstImage} alt={event.title} width={300} height={300} />
          <Image src={event.firstImage2} alt={event.title} width={300} height={300} />
        </div>
      ))}
    </main>
  );
}

// export default function EventsPage() {
//   const { eventResponse, isError, isLoading } = useEventList();

//   if (isError) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
  
//   return (
//     <main>      
//       <h1>Events</h1>
//       {eventResponse.contentId}    
//       <Image src={eventResponse.firstImage} alt={eventResponse.title} width={300} height={300} />
//       <Image src={eventResponse.firstImage2} alt={eventResponse.title} width={300} height={300} />
//     </main>
//   );
// }
