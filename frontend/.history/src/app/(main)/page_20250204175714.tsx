export default function MainPage() {
  return (
    <div>
      <header className="bg-blue-400">header</header>
      <div className="flex">
        <aside className="bg-green-300 lg:basis-1/5">left</aside>
        <main className="bg-red-300 lg:basis-3/5">
          <p>메인 페이지</p>
        </main>
        <aside className="basis-1/5 bg-green-200">right</aside>
      </div>
      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}
