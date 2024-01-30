import { useState } from 'react'


function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-9 px-4   '>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-4 rounded-2xl bg-transparent'>

            <button className='outline-none px-4 py-2 rounded-full shadow-xl text-white'
              style={{backgroundColor: 'red'}}
              onClick={() => setColor("red")}
            >Red</button>

            <button className='outline-none px-3 py-2 rounded-full shadow-xl text-white'
              style={{backgroundColor: 'green'}}
              onClick={() => setColor("green")}
            >Green</button>

            <button className='outline-none px-4 py-2 rounded-full shadow-xl text-white'
              style={{backgroundColor: 'blue'}}
              onClick={() => setColor("blue")}
            >Blue</button>

            <button className='outline-none px-4 py-2 rounded-full shadow-xl text-white'
              style={{backgroundColor: 'olive'}}
              onClick={() => setColor("olive")}
            >Olive</button>

            <button className='outline-none px-4 py-2 rounded-full shadow-xl text-white'
              style={{backgroundColor: 'gray'}}
              onClick={() => setColor("gray")}
            >Grey</button>

            <button className='outline-none px-4 py-2 rounded-full shadow-xl text-white'
              style={{backgroundColor: 'yellow'}}
              onClick={() => setColor("yellow")}
            >Yellow</button>

            <button className='outline-none px-4 py-2 rounded-full shadow-xl text-white'
              style={{backgroundColor: 'Purple'}}
              onClick={() => setColor("Purple")}
            >Purple</button>

            <button className='outline-none px-4 py-2 rounded-full shadow-xl text-white'
              style={{backgroundColor: 'pink'}}
              onClick={() => setColor("pink")}
            >Pink</button>

            <button className='outline-none px-4 py-2 rounded-full shadow-5xl text-black'
              style={{backgroundColor: 'white'}}
              onClick={() => setColor("white")}
            >White</button>

            <button className='outline-none  px-4 py-2 rounded-full shadow-xl text-white bg-black'
              
              onClick={() => setColor("black")}
            >Black</button>
            
          </div>
      </div>
    </div>
  )
}

export default App
