import React,{useMemo, useState} from 'react'

function Basic_useMemo() {
    const[count,setCount] = useState(0);

    const double = useMemo(() =>{
       console.log("Calculating...");

       return count * 2;
    },[count])

  return (
    <div>
        <h1>Count:{count}</h1>
        <h2> Double: {double}</h2>
        
        <button onClick={()=> setCount(count + 1)}
            className='bg-pink-300'> Increase</button>
        </div>
  );
}

export default Basic_useMemo