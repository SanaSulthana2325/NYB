// React.memo() in React (Complete Explanation)

// React.memo() is a Higher-Order Component (HOC) that memoizes (remembers) the result of a functional component.

// It tells React:

// "If the props passed to this component haven't changed, don't render it again."

// This helps improve the performance of React applications by avoiding unnecessary re-renders.

// Why do we need React.memo()?

// By default, whenever a parent component re-renders, all of its child components also re-render.

// Even if the child component's data (props) hasn't changed, React still renders it again.

// Without React.memo()
// Parent Component
//        │
//        ▼
// Child A Re-renders
// Child B Re-renders
// Child C Re-renders

// This can waste CPU time, especially if child components are complex.

// With React.memo()
// Parent Component
//        │
//        ▼
// React checks child props
//        │
//        ├── Props Changed
//        │      │
//        │      ▼
//        │   Re-render Child
//        │
//        └── Props Same
//               │
//               ▼
//         Skip Re-render


// Parent Re-renders
//        │
//        ▼
// React.memo()
//        │
//        ▼
// Compare Old Props
//        │
// Compare New Props
//        │
//  ┌───────────────┐
//  │               │
//  ▼               ▼
// Same          Different
//  │               │
//  ▼               ▼
// Skip Render   Re-render


// Shallow Comparison of Props

// React.memo() performs a shallow comparison.

// It compares the top-level values of props, not nested objects.

// Primitive Values


// When Does React.memo() Improve Performance?

// Use it when:

// Child components are expensive to render.
// Parent component re-renders frequently.
// Child props rarely change.
// Rendering large lists or dashboards.
// Product cards in e-commerce apps.
// Chat message components.
// User profile cards.
// Tables with many rows.


// Advantages of React.memo()
// Improves application performance.
// Reduces unnecessary rendering.
// Makes large applications more efficient.
// Works well with reusable components.
// Easy to implement.



// Limitations
// Only works with functional components.
// Uses shallow comparison, not deep comparison.
// Doesn't prevent re-renders caused by the component's own state changes.
// Doesn't prevent re-renders caused by context updates.
// New object, array, or function props can still trigger re-renders unless stabilized with useMemo() or useCallback().


// | Feature  | React.memo()        | useMemo()                      | useCallback()        |
// | -------- | ------------------- | ------------------------------ | -------------------- |
// | Used for | Components          | Values                         | Functions            |
// | Prevents | Component re-render | Recalculating expensive values | Recreating functions |
// | Returns  | Memoized component  | Memoized value                 | Memoized function    |



// | Without React.memo()   | With React.memo()     |
// | ---------------------- | --------------------- |
// | Parent renders         | Parent renders        |
// | All UserCards render   | UserCards skipped     |
// | 10 unnecessary renders | 0 unnecessary renders |
// | Slower for large lists | Faster                |
// | Higher CPU usage       | Lower CPU usage       |
