import React,{useRef, useState} from 'react'

function Counter1() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(1);

    renderCount.current = renderCount.current + 1;
  return (
    <div>
        <h1>Count: {count}</h1>
        <h2>Renders: {renderCount.Current}</h2>

        <button onClick={() => setCount(count + 1)}
            className='bg-yellow-400'>Increase</button>
    </div>
  )
}

export default Counter1