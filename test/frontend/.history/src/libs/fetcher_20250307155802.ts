
export async function fetcher(url: string) {
  const res = await fetch(...args);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

