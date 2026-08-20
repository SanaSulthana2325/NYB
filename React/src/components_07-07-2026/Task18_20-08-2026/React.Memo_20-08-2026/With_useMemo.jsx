import React,{useMemo, useState} from 'react'

const User = React.memo(function User({ user}){
    console.log("User Rendered");

    return <h2>{user.name}</h2>
});

function With_useMemo() {
    const [count, setCount] = useState(0);

    const user = useMemo(()=>{
        return{
            name:"Nashu"
        };
    },[]);
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}
            className='bg-purple-400'>Count:{count}</button>

        <User user={user}/>
    </div>
  )
}

export default With_useMemo