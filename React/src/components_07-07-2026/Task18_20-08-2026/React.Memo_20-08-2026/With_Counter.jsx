import React,{useState} from 'react'

const Message = React.memo(function Message({message}){
    console.log("Message Rendered")
});

function With_Counter() {
    const[count, setCount] =useState(0);
  return (
    <div>
        <button onClick={() => setCount(count + 1)}
            className='bg-orange-600'> Count: {count}</button>

        <Message message="Welcome to React!"/>


    </div>
  );
}

export default With_Counter