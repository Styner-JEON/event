
export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-300 text-white p-4">
        header
      </header>      
      <div className="flex-1 flex">
        <aside className="bg-green-300 text-white p-4">
          left
        </aside>
        <main className="flex-1 bg-red-300 text-black p-4">
          main
        </main>
        <aside className="bg-purple-300 text-white p-4">
          right
        </aside>
      </div>
      <footer className="bg-yellow-300 text-white p-4">
        footer
      </footer>
    </div>
  )
}