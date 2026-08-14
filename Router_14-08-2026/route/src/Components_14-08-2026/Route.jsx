// What is React Router?

// React Router is a library that allows navigation between different pages (components) in a React application without reloading the browser.

// Think of it like this:

// A normal website loads a new HTML page every time you click a link.

// A React application usually has one HTML file.

// React Router changes which component is displayed while keeping the app running.

// Feature                          Purpose

// BrowserRouter                   Enables routing

// Routes                          Holds all Route components

// Route                           Maps URL to component

// Link                            Navigate without reload

// NavLink                         Navigation with active styling

// useNavigate                     Navigate programmatically

// Navigate                       Redirect to another route

// useParams                       Read URL parameters

// Outlet                          Render nested child routes

// route                               404 page




// What is BrowserRouter?

// BrowserRouter is a component provided by react-router-dom that enables routing in a React application using the HTML5 History API.

// It keeps the UI synchronized with the URL in the browser.

// Without BrowserRouter, React Router components such as Route, Routes, Link, NavLink, useNavigate, and useParams will not work.

// A simple way to remember it:

// BrowserRouter watches the browser URL.

// When the URL changes, it tells React Router which component should be displayed.

// It does this without reloading the page.

// Why do we need BrowserRouter?

// Imagine a React app with three pages:

// Home

// About

// Contact

// Without BrowserRouter, clicking a link would behave like a normal website and reload the entire page.

// With BrowserRouter, only the component changes.



// What BrowserRouter Does Internally

// Think of the flow:

// BrowserRouter flow

// User clicks About

// Link changes URL to /about

// BrowserRouter detects URL change

// Routes finds matching Route

// About component renders

// No page reload occurs.



// BrowserRouter vs Normal HTML Navigation

// Normal HTML (<a>)                       BrowserRouter + Link

// Reloads page                            No page reload

// Loses React state                       Preserves React state

// Slower navigation                         Faster navigation

// Requests new HTML from server           Renders React component




// Routes vs Route

// Routes                               Route

// Container component               Individual route

// Holds multiple routes             Maps one URL to one component

// Performs route matching            Defines path and element

// Usually one per route group           Can be nested





// What is a Protected Route?

// A Protected Route is a route that only authenticated (logged-in) users can access.

// For example:

// Route                  Access

// /login                   Anyone

// /about                     Anyone

// /dashboard               Logged-in users only

// /profile                  Logged-in users only

// /settings                    Logged-in users only




// If a user is not logged in and tries to visit /dashboard, they should be redirected to /login.

// Why Do We Need Protected Routes?

// Imagine a banking application.

// Without protection:

// Anyone can open /account

// Anyone can open /transactions

// Anyone can open /profile

// This is insecure.

// Protected routes ensure that only authenticated users can view sensitive pages.