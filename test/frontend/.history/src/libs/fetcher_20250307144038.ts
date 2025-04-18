
export function fetcher(...args: Parameters<typeof fetch>) {
  return fetch(...args).then(res => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  });
}

