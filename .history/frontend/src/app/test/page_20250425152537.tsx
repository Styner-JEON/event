
export default function TestPage() {  
  return (    
    <div className="flex flex-col h-screen">      
      <header className="bg-blue-300 basis-35 ">
        header
      </header>      
      <div className="bg-red-300 flex-1">
        middle
        {/* <aside className="bg-green-300 ">
          left
        </aside>
        <main className="bg-red-300">
          main
        </main>
        <aside className="bg-purple-300 ">
          right
        </aside> */}
      </div>
      <footer className="bg-yellow-300 basis-35">
        footer
      </footer>
    </div>
  )
}