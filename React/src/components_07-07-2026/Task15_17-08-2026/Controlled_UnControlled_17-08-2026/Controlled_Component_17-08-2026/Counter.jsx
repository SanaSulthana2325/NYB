import React,{useState} from 'react'

function Counter() {
 const [message, setMessage] = useState("");
  return (
    <>
    <textarea
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder='Write Something'
    className='border border-pink-500 bg-yellow-500  px-5 py-9'/>

    <p>
        Characters: {message.length}
    </p>
    </>
  );
}

export default Counter