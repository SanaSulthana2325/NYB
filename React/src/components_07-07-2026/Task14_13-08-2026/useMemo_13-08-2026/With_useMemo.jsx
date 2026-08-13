import React,{useState, useMemo} from 'react'

function With_useMemo() {
    const[count,setCount] = useState(0);
    const[text,setText] = useState("");

    const result = useMemo(() => {
        console.log("Calculating....");
        return count * count;
    },[count]);
  return (
    <div>
        <h2> Square: {result}</h2>

        <button onClick={()=> setCount(count + 1)}
            className='bg-purple-500 px-2 py-2 m-2'>Increment</button>
        
        <br/>
        <input 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        className='border border-pink-4px'/> 
    </div>
  );
}

export default With_useMemo