
async function fetchCo(
  url: string,
  { arg }: { arg: { contentId: number; content: string; } }
) {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json', // 반드시 추가!
    },
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    throw new Error('댓글 작성 실패');
  }
  return res.json();
}

export async function fetchEventList() {
  try {     
    const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}`,)
    return await data.json()    
  } catch (error) {
    console.error('FetchingEventList Error:', error);
    throw new Error('Failed to fetch eventList.');
  }
}

export async function fetchEvent(contentId: string) {
  try {     
    const data = await fetch(`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/events/${process.env.NEXT_PUBLIC_CONTENT_API_VERSION}/${contentId}`,)    
    return await data.json()    
  } catch (error) {
    console.error('FetchingEvent Error:', error);
    throw new Error('Failed to fetch event.');
  }
}