// In React, Pure Components are components that re-render only when their props or state actually change. They automatically perform a shallow comparison of the previous props/state and the new props/state before deciding whether to update.

// Think of a Pure Component as a component that asks:

// “Did my props or state change?” If yes, re-render. If no, skip re-rendering.

// This helps improve performance by avoiding unnecessary renders.

// What is a Pure Component?

// A Pure Component is a special type of React class component.

// Normal class component:

// class User extends React.Component {
//   render() {
//     return <h1>Sana</h1>;
//   }
// }

// Pure Component:

// class User extends React.PureComponent {
//   render() {
//     return <h1>Sana</h1>;
//   }
// }

// The only difference is that React.PureComponent automatically performs a shallow comparison of props and state.

// What is Shallow Comparison?

// Shallow comparison checks only the first level of values.

// Previous

	

// New




// 5

	

// 5




// "React"

	

// "React"




// {name: "Sana"}

	

// {name: "Sana"}

// For primitive values (number, string, boolean), comparison works well.

// For objects and arrays, React checks reference, not contents.

// const a = { name: "Sana" };
// const b = { name: "Sana" };

// a === b; // false

// Even though both objects contain the same data, they are different references.

// Pure Component vs Component

// Component                                          PureComponent

// Re-renders whenever parent renders            Re-renders only when props/state change

// No comparison                                      Shallow comparison

// Slightly slower with many unnecessary renders     Better performance in many cases


// Works with mutable updates                          requires immutable updates


// To understand Pure Components and their rendering behavior, remember one key idea:

// A Pure Component re-renders only when its props or state change (based on a shallow comparison).

// This makes React applications faster because unnecessary renders are skipped.

// What is a Pure Component?

// A Pure Component is a class component that extends React.PureComponent.

// import React, { PureComponent } from "react";

// class Child extends PureComponent {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

// Unlike React.Component, it automatically compares previous props/state with new props/state.

// Rendering Behavior
// Normal Component

// A normal component re-renders every time the parent re-renders.

// class Child extends React.Component {
//   render() {
//     console.log("Child Rendered");
//     return <h2>Child</h2>;
//   }
// }

// If the parent updates for any reason, the child renders again.

// Pure Component
// class Child extends React.PureComponent {
//   render() {
//     console.log("Pure Child Rendered");
//     return <h2>Child</h2>;
//   }
// }

// The child renders only if its props or state actually change.


// In React, performance optimization means making your application faster and more efficient by avoiding unnecessary work such as extra renders, repeated calculations, and loading large components when they are not needed.


// When do we optimize performance?

// Optimize performance when:

// A component renders many times.

// The UI becomes slow.

// Large lists or tables are displayed.

// Expensive calculations are repeated.

// The application has many nested components.

// Common Use Cases for Performance Optimization
// 1. Large Lists (Products, Users, Orders)


// What is React.memo()?

// React.memo() is a Higher Order Component (HOC) that memoizes a functional component.

// Memoize means remember the previous result.

// A component wrapped with React.memo() re-renders only when its props change.

// Without React.memo(), a child component re-renders every time its parent re-renders.

// Syntax
// const MemoizedComponent = React.memo(Component);

// or

// const UserCard = React.memo(function UserCard(props) {
//   return <div>{props.name}</div>;
// });
// Why do we use React.memo()?

// Imagine a parent component contains:

// Search input

// Product list

// Sidebar

// Footer

// When the search input changes, the parent re-renders.

// Without optimization, all child components re-render, even if they did not change.

// React.memo() prevents unnecessary re-renders.


// | Feature            | React.PureComponent        | React.memo()                    |
// | ------------------ | -------------------------- | ------------------------------- |
// | Used with          | Class components           | Functional components           |
// | Type               | Class inheritance          | Higher Order Component (HOC)    |
// | Syntax             | `extends PureComponent`    | `React.memo(Component)`         |
// | Checks             | Props + State              | Props only                      |
// | Comparison         | Shallow comparison         | Shallow comparison of props     |
// | State support      | Yes                        | No internal state comparison    |
// | Lifecycle methods  | Supports lifecycle methods | Does not have lifecycle methods |
// | Hooks support      | No                         | Yes                             |
// | Modern React usage | Less common                | More common                     |


// What is useMemo()?

