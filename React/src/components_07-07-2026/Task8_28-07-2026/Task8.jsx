// React Fragments (<></> or <React.Fragment>)

// A React Fragment lets you group multiple JSX elements without adding an extra HTML element (like a <div>) to the DOM.

// Why do we use Fragments?

// Normally, a React component can return only one parent element.


// | Fragment (`<>`)                                   | `<div>`                                   |
// | ------------------------------------------------- | ----------------------------------------- |
// | No extra HTML element                             | Adds an extra HTML element                |
// | Keeps DOM clean                                   | Makes DOM larger                          |
// | Better performance in many cases                  | Slightly more DOM nodes                   |
// | Cannot have props (except `key` with full syntax) | Can have `className`, `id`, `style`, etc. |


// When should you use Fragments?

// Use Fragments when:

// You need to return multiple JSX elements.
// You don't want an extra <div> in the DOM.
// You're rendering table rows/cells where extra elements would create invalid HTML.
// You want cleaner, more readable JSX.

// Use a <div> when:

// You need to apply className, id, style, or event handlers.
// You need an actual HTML container for styling or layout.


// Purpose of React Fragments

// The purpose of React Fragments is to group multiple JSX elements together without creating an extra HTML element in the DOM.

// Why are Fragments needed?

// A React component must return one parent element.


// Main purposes of Fragments
// ✅ Return multiple JSX elements from a component.
// ✅ Avoid adding unnecessary <div> elements.
// ✅ Keep the DOM clean and simple.
// ✅ Prevent invalid HTML (for example, inside tables).
// ✅ Make your JSX easier to read.



// React Fragment vs Normal HTML Wrapper (<div>)

// A React Fragment and a normal HTML wrapper element (like <div>) are both used to wrap multiple JSX elements, but they behave differently.

// | React Fragment (`<>...</>` or `<React.Fragment>`)         | HTML Wrapper (`<div>`)                                   |
// | --------------------------------------------------------- | -------------------------------------------------------- |
// | Does **not** create an extra HTML element.                | Creates an extra HTML element in the DOM.                |
// | Keeps the DOM clean.                                      | Adds an extra node to the DOM.                           |
// | Cannot have `className`, `id`, or `style` (short syntax). | Can have `className`, `id`, `style`, and event handlers. |
// | Best when you only need to group elements.                | Best when you need styling, layout, or event handling.   |


// | `<>...</>`            | `<React.Fragment>`            |
// | --------------------- | ----------------------------- |
// | Short and simple      | Full syntax                   |
// | Most commonly used    | Used when a `key` is required |
// | Cannot have `key`     | Can have `key`                |
// | No extra HTML element | No extra HTML element         |



// Higher-Order Components (HOC) in React

// A Higher-Order Component (HOC) is a function that takes a component as input and returns a new component with extra functionality.

// Definition

// A Higher-Order Component (HOC) is a function that accepts a component and returns an enhanced component.

// const EnhancedComponent = higherOrderComponent(OriginalComponent);

// syntax:
// function withSomething(Component) {
//   return function EnhancedComponent(props) {
//     return <Component {...props} />;
//   };
// }

// Advantages of HOCs
// ✅ Reuse common logic.
// ✅ Avoid duplicate code.
// ✅ Keep components clean.
// ✅ Easy to maintain.
// ✅ Follow the DRY (Don't Repeat Yourself) principle.

// | Normal Component                 | HOC                          |
// | -------------------------------- | ---------------------------- |
// | Displays UI                      | Adds extra functionality     |
// | Cannot enhance another component | Enhances another component   |
// | Used directly                    | Wraps another component      |
// | Example: `User`                  | Example: `withLoading(User)` |


// Where are HOCs used in real projects?
// E-commerce: Show loading while fetching products.
// Banking apps: Check if the user is logged in before showing account details.
// School portals: Only teachers can access the marks page.
// Hospital systems: Only doctors can access patient records.
// Admin dashboards: Only admins can manage users.

// What is the Purpose of HOCs?

// The main purpose of an HOC is to reuse common logic across multiple components.

// Instead of writing the same code again and again, write it once in an HOC and use it wherever needed.

// Original Component
//        │
//        ▼
// Higher-Order Component
//        │
//        ▼
// Enhanced Component


// Advantages of Reusable HOCs
// ✅ Write common logic once.
// ✅ Reuse it across many components.
// ✅ Reduce duplicate code.
// ✅ Keep components focused on displaying UI.
// ✅ Easy to maintain and update.


// | Feature      | HOC                                | Component Composition         | Hooks                               |
// | ------------ | ---------------------------------- | ----------------------------- | ----------------------------------- |
// | What is it?  | Function that enhances a component | Combining components together | Functions that reuse stateful logic |
// | Reuses       | Component logic                    | UI structure                  | Stateful and side-effect logic      |
// | Returns      | New enhanced component             | Combined UI                   | State and helper functions          |
// | Best for     | Authentication, loading, logging   | Layouts and reusable UI       | State, API calls, forms, timers     |
// | Modern React | Less common                        | Very common                   | Most common                         |



// Custom Hooks in React
// What is a Custom Hook?

// A Custom Hook is a JavaScript function that starts with use and allows us to reuse React logic (state, effects, API calls, etc.) across multiple components.

// Definition

// A Custom Hook is a reusable function that contains React Hooks like useState, useEffect, useRef, etc., and allows sharing logic between components.




// | Normal Function                 | Custom Hook                |
// | ------------------------------- | -------------------------- |
// | Handles normal JavaScript logic | Handles React logic        |
// | Cannot use hooks                | Can use useState/useEffect |
// | Example: calculateTotal()       | Example: useFetch()        |


// Benefits:

// ✅ Reduces duplicate code
// ✅ Improves code readability
// ✅ Makes components smaller
// ✅ Easy to maintain
// ✅ Logic can be shared across many components