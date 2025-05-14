
export default function TestPage() {  
  return (    
    <div className="min-h-screen flex flex-col">      
      <header className="bg-blue-300 basis-1/5">
        header
      </header>      
      <div className="flex-1">
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
      <footer className="bg-yellow-300 basis-1/5">
        footer
      </footer>
    </div>
  )
}