// useMemo() is a React Hook that memoizes (caches) the result of a calculation.

// It remembers the computed value and recalculates it only when its dependencies change.

// Syntax
// const memoizedValue = useMemo(() => {
//   return expensiveCalculation();
// }, [dependencies]);

// The first argument is a function that returns a value.

// The second argument is the dependency array.

// React runs the function only when a dependency changes.

// Why do we use useMemo()?

// Imagine a component that performs an expensive calculation such as:

// Summing 100,000 numbers

// Filtering thousands of products

// Sorting a large table

// Calculating analytics data

// Without useMemo(), the calculation runs on every render.

// With useMemo(), React reuses the previous result.


// When Should You Use useMemo()?

// Use useMemo() when:

// A calculation is expensive.

// You are filtering or sorting large data.

// You are creating objects or arrays passed to React.memo() components.

// You want to avoid recalculating derived values.

// Do not use it for every variable.

// useMemo() itself has a small cost, so use it only when it provides a real performance benefit.

// What is useCallback()?

// useCallback() is a React Hook that memoizes (caches) a function.

// It returns the same function reference between renders until one of its dependencies changes.

// Syntax
// const memoizedFunction = useCallback(() => {
//   // function logic
// }, [dependencies]);

// The first argument is a function.

// The second argument is the dependency array.

// React returns the same function object unless a dependency changes.

// Why do we need useCallback()?

// In React, a new function is created on every render.

// Example:

// function App() {
//   const handleClick = () => {
//     console.log("Clicked");
//   };
// }

// Every time App renders, handleClick is a new function.

// This becomes a problem when:

// The function is passed to a child component.

// The child is wrapped with React.memo().

// The child keeps re-rendering because the function reference changes.


















































// 1. What is a Pure Component in React?

// Answer: A Pure Component is a class component that extends React.PureComponent. It performs a shallow comparison of props and state and re-renders only when they change. This helps improve performance by avoiding unnecessary renders.

// class User extends React.PureComponent {
//   render() {
//     return <h1>User</h1>;
//   }
// }
// 2. What is the difference between React.Component and React.PureComponent?

// Answer: React.Component re-renders whenever the parent re-renders, while React.PureComponent re-renders only when props or state change based on shallow comparison. Pure Components are used for performance optimization.

// 3. What is shallow comparison?

// Answer: Shallow comparison checks only the first level of props or state. For arrays and objects, it compares their references, not their contents.

// const a = [1, 2];
// const b = [1, 2];

// a === b; // false
// 4. Why does a Pure Component improve performance?

// Answer: A Pure Component avoids unnecessary re-rendering. If props and state remain the same, React skips rendering that component, reducing CPU work and making the application faster.

// 5. Why does push() not work properly with a Pure Component?

// Answer: push() mutates the original array, so the array reference does not change. Since Pure Components use shallow comparison, React thinks the array is unchanged and may skip rendering.

// this.state.items.push("Pen");

// this.setState({
//   items: this.state.items,
// });
// 6. How do you correctly update an array in a Pure Component?

// Answer: Create a new array using the spread operator.

// this.setState({
//   items: [...this.state.items, "Pen"],
// });

// This creates a new array reference, so the Pure Component re-renders.

// 7. What is the functional equivalent of PureComponent?

// Answer: The functional equivalent of PureComponent is React.memo. It memoizes a functional component and re-renders it only when its props change.

// const User = React.memo(function User({ name }) {
//   return <h1>{name}</h1>;
// });
// 8. What happens if a parent component re-renders but the child Pure Component receives the same props?

// Answer: The child does not re-render because PureComponent compares the previous and new props. If they are the same, React skips rendering the child component.

// 9. What is performance optimization in React?

// Answer: Performance optimization means making a React application faster by reducing unnecessary renders, avoiding repeated calculations, and loading components only when needed. Common techniques include React.memo, PureComponent, useMemo, and useCallback.

// 10. Give a real-world example of using React.memo.

// Answer: In an e-commerce website, product cards can be wrapped with React.memo. When the user types in a search box, the parent component re-renders, but unchanged product cards do not re-render, improving performance.

// const ProductCard = React.memo(function ProductCard({ product }) {
//   return <div>{product.name}</div>;
// });

// These 10 questions can each be answered in 1–2 minutes, making them ideal for interview preparation and daily practice.

