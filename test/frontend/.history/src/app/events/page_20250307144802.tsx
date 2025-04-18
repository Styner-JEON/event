import { useEvent } from "@/hooks/use-event";


export default function EventsPage() {
  // const [page, setPage] = useState(0);
  // const { data, error, isLoading } = useSWR<Event>(
  //   `/api/v1/events?page=${page}&size=10`,
  //   fetcher
  // );

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  const { events, isLoading, isError } = useEvent();

   
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError.message}</p>;

  
  return (
    <main>      
      <h1>Events</h1>
      <p>{events.</p>
    </main>
  );
}
