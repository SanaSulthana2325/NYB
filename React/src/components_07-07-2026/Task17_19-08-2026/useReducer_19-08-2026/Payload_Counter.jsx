import React,{useReducer} from 'react'

function reducer(state, action){
    switch(action.type){
        case"increment":
        return state + action.payload;

        case"decrement":
        return state - action.payload;

        default:
            return state;
    }
}

function Payload_Counter() {
    const[count,dispatch] = useReducer(reducer, 0);
  return (
    <div>
        <h2>Count: {count}</h2>

        <button onClick={()=> dispatch({type: "increment", payload:5})}
            className='bg-red-500 px-2 py-2 mr-2'> add +5</button>

            <button onClick={()=> dispatch({type:"decrement",payload:2})}
                className='bg-blue-400 px-2 py-2 mr-2'> Reduce -2</button>

    </div>
  );
}

export default Payload_Counter