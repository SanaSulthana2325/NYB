import React,{useReducer} from 'react'

function reducer(state,action){
    if(action.type === "incremet"){
        return state + 1;
    }
    if(action.type === "decrement"){
        return state -1;
    }
    return state;
}

function Counter() {
    const[count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={() => dispatch({type:"incremet"})}
            className='bg-pink-300 px-2 py-2 mr-2 '> Increase</button>

        <button onClick={()=> dispatch({type:"decrement"})}
             className='bg-green-400 px-2 py-2 mr-2'>Decrease</button>
    </div>
  );
}

export default Counter