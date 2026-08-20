import React,{useCallback,useState} from 'react'

function Simple_useCallback() {

    const[count, setCount] = useState(0);

    const handleClick = useCallback(()=>{
        console.log("Button clicked");
    },[]);
  return (
    <div>
        <h1> Count: {count}</h1>

        <button onClick={() =>setCount(count + 1)}
            className='bg-green-500 px-2 py-2 mr-2'> Increase</button>

            <button onClick={handleClick}
            className='bg-blue-500 px-2 py-2 mr-2'> Click Me</button>
    </div>
  );
}

export default Simple_useCallback