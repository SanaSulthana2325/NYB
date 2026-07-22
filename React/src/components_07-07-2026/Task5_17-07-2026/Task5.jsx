// What is React?

// React is an open-source JavaScript library used to build user interfaces using reusable components.

// Developed by Facebook (Meta) in 2013
// Used for creating dynamic web applications
// Uses Component-Based Architecture
// Uses Virtual DOM for better performance



// | Feature              | Explanation                            |
// | -------------------- | -------------------------------------- |
// | Component-Based      | UI is divided into reusable components |
// | Virtual DOM          | Updates only changed elements          |
// | JSX                  | HTML inside JavaScript                 |
// | One-way Data Binding | Data flows from Parent to Child        |
// | Fast Rendering       | Efficient DOM updates                  |
// | Reusable Code        | Write once, use multiple times         |
// | Easy Learning        | Simpler than many frameworks           |
// | Large Community      | Huge ecosystem and support             |


// Advantages
// Fast
// Lightweight
// Reusable Components
// SEO Friendly (with Next.js)
// Easy Debugging
// Large Community
// Easy API Integration


// rect Liabraries and ecosystem:

// | Library                      | Purpose                      |
// | ---------------------------- | ---------------------------- |
// | React                        | Build UI                     |
// | React DOM                    | Render components to browser |
// | React Router                 | Page navigation              |
// | Redux Toolkit                | Global state management      |
// | Axios                        | API calls                    |
// | React Icons                  | Icons                        |
// | Tailwind CSS                 | Styling                      |
// | Material UI                  | Ready-made UI components     |
// | Bootstrap                    | Responsive CSS               |
// | Framer Motion                | Animations                   |
// | React Hook Form              | Form handling                |
// | Chart.js / Recharts          | Charts                       |
// | React Query (TanStack Query) | API caching and server state |


// What is Virtual DOM?

// Virtual DOM is a lightweight copy of the real DOM kept in memory.

// Real DOM

// ↓

// Virtual DOM

// ↓

// Compare

// ↓

// Update Only Changed Part

// virtual dom advantages:

// Advantages
// Faster
// Efficient
// Less memory usage
// Better user experience
// Optimized rendering



// Single Page Applications (SPA)
// What is SPA?

// A Single Page Application (SPA) is a web application that loads one HTML page initially and updates only the required content as the user navigates, without reloading the entire page.

// React is commonly used to build SPAs with libraries like React Router


// | Feature         | SPA                        | MPA (Multi-Page Application)               |
// | --------------- | -------------------------- | ------------------------------------------ |
// | Page Load       | One initial load           | Every page loads separately                |
// | Speed           | Faster after initial load  | Slower due to full page reloads            |
// | User Experience | Smooth                     | Less smooth                                |
// | Navigation      | Client-side                | Server-side                                |
// | Data Transfer   | Only required data         | Entire page                                |
// | Examples        | Gmail, Google Maps, Trello | Traditional news or documentation websites |


// Components
// What is a Component?

// A Component is a reusable piece of code that returns UI (User Interface).

// Functional Components
// What is a Functional Component?

// A Functional Component is simply a JavaScript function that returns JSX.

// Syntax
// function ComponentName() {
//     return (
//         <h1>Hello React</h1>
//     );
// }


// Class Components
// What is a Class Component?

// A Class Component is an ES6 class that extends React.Component and must include a render() method that returns JSX.

// syntax:

// import React, { Component } from "react";

// class App extends Component {
//     render() {
//         return (
//             <h1>Hello React</h1>
//         );
//     }
// }

// export default App;



// | Functional Component | Class Component               |
// | -------------------- | ----------------------------- |
// | JavaScript function  | ES6 class                     |
// | Uses Hooks           | Uses Lifecycle Methods        |
// | Less code            | More code                     |
// | Easy to understand   | Slightly complex              |
// | Recommended today    | Mostly used in older projects |


// What is JSX?

// JSX stands for JavaScript XML.

// It lets us write HTML-like syntax inside JavaScript.

// JSX Rules
// Return only one parent element.
// Close all tags.
// Use className instead of class.
// Use htmlFor instead of for.
// Use camelCase for event names and attributes.


// Fragments
// What is a Fragment?

// A Fragment lets you group multiple elements without creating an extra DOM node.

// Instead of adding unnecessary <div> elements, use a Fragment.

// Strict Mode
// What is Strict Mode?

// Strict Mode is a development tool that helps identify potential problems in a React application.

// It does not affect production builds.

// Why Use Strict Mode?
// Detects unsafe lifecycle methods
// Detects deprecated APIs
// Helps identify unexpected side effects
// Encourages best practices
// Prepares your application for future React versions

// advantages of strict mode:
// Advantages
// Finds bugs early
// Highlights deprecated APIs
// Encourages clean component design
// Improves code quality
// Helps make applications more reliable


// | Feature     | Functional Component | Class Component        | JSX                    |
// | ----------- | -------------------- | ---------------------- | ---------------------- |
// | Type        | JavaScript Function  | ES6 Class              | HTML-like Syntax       |
// | Returns     | JSX                  | JSX from `render()`    | UI Elements            |
// | State       | Hooks (`useState`)   | `this.state`           | Not applicable         |
// | Props       | Function parameter   | `this.props`           | Used within components |
// | Recommended | ✅ Yes                | Mainly legacy projects | Always used in React   |


// What are Props?

// Props (Properties) are used to pass data from a Parent Component to a Child Component.

