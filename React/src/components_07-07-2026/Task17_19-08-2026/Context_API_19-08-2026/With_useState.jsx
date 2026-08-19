import React, {createContext, useContext, useState} from 'react'

const CounterContext = createContext();
function With_useState() {
    const[count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{count, setCount}}>
        <Counter/>
    </CounterContext.Provider>

  );
}

function Counter (){
    const{ count, setCount} = useContext(CounterContext);
    return(
        <>
        <h1>Count:{count}</h1>

        <button onClick={() => setCount(count + 1)}
            className='bg-pink-500 px-2 py-2 mr-2'> Increase</button>

            <button onClick={()=> setCount(count -1)}
                className='bg-green-500 px-2 py-2 mr-2'> Decrease</button>
        </>
    )
}
export default With_useState