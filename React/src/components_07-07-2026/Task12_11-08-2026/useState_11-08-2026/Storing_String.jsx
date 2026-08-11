import React, {useState} from 'react'

function Storing_String() {
    const[name,setName] = useState("Ali")
  return (
    <>
    <h2>Hello {name}</h2>

    <button onClick={() => setName("Ayesha")}
        className='bg-red-500'>Change Name</button>
    </>
  )
}

export default Storing_String