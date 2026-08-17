// Controlled and Uncontrolled Components in React
import Functional_with_State from './../Task5_17-07-2026/Comparison_17-07-2026/Functional_Class_Component/Functional_component/Functional_with_State';

// The main difference is:

// Controlled Component → React controls the form data.
// Uncontrolled Component → The DOM controls the form data.


// React State
//      ↓
//    Input
//      ↓
//  User changes input
//      ↓
//   onChange
//      ↓
// React State updates


// | Controlled            | Uncontrolled                               |
// | --------------------- | ------------------------------------------ |
// | `useState()`          | `useRef()`                                 |
// | React controls value  | DOM controls value                         |
// | Uses `value`          | Usually uses `defaultValue`                |
// | Uses `onChange`       | No need for `onChange` just to store value |
// | Re-renders on changes | Doesn't re-render for every input change   |



// useRef is a React Hook that lets you store a value or get a direct reference to a DOM element without causing a re-render when the value changes.

// Simple definition

// useRef() is mainly used to access DOM elements directly or store a value that should persist between renders without triggering a re-render.

// Basic syntax
// const myRef = useRef();


// unControlled Component:
// User types
//      ↓
// DOM stores value
//      ↓
// User clicks Submit
//      ↓
// React accesses DOM using ref
//      ↓
// ref.current.value



// | Feature                    | Controlled    | Uncontrolled      |
// | -------------------------- | ------------- | ----------------- |
// | Data controlled by         | React         | DOM               |
// | Uses `useState`            | Usually yes   | Usually no        |
// | Uses `useRef`              | Not necessary | Usually yes       |
// | Value                      | `value`       | DOM value         |
// | Checkbox                   | `checked`     | DOM               |
// | Updates                    | Every change  | When accessed     |
// | Validation                 | Easier        | Less convenient   |
// | React knows current value? | Yes           | Not automatically |
// | Best for                   | Complex forms | Simple forms      |


// When should we use Controlled Components?

// Use controlled components when you need:

// Real-time validation
// Live search
// Filtering
// Character counters
// Conditional UI
// Dynamic forms
// Form submission processing
// Enabling/disabling buttons
// Complex form logic


// Registration Form
//         ↓
// React State
//         ↓
// Validation
//         ↓
// Error Messages
//         ↓
// Submit


// When should we use Uncontrolled Components?

// Uncontrolled components can be useful when:

// The form is very simple
// You don't need to track every change
// You only need the value when submitting
// You want to interact directly with the DOM
// You are working with certain third-party libraries

// React Form Handling

// Form handling in React means collecting, managing, validating, and submitting data entered by the user.

// For example, a form may contain:

// Name
// Email
// Password
// Age
// Gender
// Course
// Checkbox
// Message

// In React, form handling is commonly done using controlled components, where form values are stored in state.

// Why e.preventDefault()?

// When you submit a normal HTML form, the browser reloads the page.

// In React, we usually don't want that.

// So we use:

// e.preventDefault();

// It prevents the browser's default form submission.

// Interview answer

// e.preventDefault() prevents the default browser behavior, such as reloading the page when a form is submitted.

    //        FORM
    //         ↓
    //   User enters data
    //         ↓
    //     onChange
    //         ↓
    //    Update State
    //         ↓
    //     Validation
    //         ↓
    //    User clicks Submit
    //         ↓
    //   handleSubmit()
    //         ↓
    // e.preventDefault()
    //         ↓
    //    Submit data




    // Dynamic form filed flow


    //              STATE
    //            ↓
    //     Array of objects
    //            ↓
    //          map()
    //            ↓
    //     Render inputs
    //            ↓
    //     User enters data
    //            ↓
    //       onChange()
    //            ↓
    //    Update array/object
    //            ↓
    //       setState()
    //            ↓
    //       Re-render