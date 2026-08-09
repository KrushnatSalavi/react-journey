import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-22 w-100 bg-gray-400 m-auto py-6 px-15 rounded-lg mt-30 '>
          <h1>Hello </h1>
      </div>
    </>
  )
}

export default App
