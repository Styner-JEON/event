export default function MainPage() {
  return (
    <div>
      <header className="bg-blue-400">header</header>

      <aside className="bg-green-300">left</aside>
      <main className="bg-red-300">
        <p>메인 페이지</p>
      </main>
      <aside className="bg-green-200 lg:basis-1/5">right</aside>

      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}
