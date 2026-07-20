
function Conditional_If_else() {

  const isLoggedIn = false;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  } else {
    return <h1>Please Login</h1>;
  }

}

export default Conditional_If_else;




























// Conditional Rendering in React (Complete Explanation)

// Conditional Rendering in React means displaying different UI (JSX) based on a condition.

// Just like JavaScript uses if, else, switch, and ternary operators, React uses these concepts to decide what should be rendered on the screen.


// Why do we use Conditional Rendering?

// We use conditional rendering to:

// Show or hide components
// Display loading messages
// Show login/logout buttons
// Display error messages
// Display "No Data Found"
// Show admin panel only to admins
// Render different layouts

// ternary operator syntax:
//condition ? truePart : falsePart


// Example 3: Using Logical AND (&&)

// When you want to display something only if the condition is true.

// Syntax

// condition && JSX

// Example 4: Using Logical OR (||)

// Show a default value when the first value is false.

// | Method             | Syntax                          | Best Use Case                           |        |   |               |                         |
// | ------------------ | ------------------------------- | --------------------------------------- | ------ | - | ------------- | ----------------------- |
// | `if...else`        | `if(condition){...} else {...}` | Complex logic before `return`           |        |   |               |                         |
// | Ternary (`? :`)    | `condition ? A : B`             | Two possible UI outcomes                |        |   |               |                         |
// | Logical AND (`&&`) | `condition && JSX`              | Show JSX only when true                 |        |   |               |                         |
// | Logical OR (`      |                                 | `)                                      | `value |   | defaultValue` | Display fallback values |
// | Element Variable   | Store JSX in a variable         | Keeps JSX cleaner for larger conditions |        |   |               |                         |
// | `return null`      | `if (!condition) return null;`  | Render nothing                          |        |   |               |                         |
// | `switch`           | `switch(value){...}`            | Multiple distinct conditions            |        |   |               |                         |


// What is the Need for Conditional Rendering?

// In React, conditional rendering is used to display different UI elements based on certain conditions. Instead of showing the same content to every user, React can render different components or elements depending on the application's state, user actions, or data.

// Benefits of Conditional Rendering

// Makes the UI dynamic and responsive.
// Improves the user experience by showing relevant information.
// Prevents unnecessary content from being displayed.
// Helps handle different application states like loading, success, and error.
// Enables role-based access control (e.g., Admin vs User).
// Makes applications more interactive and easier to maintain.


// What does "Show and Hide Components Dynamically" mean?

// In React, showing and hiding components dynamically means displaying or removing a component from the UI based on a condition.

// The condition can depend on:

// User actions (button click)
// State (useState)
// Props
// User role (Admin/User)
// API response
// Form input
// Login status

// Instead of always displaying every component, React decides which component should be visible.

// What is a Loading State?

// A Loading State is displayed while the application is waiting for data from an API or performing a long-running task.

// Real-Life Examples
// Fetching products from an e-commerce website.
// Loading employee records.
// Loading student details.
// Downloading reports.\

// What is an Empty State?

// An Empty State is displayed when there is no data to show.

// Examples:

// No products
// No employees
// No orders
// No notifications
// No search results

// Instead of showing a blank page, display a helpful message.