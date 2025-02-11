export default function MainPage() {
  return (
    <div className="flex h-[100dvh]">
      <header className="bg-red-300">header</header>
      <aside className="hidden bg-green-300">left</aside>
      <main className="bg-neutral-300">main</main>
      <aside className="hidden bg-yellow-300">right</aside>
      <footer className="bg-blue-300">footer</footer>
    </div>
  );
}
