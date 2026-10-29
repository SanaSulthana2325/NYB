// Synchronous JavaScript
// Synchronous means one task executes at a time, in order. The next task waits until the current task finishes.


console.log("Open the bank");
console.log("Deposite money");
console.log("Leave bank");

// Asynchronous JavaScript
// Asynchronous means JavaScript can arrange for a task to finish later without blocking the rest of the code.

console.log("order food");

setTimeout(()=>{
    console.log("Food is ready")
},2000);

console.log("talk to friends")


// Call Stack
// The Call Stack is the place where JavaScript keeps track of functions that are currently executing.

function calculateTotal(){
    console.log("calculate total");
}

function checkout(){
    console.log("checkout started");
    calculateTotal();
    console.log("checkout completed") 
}

checkout();
checkout();

// Web APIs
// Web APIs are browser-provided features that JavaScript can use for tasks such as timers, network requests, and handling user interactions.


console.log("start");
setTimeout(()=>{
    console.log("Timer finished");
},2000);

console.log("continue working")

// Callback Functions
// A callback function is a function that is passed as an argument to another function and called by that function, either immediately or later.

function foodDelivered(){
    console.log("Food delivered successfully");
}

function orderFood(callback){
    console.log("food order");
    callback();
}

orderFood(foodDelivered);

// asynchronous callback

console.log("start delivery");

setTimeout(()=>{
    console.log("package delivery");
},2000);

console.log("Continue working");


// Callback Queue
// The Callback Queue is where callbacks from certain asynchronous browser operations wait until JavaScript can execute them. The traditional Callback Queue is also called the Task Queue or Macrotask Queue.


console.log("A");

setTimeout(()=>{
    console.log("B");
},0);

console.log("C")


// Event Loop
// The Event Loop coordinates when queued callbacks can run. It checks whether the Call Stack is available and helps schedule eligible callbacks for execution.

console.log("1.start");

setTimeout(()=>{
    console.log("2.Timer callback");
},0);

console.log("3.End");

// example

console.log("start sam");

setTimeout(()=> console.log("Timeout"),0);

Promise.resolve().then(()=> console.log("Promise"));

console.log("End");


// Callback Problems
// Callbacks are useful, but deeply nested callbacks can make code difficult to read and maintain. This is commonly called Callback Hell.

// callback hell:

function confirmOrder(callback){
    setTimeout(()=>{
        console.log("1.Order Confirmed");
        callback();
    },1000);
}

function packOrder(callback){
    setTimeout(()=>{
        console.log("2.Order packed");
        callback();
    },1000)
}

function dispatchOrder(callback){
    setTimeout(()=>{
        console.log("3. order dispatched");
        callback();
    },1000);
}

confirmOrder(()=>{
    packOrder(()=>{
        dispatchOrder(()=>{
            console.log("4.customer notified")
        });
    });
});


// with promises

function aOrder(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("1.lala comming.....")
            resolve();
        },1000);
    });
}

function bOrder(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("2.lala came to town");
            resolve();
        },1000);
    });
}

function cOrder(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("3.lala is giving speech");
            resolve();

        },1000);
    });
}

aOrder()
.then(()=> bOrder())
.then(()=>cOrder())
.then(()=> console.log("4. lala died "))
.catch(error => console.log("Error:",error));



// Concept                          	Simple meaning
// Synchronous	               Tasks execute in order; each waits for the previous task to finish.
// Asynchronous	           Work can finish later while JavaScript continues with other tasks.
// Call Stack	               Tracks currently executing function calls.
// Web APIs	               Browser features for timers, requests, and events.
// Callback Function	       A function passed to another function to be called later or immediately.
// Callback Queue             Holds callbacks for eligible ordinary tasks.
// Event Loop	               Coordinates queued callbacks with the Call Stack.
// Callback Hell	           Deeply nested callbacks that make code difficult to maintain.
// Promise	                    Represents the eventual success or failure of an asynchronous operation.
// async/await	                A syntax for writing Promise-based asynchronous code more clearly.