// The Event Loop is one of the most important concepts in JavaScript, especially when you learn Web APIs, callbacks, promises, and asynchronous JavaScript.

// Simple definition

// The Event Loop allows JavaScript to handle asynchronous operations without blocking the main thread.

// JavaScript is single-threaded, which means it executes one piece of JavaScript code at a time.

// But browsers can perform tasks such as:

// Timers
// API requests
// User interactions
// File operations
// Promises

// The Event Loop coordinates when their callbacks are allowed to run.


// with setTimeout()

console.log("start");

setTimeout(()=>{
    console.log("Hello!");
},2000);

console.log("End");

// example of restaurant

console.log("ordered placed");

setTimeout(()=>{
    console.log("Pizza is ready");
},2000);
console.log("Order received");

// with promise

console.log("start");

Promise.resolve().then(()=>{
    console.log("Promise");
});

console.log("End");


// with food delivery app

console.log("Order placed");
setTimeout(()=>{
    console.log("Restaurant accepted order");
},2000);

Promise.resolve().then(()=>{
    console.log("Payment successfull");
});

console.log("waiting for restaurant....");

