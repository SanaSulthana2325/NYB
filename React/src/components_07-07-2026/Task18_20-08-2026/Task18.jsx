// React.memo()

// React.memo() is a performance optimization in React.

// It prevents a child component from re-rendering when its props have not changed.

// Basic idea

// Normally:

// Parent re-renders
//        ↓
// Child also re-renders

// With React.memo():

// Parent re-renders
//        ↓
// Has child's props changed?
//    ↓             ↓
//   No            Yes
//    ↓             ↓
// Skip render    Re-render

// The important point is:

// React.memo() checks the props of a component. If the props are the same, React can skip rendering that child.




// When should you use React.memo()?

// Use it when:

// A child component renders frequently.
// The parent renders frequently.
// The child's props usually remain the same.
// The child performs expensive rendering/calculations.
// You have large lists or complex UI components.


// | Concept               | Meaning                               |
// | --------------------- | ------------------------------------- |
// | `React.memo()`        | Memoizes a component                  |
// | Main purpose          | Avoid unnecessary re-renders          |
// | Checks                | Component props                       |
// | Props unchanged       | Can skip render                       |
// | Props changed         | Component renders                     |
// | Own state changed     | Component renders                     |
// | Context changed       | Component can render                  |
// | Object/function props | Reference matters                     |
// | `useMemo()`           | Can stabilize object/value references |
// | `useCallback()`       | Can stabilize function references     |




// useMemo() in React

// useMemo() is a React Hook used to remember (memoize) the result of a calculation so React doesn't have to calculate it again on every render.

// Basic syntax
// const memoizedValue = useMemo(() => {
//   return calculation;
// }, [dependencies]);

// Think of it as:

// Component renders
//       ↓
// Does dependency change?
//    ↙          ↘
//  No            Yes
//  ↓              ↓
// Use old       Calculate
// result        again

// useCallback() in React

// useCallback() is a React Hook used to remember a function between renders.

// The main purpose is to prevent a function from getting a new reference every time the component renders.

// Basic syntax
// const memoizedFunction = useCallback(() => {
//   // function code
// }, [dependencies]);

// Think of it like this:

// Component re-renders
//        ↓
// Is dependency changed?
//    ↙             ↘
//  No               Yes
//  ↓                 ↓
// Keep same       Create new
// function        function



// | Concept                                   | Meaning                                              |
// | ----------------------------------------- | ---------------------------------------------------- |
// | `useCallback()`                           | Memoizes a function                                  |
// | Main purpose                              | Keeps function reference stable                      |
// | Returns                                   | A function                                           |
// | Dependencies                              | Control when a new function is created               |
// | `[]`                                      | Function reference can stay stable across re-renders |
// | `[count]`                                 | New function when `count` changes                    |
// | Often used with                           | `React.memo()`                                       |
// | Does it make calculations faster?         | ❌ No                                                 |
// | Does it stop all re-renders?              | ❌ No                                                 |
// | Does it execute the function immediately? | ❌ No                                                 |


// React.memo()
//      ↓
// Memoizes COMPONENT rendering

// useMemo()
//      ↓
// Memoizes VALUE

// useCallback()
//      ↓
// Memoizes FUNCTION


// Lazy Loading means:

// Load a component or resource only when it is actually needed, instead of loading everything when the application starts.

// This can make a React application faster to load initially, especially when the application has many pages or large components.



// Why do we need Suspense?

// When React is loading the lazy component, there can be a small delay.

// So we need to tell React:

// "What should I display while the component is loading?"

// That's what Suspense does.

// <Suspense fallback={<p>Loading...</p>}>
//   <About />
// </Suspense>

// The fallback is displayed while the component is loading.

// Flow
// About requested
//       ↓
// About is loading
//       ↓
// Show "Loading..."
//       ↓
// About loaded
//       ↓
// Show About component



// Code Splitting in React

// Code Splitting means breaking a large JavaScript bundle into smaller chunks so the browser doesn't have to download all the application's code at once.

// Simple definition

// Code Splitting divides your application's JavaScript code into smaller pieces and loads those pieces when they are needed.