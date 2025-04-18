

export default function EventsPage() {
  // const [page, setPage] = useState(0);
  // const { data, error, isLoading } = useSWR<Event>(
  //   `/api/v1/events?page=${page}&size=10`,
  //   fetcher
  // );

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  const { event, isLoading, isError } =

  return (
    <main>events page</main>
  );
}
