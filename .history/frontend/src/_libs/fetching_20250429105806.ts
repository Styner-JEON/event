export async function fetchEventList() {
  try {    
    const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
    return await data.json()    
  } catch (error) {
    console.error('Fetching EventList error:', error);
    throw new Error('Failed to fetch eventList.');
  }
}