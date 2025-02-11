export default function MainPage() {
  return (
    <div className="flex flex-col">
      <header className="basis-1/ bg-blue-400">header</header>

      <aside className="hidden bg-green-300">left</aside>
      <main className="bg-red-300">
        <p>메인 페이지</p>
      </main>
      <aside className="hidden bg-green-200">right</aside>

      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}
