export default function MainPage() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <header className="basis-1/5 bg-red-300">header</header>
      <aside className="hidden bg-green-300">left</aside>
      <main className="basis-/10 bg-neutral-300">main</main>
      <aside className="hidden bg-yellow-300">right</aside>
      <footer className="basis-1/10 bg-blue-300">footer</footer>
    </div>
  );
}
