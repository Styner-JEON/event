
export default function MainPage() {
	return (
		<div className="h-[100dvh] flex flex-col">
			<header className="bg-red-300 basis-2/12">
				header
			</header>
			<div>
			<aside className="bg-green-300 hidden">
				left
			</aside>
			<main className="bg-neutral-300 basis-8/12">
				main
			</main>
			<aside className="bg-yellow-300 hidden">
				right
			</aside>
			<footer className="bg-blue-300 basis-2/12">
				footer
			</footer>
		</div>
	);
}