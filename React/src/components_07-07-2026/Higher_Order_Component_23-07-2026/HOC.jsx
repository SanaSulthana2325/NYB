// Higher Order Components (HOC) in React

// A Higher Order Component (HOC) is an advanced React pattern used to reuse component logic.

// A HOC is a function that takes a component as input and returns a new enhanced component with additional functionality.

// Syntax
// const EnhancedComponent = higherOrderComponent(OriginalComponent);

// Advantages of HOC
// Reuse component logic.
// Avoid duplicate code.
// Keep components clean.
// Separate business logic from UI.
// Easy to maintain.
// Easy to test.
// Can add authentication, logging, permissions, loading states, styling, etc.


// Disadvantages of HOC
// Can create deeply nested wrapper components ("wrapper hell").
// Makes debugging harder because component names become wrapped.
// Props can accidentally conflict between the HOC and wrapped component.
// In modern React, many HOC use cases are better handled with custom hooks.

// FLOW of HOC:

        //   Original Component

        //          Home

        //            │
        //            │
        //   withWelcome(Home)

        //            │

        //   Enhanced Component

        //            │

        // Welcome to React!

        //       Home Page


// Original Component
//        ↓
// Higher Order Component
//        ↓
// Enhanced Component


// | Component            | Higher Order Component                 |
// | -------------------- | -------------------------------------- |
// | Returns JSX          | Returns another component              |
// | Displays UI          | Enhances another component             |
// | Used directly in JSX | Wraps a component to add functionality |



// Why Are Higher Order Components (HOCs) Used?

// Higher Order Components (HOCs) are used to reuse common logic across multiple React components. Instead of writing the same code repeatedly in different components, you write it once in a HOC and wrap any component that needs that functionality.

// Definition

// A Higher Order Component (HOC) is a function that:

// Takes a component as input.
// Returns a new component with additional functionality.
// const EnhancedComponent = withSomething(OriginalComponent);


// Create Reusable Higher Order Components (HOCs)

// A reusable Higher Order Component (HOC) is a function that can be applied to multiple components to add the same functionality without rewriting the code.

// Instead of copying the same logic into every component, you write it once in a HOC and reuse it wherever needed.


// Advantages of Reusable HOCs
// Write common logic once.
// Reduce duplicate code.
// Improve code readability.
// Keep components focused on displaying UI.
// Easier to maintain and update.
// // Easy to apply the same behavior to many


// hat is Authentication?

// Authentication means verifying who the user is.

// It answers the question:

// "Is this user logged in?"

// If the user is logged in → Show the page.

// If not → Show the login message.

// Real-Life Example

// Think about your college portal.

// You enter your username and password.
// If they are correct, you can access your dashboard.
// If not, you are asked to log in again.

// This process is authentication.


// What is Loading?

// When data comes from an API, it takes time.

// Until the data arrives, we display

// Loading...


// What is Authorization?

// Authorization means checking what a logged-in user is allowed to access.

// It answers the question:

// "Does this user have permission to access this page?"


// | Feature   | Authentication                 | Authorization                    | Loading                                     |
// | --------- | ------------------------------ | -------------------------------- | ------------------------------------------- |
// | Purpose   | Check if the user is logged in | Check if the user has permission | Show a loading state while waiting for data |
// | Condition | `isLoggedIn`                   | `role === "Admin"`               | `loading === true`                          |
// | Success   | Show protected page            | Show allowed page                | Show component content                      |
// | Failure   | "Please Login First"           | "Access Denied"                  | "Loading..."                                |


// | Feature              | HOC                                                                        | Hook                            | Component Composition         |
// | -------------------- | -------------------------------------------------------------------------- | ------------------------------- | ----------------------------- |
// | What is it?          | Function that returns a new component                                      | Function that reuses logic      | Combining components together |
// | Purpose              | Add extra functionality to a component                                     | Share stateful logic            | Build UI from smaller pieces  |
// | Returns              | New component                                                              | State/functions/values          | JSX layout                    |
// | Uses Props           | Yes                                                                        | No (returns values instead)     | Yes                           |
// | Can Use React Hooks? | Usually no inside class HOCs; yes in function HOCs if following Hook rules | Yes                             | Yes                           |
// | Best For             | Authentication, Loading, Logging                                           | API calls, Forms, State, Timers | Layouts, Reusable UI          |
// | Modern React         | Still supported                                                            | Preferred                       | Preferred                     |


// 3. Component Composition
// Definition

// Component Composition means building larger components by combining smaller components together.

// Think of it as assembling LEGO blocks.
