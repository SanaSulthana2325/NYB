import { useState } from "react";
import Child from "./Child_Prop";

function Parent_Change() {

    const [name, setName] = useState("John");

    return (

        <div>

            <button
                onClick={() => setName("David")}
        className="bg-purple-300 border border-2px">
            
                Change Name
            </button>

            <Child name={name} />

        </div>

    );

}

export default Parent_Change;