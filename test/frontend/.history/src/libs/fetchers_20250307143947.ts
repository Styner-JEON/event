
export function fetcher(...args) {
fetch(...args).then(res => res.json())
}

