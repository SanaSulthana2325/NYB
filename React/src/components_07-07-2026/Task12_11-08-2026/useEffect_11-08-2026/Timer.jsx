import React,{useEffect, useState} from 'react'

function Timer() {
    const[seconds,setSeconds] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds(prev => prev + 1);
        },1000);
    
  return ()=>{
    clearInterval(timer);
  };
},[]);

return (
    <h1>Seconds: {seconds}</h1>
);
}
export default Timer;