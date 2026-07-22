import {useContext } from 'react'
import CounterContext from './CounterContext';

function Counter() {
    const { count, setCount} = useContext(CounterContext);
  return (
    <>
    <h2> { count}</h2>
    <button onClick={() => setCount(count + 1)}> Increase</button>
    
    </>
  )
}

export default Counter