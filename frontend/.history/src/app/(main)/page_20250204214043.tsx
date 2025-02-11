export default function MainPage() {
  return (
    <div className="flex h-screen flex-col">
      <header className="basis-1/5 bg-blue-400">header</header>

      <aside className="hidden bg-green-300">left</aside>
      <main className="basis-3/5 bg-red-300">
        <p>메인 페이지</p>
      </main>
      <aside className="hidden basis-1/5 bg-green-200">right</aside>

      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}
