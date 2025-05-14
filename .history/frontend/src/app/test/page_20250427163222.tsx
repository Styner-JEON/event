
export default function TestPage() {  
  return (    
    <div className="flex flex-row">      
      <header className="bg-blue-300">
        header
      </header>      
      {/* <div className="flex-1 flex flex-row">         */}
        <aside className="bg-green-300">
          left**
        </aside>
        <main className="bg-red-300 basis-1/2 shink">
          main**
        </main>
        <aside className="bg-purple-300">
          right*
        </aside>
      {/* </div> */}
      <footer className="bg-yellow-300">
        footer
      </footer>
    </div>
  )
}