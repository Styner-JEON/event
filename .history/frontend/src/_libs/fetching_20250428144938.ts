


export async function fetchEventList() {
  try {
    console.log('Fetching revenue data...');
    const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
    return await data.json()
    return eventList;
  } catch (error) {
    console.error('fetchEventList error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}