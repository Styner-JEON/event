export const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};


export function fetcher(...args) {

}


const fetcher = (...args) => fetch(...args).then(res => res.json())