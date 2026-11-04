// Call Stack – Executes JavaScript functions.

// Callback Queue – Stores callbacks waiting for execution.

// Microtask Queue – Stores high-priority asynchronous callbacks, such as Promise callbacks.


// Call Stack
// What is a Call Stack?
// The Call Stack is a place where JavaScript keeps track of which function is currently executing.


function first(){
    console.log("first function");
}

function second(){
    console.log("Second function")
}

function third(){
    console.log("Third function");
}

first();
second();
third();


// Callback Queue (Task Queue)
// What is a Callback Queue?
// The Callback Queue is a queue that stores callbacks from asynchronous tasks, waiting for the Call Stack to become empty.

console.log("Start");

setTimeout(function(){
    console.log("Timer completed")
},2000);

console.log("End");


// Multiple callbacks in the Callback Queue

console.log("Start");

setTimeout(function(){
    console.log("First callback");
},1000);

setTimeout(function(){
    console.log("second callback");
},1000);

setTimeout(function(){
    console.log("Third callback");
},1000);

console.log("End");


// Microtask Queue
// What is a Microtask Queue?
// The Microtask Queue stores callbacks that need to execute after the current synchronous JavaScript execution finishes, before the next task from the Callback Queue.


console.log("sasa");

Promise.resolve().then(function(){
    console.log("Promise executed");
});

console.log("Eded");


//
console.log("Start");

Promise.resolve().then(function() {
    console.log("Promise 1");
});

Promise.resolve().then(function() {
    console.log("Promise 2");
});

Promise.resolve().then(function() {
    console.log("Promise 3");
});

console.log("End");



// Feature	          Call Stack	   Callback Queue	                 Microtask Queue
// Purpose	      Executes functions	Stores tasks	                   Stores microtasks
// Order	          LIFO	                 FIFO	                         FIFO
// Example	          Normal function	setTimeout()	                     Promise
// Execution	      Directly       	When eligible and stack is clear	Before next task
// Priority	   Current execution	After microtasks	                Before next task


// Callback Functions
// 1. What is a Callback Function?
// A Callback Function is a function that is passed as an argument to another function and is called inside that function.

function greet(name,callback){
    console.log("Hello "+name);
    callback();
}

function saywelcome(){
    console.log("Welcome to wrold");
}

greet("Sana", saywelcome);


//

function placeOrder(callback){
    console.log("Order placed successfully");

    callback();
}

function paymentSuccess(){
    console.log("Payment completed in the from the bank");
}

placeOrder(paymentSuccess);


//

// What is Callback Hell?
// Callback Hell happens when multiple callback functions are nested inside one another, making the code difficult to read, understand, and maintain.


// When we have one callback inside another callback, and then another callback inside that callback, it creates a deeply nested structure.

// It is also called the Pyramid of Doom because the code starts looking like a pyramid.

function placeOrder(callback){
    setTimeout(()=>{
        console.log("1.lali")
        callback();
    },1000);
}

function payment(callback){
    setTimeout(() => {
        console.log("2.payment of lali")
        
    }, 1000);

    function confirmOrder(callback){
        setTimeout(()=>{
            console.log("3.Order p[laced to lali");
            callback();
        },1000);

    }

    function prepareDelivery(callback){
        setTimeout(()=>{
            console.log("4. paced order")
            callback();
        },1000);

        
    }

    function deliveredProduct(){
        setTimeout(()=>{
            console.log("5. Product delivered");
        },1000);
    }

    placeOrder(function(){
        payment(function(){
            confirmOrder(function(){
                prepareDelivery(function(){
                    deliveredProduct();
                });
            });
        });
    });
}