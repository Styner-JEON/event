
export default function TestPage() {  
  return (    
    <div className="-려ㅣㅣ flex flex-col">      
      <header className="bg-blue-300 h-1/5">
        header
      </header>      
      <div className="bg-red-300 h-3/5">
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
      <footer className="bg-yellow-300 h-1/5">
        footer
      </footer>
    </div>
  )
}