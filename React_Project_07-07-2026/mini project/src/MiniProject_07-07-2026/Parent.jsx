import { useState } from 'react'
import Child from "./Child";


function Parent() {
    const[message,setMessage] = useState("");
    const receiveData = (data) =>{
        setMessage(data);
    };
  return (
    <>
    <h2>Message : {message}</h2>
    <Child sendData={receiveData}/>
    </>
    
  )
}

export default Parent;




//parent-->child(pasing function as prop)
//child----> parent communication