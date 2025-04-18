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

   
  if (isLoading) return 
  if (isError) return <Error />

  
  return (
    <main>
      


    </main>
  );
}
