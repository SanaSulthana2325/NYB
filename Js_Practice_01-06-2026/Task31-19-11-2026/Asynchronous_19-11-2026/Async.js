// What is Synchronous JavaScript?
// Synchronous JavaScript means the code executes line by line, one statement after another.

// The next statement will execute only after the previous statement has completed.

console.log("wake up");
console.log("Brush your teeth");
console.log("have breakfast");
console.log("go to work");


// What is Asynchronous JavaScript?
// Asynchronous JavaScript means JavaScript can start a time-consuming operation and continue executing other code without waiting for that operation to finish.

// When the operation is completed, its result can be handled later.

console.log("start");

setTimeout(function(){
    console.log("Food is ready");
},3000);

console.log("continue working");


// Synchronous	                       Asynchronous
// Executes line by line	        Allows other code to continue while waiting
// Blocks the next statement until   completion	Does not block the main thread while waiting
// Simple execution flow	          Uses callbacks, promises, async/await
// Example: Normal calculations   	Example: API calls, timers


// What is a Callback Function?
// A callback function is a function passed as an argument to another function and executed inside that function.

// In simple words, one function gives another function the responsibility to execute later or at a particular point.

function orderPizza(callback){
    console.log("Pizza order placed");
    callback();
}
function pizzaReady(){
    console.log("Pizza is ready!!!");
}

orderPizza(pizzaReady)


// with setTimeout

function downloadFile(callback){
    console.log("Downloading file...");

    setTimeout(function(){
        console.log("Downloaded completed");

        callback();
    },2000);
}

    function openFile(){
        console.log("opening file...");
    }
    downloadFile(openFile);


// What is Callback Hell?
// Callback Hell happens when we write multiple nested callback functions inside one another.

// It makes the code difficult to read, understand, debug and maintain.

function placeOrder(callback) {

    setTimeout(() => {
        console.log("1. Order placed");

        callback();
    }, 1000);
}

function prepareFood(callback) {

    setTimeout(() => {
        console.log("2. Food prepared");

        callback();
    }, 1000);
}

function packFood(callback) {

    setTimeout(() => {
        console.log("3. Food packed");

        callback();
    }, 1000);
}

function deliverFood() {

    setTimeout(() => {
        console.log("4. Food delivered");
    }, 1000);
}

placeOrder(function() {

    prepareFood(function() {

        packFood(function() {

            deliverFood();

        });

    });

});


// What is a Promise?
// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

// In simple words, a Promise means:

// "I promise to give you a result in the future."

let a = new Promise((resolve,reject) =>{
    let payment = true;
    if(payment){
        resolve("Payment successful!");
    }else{
        reject("Payment failed!!");
    }
});

a.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.log(result);
})
.catch((error) =>{
    console.log(error);
});



// What is Promise Chaining?
// Promise Chaining means connecting multiple .then() methods to execute asynchronous operations one after another.


function placeOrder() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("1. Order placed");
            resolve();
        }, 1000);

    });
}

function makePayment() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("2. Payment completed");
            resolve();
        }, 1000);

    });
}

function shipProduct() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("3. Product shipped");
            resolve();
        }, 1000);

    });
}

placeOrder()
    .then(() => makePayment())
    .then(() => shipProduct())
    .then(() => console.log("4. Product delivered"));


// What is Async/Await?
// Async/Await is a modern way of handling asynchronous JavaScript.

// It makes asynchronous code look similar to synchronous code.
// - async is used before a function declaration.
// - await is used inside an async function to wait for a Promise to settle.


function bookticket(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("ticket booked successfully!!");
        },2000);

    });
}
async function travel(){
    console.log("booking ticket...");
    let result = await bookticket();

    console.log(result);
    console.log("Ready to travel!!");
}

travel();


// with error handling

function payment() {

    return new Promise((resolve, reject) => {

        let success = false;

        if (success) {
            resolve("Payment successful!");
        } else {
            reject("Payment failed!");
        }

    });

}

async function checkout() {

    try {

        let result = await payment();

        console.log(result);

    }
    catch(error) {

        console.log(error);

    }

}

checkout();



// What is the Event Loop?
// The Event Loop is a mechanism that manages the execution of synchronous and asynchronous JavaScript code.


// 1. Call Stack: Executes JavaScript functions one at a time.
// 2. Web APIs: Browser-provided features that handle timers, events and network operations.
// 3. Microtask Queue: Stores Promise callbacks and other microtasks.
// 4. Task Queue (Macrotask Queue): Stores callbacks from setTimeout(), events and other tasks.
// 5. Event Loop: Coordinates when queued callbacks can execute.

console.log("1. Start aaa");

setTimeout(() => {
    console.log("2. setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise");
});

console.log("4. End aaa");


// example

function placeOrder() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("1. Order placed successfully");
            resolve();
        }, 1000);

    });

}

function makePayment() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("2. Payment successful");
            resolve();
        }, 1000);

    });

}

function prepareFood() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("3. Food is being prepared");
            resolve();
        }, 1000);

    });

}

function deliverFood() {

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("4. Food delivered");
            resolve();
        }, 1000);

    });

}

async function orderFood() {

    console.log("Welcome to Food Delivery App");

    await placeOrder();

    await makePayment();

    await prepareFood();

    await deliverFood();

    console.log("Enjoy your food!");

}

orderFood();


// call stack:

function first() {
    console.log("First function");
}

function second() {
    first();
    console.log("Second function");
}

function third() {
    second();
    console.log("Third function");
}

third();


// What is a Callback Queue?

// The Callback Queue is a queue where callbacks from asynchronous tasks, such as setTimeout() and browser events, wait until the Call Stack becomes empty.

// It follows the FIFO (First In, First Out) principle.


console.log("Start affu");

setTimeout(function() {
    console.log("Callback Queue started");
}, 2000);

console.log("End of affu");

// miscrosoft queue:

console.log("lulu");

Promise.resolve().then(function(){
    console.log("micosoft of excel");
});

console.log("end of the story");

// What is synchronous JavaScript?	Code executes one statement at a time in order.
// What is asynchronous JavaScript?	It allows other code to continue while waiting for an operation.
// What is a callback?	A function passed as an argument to another function.
// What is callback hell?	Multiple nested callbacks that make code difficult to maintain.
// What is a Promise?	An object representing the eventual success or failure of an asynchronous operation.
// What are Promise states?	Pending, Fulfilled and Rejected.
// What is .then()?	Handles a fulfilled Promise.
// What is .catch()?	Handles a rejected Promise.
// What is Async/Await?	A cleaner way to work with Promises.
// What is Event Loop?	It coordinates execution of queued asynchronous callbacks.
// What is Call Stack?	A structure that tracks currently executing functions.
// What is Microtask Queue?	A queue for Promise callbacks and other microtasks.



// Feature	Call Stack	                 Callback Queue	               Microtask Queue
// Purpose	Executes functions	   Stores task callbacks	Stores microtask callbacks
// Order	 LIFO	                FIFO	                         FIFO
// Examples	 Normal function calls	setTimeout, click events	Promise.then
// Priority	 Current execution	    After microtasks	          Before next task
// Execution	Directly	         Through Event Loop         	Through Event Loop