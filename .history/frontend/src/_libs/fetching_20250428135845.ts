


export async function fetchEventList() {
  try {

    console.log('Fetching revenue data...');
    const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
    const eventList = await data.json()
    console.log('Data fetch completed after 3 seconds.');

    return eventList;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}