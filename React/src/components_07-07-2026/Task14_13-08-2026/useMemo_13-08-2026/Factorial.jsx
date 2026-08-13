import React,{useState, useMemo} from 'react'

function Factorial() {
    const [number, setNumber] = useState(5);
    const [count, setCount] = useState(0);

    function factorial(n){
        console.log("Calculating factorial....");

        let result = 1;

        for(let i = 1; i <=n; i++){
            result *=i;
        }
        return result;
    }

    const fact = useMemo(() => factorial(number), [number]);
  return (
    <div>
        <h2> Factorial of {number} is {fact}</h2>
        <button onClick={()=> setNumber(number + 1)}
            className='bg-green-500 px-2 py-2 m-2'> Increase Number</button>

        <button onClick={()=> setCount(count + 1)}
            className='bg-yellow-600 px-2 py-2 m-2'> Count: {count}</button>
    </div>
  );
}

export default Factorial;