// What is Context API?

// Context API is a React feature used to share data between components without passing props manually through every level.

// Normally, data is passed from parent to child using props.


// When do we use Context API?

// Common interview examples:

// Theme (light/dark mode)

// Logged-in user information

// Language (English/Hindi)

// Authentication

// Global settings


// Context API vs Props

// Props                          Context API

// Passed manually                 Shared globally

// Parent → Child only             Any nested component

// Causes prop drilling            Avoids prop drilling

// Good for local data             Good for shared/global data




// What is useReducer?

// useReducer is a React Hook used to manage complex state.

// Think of it as an alternative to useState when:

// State has multiple values

// State updates depend on the previous state

// There are many state update actions

// Logic becomes difficult with multiple useState calls




// useState                     useReducer

// Simple state                 Complex state

// Few updates                   Many updates

// Easy to write                 More structured

// Independent values             Related state values

// Small components              Large components



// What is Redux Toolkit?

// Redux Toolkit (RTK) is the official, recommended way to write Redux code.

// It helps you manage global application state (data shared across many components).

// Think of Redux Toolkit as a central storage (store) for your application.

// For example, in an e-commerce website:

// Logged-in user

// Shopping cart

// Theme (dark/light)

// Language

// Notifications

// Product list

// These are shared across many components, so they are often stored in Redux.


// Why Redux Toolkit?

// Older Redux required a lot of code.

// Without Redux Toolkit:

// Actions

// Action types

// Reducers

// Store configuration

// Many files were needed.

// Redux Toolkit reduces boilerplate code.


// | Context API         | Redux Toolkit                    |
// | ------------------- | -------------------------------- |
// | Built into React    | Separate library                 |
// | Simple shared state | Complex shared state             |
// | Good for theme      | Good for cart                    |
// | Good for language   | Good for large application state |
// | Less setup          | More structure                   |
// | `useContext`        | `useSelector` + `useDispatch`    |
