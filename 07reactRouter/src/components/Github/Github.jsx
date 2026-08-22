import React, { useEffect } from 'react'

const Github = () => {
useEffect( () =>{
  fetch('http://api.github.com/users/KrushnatSalavi')
  .then(response => response.json)
}, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers    
    </div>
  )
}

export default Github
