
export default function TestPage() {  
  return (    
    // <div className="flex flex-col h-screen">      
    <div className="flex flex-col h-screen">     
      <header className="bg-blue-300 basis-15 ">
        header
      </header>      
      <div className="flex-1 flex flex-row">        
        <aside className="bg-green-300 basis-30">
          left
        </aside>
        <main className="bg-red-300 flex-1">
          main
        </main>
        <aside className="bg-purple-300 basis-30">
          right
        </aside>
      </div>
      <footer className="bg-yellow-300 basis-15">
        footer
      </footer>
    </div>
  )
}