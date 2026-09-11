// What is Synchronous JavaScript?

// Synchronous means: “Do one task at a time, in order.”

// JavaScript waits for the current task to finish before moving to the next task.

// example
console.log("start");

let a = 10;
let b = 30;

let result = a+b;
console.log(result);
console.log("End");

// with function
function greet(){
    console.log("Hello!")
}
console.log("start");
greet();
console.log("End");



// What is Asynchronous JavaScript?

// Asynchronous means: “Start a task and don't wait for it to finish before doing other work.”

// This is extremely useful for tasks that take time, such as:

// API requests
// downloading files
// reading files
// timers


// setTimeout()

console.log("SetTimeout");
setTimeout(function(){
    console.log("Task Complteted")
},1000)


// example with restaurant
console.log("I ordered Food");

setTimeout(()=>{
    console.log("Food is ready");
},1000);

console.log("I am waiting");

// multiple asyncronous 

console.log("Start task");
setTimeout(()=>{
    console.log("Task 1");
},2000);

setTimeout(()=>{
    console.log("Task 2");
},3000)

console.log("End task");

// 
console.log("A")

setTimeout(()=>{
    console.log("B");
},0);
console.log("C");

// weather App

console.log("Getting Weather....");
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data =>{
    console.log("weather received");
});

console.log("Showing loading message....");



// 1. setTimeout()
// What is setTimeout()?

// setTimeout() is used when you want to execute some code after a certain amount of time.

// Syntax
// setTimeout(function, time);

 let AA = setTimeout(()=>{
    console.log("Hello World")
},1000)

clearTimeout("AA")
console.log("hello cancelled")

// 2. setInterval()
// What is setInterval()?

// setInterval() repeatedly executes a function after a specified amount of time.

// Syntax
// setInterval(function, time);


let A = setInterval(()=>{
    console.log("Hello!!!")
},1000)
setTimeout(()=>{


clearInterval( A)
console.log("Hello Stopped")
},4000)
//
setInterval(()=>{
    console.log("Welcome sana")
},1000)


// 3. clearInterval()

// To stop setInterval(), we use:

// clearInterval()

let count =1;
let timer = setInterval(()=>{
    console.log("Count:",count);
    count++;

    if(count > 9){
        clearInterval(timer);
        console.log("Count stopped")
    }
},2000)


//4 . clearTimeout()

// clearTimeout() is used to cancel a setTimeout() before it executes.

let timer1 = setTimeout(()=>{
console.log("This is my wrold");

},5000);
clearTimeout(timer);
console.log("Timer Cancelled");


// example

let order = setTimeout(()=>{
    console.log("Order Confirmed");
},5000);
clearTimeout(order);
console.log("Order cancelled");

// 5. Callback Functions

// A callback function is a function that is passed to another function and executed later.

// example

console.log("CALL BACK");
function greet1(name,callback){
    console.log("Hello "+ name);
    callback();

}
function sayBye(){
    console.log("Goodbye");
}
greet1("Sana",sayBye);

// with setTimeout
console.log("start");
setTimeout(()=>{
    console.log("Task Completed with callback");
},2000);
console.log("End");


// example

function hh(callback){
    console.log("getting chips");
    setTimeout(()=>{
        console.log("Chips are ready");
        callback();
    },2000);
}
function eatchip(){
    console.log("Eating chips");
}
hh(eatchip);



// 8. Callback Hell 

// Callback Hell happens when we have many nested callbacks.

// Callback Hell

// It becomes difficult to:

// read
// debug
// maintain
// handle errors

// Promises were introduced to make this type of asynchronous code easier to manage.

function login(username, callback){
    setTimeout(()=>{
        console.log("1.User Loggedin");
        callback();
    },1000);
}
function getUserDetails(callback){
    setTimeout(()=>{
        console.log("2.User details received");
        callback();
    },1000);
}

function getOrders(callback){
    setTimeout(()=>{
        console.log("3. Orders Received");
        callback();
    },1000)
}

function getOrderDetails(callback){
    setTimeout(()=>{
        console.log("4.Order Details Received");
        callback();

    },1000);
}

function makePayment(callback){
    setTimeout(()=>{
        console.log("5.Payment Successful");
        callback();
    }, 1000)
}

login("Tasan",function(){
    getUserDetails(function(){
        getOrders(function(){
            getOrderDetails(function(){
                makePayment(function(){
                    console.log("6. Process Completed");
                });
            })
        })
    })
})

// 9. Promises

// A Promise represents the eventual result of an asynchronous operation.

// A Promise has three states:

// Pending
//    ↓
//    ├── Fulfilled
//    │
//    └── Rejected


// example

let promise = new Promise((resolve,reject)=>{
    let success = true;

    if (success){
        resolve("Task Completed in Promise");
    }else{
        reject("Task Failed in Promise")
    }

});
console.log(promise)

