
export default function MainPage() {
	return (
		<div className="h-[100dvh] flex flex-col">
			<header className="bg-red-300 basis-2/12">
				header
			</header>
			{/* <div className="basis-8/12"> */}
				<aside className="bg-green-300 hidden">
					left
				</aside>
				<main className="bg-neutral-300">
					main
				</main>
				<aside className="bg-yellow-300 hidden">
					right
				</aside>
			</div>
			<footer className="bg-blue-300 basis-2/12">
				footer
			</footer>
		</div>
	);
}