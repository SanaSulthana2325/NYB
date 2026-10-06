import {useState} from "react";

function Counter(){
    const[count,setCount]= useState(0);

    return(
        <>
        <h1> Count:{count}</h1>
        <button onClick={()=> setCount(count + 1)} className="bg-pink-400 px-2 py-3 mr-2"> Increase</button>

        <button onClick={()=> setCount(count-1)} className="bg-green-400 px-2 py-2"> Decrease</button>
        </>
    );
}

// name

function Name(){
    const[name,setName]=useState("")
    return(
        <>
        <input type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)} className="bg-yellow-300 border-border-pink-700"/>

        <h2> Hello,{name}</h2>
        </>
    )
}

// Toggle

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)} className="bg-purple-300 px-2 py-2 ">
        Show / Hide
      </button>

      {isVisible && <h1>This text is visible!</h1>}
    </div>
  );
}



export {Counter,Name,Toggle};