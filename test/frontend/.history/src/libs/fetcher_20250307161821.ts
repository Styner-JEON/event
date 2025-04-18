

export async function fetcher(url: string) {
  // return await fetch(url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
  return res.json();
}

