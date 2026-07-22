import { useSelector,useDispatch } from "react-redux";

import { increment,decrement,reset } from "../Counter3_14-07-2026/CounterSlice";

function Counter3(){

const count=useSelector((state)=>state.counter.value);

const dispatch=useDispatch();

return(

<>
<h2>Count : {count}</h2>

<button onClick={()=>dispatch(increment())}>
Increment
</button>

<button onClick={()=>dispatch(decrement())}>
Decrement
</button>

<button onClick={()=>dispatch(reset())}>
Reset
</button>

</>

);

}

export default Counter3;





// User clicks Increment

//         ↓

// dispatch(increment())

//         ↓

// Action Created

// {
//    type:"counter/increment"
// }

//         ↓

// Reducer receives action

// increment(state){
//     state.count++;
// }

//         ↓

// Redux Store Updated

// count = 1

//         ↓

// Component Re-renders

// Output

// 1