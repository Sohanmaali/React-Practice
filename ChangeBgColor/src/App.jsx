import { useState } from 'react'


function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }} >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-12 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ' >
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "red", color: "white" }} onClick={() => setColor("pink")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "green", color: "white" }} onClick={() => setColor("green")}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "blue", color: "white" }} onClick={() => setColor("blue")}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "olive", color: "white" }} onClick={() => setColor("olive")}>Olive</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "gray", color: "white" }} onClick={() => setColor("gray")}>Gray</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "yellow", color: "black" }} onClick={() => setColor("yellow")}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "pink", color: "white" }} onClick={() => setColor("pink")}>Pink</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "purple", color: "white" }} onClick={() => setColor("purple")}>Purple</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "lavender", color: "black" }} onClick={() => setColor("lavender")}>Lavender</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "white", color: "black" }} onClick={() => setColor("white")}>white</button>
            <button className='outline-none px-4 py-1 rounded-full shrink-lg' style={{ backgroundColor: "black", color: "white" }} onClick={() => setColor("black")}>Black</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
