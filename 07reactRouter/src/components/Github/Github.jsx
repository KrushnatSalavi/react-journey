import React, { useEffect, useState } from 'react'

const Github = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('http://api.github.com/users/KrushnatSalavi')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setdata(data)

      })
  }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers :  {data.followers}

      <img src={data.avatar_url} alt="Picture" width={200}  />
    </div>
  )
}

export default Github
