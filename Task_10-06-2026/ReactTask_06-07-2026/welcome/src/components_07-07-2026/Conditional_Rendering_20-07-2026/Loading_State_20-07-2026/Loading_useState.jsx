import {useState} from "react";

function Loading_useState() {
    const [loading, setLoading] = useState(true);
 
    return (
    <>
    <button onClick={()=> setLoading(false)}>Load Data</button>
    {
        loading
        ? <h2>Loading......</h2>
        : <h2>Welcome To World!</h2>
    }
    
    </>

  )
}

export default Loading_useState;
