// API Calls in React (Complete Explanation with Multiple Examples)

// An API (Application Programming Interface) allows your React application to communicate with a server. Most React applications use APIs to fetch data, send data, update data, or delete data.

// For example:

// Instagram loads posts using an API.
// Amazon loads products using an API.
// Gmail loads emails using an API.

// React itself doesn't provide an API library. We commonly use:

// fetch() (built into JavaScript)
// Axios (popular third-party library)

// Component Loads

//       ↓

// useEffect()

//       ↓

// API Request

//       ↓

// Server Sends Data

//       ↓

// Store data in State

//       ↓

// React Re-renders UI


// | Feature                   | `fetch()`                | Axios                              |
// | ------------------------- | ------------------------ | ---------------------------------- |
// | Built into JavaScript     | ✅ Yes                    | ❌ No (install required)            |
// | Automatically parses JSON | ❌ No (`response.json()`) | ✅ Yes (`response.data`)            |
// | Error handling            | Manual (`response.ok`)   | Easier (rejects non-2xx responses) |
// | Request cancellation      | More setup               | Simpler with built-in support      |
// | Common usage              | Small projects           | Medium to large projects           |

// | Method | Purpose             | Example        |
// | ------ | ------------------- | -------------- |
// | GET    | Read Data           | Get Users      |
// | POST   | Create Data         | Add Product    |
// | PUT    | Replace Entire Data | Update User    |
// | PATCH  | Update Partial Data | Change Email   |
// | DELETE | Remove Data         | Delete Product |


// Component Loads
//         │
//         ▼
//    useEffect()
//         │
//         ▼
// Send API Request (GET/POST/PUT/PATCH/DELETE)
//         │
//         ▼
// Server Processes Request
//         │
//         ▼
// Receive Response
//         │
//         ▼
// Update React State (useState)
//         │
//         ▼
// React Re-renders Component
//         │
//         ▼
// Display Data using map()


// React.memo() in React (Complete Guide with Multiple Examples)

// React.memo() is a Higher-Order Component (HOC) that memoizes a functional component.

// It prevents unnecessary re-rendering of a component if its props have not changed.

// Syntax
// const MemoizedComponent = React.memo(Component);

// or

// export default React.memo(Component);


// Why do we need React.memo()?

// By default, when a parent component re-renders, all its child components also re-render, even if their props haven't changed.

// Without React.memo():

// Parent Re-renders
//        │
//        ▼
// Child A Re-renders
// Child B Re-renders
// Child C Re-renders

// With React.memo():

// Parent Re-renders
//        │
//        ▼
// React compares old props and new props
//        │
//        ├── Props changed → Re-render
//        │
//        └── Props same → Skip Re-render

// This improves application performance.






































// Interview Questions
// 1. What is React.memo()?

// React.memo() is a Higher-Order Component that memoizes a functional component and skips re-rendering if its props haven't changed.

// 2. Does React.memo() stop all re-renders?

// No. It only skips re-renders caused by unchanged props. If the component's own state or context changes, it will still re-render.

// 3. How does React.memo() compare props?

// It performs a shallow comparison (reference comparison for objects/functions and value comparison for primitives).

// 4. Why do objects and functions often cause re-renders?

// Because a new object or function is created on each render, giving it a different reference even if its contents are identical.

// 5. When is useMemo() or useCallback() used with React.memo()?
// Use useMemo() to keep object or array references stable.
// Use useCallback() to keep function references stable.
// This allows React.memo() to recognize that props truly haven't changed and skip unnecessary re-renders.