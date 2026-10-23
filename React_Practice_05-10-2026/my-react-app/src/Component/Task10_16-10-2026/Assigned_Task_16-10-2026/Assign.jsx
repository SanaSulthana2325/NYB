

// Understand the tools

// Tool	                 Purpose

// Vite	            Creates and runs the React application

// Vitest	             Runs automated tests

// React Testing	    Renders React components in tests
//  Library
// user-event	       Simulates user actions like clicking and typing

// jest-dom	       Provides readable DOM assertions such as toBeInTheDocument()


// npm test runs tests in watch mode.

// npm run test:run runs the tests once and exits.



// Write Tests for Reusable Components in React
// Let's use a simple Student Management Application to learn how to test reusable React components using Vitest and React Testing Library.
// A reusable component is a component that you create once and use in multiple places. For example, a Button, Input, StudentCard, or Table component


// What will we test?
// Test	               Expected behavior

// Input fields	       Accept student name and email

// Required validation	   Reject empty fields

// Email validation	  Reject invalid email formats

// Successful submission	Display a success message

// User interaction	   Respond to typing and button clicks



// React Testing: Conditional Rendering and Navigation
// Let's learn how to test conditional rendering and navigation using React, Vitest, and React Testing Library with a practical Student Management Application.
// We will test two features:
// - Conditional rendering: Show different UI depending on the application's state.
// - Navigation: Check whether clicking a link takes the user to the correct page.
// 1. Test conditional rendering
// Conditional rendering means displaying different content depending on a condition.



// What did we test?
// Condition	     Expected UI

// loading = true	  Loading message

// error = true	      Error message

// Empty students array	Empty-state message

// Students available	 Student names

// The component checks loading first, then error, and then the student list. This order ensures that the appropriate state is displayed.


// Test navigation in React
// Navigation allows users to move between pages without reloading the entire application. React Router is commonly used for this.
// Real-time example: A staff member clicks “Students” to open the student list or “Dashboard” to return to the dashboard.