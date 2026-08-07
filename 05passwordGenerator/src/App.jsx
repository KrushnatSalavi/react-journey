import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className='text-center bg-amber-400 mt-5 py-5 m-20 '>Password Generator App </h1>
   </>
  )
}

export default App
