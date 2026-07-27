import React, { useState } from "react";
import Child_useCallback from "../UseCallback_27-07-2026/Child_useCallback";


function Without_useCallback() {

  const [count, setCount] = useState(0);


  const handleClick = () => {
    console.log("Button Clicked");
  };


  console.log("Parent Rendered");


  return (
    <div className="p-5">


      <h1 className="text-3xl font-bold">
        Count: {count}
      </h1>


      <button
        onClick={() => setCount(count + 1)}
        className="bg-red-500 text-white px-4 py-2 rounded m-3"
      >
        Increment
      </button>


      <Child_useCallback 
        handleClick={handleClick}
      />


    </div>
  );
}

export default Without_useCallback;