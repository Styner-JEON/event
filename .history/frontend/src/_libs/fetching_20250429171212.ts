export async function fetchEventList() {
  try {     
    const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
    return await data.json()    
  } catch (error) {
    console.error('FetchingEventList Error:', error);
    throw new Error('Failed to fetch eventList.');
  }
}

export async function fetchEvent() {
  try {     
    const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
    return await data.json()    
  } catch (error) {
    console.error('FetchingEvent Error:', error);
    throw new Error('Failed to fetch event.');
  }
}