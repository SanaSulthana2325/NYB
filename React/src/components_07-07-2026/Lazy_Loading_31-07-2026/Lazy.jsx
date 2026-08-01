// What is Lazy Loading?

// Lazy loading means loading something only when it is needed, instead of loading everything at the beginning.

// Think of a library.

// Without lazy loading: You bring all books to your table before reading.

// With lazy loading: You bring a book only when you want to read it.

// In React, lazy loading is usually used to load components only when they are required.

// Why Do We Need Lazy Loading?

// Suppose your React app has many pages.

// Home

// About

// Contact

// Dashboard

// Settings

// Without lazy loading, the browser downloads all pages immediately.

// App starts

// Download Home

// Download About

// Download Contact

// Download Dashboard

// Download Settings

// This makes the initial load slow.

// With lazy loading:

// App starts

// Download Home

// Later, if user opens About → Download About

// Later, if user opens Dashboard → Download Dashboard

// The initial page loads much faster.



// What is Code Splitting?

// Lazy loading creates multiple bundles.


// When Should You Use Lazy Loading?

// Use lazy loading for:

// Route/pages

// Dashboard components

// Charts

// Maps

// Editors

// Large modals

// Heavy third-party libraries

// Avoid lazy loading for:

// Small buttons

// Headers

// Navigation bars

// Components needed immediately on page load