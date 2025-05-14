
export default function TestPage() {  
  return (    
    <div className="flex flex-col h-screen">      
      <header className="bg-blue-300">
        header
      </header>      
      <div className="flex-1 flex flex-row">        
        <aside className="bg-green-300 b-1/5">
          left**
        </aside>
        <main className="bg-red-300">
          main**
        </main>
        <aside className="bg-purple-300 flex-1/5">
          right*
        </aside>
      </div>
      <footer className="bg-yellow-300">
        footer
      </footer>
    </div>
  )
}

