// Context API in React

// The Context API is a built-in React feature used to share data between multiple components without passing props manually through every level.

// It is especially useful for data such as:

// Logged-in user information
// Theme (light/dark)
// Language
// Shopping cart
// Authentication status


// | Function          | Purpose                     |
// | ----------------- | --------------------------- |
// | `createContext()` | Creates a Context           |
// | `Provider`        | Provides data to components |
// | `useContext()`    | Reads data from Context     |


// When should you use Context API?

// Use Context when many components need the same data.

// Good examples:

// Theme
// Authentication
// User information
// Language
// Shopping cart
// Global settings

// Don't use Context for every piece of state. For a small parent-child relationship, normal props are usually simpler.


// useReducer in React

// useReducer is a React Hook used to manage state, especially when the state has multiple actions or more complex update logic.

// It is an alternative to useState.

// Basic idea

// With useState:

// User action
//    ↓
// setState()
//    ↓
// State changes

// With useReducer:

// User action
//    ↓
// dispatch(action)
//    ↓
// reducer()
//    ↓
// New state
//    ↓
// Component re-renders

// The basic syntax is:

// const [state, dispatch] = useReducer(reducer, initialState);


// | Part       | Meaning                         |
// | ---------- | ------------------------------- |
// | `state`    | Current state                   |
// | `dispatch` | Sends an action                 |
// | `reducer`  | Decides how state should change |


// | `useState`                        | `useReducer`                             |
// | --------------------------------- | ---------------------------------------- |
// | Simple state                      | Complex state                            |
// | Easy to write                     | More structured                          |
// | Uses setter function              | Uses `dispatch()`                        |
// | Logic often inside event handlers | Logic is centralized in reducer          |
// | Good for simple forms/counters    | Good for complex forms/todos             |
// | Example: `setCount(count + 1)`    | Example: `dispatch({type: "increment"})` |


// What is Global State?

// Global state means data that needs to be accessed or changed by multiple components in different parts of the application.

// For example, imagine an e-commerce application:

//                  App
//                   |
//         ┌─────────┼─────────┐
//         ↓         ↓         ↓
//       Navbar    Products    Cart
//         ↓         ↓         ↓
//     Cart Count  Add Item   Items


// Global State Management Flow

// The most important flow to understand is:



    //          Component
    //              |
    //              | dispatch()
    //              ↓
    //           Action
    //              |
    //              ↓
    //           Reducer
    //              |
    //              ↓
    //          New State
    //              |
    //              ↓
    //       Context Provider
    //              |
    //     ┌────────┼────────┐
    //     ↓        ↓        ↓
    // Navbar    Product    Cart



//     When Should You Use Global State?

// Use global state when many components need the same data.

// Good examples
// ✅ Logged-in user
// ✅ Shopping cart
// ✅ Dark/light theme
// ✅ Language
// ✅ Notifications
// ✅ Authentication
// ✅ Application settings


// 2. Context API — When to Use It

// Use Context API when:

// The shared state is relatively simple.
// You don't have many complicated state updates.
// You want to avoid prop drilling.
// You don't need advanced Redux features.
// You are building a small or medium-sized application.

// Common examples:

// Theme
// Authentication
// Logged-in user
// Language
// Simple settings




// When Does Redux Become Useful?

// Redux becomes more useful when:

// The application is large.
// Many components share state.
// State updates are complex.
// There are many different actions.
// You want predictable state updates.
// You need powerful debugging tools.
// You need middleware for things such as async workflows.
// You want a standardized architecture for application-wide state.

// Think of:

// Small application
//        ↓
// Context API


// Large application
//        ↓
// Redux

// This isn't an absolute rule, but it's a useful starting point.



// | Feature              | Context API                                 | Redux                     |
// | -------------------- | ------------------------------------------- | ------------------------- |
// | Built into React     | ✅                                           | ❌                         |
// | Additional library   | No                                          | Yes                       |
// | Setup                | Simple                                      | More structured           |
// | Small apps           | Excellent                                   | Can be unnecessary        |
// | Large apps           | Can work, but may become harder to organize | Excellent                 |
// | Simple global data   | Excellent                                   | Often overkill            |
// | Complex global state | Possible with `useReducer`                  | Excellent                 |
// | Debugging tools      | Limited                                     | Powerful Redux DevTools   |
// | Middleware ecosystem | Limited                                     | Strong ecosystem          |
// | State architecture   | Flexible                                    | More standardized         |
// | Learning curve       | Low                                         | Higher                    |
// | Best for             | Simple shared state                         | Complex application state |


// Redux Toolkit (RTK) in React

// Redux Toolkit (RTK) is the official recommended way to write Redux logic. It makes Redux much easier by reducing boilerplate code.