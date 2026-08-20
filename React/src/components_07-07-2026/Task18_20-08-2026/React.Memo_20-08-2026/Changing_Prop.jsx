import React,{useState} from 'react'

    const User = React.memo(function User({ name}){
        console.log("User Rendered");

        return<h2>User:{name}</h2>
    });
function Changing_Prop() {
    const[name, setName] = useState("Minnu")
    return (
    <div>
        <User name={name}/>


        <button onClick={() => setName("Mira")}
            className='bg-yellow-500'> Change Name</button>
    </div>
  )
}

export default Changing_Prop