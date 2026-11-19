// Understand asynchronous JavaScript execution.

// 1. Synchronous JavaScript
console.log("----- Synchronous -----");

console.log("Wake up");
console.log("Have breakfast");
console.log("Go to office");
console.log("lulu is good");


// 2. Asynchronous JavaScript
console.log("----- Asynchronous -----");

console.log("Start");

setTimeout(() => {
    console.log("After 2 seconds");
}, 2000);

console.log("End");

// example

console.log("Start order");

setTimeout(() => {
    console.log("Food is ready");
}, 3000);

console.log("Watch TV");

console.log("End order");


// 3. Callback Function
console.log("----- Callback -----");
// A callback is a function passed as an argument to another function. The receiving function can execute it when needed.

function greet(name, callback) {

    console.log("Hello " + name);

    callback();
}

greet("Rahul", () => {
    console.log("Welcome!");
});

// with setTimeout()

function orderA(callback){
    console.log("Sam placed");

    setTimeout(()=>{
        console.log("Sam is good at cooking");
        callback();
    },2000);
}

function delivery(){
    console.log("food is delivered to Sam")
}

orderA(delivery);


// callback hell():

setTimeout(() => {

    console.log("Step 1 completed");

    setTimeout(() => {

        console.log("Step 2 completed");

        setTimeout(() => {

            console.log("Step 3 completed");

        }, 1000);

    }, 1000);

}, 1000);


// 4. Promise:A Promise is an object that represents the eventual success or failure of an asynchronous operation.
console.log("----- Promise -----");

let myPromise = new Promise((resolve, reject) => {

    let paymentSuccess = true;

    if (paymentSuccess) {
        resolve("Payment successful");
    } else {
        reject("Payment failed");
    }

});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));


// example

let booking = new Promise((resolve, reject) =>{
    let ticketAvailable = true;

    if(ticketAvailable){
        resolve("Ticket Booked successfully");
    }else{
        reject("Booking failed")
    }
});

booking
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});



// 5. Promise Chaining:Promise chaining means using multiple .then() methods one after another.
console.log("----- Promise Chaining -----");

Promise.resolve("Order placed")
    .then(result => {
        console.log(result);
        return "Payment completed";
    })
    .then(result => {
        console.log(result);
        return "Product delivered";
    })
    .then(result => {
        console.log(result);
    });

// example:
function placeOrder() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order placed");
        }, 1000);
    });

}

function makePayment() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Payment completed");
        }, 1000);
    });

}

function deliverProduct() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Product delivered");
        }, 1000);
    });

}

placeOrder()
    .then((result) => {
        console.log(result);
        return makePayment();
    })
    .then((result) => {
        console.log(result);
        return deliverProduct();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


// 6. Async/Await
console.log("----- Async Await -----");

function getData() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Employee data received");
        }, 1000);

    });

}

async function showData() {

    let result = await getData();

    console.log(result);

}

showData();


// example:

function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data received successfully");
        },2000);
    });

}

async function displayData(){
    console.log("fetching...");

    let result = await getData();
    console.log(result);
    console.log("Task Completed");
}

displayData();


// 7. Event Loop: The Event Loop is a mechanism that coordinates synchronous and asynchronous code execution.

// It helps JavaScript handle asynchronous operations without blocking the main thread.

console.log("----- Event Loop -----");

console.log("First");

setTimeout(() => {
    console.log("Second");
}, 0);

Promise.resolve().then(() => {
    console.log("Third");
});

console.log("Fourth");


// callstack: keeps the track of which function is currently executing

function first(){
    console.log("first function");

}
function second(){
    console.log("second function");
}

first();
second();