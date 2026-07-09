import { useState} from 'react'
import Counter2 from './Counter2';
import Display from './Display';

function GlobalParent() {
    const[count,setCount] = useState(0);
  return (
    <>
    <Counter2 count={count} setCount={setCount}/>
    <Display count={count}/>
    </>
  )
}

export default GlobalParent;















//Global state:
//Global State is application-wide data that multiple components can read and update from a central location.


// | Local State                                     | Global State                      |
// | ----------------------------------------------- | --------------------------------- |
// | Belongs to one component                        | Shared across multiple components |
// | Created using `useState()`                      | Managed in a central store        |
// | Cannot be accessed directly by other components | Any component can access it       |
// | Best for UI-specific data                       | Best for application-wide data    |
// | Easy to manage                                  | Better for large applications     |



//* Advantages of Global State
// Eliminates unnecessary prop drilling.
// Keeps shared data synchronized across components.
// Makes large applications easier to manage.
// Provides a single source of truth for shared data.
// Improves code organization and maintainability.

// Centralized State Management

// Centralized State Management means storing shared application data in a single location (often called a store or provider) instead of keeping separate copies in different components.


// **Common Ways to Manage Global State in React

// Context API (Built into React)
// Good for small to medium applications.
// No extra library required.

// Redux Toolkit
// Best for medium to large applications.
// Predictable and scalable state management.
// Zustand

// Lightweight and easy to learn.
// Recoil, Jotai, and other libraries
// Used for specific use cases.