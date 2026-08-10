// Webpack uses Babel.

// Flow:

// App.jsx
//    |
//    |
// Webpack
//    |
//    |
// Babel
//    |
//    |
// JavaScript
//    |
//    |
// Browser

// | File       | Loader         |
// | ---------- | -------------- |
// | JSX        | babel-loader   |
// | CSS        | css-loader     |
// | Images     | asset/resource |
// | TypeScript | ts-loader      |

// 11. Webpack Plugins

// Plugins add extra features.

// Examples:

// HTML Plugin

// Automatically creates HTML file.

// Mini CSS Extract Plugin

// Creates separate CSS files.


// What is a Loader in Webpack?

// A loader is a tool that tells Webpack how to understand and process files that it cannot handle by default.

// Webpack understands JavaScript files by default, but it does not understand files like:

// CSS
// Images
// JSX
// TypeScript
// SASS

// Loaders convert these files into something Webpack can bundle.

// Simple definition for interview:

// A loader is a Webpack feature that transforms different types of files into modules that Webpack can process and bundle.


// css-loader

// Purpose:

// It reads CSS files and converts CSS into JavaScript modules.


// style-loader

// Purpose:

// It takes the processed CSS and injects it into the browser.

// Flow:

// style.css

//      |
//      ↓

// css-loader

//      |
//      ↓

// JavaScript

//      |
//      ↓

// style-loader

//      |
//      ↓

// <style>
// body{
// background:red;
// }
// </style>