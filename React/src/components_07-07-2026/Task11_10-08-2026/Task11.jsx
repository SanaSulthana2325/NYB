// What is a Component in React?

// A component is a reusable piece of UI (User Interface).

// Think of a website like a house:

// Header

// Navigation bar

// Sidebar

// Product card

// Footer

// Each of these can be created as a separate component.


//Props are used to pass data from one component to another.


// Functional Component vs Class Component

// React mainly uses functional components now.



// Functional Component                   Class Component

// Uses a function                          Uses a class

// Simple and modern                        Older approach

// Uses Hooks                              Uses lifecycle methods

// Recommended                            Rarely used in new projects


// Beginner Interview Summary

// A component is a reusable piece of UI in React.

// Components are usually JavaScript functions.

// A component returns JSX.

// Components can be reused multiple times.

// Props allow data to be passed from a parent component to a child component.

// React applications are built by combining many small components.


// What is JSX?

// JSX (JavaScript XML) is a syntax used in React that allows you to write HTML-like code inside JavaScript.

// Normally, JavaScript does not understand HTML tags directly. JSX allows React to write UI in a simple and readable way.



// JSX vs HTML

// HTML                              JSX

// class                             className

// onclick                            onClick

// background-color                  backgroundColor

// Tags may remain open               All tags must be closed

// No JavaScript inside HTML            JavaScript inside {}



// JSX Interview Summary

// JSX stands for JavaScript XML.

// It allows writing HTML-like syntax inside JavaScript.

// JSX is converted into React.createElement() by Babel.

// JavaScript expressions are written inside {}.

// JSX must return one parent element.

// Use className instead of class.

// Use camelCase for attributes such as onClick, backgroundColor, etc.



// What are Props in React?

// Props (short for Properties) are used to pass data from one component to another component.

// Think of props like function arguments.


// Props vs State

// Props                              State

// Passed from parent               Stored inside component

// Read-only                        Can be updated

// Used to send data               Used to manage data

// External                            Internal



// Props (Properties) are used to pass data from a parent component to a child component.

// Props are received as an object.

// Access them using props.name or destructuring ({ name }).

// Props can be strings, numbers, booleans, arrays, objects, functions, or JSX.

// Props are read-only.

// The special prop children allows passing JSX between component tags.


// What is State in React?

// State is data that belongs to a component and can change over time.

// When state changes, React automatically re-renders the component and updates the UI.


// | Props                           | State                         |
// | ------------------------------- | ----------------------------- |
// | Data passed from parent         | Data managed inside component |
// | Read-only                       | Can be changed                |
// | Received from parent            | Created using `useState`      |
// | Used to pass data               | Used to manage changing data  |
// | Child cannot directly change it | Component can update it       |
// | Example: `name="Sana"`          | Example: `count = 0`          |


// Parent–Child Communication in React

// Parent–Child Communication means how data and actions are shared between a parent component and a child component.

// The most important rule is:

// Parent → Child  : Props
// Child → Parent  : Callback function passed as a prop

// Let's understand this with a real-time example.


        //       PARENT
        //    State / Data
        //         │
        //         │ Props
        //         ↓
        //      CHILD
        //         │
        //         │ Callback
        //         ↓
        //       PARENT
        //    State updated
        //         │
        //         ↓
        //  UI re-renders



// Parent → Child = Props

// Child → Parent = Callback function through Props

// Sibling → Sibling = Communicate through their common Parent


// What is Conditional Rendering?

// Conditional Rendering means displaying different UI based on a condition.

// In simple words:

// If a condition is true, show one thing; if false, show another thing.

// Real life examples:

// Login / Logout

// Add to Cart

// Online / Offline status

// Student Pass / Fail

// Loading spinner

// Admin dashboard


// In React, we commonly use:

// if...else

// Ternary operator ? :

// Logical AND &&

// Returning null



// What is List Rendering?

// List Rendering means displaying multiple items from an array in React.

// Instead of writing the same JSX repeatedly, we use map() to generate UI dynamically.

// For example, instead of writing:

// <li>Apple</li>
// <li>Mango</li>
// <li>Orange</li>

// We store data in an array and render it automatically.
