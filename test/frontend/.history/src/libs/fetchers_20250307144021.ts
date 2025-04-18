
export function fetcher(...args) {
  return fetch(...args).then(res => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  });
}

