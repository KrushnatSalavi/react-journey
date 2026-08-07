import { useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed]= useState(false)
  const [password,setPassword] = useState("")

  return (
   <>
    <h1 className='text-center bg-amber-400 mt-5 py-5 m-20 '>Password Generator App </h1>
   </>
  )
}

export default App
