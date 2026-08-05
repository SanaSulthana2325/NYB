// Nested Routing

// Nested routing allows one page to contain child pages.


// 3. Dynamic Routing

// Dynamic routes use parameters.

// Think of it like this:

// URL

	

// Product ID

// /product/101                101

// /product/202                202

// /product/303                  303

// The changing part is called a route parameter.



// Why do we use :id?

// In React Router, a parameter is written with a colon (:).

// <Route path="/product/:id" element={<Product />} />

// Here:

// /product/ → fixed part

// :id → variable part

// id can contain any value.


// Understanding useParams()

// useParams() is a React Router hook.

// It reads the values from the URL.

// Suppose the URL is

// /product/101

// Then

// const { id } = useParams();

// becomes

// const id = "101";




// How the Flow Works

// Imagine the user clicks Product 202.

// Flow

// Click Link

// The user clicks Product 202.

// URL Changes

// The browser URL becomes /product/202.

// Route Matching

// React Router checks the routes and finds /product/:id.

// Parameter Extraction

// :id matches 202.

// useParams()

// useParams() returns { id: "202" }.

// Render

// The component displays Product ID: 202.



// Protected Route (Beginner-Friendly)

// Suppose only logged-in users can access Dashboard.



// Flow diagram

// When opening /dashboard

// /dashboard

// ProtectedRoute

// Check isLoggedIn

// /login (redirect)