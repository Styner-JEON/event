
export default function TestPage() {  
  return (    
    <div className="flex">      
      <header className="bg-blue-300 ">
        header
      </header>      
      <div>
      <aside className="bg-green-300 ">
        left
      </aside>
      <main className="bg-red-300">
        main
      </main>
      <aside className="bg-purple-300 ">
        right
      </aside>
      </div>
      <footer className="bg-yellow-300">
        footer
      </footer>
    </div>
  )
}