import React from 'react'

function Example() {
    function sayHello(){
        alert("Hello!");
    }
  return <button onClick={sayHello}
  className='bg-red-400'>Click Me</button>;
    
  
}

export default Example





// Basic Syntax

// In React, events use camelCase.

// HTML

	

// React




// onclick

	

// onClick




// onchange

	

// onChange




// onmouseover

	

// onMouseOver




// onkeydown

	

// onKeyDown

// React example:

// <button onClick={handleClick}>Click</button>


// Constructor Binding vs Arrow Function

// Constructor Binding                  Arrow Function

// Need constructor                     No constructor needed

// this.handleClick.bind(this)        Automatic this binding

// Older React style                    Modern React style

// More code  
// 
// 
// Function Reference

// A function reference means you give React the function itself.                               Less code



// function Reference                   Inline Event Handling

// onClick={handleClick}                  onClick={() => handleClick()}

// No parameters needed                      Can pass parameters

// Reuses the same function            Creates a new function each render

// Better performance                   Slightly less efficient

// Cleaner code                             More flexible




// Best for simple actions

	

// Best for arguments and quick logic

// Which One Should You Use?

// Use function reference when:

// You are simply calling a function.

// No arguments are required.

// You want cleaner and more efficient code.

// Example:

// <button onClick={handleClick}>
//   Save
// </button>

// Use inline event handling when:

// You need to pass parameters.

// You want a small piece of logic.

// You need access to both the event and custom data.

// Example:

// <button onClick={() => deleteItem(5)}>
//   Delete
// </button>
// Interview Answer

// Function Reference: onClick={handleClick} passes the function directly to React. It is more efficient because React can reuse the same function.

// Inline Event Handling: onClick={() => handleClick()} creates a new function during rendering. It is mainly used when we need to pass parameters or execute additional logic.

// For beginners, remember this rule:

// No parameter → use function reference

// Parameter needed → use inline arrow function