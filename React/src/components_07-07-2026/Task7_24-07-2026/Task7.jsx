// What is Conditional Rendering?

// Conditional Rendering means displaying different UI (User Interface) based on a condition.

// Just like in JavaScript we use if, else, or ? : (ternary operator), React uses the same logic to decide what should appear on the screen.

// Simple Definition (Interview Answer)

// Conditional Rendering is the process of showing or hiding React components or elements based on a condition.


// Different Ways of Conditional Rendering

// 1. if...else
// if (age >= 18) {
//   return <h1>Adult</h1>;
// } else {
//   return <h1>Minor</h1>;
// }

// Use this when you want to return completely different components.

// 2. Ternary Operator (Most Common)

// {
//   age >= 18 ? <Adult /> : <Minor />;
// }

// Syntax

// condition ? truePart : falsePart


// 3. Logical AND (&&)
// {
//   isAdmin && <button>Delete</button>;
// }

// Shows the button only when isAdmin is true.


// 4. Logical OR (||)
// const username = "";

// <h1>{username || "Guest User"}</h1>;

// If username is empty, it displays Guest User.



// 5. Returning null
// function Message() {
//   const show = false;

//   if (!show) {
//     return null;
//   }

//   return <h1>Hello</h1>;
// }

// Nothing is displayed when show is false.


// What is useEffect?

// useEffect is a React Hook that lets you run code after the component has rendered.

// Simple Interview Definition

// The useEffect Hook is used to perform side effects such as fetching data from an API, updating the document title, setting timers, or adding event listeners after a component renders.


// What is a Side Effect?

// A side effect is any operation that interacts with something outside the React component's rendering process.

// Examples:

// Fetching data from an API
// Setting a timer (setInterval, setTimeout)
// Updating the browser title
// Accessing localStorage
// Adding or removing event listeners


// Syntax of useEffect
// import { useEffect } from "react";

// useEffect(() => {
//   // Code to execute
// }, []);

// how useEffect works

// Component Renders
//        │
//        ▼
// React Updates UI
//        │
//        ▼
// useEffect Executes


// Explanation
// useEffect(() => {
// Runs the function after the component renders.
// }, []);
// The dependency array controls when the effect runs.


// Three Ways to Use useEffect

// 1. Runs Only Once
// useEffect(() => {
//   console.log("Runs Once");
// }, []);

// Use for:

// Fetching API data on page load
// Showing a welcome message
// Initializing settings


// 2. Runs Every Render
// useEffect(() => {
//   console.log("Runs Every Render");
// });

// Runs after every render because there is no dependency array.


// 3. Runs When Dependency Changes
// useEffect(() => {
//   console.log("Count Changed");
// }, [count]);

// Runs only when count changes.



// Dependency Array
// Dependency Array	When It Runs
// useEffect(() => {})	After every render
// useEffect(() => {}, [])	Only once after initial render
// useEffect(() => {}, [count])	When count changes


// Why do we return a cleanup function?

// Answer:
// The cleanup function removes subscriptions, timers, or event listeners when the component unmounts or before the effect runs again. This helps prevent memory leaks.

// What is an API?

// API stands for Application Programming Interface.

// It allows one application to communicate with another application and exchange data.

// Simple Definition (Interview Answer)

// An API is a bridge that allows two software applications to communicate and exchange data.

// API request lifeCycle:

// React Starts

// ↓

// useEffect()

// ↓

// fetch()

// ↓

// API Server

// ↓

// JSON Data

// ↓

// response.json()

// ↓

// setUsers()

// ↓

// users state updated

// ↓

// React Re-renders

// ↓

// Cards Displayed



// The map() method is one of the most frequently used methods in React. It is used to display lists of data such as users, products, messages, employees, and more.


// What is map()?

// The map() method is a JavaScript array method that loops through each element of an array and returns a new array.

// In React, we use it to render multiple JSX elements from an array.

// Interview Definition

// The map() method is used to iterate over an array and return a new array. In React, it is commonly used to render lists of components dynamically.

// Real-Life Example

// Imagine you are a teacher.

// You have a list of students:

// Sana
// Rahul
// Priya
// Ali

// Instead of writing:

// <h1>Sana</h1>
// <h1>Rahul</h1>
// <h1>Priya</h1>
// <h1>Ali</h1>

// You use map() once.

// Student Array

// ↓

// map()

// ↓

// Creates one card for every student.
// Syntax of map()
// array.map((item, index) => {
//    return (
//       JSX
//    )
// })
// Explanation
// array

// The list of data.

// item

// Current item in the array.

// index

// Current position (0, 1, 2...).


// What is Dynamic Form Handling?

// Dynamic Form Handling means managing multiple form fields using React state so that the form updates automatically as the user types or selects values.

// Interview Definition

// Dynamic Form Handling is the process of managing multiple form inputs using React state and updating them dynamically based on user interaction.

// Dynamic Form Handling is one of the most common React interview topics because almost every application has forms.

// Examples:

// Registration Form
// Login Form
// Job Application Form
// Banking Form
// Hospital Patient Form
// College Admission Form


// What is a Higher Order Component (HOC)?

// A Higher Order Component (HOC) is a function that takes a component as input and returns a new enhanced component with additional functionality.

// Interview Definition

// A Higher Order Component (HOC) is a function that accepts a component as an argument and returns a new component with additional features or behavior.


// Original Component

// ↓

// Higher Order Component

// ↓

// Extra Logic Added

// ↓

// Enhanced Component