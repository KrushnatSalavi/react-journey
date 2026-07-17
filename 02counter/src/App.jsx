import { useState } from 'react'

import './App.css'

function App() {
  let counter = 15

  const addValue = () =>{
    counter = counter + 1  
  }
  return (
    <>
    <h1>React </h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}
    >Add value</button><br/>
     <button className='w-100px m-50px'>Remove value</button>

    </>
  )
}

export default App
