import Link from "next/link";
// import Cookies from "../_components/cookies";


export default async function Home() {  
  // const data = await fetch('https://api.vercel.app/blog')
  // const posts = await data.json()

  // if (isError) return <div>Error loading events. Please try again later.</div>
  // if (isLoading) return <div>loading...</div>

  // const eventCards = events.map((event: Event) => (
  //   <li key={event.contentId}>
  //     <EventCard event={event} />
  //   </li>
  // ));

  return (
    <main>
      <h1>home page</h1>
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