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