// Think of props like function arguments.

// Parent sends data
// Child receives data
// Props are read-only (cannot be modified by the child)

// flows
// Parent Component
//       │
//       │ Props
//       ▼
// Child Component


// Why Use Props?
// Pass data between components
// Make components reusable
// Display dynamic content
// Improve code organization


// Props can be:

// String
// Number
// Boolean
// Array
// Object
// Function


// What is State?

// State is data that belongs to a component and can change over time.

// Whenever the state changes, React automatically re-renders the component.

// State is managed using the useState Hook in functional components.

// Why Use State?
// Store changing data
// Update the UI automatically
// Handle user interactions
// Create interactive applications


// | Feature    | Props                            | State                                        |
// | ---------- | -------------------------------- | -------------------------------------------- |
// | Meaning    | Data passed from parent to child | Data managed within the component            |
// | Ownership  | Parent component                 | Current component                            |
// | Mutable    | No (read-only)                   | Yes (can be updated)                         |
// | Updated By | Parent                           | Component itself using `setState`/`useState` |
// | Purpose    | Share data                       | Store changing data                          |
// | Re-render  | When parent passes new props     | When state changes                           |
// | Example    | Student name                     | Counter value                                |


// What is Dynamic Rendering?

// Dynamic Rendering means displaying different UI based on props, state, or other data.

// Instead of hardcoding values, React updates the UI automatically.

// What is Parent to Child Communication?

// In React, a Parent Component sends data to a Child Component using props.

// This is the most common type of communication.

// Data Flow
// Parent Component
//        │
//        │ Props
//        ▼
// Child Component

// React supports one-way data flow, meaning data always moves from parent to child.

// Why Use Parent to Child Communication?
// Pass data
// Reuse components
// Display dynamic information
// Share configuration

// What is Child to Parent Communication?

// A child component cannot directly modify or send data to its parent. Instead, the parent passes a function as a prop, and the child calls that function to send data back.

// Data Flow
// Parent
//    │
// Function Prop
//    ▼
// Child
//    │
// Calls Function
//    ▼
// Parent Receives Data


// Child to Child Communication
// What is Child to Child Communication?

// Two child components cannot communicate directly.

// Instead:

// The parent stores the shared data (often called lifting state up).
// One child updates the parent.
// The parent passes updated data to the other child.
// Communication Flow
//           Parent
//          /      \
//         ▼        ▼
//    Child A    Child B

// Child A and Child B communicate through the parent


// Component Hierarchy
// What is Component Hierarchy?

// Component Hierarchy is the parent-child relationship between React components.

// Every React application starts with a root component.


// Props Drilling
// What is Props Drilling?

// Props Drilling is the process of passing props through multiple intermediate components, even when those components do not use the data themselves.


// | Concept             | Description                                            | Data Flow                                |
// | ------------------- | ------------------------------------------------------ | ---------------------------------------- |
// | Parent to Child     | Parent sends data using props                          | Parent ➜ Child                           |
// | Child to Parent     | Child calls a function passed by the parent            | Child ➜ Parent (through callback)        |
// | Child to Child      | Parent stores shared state and passes it to children   | Child ➜ Parent ➜ Child                   |
// | Component Hierarchy | Parent-child relationship between components           | Tree structure                           |
// | Props Drilling      | Passing props through multiple intermediate components | Parent ➜ Intermediate Components ➜ Child |


// What is API Integration?

// API Integration allows your React application to communicate with a server to:

// Fetch data
// Save data
// Update data
// Delete data

// Why API Integration?
// Retrieve live data
// Store user information
// Authenticate users
// Perform CRUD operations
// Connect with external services


// Fetch API
// What is Fetch API?

// The Fetch API is a built-in JavaScript function used to make HTTP requests.

// No installation is required.


// Axios
// What is Axios?

// Axios is a third-party HTTP client library used for API requests.

// It is more convenient than Fetch because it automatically parses JSON and provides better error handling.


// | Feature              | Fetch                      | Axios                   |
// | -------------------- | -------------------------- | ----------------------- |
// | Built into browser   | ✅ Yes                      | ❌ No                    |
// | Installation         | Not required               | `npm install axios`     |
// | JSON Conversion      | `response.json()` required | Automatic               |
// | Error Handling       | Manual                     | Better built-in support |
// | Request Cancellation | Limited                    | Better support          |
// | Interceptors         | ❌ No                       | ✅ Yes                   |


// HTTP methods:
// | Method | Purpose                      |
// | ------ | ---------------------------- |
// | GET    | Read data                    |
// | POST   | Create data                  |
// | PUT    | Replace existing data        |
// | PATCH  | Update part of existing data |
// | DELETE | Remove data                  |


// Async/Await with API Calls
// Why Async/Await?

// API calls take time because data comes from a server.

// JavaScript uses asynchronous programming so the UI doesn't freeze while waiting for the response.

// async and await make asynchronous code easier to read than chaining many .then() calls.

// flow:
// Call Function

// ↓

// await fetch()

// ↓

// Server Response

// ↓

// await response.json()

// ↓

// Update State

// ↓

// Render UI


// Error Handling

// Errors can occur due to:

// No Internet
// Wrong API URL
// Server error (500)
// Unauthorized access (401)
// Resource not found (404)

// Use try...catch to handle such errors gracefully


// Loading States

// When data is loading, it's good practice to show a loading message or spinner instead of a blank page.