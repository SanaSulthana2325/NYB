import { useEffect } from "react"

function Run_Onces() {

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <>
    <h1 className="bg-pink-500">Welcome to React</h1>
    
    

    </>
  );
}

export default Run_Onces;
















// The useEffect Hook is one of the most important hooks in React.

// It allows you to perform side effects in functional components.

// What is a Side Effect?

// A side effect is anything that happens outside the normal rendering process, such as:

// Fetching data from an API
// Updating the document title
// Setting timers (setTimeout, setInterval)
// Accessing Local Storage
// Adding event listeners
// Calling backend services


// syntax:
// import { useEffect } from "react";

// useEffect(() => {

//    // Side Effect Code

// }, [dependencies]);


// | Syntax                             | When it Runs                 | Example Use                        |
// | ---------------------------------- | ---------------------------- | ---------------------------------- |
// | `useEffect(() => {})`              | After every render           | Logging, debugging                 |
// | `useEffect(() => {}, [])`          | Only once after first render | API calls, initialization          |
// | `useEffect(() => {}, [count])`     | When `count` changes         | Update title, fetch based on count |
// | `useEffect(() => {}, [name, age])` | When `name` or `age` changes | Sync multiple values               |

//life cycle
// Initial render
// ↓
// Effect runs (count = 0)

// Click button
// ↓
// State updates
// ↓
// Component re-renders
// ↓
// Effect runs again (count = 1)



// | `useEffect` Syntax                              | When It Runs                             | Common Use Cases                                   |
// | ----------------------------------------------- | ---------------------------------------- | -------------------------------------------------- |
// | `useEffect(() => {})`                           | After every render                       | Logging, updating document title, syncing UI       |
// | `useEffect(() => {}, [])`                       | Only once after the first render         | Initial API calls, loading data, setting up timers |
// | `useEffect(() => {}, [count])`                  | On mount and whenever `count` changes    | Reacting to state or prop changes                  |
// | `useEffect(() => { return cleanup; }, [])`      | Cleanup on unmount                       | Clearing timers, removing event listeners          |
// | `useEffect(() => { return cleanup; }, [count])` | Cleanup before re-running and on unmount | Restarting timers, updating subscriptions          |


// API Calls in React

// An API (Application Programming Interface) allows your React application to communicate with a server to fetch, create, update, or delete data.

// Common uses:

// Fetch user data
// Display products
// Submit forms
// Login authentication
// Weather information

// how API call searchForWorkspaceRootReact App
//      │
//      ▼
// Fetch / Axios Request
//      │
//      ▼
// API Server
//      │
//      ▼
// JSON Response
//      │
//      ▼
// Store in State
//      │
//      ▼
// Display Data



