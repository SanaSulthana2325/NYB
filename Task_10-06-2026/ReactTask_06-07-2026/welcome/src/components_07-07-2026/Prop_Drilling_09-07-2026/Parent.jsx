import Child from "./Child"


function Parent(props) {
  return (
    <Child name={props.name}/>
  )
}

export default Parent



















// What is Prop Drilling?

// Prop Drilling is the process of passing data (props) from a parent component to a deeply nested child component through one or more intermediate components that do not actually use the data themselves.

// In other words, the data is "drilled" through multiple components just to reach the component that needs it.

// What is "Lifting State Up" in React?

// Lifting State Up means moving the state from a child component to the closest common parent component so that multiple components can share and update the same data.


// | Lifting State Up                                | Prop Drilling                                     |
// | ----------------------------------------------- | ------------------------------------------------- |
// | Move the state to the parent.                   | Pass props through multiple components.           |
// | Used to share state between sibling components. | Used to send data through many nested components. |
// | Parent becomes the single source of truth.      | Intermediate components only forward props.       |
