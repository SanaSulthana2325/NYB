// Introduction to React component testing
// Component testing means checking whether a React component behaves as expected.

 function StudentHeader(){
    return(
        <>
        <h1> Student Management</h1>
        </>
    )
}

export default StudentHeader;
















// Vitest or Jest fundamentals
// Vitest and Jest are testing frameworks. They help you write tests, check expected results, and report failures.
// - test() defines a test case.
// - expect() specifies what you expect.
// - toBe() checks an exact value.
// - toEqual() checks equality of values or objects.
// - toBeInTheDocument() checks whether an element exists in the rendered page.


// React Testing Library
// React Testing Library helps you test components through the same things a user sees and does, rather than inspecting internal implementation details.


// Production build using Vite
// A development server helps you write and test code. A production build prepares optimized files for deployment.



// Build and environment configuration
// Environment variables let you configure values that differ between development and production, such as API URLs.


// Basic deployment preparation
// Before deploying, check these items:
// - [ ] npm run test:run passes.
// - [ ] npm run build succeeds.
// - [ ] The production API URL is correct.
// - [ ] The backend allows requests from the deployed website (CORS).
// - [ ] Browser routing is configured with the host's fallback rules if you use React Router.
// - [ ] No secrets are exposed in frontend code.
// A Vite app can be deployed to a static hosting provider such as Netlify, Vercel, or GitHub Pages. A backend API, if required, must be deployed or hosted separately.



// Git branching and pull requests
// Git tracks changes to your code. GitHub hosts your repository and supports collaboration through branches and pull requests.
// Imagine you are adding form validation to the student application. You should make the changes in a feature branch rather than directly in the main branch.



// GitHub README and project documentation
// A README.md file explains what your project does, how to install it, how to test it, and how to run it.