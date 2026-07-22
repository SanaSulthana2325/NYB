// What is Context API?

// Context API is a built-in feature in React that allows you to share data (state) between multiple components without passing props manually through every intermediate component.

// It solves the problem called Props Drilling.


// FLOW DIAGRAM
// createContext()

// ↓

// Provider

// ↓

// Store Data

// ↓

// useContext()

// ↓

// Access Data



// | Props                      | Context API                     |
// | -------------------------- | ------------------------------- |
// | Data passed parent → child | Data shared globally            |
// | Causes props drilling      | Avoids props drilling           |
// | Best for few components    | Best for many components        |
// | Manual passing             | Direct access with `useContext` |
// | Simple                     | Better for shared state         |



// Advantages
// Eliminates props drilling.
// Makes code cleaner and easier to maintain.
// Built into React (no external library).
// Ideal for shared data like:
// Authentication
// Theme (Dark/Light)
// Language
// User Profile
// Cart
// Notifications
// Limitations
// Not ideal for very large or complex state management.
// Frequent updates can cause many components to re-render.
// Lacks advanced features like middleware, debugging tools, and state history (available in Redux).


// | Context API                    | Redux                                                     |
// | ------------------------------ | --------------------------------------------------------- |
// | Built into React               | External library                                          |
// | Good for small to medium apps  | Better for large apps                                     |
// | Simple setup                   | More structured                                           |
// | Limited debugging              | Excellent DevTools support                                |
// | Best for theme, auth, language | Best for complex global state like e-commerce, dashboards |


// What is useContext?

// useContext is a React Hook that allows a component to read or consume data from a Context without receiving it through props.

// It works together with Context API.

// syntax of useContext:
// const value = useContext(ContextName);


// how useContext works:
// createContext()

// ↓

// Provider stores data

// ↓

// useContext()

// ↓

// Read the stored data


// Advantages of useContext
// Eliminates props drilling.
// Makes components cleaner.
// Easy to share global data.
// Built into React (no external library).
// Easy to learn and implement.

// Limitations
// Best suited for small to medium-sized applications.
// Frequent updates to the context value can re-render all consuming components.
// For highly complex state management (e.g., large e-commerce apps with many independent state updates), Redux Toolkit is often a better choice.

// difference between createContext and useContext:

// | `createContext()`                          | `useContext()`                                           |
// | ------------------------------------------ | -------------------------------------------------------- |
// | Creates a Context object                   | Reads data from the Context                              |
// | Called once while creating the context     | Called inside components whenever context data is needed |
// | Returns a Context object with a `Provider` | Returns the current value from the nearest `Provider`    |


// What is Redux?

// Redux is a state management library used to store and manage the application's global state in a single centralized store.


// redux flow:
// Component

// ↓

// dispatch(Action)

// ↓

// Reducer

// ↓

// Store Updates

// ↓

// Component Gets Updated

// Redux architecture

//           User Clicks Button
//                   │
//                   ▼
//              dispatch()
//                   │
//                   ▼
//                Action
//                   │
//                   ▼
//               Reducer
//                   │
//                   ▼
//              Redux Store
//                   │
//                   ▼
//           Updated Component


// What is Store?

// Store is the central database where Redux keeps all application data.
// only one store in all redux

// 2.State

// State is the actual data inside the store.

// 3. Action : Action tells Redux

// What should happen?

// It is simply a JavaScript object.


// 4. Reducer : Reducer is a function.

// It decides

// How state should change.

// syntax:
// function reducer(state,action){

// }

// 5. Dispatch  : Dispatch sends the action to Redux.
// dispatch()

// ↓

// Reducer

// ↓

// Store Updated


// | Term     | Meaning                                                |
// | -------- | ------------------------------------------------------ |
// | Store    | Central place where all global state is stored         |
// | State    | The data stored inside the Store                       |
// | Action   | A plain JavaScript object describing **what happened** |
// | Payload  | Additional data sent with an action                    |
// | Reducer  | A function that calculates and returns the new state   |
// | Dispatch | Function used to send an action to the store           |


