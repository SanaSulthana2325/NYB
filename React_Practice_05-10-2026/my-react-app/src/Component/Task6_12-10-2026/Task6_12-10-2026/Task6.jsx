function Home() {
  return (
  <>
  <h1>Welcome to Home Page</h1>
  </>
  )
}

function About() {
  return (
  <>
  <h1>Welcome to About Page</h1>
  </>
  )
}


//Link

import {Link,NavLink} from "react-router-dom";

function Nav(){
    return(
        <>
        <nav className="flex gap-6 p-4">
            <Link to="/">Home</Link>

            <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600 font-bold" : "text-gray-600"}> About</NavLink>
        </nav>
        </>
    );
}


// Dynamic Routes

import {useParams} from "react-router-dom";

function ProductDetails(){
    const{id} = useParams();
    return(
        <>
        <h2> Product ID:{id}</h2>
        </>
    )
}


import {useNavigate} from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    function handleLogin(){
        navigate("/dashboard");
    }
    return(
        <>
        <h2>Login Pages</h2>
        <button onClick={handleLogin}
        className="bg-pink-500 px-2 py-2"> Login</button>
        </>
    );
}

function Dashboard(){
    return(
        <>
        <h1> Welcome to Dashboard</h1>
        </>
    );
}

// Neated Routes

import{Outlet} from "react-router-dom"

function DashboardLayout(){
    return(
        <>
        <h1> My dashboard Sana</h1>
        <nav className="flex gap-4">

            <Link to="/dashboard"> Overview</Link>||
            <Link to="/dashboard/profile">Profile</Link>||
            <Link to="/dashboard/setting"> Setting</Link>
        </nav>
        <hr/>
        <Outlet/>
        </>
    )
}

function Overview(){
    return(
        <>
        <h2> Dashboard overview</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quibusdam vitae ad tenetur odio. Assumenda eius fugiat, voluptas atque rem quae nam quam accusantium itaque, ipsum architecto ut, porro quos.</p>
        </>
    )
}

function Profile(){
    return(
        <>
        <h2> My Profile Sana</h2>
        <p> name: nana</p>
        <p> Age:46</p>
        </>
    )
}

function Setting(){
    return(
        <>
        <h2> My Setting </h2>
        <p> display</p>
        <p> App setting</p>
        </>
    )
}


// Query Parameter

import{useSearchParams} from "react-router-dom"

function Pro(){
    const[searchParams,setSearchParams] = useSearchParams();

    const category = searchParams.get("category") || "all";

    return(
        <>
        <h2>Products</h2>
        <p> Selected Category: {category}</p>

        <button onClick={()=> setSearchParams({ category:"electronics"})}> Electronics</button>

        <button onClick={()=> setSearchParams({ category:"books"})}>Books</button>
        </>
    );
}

// 404 not found page

function Contact(){
    return(
        <>
        <h1> Contact page</h1>
        <p> email:sana@34gmail.com</p>
        </>
    )
}

function NotFound(){
    return(
        <>
        <h1> 404- page not found</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente, voluptate voluptatem tempora amet rerum in nulla officia architecto at ex, quas porro aliquid illum placeat dolore quae quibusdam. Cupiditate.</p>
        <Link to="/" className="text-blue-800"> Go to home</Link>
        </>
    )
}


//Protected Routes

import{Navigate} from "react-router-dom";

import{useState} from "react";

function ProtectedRoute({isLoggedIn,children}){
    if(!isLoggedIn){
        return(
            <>
            <Navigate to="/login1" replace/>
            </>
        )
    }
    return children;
}

function Login1({onLogin}){
    const navigate = useNavigate();

    function handleLogin(){
        onLogin();
        navigate("/dash");
    }
    return(
        <>
        <h2> Login Page</h2>

        <button onClick={handleLogin}> Demo Login</button>
        </>
    );
}

function Dash(){
    return(
        <>
        <h1> Protected Dashboard</h1>
        </>
    )
}

// Route-based component rendering




function Home1() {
  return <h2>Welcome to Home</h2>
}

function About1() {
  return <h2>This is About Us</h2>
}

function Contact1() {
  return <h2>Contact Us at support@example.com</h2>;
}

 function Da() {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-6">
        <Link to="/">Home</Link>
        <Link to="/about1">About</Link>
        <Link to="/contact1">Contact</Link>
      </nav>

      </div>
  );
}



export { Home, About,Nav, ProductDetails, Login ,Dashboard, DashboardLayout, Overview,Profile,Setting,Pro,Contact,NotFound,ProtectedRoute,Dash,Login1,Home1,About1,Contact1,Da}












// Client-side routing means changing the displayed component in the browser without requesting a completely new HTML page from the server for every navigation.



// BrowserRouter, Routes, and Route
// These are the fundamental components of React Router.
// - BrowserRouter: Enables browser-based routing.
// - Routes: Groups route definitions and selects the matching route.
// - Route: Connects a URL path to a React component.



// Link and NavLink
// Both are used to navigate between pages without reloading the entire webpage.
// - Link: Navigates to another route.
// - NavLink: Navigates and also lets you identify the currently active navigation link.



// Dynamic routes and URL parameters using useParams
// A dynamic route is a route where part of the URL changes depending on the data being displayed.
// For example:
// - /products/101
// - /products/102
// - /products/103
// Instead of creating three different routes, create one route using :id.


// Programmatic navigation using useNavigate
// Sometimes you need to navigate to another page after an action, such as submitting a form or logging in.
// The useNavigate() hook lets you navigate through JavaScript.


// Nested routes and layout routes
// Nested routes allow one route to appear inside another route.
// For example, a dashboard may contain:
// - Dashboard Overview
// - Dashboard Profile
// - Dashboard Settings
// All three pages can share the same sidebar and header.



// What does Outlet do?
// <Outlet /> indicates where the matched child route should render inside the parent layout.



// Query parameters using useSearchParams
// Query parameters are values added to a URL after a question mark (?).


// 404 Not Found pages
// A 404 page appears when the requested URL does not match any defined route.
// React Router supports a wildcard path, *, for this purpose.




// Protected routes and basic authentication flow
// A protected route restricts access to a page unless the user meets a condition, such as being logged in.
// For example, a dashboard should only be accessible to authenticated users.
// The following is a simplified demonstration using React state. It is not production-grade authentication.


// Route-based component rendering
// Route-based component rendering means displaying different React components depending on the current URL.


// Concept	                  Purpose	                               Example

// Client-side routing	     Navigate without a full page reload	Switching pages in an SPA

// BrowserRouter	         Enables browser routing	             Wrap the application

// Routes	                Selects the matching route	            <Routes>

// Route	               Maps a path to a component	            path="/about"

// Link	               Navigate to another route	            <Link to="/about">

// NavLink	              Navigate and detect active links	        isActive

// useParams	         Read dynamic URL values	                 /users/:id

// useNavigate	         Navigate programmatically	               navigate("/dashboard")

// Nested routes	    Render child pages inside a layout	        Dashboard and profile

// Outlet	            Displays a matched child route	             <Outlet />

// useSearchParams	     Read and update query parameters	         ?category=books

// Wildcard route	      Handle unmatched URLs	                       path="*"

// Protected routes	   Restrict pages based on authentication state	                     Login and dashboard

// Route-based rendering	Display components for matching paths	     Home, About, Contact