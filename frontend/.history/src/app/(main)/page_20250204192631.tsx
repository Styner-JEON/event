export default function MainPage() {
  return (
    <div>
      <header className="bg-blue-400">header</header>
      <div className="lg:flex">
        <aside className="bg-green-300 lg:basis-1/5">left</aside>
        <main className="bg-red-300 lg:basis-3/5">
          <p>메인 페이지</p>
        </main>
        <aside className="bg-green-200 lg:basis-1/5">right</aside>
      </div>
      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}
