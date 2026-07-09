import {useState} from "react";

function Counter1() {
    const[count,setCount] = useState(0);

  return (
    <>
    <h2>Count : {count}</h2>
    <button onClick={() => setCount(count + 1)}> Increment</button>

    <button onClick={() => setCount(count + 1)}> Decrement</button>
     
    <button onClick={() => setCount(count + 1)}> Reset</button>

    </>
  )
}

export default Counter1




// What is Local State?

// Local State is the data that belongs to only one component.

// It is created using the useState() Hook.
// It can be accessed and updated only inside that component.
// Other components cannot directly access or modify it unless it is passed via props.
// Definition

// Local State is the private data of a component that changes over time and causes the component to re-render when updated.

// *What is useState()?

// useState is a React Hook used to create Local State in a functional component.




//Component Renders

// ↓

// useState() creates state

// ↓

// User interacts

// ↓

// setState() updates state

// ↓

// React re-renders the same component

// ↓

// Updated UI is displayed



// *Advantages of Local State
// Easy to create using useState().
// Keeps data private to the component.
// Automatically updates the UI when changed.
// Makes components reusable and independent.
// Perfect for managing form inputs, counters, toggles, and UI controls.