// | React useState            | Redux                         |
// | ------------------------- | ----------------------------- |
// | Local state               | Global state                  |
// | Used inside one component | Shared across many components |
// | Small applications        | Medium and large applications |
// | No central store          | Single centralized store      |
// | Easy setup                | More structured               |


// Advantages of Redux
// Centralized state management.
// Eliminates props drilling.
// Predictable state updates.
// Easier debugging with Redux DevTools.
// Scales well for large applications.
// Makes data sharing between unrelated components simple.


// Limitations of Redux (Classic Redux)
// More boilerplate code (before Redux Toolkit).
// More files to maintain.
// Learning curve is higher than Context API.


// What is Redux Toolkit?

// Redux Toolkit (RTK) is a package built on top of Redux that provides utilities to configure the Redux store, create reducers, define actions, and write Redux logic with much less code.

// flow of redux toolkit:

// User Click

// ↓

// dispatch()

// ↓

// Slice

// ↓

// Store

// ↓

// Updated Component


// 1. What does configureStore() do?

// It creates the Redux store, combines reducers, enables Redux DevTools, and adds default middleware.

// 2. What does createSlice() do?

// createSlice() creates:

// Initial state
// Reducers
// Action creators

// all in one place.

// 3. What is useSelector()?

// useSelector() reads data from the Redux store.

// Example:

// const cart = useSelector(state => state.cart);
// 4. What is useDispatch()?

// useDispatch() returns the dispatch function, which is used to send actions to the Redux store.

// Example:

// dispatch(addItem(product));
// 5. What is createAsyncThunk()?

// It simplifies asynchronous Redux logic such as fetching data from APIs by automatically generating pending, fulfilled, and rejected action types.


// toolkit data flow

// User Click

// ↓

// dispatch(addItem())

// ↓

// createSlice()

// ↓

// Reducer Executes

// ↓

// Store Updates

// ↓

// useSelector()

// ↓

// UI Updates


// | Redux                         | Redux Toolkit                     |
// | ----------------------------- | --------------------------------- |
// | More boilerplate code         | Much less boilerplate             |
// | Uses `createStore()`          | Uses `configureStore()`           |
// | Separate actions and reducers | `createSlice()` combines them     |
// | Manual action creators        | Auto-generated action creators    |
// | More files                    | Fewer files                       |
// | More setup                    | Simple setup                      |
// | Official but verbose          | Official and recommended approach |


// What is useReducer?

// useReducer is a React Hook used to manage state using a reducer function instead of directly updating the state with useState.


// syntax of useReducer:

// const [state, dispatch] = useReducer(reducer, initialState);

// useReducer flow

// Initial State

// ↓

// User Action

// ↓

// dispatch()

// ↓

// Reducer Function

// ↓

// Returns New State

// ↓

// UI Updates


// Reducer Function

// A reducer is a function that decides how the state should change.


// | useState                       | useReducer                                       |
// | ------------------------------ | ------------------------------------------------ |
// | Best for simple state          | Best for complex state                           |
// | Direct state updates           | State updated through a reducer                  |
// | Easier to learn                | Better for complex business logic                |
// | Multiple `setState` functions  | One centralized reducer                          |
// | Good for forms with few fields | Good for forms, carts, dashboards, and workflows |


// | Feature          | Context API            | useReducer                               | Redux Toolkit                             |
// | ---------------- | ---------------------- | ---------------------------------------- | ----------------------------------------- |
// | Purpose          | Share data globally    | Manage complex state                     | Global state management for large apps    |
// | Built into React |  Yes                  |  Yes                                    |  No                                      |
// | Global State     |  Yes                  |  No (unless combined with Context)      |  Yes                                     |
// | Complex Logic    |  Limited              |  Excellent                              |  Excellent                               |
// | Performance      | Medium                 | Good                                     | Excellent                                 |
// | Best For         | Theme, Login, Language | Forms, Counters, Complex Component State | Shopping Cart, Dashboard, Enterprise Apps |
