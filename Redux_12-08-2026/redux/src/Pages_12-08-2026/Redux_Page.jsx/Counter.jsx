import React from 'react'
import {useSelector,useDispatch} from "react-redux"

import{increment, decrement, reset} from "../../Components_12-08-2026/counter_12-08-2026/counterSlice"

function Counter() {
    const count = useSelector(
        (state) => state.counter.count
    );
    const dispatch = useDispatch();
  return (
    <div>
        <h1> Count: {count}</h1>

        <button onClick={()=> dispatch(increment())}
            >Increment</button>

            <br/>
            <br/>
            <button onClick={() => dispatch(decrement())}
                >decrement</button>
                <br/>
                <br/>
                <button onClick={() => dispatch(reset())}
                >Reset</button>
    </div>
  )
}

export default Counter