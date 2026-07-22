import {createSlice} from '@reduxjs/toolkit'

function Redux() {
  return (
    <div>Redux</div>
  )
}

export default Redux




// Redux:
// Redux is a state management library for JavaScript applications. It helps manage and share data between multiple components in a predictable way.
// ex: Bank Database

// What Problems Does Redux Solve?
// Avoids Props Drilling
// Centralized State
// Easy Data Sharing
// Predictable Updates
// Better Debugging
// Easier Maintenance



// tate Management Libraries

// State management libraries provide:

// One central location for data
// Easy sharing of state
// Predictable updates
// Consistent UI
// Simpler maintenance


// Benefits of Redux
// Centralized state
//  Avoids props drilling
//  Easy state sharing
//  Predictable updates
//  Better debugging with Redux DevTools
//  Scales well for large applications
//  Easier maintenance


// Redux Data Flow:

// User Action
//       │
//       ▼
// Dispatch Action
//       │
//       ▼
// Reducer
//       │
//       ▼
// Redux Store Updated
//       │
//       ▼
// Components Re-render


// Redux Toolkit Introduction

// Redux Toolkit (RTK) is the official, recommended way to write Redux code.


// with redux toolkit:
// Slice
// ↓
// Store
// ↓
// Dispatch


// Features of redux Toolkit:
// Features of Redux Toolkit
// Less code
// Easy to learn
// Built-in Immer (allows writing "mutating" logic safely)
// Better performance
// Official Redux recommendation
// Easier debugging


// Redux architecture:
// Core Concepts

// Redux has four main concepts:

// Store : The Store is the central place where all application state is stored.

// Actions:An Action is an object that describes what happened.

//  : A Reducer is a function that receives:

// Current State
// Action

// and returns the updated State.

// Dispatch : Dispatch sends an action to the Redux Store.


// useSelector : 	Reads data from the Store
// useDispatch	 : Triggers state updates


// | **useSelector()**                           | **useDispatch()**                            |
// | ------------------------------------------- | -------------------------------------------- |
// | Used to **read data** from the Redux Store. | Used to **send actions** to the Redux Store. |
// | Retrieves the current state.                | Updates the state by dispatching actions.    |
// | Returns a value from the store.             | Returns the `dispatch` function.             |
// | Does not change the state.                  | Triggers state changes through reducers.     |






// | Feature          | Context API                                       | Redux Toolkit                                                         |
// | ---------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
// | Part of React    |  Yes                                             |  No (external library)                                               |
// | Installation     | No installation required                          | `npm install @reduxjs/toolkit react-redux`                            |
// | Purpose          | Share simple global data                          | Manage complex global state                                           |
// | Best for         | Small to medium apps                              | Medium to large apps                                                  |
// | Performance      | Can re-render many consumers when context changes | More optimized; components re-render only when selected state changes |
// | Boilerplate      | Very little                                       | Slightly more, but much less with Redux Toolkit than old Redux        |
// | Debugging        | Basic React DevTools                              | Excellent Redux DevTools support                                      |
// | Async operations | Manual (e.g., `useEffect`)                        | Built-in support with async thunks and middleware                     |
// | Learning Curve   | Easy                                              | Moderate                                                              |


// Provider do :
// React Starts

// ↓

// Provider receives Store

// ↓

// Store available

// ↓

// Every Component can access Store
