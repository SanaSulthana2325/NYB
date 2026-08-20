import React ,{useState}from 'react'

const Child = React.memo(function Child ({name}){
    console.log("Child rendered");

    return <h2> Hello {name}</h2>
});
function Basic() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Count: {count}</h1>

        <button onClick={() => setCount(count + 1)}
            className='bg-pink-500'> Increase</button>

            <Child name="Tasan"/>


    </div>
  );
}

export default Basic