import {useState} from 'react'

function Textarea() {
    const[message,setMessage] = useState("");
  return (
    <>
    <textarea
    rows="6"
    cols="30"
    placeholder='Wirite message'
    value={message}
    onChange={(e)=>setMessage(e.target.value)}
    className="border border-black p-2 rounded w-64"
    
    />

    <h3>{message}</h3>
    </>
  )
}

export default Textarea