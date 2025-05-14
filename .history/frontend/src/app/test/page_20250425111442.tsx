
export default function TestPage() {
  return (    
    <div className="flex ">
      <header className="bg-blue-300 ">
        header
      </header>      
      <aside className="bg-green-300 grow-1  ">
        left
      </aside>
      <main className="bg-red-300">
        main
      </main>
      <aside className="bg-purple-300 ">
        right
      </aside>
      <footer className="bg-yellow-300">
        footer
      </footer>
    </div>
  )
}