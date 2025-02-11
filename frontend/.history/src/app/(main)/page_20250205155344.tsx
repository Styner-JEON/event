export default function MainPage() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <header className="basis-2/12 bg-red-300">header</header>
      <div className="basis-8/12 lg:flex">
				<aside className="hidden bg-green-300 lg:block ">left</aside>
				<main className=" bg-neutral-300 h-full">main</main>
				<aside className="hidden bg-yellow-300 lg:block">right</aside>
      </div>
      <footer className="basis-2/12 bg-blue-300">footer</footer>
    </div>
  );
}
