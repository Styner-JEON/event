export default function MainPage() {
  return (
    <div>
      {/* <div className="flex"> */}
      <header className="bg-blue-500">header</header>
      <div>
        <aside className="">left</aside>
        <main className="bg-red-300">
          <p>메인 페이지</p>
        </main>
        <aside>right</aside>
      </div>
      <footer className="bg-blue-200">footer</footer>
    </div>
  );
}
