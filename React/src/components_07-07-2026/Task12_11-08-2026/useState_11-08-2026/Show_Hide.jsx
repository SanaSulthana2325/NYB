import React, {useState} from 'react'

function Show_Hide() {
    const[show, setShow] = useState(true);
  return (
    <>
    <button onClick={() => setShow(!show)}
        className='bg-green-500'>{show ? "Hide" : "Show"}</button>

    {show && <p> This text is visible.</p>}
    </>
  )
}

export default Show_Hide