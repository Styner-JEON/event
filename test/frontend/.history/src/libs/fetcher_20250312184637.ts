export async function fetcher(url: string) {  
  const res = await fetch(url);
  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Fetch error (${res.status}): ${errorBody}`);
  }
  return res.json();
}

  