// promise with time

// 11. .then()

// .then() executes when the Promise is successfully completed.

let pro = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let foodReady = true;
        if(foodReady){
        resolve("Food is ready in promise")
    }else{
        reject ("Food is rejected")
    }
},2000);
})
pro.then((message)=>{
    console.log(message)
})
pro.catch((error)=>{
    console.log(error);
});

// example
let promise1 = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve("Payment Successful in promise");
    } else {
        reject("Payment failed in promise");
    }

});

promise1
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=>{
        console.log("Loading Finished");

    });


// 13. .finally()

// .finally() executes whether the Promise succeeds or fails.


// Promise Chain

Promise.resolve("Step 1 completed")
    .then((message) => {

        console.log(message);

        return "Step 2 completed";

    })
    .then((message) => {

        console.log(message);

        return "Step 3 completed";

    })
    .then((message) => {

        console.log(message);

    });


//15. Promise.all()

// Suppose we have three tasks:

// Task A → 2 seconds
// Task B → 3 seconds
// Task C → 1 second

// We want to wait until ALL three are finished.

// That's what Promise.all() does.

// example

let Process1 = new Promise(resolve =>{
    setTimeout(() =>{
        resolve("Process 1 Completed");
    },2000)
});

let Process2 = new Promise(resolve =>{
    setTimeout(() =>{
        resolve("Process 2 Completed")
    },3000)
});

let Process3 = new Promise(resolve =>{
    setTimeout(()=>{
        resolve("Process 3 completed")
    },1000)
});

Promise.all([Process1, Process2, Process3 ])
.then((results)=>{
    console.log(results)
})

// if one fails

let complete1 = Promise.resolve("complete 1 successful");
let complete2 = Promise.reject("complete 2 fail");
let complete3= Promise.resolve("complete 3 successful");

Promise.all([complete1, complete2, complete3])
.then((results)=>{
    console.log(results)
})
.catch((error)=>{
    console.log(error);
});

// 17. Promise.race()

// Promise.race() waits for the first Promise to settle.

// That means the first one to either:

// resolve, or
// reject

// wins.

// example
let E = new Promise(resolve =>{
    setTimeout(()=>{
        resolve("E Task Finished")
    },4000);
});

let F = new Promise(resolve =>{
    setTimeout(() =>{
        resolve("F Task finished")
    },1000);
});

Promise.race([E,F])
.then(result =>{
    console.log(result);
});

// example
let serverA = new Promise(resolve => {
    setTimeout(() => {
        resolve("Response from Server A");
    }, 5000);
});

let serverB = new Promise(resolve => {
    setTimeout(() => {
        resolve("Response from Server B");
    }, 2000);
});

Promise.race([serverA, serverB])
    .then(result => {
        console.log(result);
    });

// 19. Promise.allSettled()

// Promise.allSettled() waits for all Promises to finish, regardless of whether they succeed or fail.


let task1 = Promise.resolve("Task 1 successful Allsettled");

let task2 = Promise.reject("Task 2 failed");

let task3 = Promise.resolve("Task 3 successful AllSettled");

Promise.allSettled([task1, task2, task3])
    .then(results => {
        console.log(results);


    });

// 21. Promise.any()

// Promise.any() returns the first successfully fulfilled Promise.

// This is different from Promise.race().


let server1 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        reject("Server 1 failed in Promise any");
    },1000)
});

let server2 = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Server 2 Successful in promise any");
    },3000);
});

let server3 = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Server 3 successful in promise any");
    }, 2000);
});

Promise.any([server1, server2, server3])
.then(result =>{
    console.log(result);
});

//Async / Await:


// error handling with async and await

async function payment() {

    try {

        let result = await Promise.reject("Payment failed");

        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    } finally {

        console.log("Payment process completed");

    }
}

payment();


// | Synchronous                                           | Asynchronous                                  |
// | ----------------------------------------------------- | --------------------------------------------- |
// | One task at a time                                    | Can start a task and continue with other work |
// | Blocks the next operation until current work finishes | Doesn't block normal execution while waiting  |
// | Executes in sequence                                  | Completion can happen later                   |
// | Simple to understand                                  | Useful for time-consuming operations          |
// | Example: normal calculations                          | Example: `fetch()`                            |
// | Example: normal function call                         | Example: `setTimeout()`                       |



// | Method                 | What does it do?                    |
// | ---------------------- | ----------------------------------- |
// | `Promise.all()`        | Waits for all; fails if one rejects |
// | `Promise.race()`       | First settled Promise wins          |
// | `Promise.allSettled()` | Waits for all, success or failure   |
// | `Promise.any()`        | First successful Promise wins       |
