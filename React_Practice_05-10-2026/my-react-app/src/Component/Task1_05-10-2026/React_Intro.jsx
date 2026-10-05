 function React_Intro(){
    return(
        <>    
    <h1> Hello Wrold!!!</h1>

    <p> hello sam</p>
    </>
    )
 }


 //y we use react

 function Button(){
    return (
        <>
        <button> click me</button>
        
    </>
    )

 }

 function Welcome(){
    return(
        <>
        <h1> Welcome To React</h1>
        </>
    )
 }

 // component

 function Header(){
    return(
        <>
        <h1> My website- Tasan</h1>
        </>
    )
 }
 
 function Footer(){
    return(
        <>
        <p> CopyRight 2026</p>
        </>
    )
 }

 

 export {React_Intro, Button, Welcome, Header,Footer};












// Introduction to React
// What is React?

// React is a JavaScript library used to build user interfaces (UI), especially for websites and web applications.

// React was developed by Facebook (Meta).

// Instead of writing one large HTML page, React allows us to divide the UI into small reusable pieces called components.



// Why React is Used

// React is used because it makes it easier to build interactive and reusable websites.

// Main reasons:
// Reusable components
// Easy to manage UI
// Faster updates to the page
// Easier to maintain large applications
// Supports interactive applications
// Uses JSX
// Large developer community


// React Features

// Some important React features are:

// Components
// JSX
// Reusable UI
// Virtual DOM
// One-way data flow
// Hooks
// Declarative UI


// React Project Structure

// When you create a React project, you will see several files and folders.


// Important files

// src/

// Contains most of your React code.

// App.jsx

// Usually contains the main application component.

// main.jsx

// Connects the React application to the HTML page.




// React Application Setup

// One of the easiest ways to create a React application today is using Vite.


// Components

// A component is a reusable piece of UI.

// For example, a website can be divided into:

// Website
// │
// ├── Header
// ├── Navbar
// ├── Main Content
// ├── Card
// └── Footer




// | Topic                     | Simple Meaning                                 |
// | ------------------------- | ---------------------------------------------- |
// | **React**                 | JavaScript library for building UI             |
// | **Why React**             | Makes UI reusable and easier to manage         |
// | **Features**              | Components, JSX, Virtual DOM, Hooks, etc.      |
// | **Project Structure**     | Organization of React files/folders            |
// | **Application Setup**     | Creating a React project using tools like Vite |
// | **Components**            | Reusable pieces of UI                          |
// | **Functional Components** | JavaScript functions that return JSX           |
// | **JSX**                   | HTML-like syntax inside JavaScript             |
// | **JSX Rules**             | Rules for writing valid JSX                    |
// | **Valid JSX**             | JSX that follows React's syntax rules          |
// | **Invalid JSX**           | JSX containing syntax/rule errors              |
// | **Fragments**             | Group elements without adding extra HTML       |
// | **StrictMode**            | Helps detect potential problems in development |
// | **Rendering**             | Displaying components on the webpage           |
// | **Calling Functions**     | Using JavaScript functions inside JSX          |


// Create
//    ↓
// npm create vite@latest
//    ↓
// Go inside project
//    ↓
// cd my-react-app
//    ↓
// Install packages
//    ↓
// npm install
//    ↓
// Run project
//    ↓
// npm run dev