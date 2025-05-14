export async function sendRequest(
  url: string,
  { arg }: { arg: { contentId: number; content: string; } }
) {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    throw new Error('댓글 작성 실패');
  }
  return res.json();
}