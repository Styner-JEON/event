import Link from "next/link";
import { Event } from "../_types/event";
// import Cookies from "../_components/cookies";


export default async function Home() {  
  const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
  const events = await data.json()

  return (
    <>
    'use client';
 
 import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
  
 export default function Search({ placeholder }: { placeholder: string }) {
   function handleSearch(term: string) {
     console.log(term);
   }
  
   return (
     <div className="relative flex flex-1 flex-shrink-0">
       <label htmlFor="search" className="sr-only">
         Search
       </label>
       <input
         className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
         placeholder={placeholder}
         onChange={(e) => {
           handleSearch(e.target.value);
         }}
       />
       <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
     </div>
   );
 }
    <main>
      <h1>home page</h1>
      <ul>
        {events.content.map((event: Event) => (
          <li key={event.contentId}>{event.title}</li>
        ))}
      </ul>
      {/* <ul className="grid grid-cols-4 gap-10">                  
        {eventCards}   
      </ul> */}
      <section> 
        <p>
          <button>
            <Link href="/login">Login button</Link>
          </button>
        </p>
        <p>
          <button>
            <Link href="/signup">Signup button</Link>
          </button>
        </p>         
        {/* <Cookies /> */}
      </section>      
    </main>
  );
}