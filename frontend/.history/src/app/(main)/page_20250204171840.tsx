export default function MainPage() {
  return (
    <div>
      <header className="bg-blue-400">header</header>
      <div className="flex">
        <aside className="bg-green-300">left</aside>
        <main className="bg-red-300">
          <p>메인 페이지</p>
        </main>
        <aside className="bg-green-100">right</aside>
      </div>
      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}
