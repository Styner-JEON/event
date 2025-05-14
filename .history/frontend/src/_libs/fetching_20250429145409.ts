export async function fetchEventList() {
  try {    
    throw new Error('Failed to fetch eventList. 1');
    const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
    return await data.json()    
  } catch (error) {
    console.error('FetchingEventList Error:', error);
    throw new Error('Failed to fetch eventList.');
  }
}