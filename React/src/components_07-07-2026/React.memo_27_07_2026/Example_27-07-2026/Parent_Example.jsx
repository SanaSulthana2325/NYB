import { useState } from "react";
import Child from "./Child_Example";

function Parent_Example() {

    const [count, setCount] = useState(0);

    return (

        <div>

            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}
        className="bg-pink-300 border border-2px">
                
                Increment
            </button>

            <Child />

        </div>

    );

}

export default Parent_Example;