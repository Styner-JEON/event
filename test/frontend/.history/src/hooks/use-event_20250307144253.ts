
export function useEvent(id) {
  const res = await fetch(...args);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}
