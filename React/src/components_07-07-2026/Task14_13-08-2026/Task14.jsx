// What is React.memo()?

// React.memo() is a Higher-Order Component (HOC) that prevents unnecessary re-rendering of a functional component.

// It memorizes (caches) the rendered output of a component and reuses it if the props have not changed.

// const MemoizedComponent = React.memo(Component);

// export default React.memo(MyComponent);



// Why do we use React.memo()?

// Imagine a parent component updates its state.

// Normally:

// Parent re-renders

// All child components also re-render

// Even if a child’s props did not change.

// React.memo() skips the child re-render when props remain the same.



// React.memo vs useMemo vs useCallback

// Feature                  Purpose

// React.memo               Memoize a component

// useMemo                 Memoize a computed value

// useCallback             Memoize a function



// When Should You Use React.memo()?

// Use it when:

// Child components are expensive to render

// Parent re-renders frequently

// Child props usually remain unchanged

// Large lists or complex UI components

// Avoid using it everywhere.


// What is useMemo()?

// useMemo() is a React Hook that memoizes (caches) a computed value.

// It stores the result of an expensive calculation and reuses it on future renders until one of its dependencies changes.

// Syntax

// const memoizedValue = useMemo(() => {
//   // expensive calculation
//   return result;
// }, [dependencies]);

// The function runs only when dependencies change.

// Otherwise, React returns the cached value.


// Why do we use useMemo()?

// Imagine a component re-renders many times.

// If it performs a heavy calculation on every render, the app becomes slow.

// useMemo() prevents repeating the calculation unnecessarily.


// useMemo vs useCallback

// Many interviewers ask this.

// useMemo                                   useCallback

// Memoizes a value                         Memoizes a function

// Returns computed result                  Returns function reference

// useMemo(() => 10 * 10, [])               useCallback(() => {}, [])


// When Should You Use useMemo()?

// Use it when:

// Expensive calculations

// Filtering large lists

// Sorting data

// Complex mathematical operations

// Creating stable object references for React.memo

// Optimizing performance in large applications



// What is useCallback()?

// useCallback() is a React Hook that memoizes (caches) a function.

// It returns the same function reference between renders until one of its dependencies changes.

// Syntax

// const memoizedFunction = useCallback(() => {
//   // function logic
// }, [dependencies]);
// Why do we use useCallback()?

// In React, every time a component re-renders, functions are recreated.

// Example:

// function App() {
//   const handleClick = () => {
//     console.log('Clicked');
//   };
// }

// Every render creates a new function object.

// This becomes a problem when passing functions to React.memo() child components.


// When Should You Use useCallback()?

// Use it when:

// Passing functions to React.memo child components

// Functions are dependencies of useEffect

// Preventing unnecessary re-renders

// Optimizing large component trees

// Do not use it for every function.



// What is a Custom Hook?

// A Custom Hook is a JavaScript function that starts with use and uses one or more React Hooks inside it.

// It allows you to reuse stateful logic across multiple components.

// Syntax

// function useCustomHook() {
//   const [state, setState] = useState(...);

//   useEffect(() => {
//     // logic
//   }, []);

//   return state;
// }

// React requires custom hooks to start with use.

// Examples:

// useCounter

// useFetch

// useToggle

// useWindowSize

// Why do we need Custom Hooks?

// Imagine you write the same logic in many components.


// What is Lazy Loading?

// Lazy Loading means loading a component only when it is needed, instead of loading all components when the application starts.

// Normally, React loads all imported components immediately.

// With lazy loading, a component is downloaded on demand.



// Why do we need Lazy Loading?

// Imagine a large application with many pages.

// Home

// About

// Contact

// Dashboard

// Profile

// Settings

// Reports

// If all pages are loaded initially, the JavaScript bundle becomes large and the application starts slowly.

// Lazy loading improves:

// Initial loading speed

// Performance

// User experience

// Bundle size

// What is Code Splitting?

// Before lazy loading, React bundles everything into one file.


// How It Works

// App renders

// React sees lazy component

// Starts downloading About.js

// Shows fallback UI

// Download complete

// Renders About component