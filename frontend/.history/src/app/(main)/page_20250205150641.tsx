export default function MainPage() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <header className="basis-2/12 bg-red-300">header</header>
      <div></div>
      <aside className="hidden bg-green-300">left</aside>
      <main className="basis-8/12 bg-neutral-300">main</main>
      <aside className="hidden bg-yellow-300">right</aside>
      <footer className="basis-2/12 bg-blue-300">footer</footer>
    </div>
  );
}
