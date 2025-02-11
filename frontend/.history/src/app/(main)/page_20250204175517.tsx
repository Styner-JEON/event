export default function MainPage() {
  return (
    <div>
      <header className="bg-blue-400">header</header>
      <div className="flex">
        <aside className="flex-1/5 bg-green-300">left</aside>
        <main className="flex-1 bg-red-300">
          <p>메인 페이지</p>
        </main>
        <aside className="flex-1 bg-green-200">right</aside>
      </div>
      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}
