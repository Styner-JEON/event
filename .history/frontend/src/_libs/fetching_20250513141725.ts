interface Event {
  id: string;
  title: string;
  // ... existing code ...
}

interface EventList {
  events: Event[];
  // ... existing code ...
}

export async function fetchEventList(): Promise<EventList> {
  try {     
    const response = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();    
  } catch (error) {
    console.error('FetchingEventList Error:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to fetch eventList: ${error.message}`);
    }
    throw new Error('Failed to fetch eventList.');
  }
}

export async function fetchEvent(contentId: string): Promise<Event> {
  try {     
    const response = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}/${contentId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();    
  } catch (error) {
    console.error('FetchingEvent Error:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to fetch event: ${error.message}`);
    }
    throw new Error('Failed to fetch event.');
  }
}