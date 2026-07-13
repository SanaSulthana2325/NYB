import {useContext} from 'react';
import CartContext from "./CartContext";

function Cart() {
    const cart = useContext(CartContext);
  return (
    <>
    <h2>Shopping cart</h2>

    <ul>
        {cart.map((item,index)=>
        <li key = {index}>{item}</li>
        )}
    </ul>
    </>
  )
}

export default Cart;



// What is State in React?

// State is data that belongs to a component and can change over time. Whenever the state changes, React automatically updates the UI.

// What is Global State?

// Global state is data that needs to be shared by multiple components in the application.

// Instead of storing the same data in many components, we store it in one central place so every component can access and update it.

// | Feature    | Local State              | Global State                      |
// | ---------- | ------------------------ | --------------------------------- |
// | Scope      | One component            | Entire application                |
// | Access     | Only that component      | Any component                     |
// | Sharing    | Through props            | Directly from global store        |
// | Best For   | Forms, counters, toggles | User, theme, cart, authentication |
// | Complexity | Simple                   | More structured                   |


// When Should You Use Global State?

// Use global state when:

// Multiple components need the same data.
// You want to avoid props drilling.
// Data should stay synchronized across the app.
// The state represents application-wide information (e.g., logged-in user, theme, shopping cart, language).

// Avoid global state when:

// The data is used by only one component.
// The state is temporary or local (e.g., form input, modal open/close, counter).



// What is Props Drilling?

// Props Drilling is the process of passing data (props) from a parent component to a deeply nested child component through intermediate components, even when those intermediate components do not use the data.


// | Limitation                    | Explanation                                     |
// | ----------------------------- | ----------------------------------------------- |
// | Repetitive code               | Every intermediate component passes props.      |
// | Difficult maintenance         | Changes must be made in multiple components.    |
// | Unnecessary middle components | Components pass data without using it.          |
// | Poor readability              | Hard to follow data flow in deep trees.         |
// | Not scalable                  | Managing many props becomes difficult.          |
// | Tight coupling                | Components depend on receiving props correctly. |
// | Hard to debug                 | Errors require checking many components.        |
// | Performance issues            | Unnecessary re-renders may occur.               |



// | Props Drilling                             | Context API                                           |
// | ------------------------------------------ | ----------------------------------------------------- |
// | Data passed through every component        | Data accessed directly where needed                   |
// | Lots of repetitive code                    | Less boilerplate                                      |
// | Hard to maintain                           | Easier to maintain                                    |
// | Difficult in large apps                    | Better for shared/global state                        |
// | Intermediate components only forward props | Intermediate components don't need to handle the data |



// What is Context API?

// Context API is a built-in React feature that allows you to share data between multiple components without passing props manually.

// It is mainly used for:

// User Authentication
// Theme (Dark/Light)
// Language
// Shopping Cart
// Employee Details
// Notifications

// Advantages of Context API

// Eliminates props drilling.
// Built into React (no extra library required).
// Makes code cleaner and easier to maintain.
// Lets multiple components share the same data.
// Works well with useState and useReducer.

// Limitations of Context API
// All consuming components re-render when the context value changes.
// Not ideal for very large applications with complex or frequently changing global state.
// For advanced state management, libraries like Redux or Zustand may be a better fit.



// | Provider                  | Consumer                   |
// | ------------------------- | -------------------------- |
// | Shares data               | Reads data                 |
// | Uses `value` prop         | Uses `useContext()`        |
// | Usually placed in App.jsx | Can be any child component |


// createContext()

//         ↓

// Create Provider

//         ↓

// Provide value

//         ↓

// Wrap Components

//         ↓

// Consumer (useContext)

//         ↓

// Read Data

//         ↓

// Display UI


// Implement useContext() hook for accessing shared data.

// createContext()

//       ↓

// Provider

//       ↓

// value={data}

//       ↓

// Child Component

//       ↓

// useContext(Context)

//       ↓

// Access Shared Data


// Advantages of useContext()
// Eliminates props drilling.
// Makes components cleaner and easier to read.
// Built into React (no extra library needed).
// Works seamlessly with useState and useReducer.
// Allows multiple components to access the same shared data.