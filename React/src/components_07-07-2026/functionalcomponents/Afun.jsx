import React from 'react'

function Afun() {
  //console.log("App comment rendered")
  return (
    <div>
        <h1>hello world</h1>
    </div>
  )
}

export default Afun



//A Functional Component in React is a JavaScript function that returns JSX (HTML-like syntax). 
// It is the simplest and most commonly used way to create components in modern React.

//
// Advantages of Functional Components
//Simple and easy to write.
//Easy to understand and maintain.
//Support React Hooks such as useState and useEffect.
//Preferred in modern React development.
//Improve code reusability by creating small, reusable UI components.//

//| **Functional Components**                                                   | **Class Components**                                                  |
//| --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
//| Written as JavaScript functions.                                            | Written as ES6 classes.                                               |
//| Do not use the `render()` method.                                           | Must include a `render()` method.                                     |
//| Use React Hooks (`useState`, `useEffect`) for state and lifecycle features. | Use `this.state` and lifecycle methods like `componentDidMount()`.    |
//| Simpler and easier to write.                                                | More verbose and requires more boilerplate code.                      |
//| Do not use the `this` keyword.                                              | Use the `this` keyword to access state and props.                     |
//| Preferred in modern React development.                                      | Mainly used in older (legacy) React applications.                     |
//| Better readability and easier maintenance.                                  | Slightly more complex to understand and maintain.                     |
//| Generally provide better developer experience with Hooks.                   | Useful for maintaining existing projects built with class components. |


// understand the Purpose of React Strict Mode

//React Strict Mode is a development tool that helps developers identify potential problems in a React application. It does not affect the production build and is only active during development.

//Purpose of React Strict Mode
//Detects potential bugs early during development.
//Warns about unsafe lifecycle methods.
//Identifies deprecated APIs.
//Detects unexpected side effects in components.
//Encourages writing clean and reusable React code.
//Helps ensure components are compatible with future React versions.