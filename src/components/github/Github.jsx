import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Github() {
    //const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/jabongg')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-right m-4 bg-gray-600 text-white p-4 text-small'>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    <h1>Developer Id : {data.login} </h1>
    <h6>Github followers: {data.followers}</h6>
    <h6>Developer Name: {data.name}</h6>
    <h6>Github Profile url: {data.url}</h6>
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/jabongg')
//     console.log("response : " + response)
//     return response.json()
// }