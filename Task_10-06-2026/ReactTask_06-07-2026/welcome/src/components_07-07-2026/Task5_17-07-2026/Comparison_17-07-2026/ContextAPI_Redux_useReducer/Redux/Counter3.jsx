import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterSlice1";

function Counter3(){

 const count = useSelector(state=>state.counter.value);

 const dispatch = useDispatch();

 return(

 <>
   <h2>{count}</h2>

   <button onClick={()=>dispatch(increment())}>
      +
   </button>

   <button onClick={()=>dispatch(decrement())}>
      -
   </button>

 </>

 );

}

export default Counter3;