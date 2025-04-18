export async function fetcher(url: string) {  
  const res = await fetch(url);
  console.log(res);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
  return res.json();
}

