// What is Browser Routing?

// Imagine a website with multiple pages:

// Home

// About

// Contact

// Products

// In a normal website, when you click About, the browser loads a new HTML page.

// Example:

// example.com/ → Home page

// example.com/about → About page

// example.com/contact → Contact page

// In React, we usually build a Single Page Application (SPA). That means the browser does not reload the entire page when you move between pages. Instead, React changes only the content that needs to change.

// This process is called Browser Routing.




// Without routing vs with routing

// Without Routing                  With Browser Routing

// Reloads the page                Does not reload the page

// Loads a new HTML file              Changes component only

// Slower                                 Faster

// Traditional websites              React applications




// Simple Definition

// Single Page Application (SPA)                   Browser Routing (BrowserRouter)

// A type of web application                        A routing method used inside an SPA

// Loads only one HTML page                        Changes the URL without reloading the page

// Entire application works on a single page           Helps navigate between components/pages

// Example: Gmail, Facebook, React app                  Example: React Router's BrowserRouter

// Think of it like this:

// SPA = the whole application concept

// BrowserRouter = the navigation system inside that application



// What Happens Here?

// BrowserRouter

// Enables browser routing.

// Watches the URL in the address bar.



// Routes

// A container that holds all routes.



// Route

// Connects a URL path with a React component.

// URL                   Component Rendered
// /                         Home

// /about                    About

// /contact                  Contact

// Visual Flow

// Browser URL

// /about

// BrowserRouter

// Checks the current URL and matches a route.

// Route match

// /about → About component

// Rendered page

// About Page

// React renders the About component without reloading the page.



// What is React Router?

// React Router is a library used in React to create navigation between different pages in a React application.

// Imagine a website that has:

// Home page

// About page

// Contact page

// Products page

// In React, we usually build a Single Page Application (SPA), where the page does not reload when moving between pages.

// React Router makes this possible.

// Simple definition:

// React Router allows us to display different React components based on the URL without reloading the browser page.



// Why Do We Need React Router?

// Suppose you have a React app.

// Without React Router:

// function App() {
//   return (
//     <div>
//       <Home />
//       <About />
//       <Contact />
//     </div>
//   );
// }

// All components appear together.

// Output:

// Home
// About
// Contact

// But in a real website, we want:

// / → Home

// /about → About

// /contact → Contact

// React Router helps us show only one page at a time based on the URL.

// Installing React Router

// First install the library:

// npm install react-router-dom

// This package contains all routing features.

// Basic Structure

// A React Router application usually looks like this:

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// This is the basic routing setup.

// Now let's understand each part.

// BrowserRouter

// BrowserRouter is the main router component.

// It enables routing in your application.

// <BrowserRouter>
//   ...
// </BrowserRouter>



// What is a Path?

// The path is the URL pattern.

// Examples:

// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
// <Route path="/contact" element={<Contact />} />

// If the browser URL is /contact, React displays Contact.


// What is the Element Prop?

// element tells React which component should be rendered.

// Example:

// <Route path="/about" element={<About />} />

// Here:

// path="/about" → URL

// element={<About />} → Component to display


// Why Is React Router Fast?

// Traditional website:

// Click About

// Browser requests a new page from the server

// Server sends HTML

// Browser reloads




// React Router:

// Click About

// URL changes

// React renders About component

// No browser reload

// This makes navigation faster and smoother.


// What is Routing?

// Routing means deciding which page should be shown when a user visits a URL.



// Simple Definition

// Server-Side Routing                                   Client-Side Routing

// Server decides which page to send              Browser (React) decides which component to show

// Page reloads                                                No page reload

// New HTML is requested from server                      Existing page updates dynamically

// Traditional websites                                        React Single Page Applications



// Server-side routing flow

// 1. User clicks About

// 2. Browser sends a request to the server

// 3. Server generates or finds the About HTML page

// 4. Server sends a new HTML page back

// 5. Browser reloads and displays the About page




// Client-side routing flow

// 1. User clicks About

// 2. React Router detects the URL change

// 3. React renders the About component

// 4. Only the content changes

// 5. The browser does not reload


// Advantages and Disadvantages
// Server-Side Routing
// Advantages

// Better for SEO (search engines)

// Faster first page load

// Works without JavaScript



// Disadvantages

// Page reload on every navigation

// Slower user experience

// More server requests



// Client-Side Routing
// Advantages

// Very fast navigation

// Smooth user experience

// Less server communication

// Ideal for SPAs




// Disadvantages

// Initial load may be larger

// Requires JavaScript

// SEO can be harder (unless using frameworks like Next.js)



// Interview-Friendly Comparison

// Feature                   Server-Side Routing                            Client-Side Routing

// Who handles routing?         Server                                       Browser/React Router

// Page reload                    Yes                                                No

// Navigation speed               Slower                                           Faster

// HTML request on each page       Yes                                               No

// Best for                     Traditional websites                              React SPAs

// Common tools                PHP, ASP.NET, Rails                                React Router
