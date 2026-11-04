// What is Synchronous JavaScript?
// Synchronous JavaScript means executing code one line at a time, in order.
// - First, the first statement executes.
// - After that, the second statement executes.
// - Then, the third statement executes.
// - Each statement waits for the previous statement to finish.
// In simple words: One task must finish before the next task starts.


console.log("I am going to the bank");

console.log("I am going school");

console.log("this is your house");


// example


function firstTask(){
    console.log("First task started");
}

function secondTask(){
    console.log("Second task started");
}

function thirdTask(){
    console.log("Third task started");
}

firstTask();


// What is Asynchronous JavaScript?
// Asynchronous JavaScript allows certain operations to happen without blocking the execution of the remaining code.


console.log("I am going to the restaurant");

setTimeout(function(){
    console.log("Food is ready");
},3000);

console.log("I am talking with my friends")

//
console.log("Task 1");

setTimeout(function(){
    console.log("Task 2");
},3000);

setTimeout(function(){
    console.log("Task 3")
},1000);

console.log("Task 4");


// Synchronous	                        Asynchronous
// Executes in order	            Can complete later
// Waits for each operation	    Doesn't block for async operations
// Can block execution	            Allows other code to continue
// Simple execution	           Uses callbacks, promises, async/await
// Example: normal function	   Example: API call



// What is the JavaScript Event Loop?
// The Event Loop is a mechanism that helps JavaScript handle asynchronous operations without blocking the main thread.


// There are different responsibilities:
// 1. Call Stack: The waiter handles the current order.
// 2. Web APIs: The kitchen prepares the food or handles tasks that take time.
// 3. Callback Queue: Completed tasks wait for the waiter to become available.
// 4. Event Loop: Checks whether the waiter is free and whether a completed task is waiting.


console.log("First");

console.log("second");

console.log("Third");


// Event Loop using setTimeout()
// This is one of the most important examples.

console.log("Order placed");

setTimeout(function(){
    console.log("food is preparing");
},2000);

console.log("Watching Tv");


// Event Loop with Promise and setTimeout()
// This example is very important for interviews and practical JavaScript.

// First, understand two things:
// - Promise callbacks (.then()) go into the Microtask Queue.
// - setTimeout() callbacks go into the Task Queue (also called Callback Queue).


console.log("Start");

setTimeout(function(){
    console.log("setTimeout");
},0);

Promise.resolve().then(function(){
    console.log("Promise");
});

console.log("END");

// Event Loop with multiple Promises

console.log("AAA");

Promise.resolve().then(function(){
    console.log("Promise 1");
});

Promise.resolve().then(function(){
    console.log("Promise 2");
});

Promise.resolve().then(function(){
    console.log("Promise 3");
});

console.log("End");


// Event Loop using async/await
// You will frequently use async/await when working with APIs.


console.log("Start");

async function getData(){
    console.log("Fetching data");

    await Promise.resolve();

    console.log("Data received");
}

getData();

console.log("BABA");
