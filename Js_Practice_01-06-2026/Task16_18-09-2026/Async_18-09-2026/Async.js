// Synchronous vs Asynchronous JavaScript
// Synchronous JavaScript

// Synchronous code runs one line at a time. The next line waits until the previous line finishes.

console.log("1.customer orders food");
console.log("2. Food is prepared");
console.log("3. customer receives food");

// Asynchronous JavaScript

// Asynchronous code allows JavaScript to start a task and continue executing other code without waiting.

// example food delivery

console.log("1.order placed");

setTimeout(() =>{
    console.log("2. Food Delivered");
},2000);

console.log("3.Watching TV");


// Real-world examples

// Asynchronous operations are commonly used for:

// API requests
// Database operations
// File reading
// Timers
// User interactions
// Network requests


// Call Stack

// The Call Stack keeps track of the functions currently being executed.

// Think of it like a stack of plates.

// Last plate added → first plate removed.

function first(){
    console.log("First function");
}
function second(){
    console.log("second function");
}
first();
second();


// Web APIs

// Web APIs are features provided by the browser environment that JavaScript can use.


// example
console.log("Start");
setTimeout(()=>{
    console.log("Timer Finished");
},3000);
console.log("end")


// Callback Queue

// The Callback Queue stores callbacks that are ready to execute after asynchronous operations finish.

console.log("last 5 min left")

setTimeout(()=>{
    console.log("Time completed")
},0)

console.log("End session")


// Microtask Queue

// The Microtask Queue contains higher-priority asynchronous callbacks.

// Promises use the Microtask Queue.

console.log("start exam")
setTimeout(()=>{
    console.log("setTimeout");
},0);

Promise.resolve().then(()=>{
    console.log("Promise");
});
console.log("End exam");



// Event Loop

// The Event Loop continuously checks whether the Call Stack is empty and whether asynchronous callbacks are waiting.


console.log("A");

setTimeout(()=>{
    console.log("B");
},0);

Promise.resolve().then(()=>{
    console.log("c")
});

console.log("D");


// setTimeout()

// setTimeout() executes a function after at least the specified delay.

console.log("sending OTP...");

setTimeout(()=>{
    console.log("OTP generated");
},2000);


// welcome message

setTimeout(()=>{
    console.log("Welcome to our World!!");
},3000);


// setInterval()

// setInterval() repeatedly executes a function after every specified interval.


// example

let count = 1;
const timer = setInterval(()=>{
    console.log("Second:", count);
    count++;

    if(count > 5){
        clearInterval(timer);
    }
},2000);


// Promises

// A Promise represents the eventual result of an asynchronous operation.


const payment = new Promise((resolve,reject) =>{
    let success = true;

    if(success){
        resolve("Payment successful");
    }else{
        reject("Payment failed");
    }
});

payment.then((message)=>{
    console.log(message);
});

//.then(): executes when a promise is successfully fulfilled

const order = Promise.resolve("Pizza delivered");
order.then((message1)=>{
    console.log(message1);
})

// chaining .then()

Promise.resolve(10)
.then((num)=>{
    return num * 2;
})
.then((num) =>{
    return num + 5;
})
.then((result)=>{
    console.log(result);
});

//.catch(): handles Promise rejection/error

const payment1 = Promise.reject("Payment Failed");

payment1
.then((msg)=>{
    console.log(msg)
})

.catch((error)=>{
    console.log("Error:", error);
});


// .finally()

// .finally() runs whether the Promise succeeds or fails.


const login = Promise.resolve("Login completed sucessfully");

login
.then((msg1)=>{
    console.log(msg1);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Login Process completed");
});

//
Promise.reject("Invalid password")
.catch((error)=>{
    console.log(error);

})
.finally(()=>{
    console.log("Login Process Completed");
});


// Promise.all()

// Promise.all() waits for all promises to succeed.

const user = Promise.resolve("User data loaded");

const orders = Promise.resolve("Orders Loaded");

const notifications = Promise.resolve("Notification Loaded");

Promise.all([user, orders,notifications])
.then((results3)=>{
    console.log(results3);
});


// Promise.race()

// Promise.race() returns the result of the first Promise that settles — whether fulfilled or rejected.


const fast = new Promise((resolve)=>{
    setTimeout(()=> resolve("Fast Server"),1000);
});

const slow = new Promise((resolve)=>{
    setTimeout(()=> resolve("Slow server"),3000);
});

Promise.race([fast,slow])
.then((result4) =>{
    console.log(result4);
});


// Promise.allSettled()

// Promise.allSettled() waits for every Promise, regardless of success or failure.


const p1 = Promise.resolve("Payment successful");

const p2 = Promise.reject("Email failed");

const p3 = Promise.resolve("Order created");


Promise.allSettled([p1,p2,p3])
.then((results)=>{
    console.log(results);
});


// Promise.any()

// Promise.any() returns the first fulfilled Promise.

// Rejected promises are ignored unless all promises reject.

const server11 = Promise.reject("server 1 failed");

const server22 = new Promise((resolve)=>{
    setTimeout(()=> resolve("server 2 working"),3000);
});

const server33 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Server 3 Working"), 1000);
});

Promise.any([server11, server22, server33])

.then((result5)=>{
    console.log(result5);
});



// | Method                 | What it does                       |
// | ---------------------- | ---------------------------------- |
// | `Promise.all()`        | Wait for all; fails if one rejects |
// | `Promise.race()`       | First settled Promise wins         |
// | `Promise.allSettled()` | Wait for everyone                  |
// | `Promise.any()`        | First successful Promise wins      |


// Async/Await

// async/await provides a cleaner way to work with Promises.

function getUser(){
    return Promise.resolve("User Data");
}

getUser()
.then((data)=>{
    console.log(data);
})

//
async function displayUser(){
    const data = await getUser();

    console.log(data);
}
displayUser();


//
function getProduct(){
    return Promise.resolve("Laptop");

}

async function showProduct(){
    console.log("Fetching Product...");

    const product = await getProduct();

    console.log("Product:", product);
}

showProduct();


// Error Handling with Async/Await

// Use try...catch.

async function login2(){
    try{
        const result6 = await Promise.reject("Invalid Password1")

        console.log(result6);
    } catch(error){
        console.log("Login Error:",error);
    }
}

login2();


//finally

async function login3(){
    try{
        const result7 = await Promise.resolve("Login successful");

        console.log(result7);
    } catch(error){
        console.log(error);
    }finally{
        console.log("Login process finished");
    }
}

login3();


// Fetch API

// The Fetch API is used to communicate with servers/APIs over HTTP.


// GET Request

// GET is used to retrieve data.


fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


//

async function getPost() {
    try {
        const response =
            await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getPost();


// POST Request

// POST is normally used to create new data.

fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    header:{
        "Content-type": "application/json"
    },
    body:JSON.stringify({
        title1:"my new Post",
        body1:"Learning JavaScript",
        userId:1
    })
})
.then((response) => response.json())
.then((data1)=>{
    console.log(data1);
});



// PUT Request

// PUT is generally used to replace/update an entire resource.

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PUT",
    header:{
        "Content-Type":"application/json"
    },

    body:JSON.stringify({
        id:1,
        title2:"Updated title",
        body2: "Updated content",

        userId:1
    })
})

.then((response)=> response.json())
.then((data)=>{
    console.log(data)
});


// PATCH Request

// PATCH is generally used to partially update a resource.

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PATCH",
    header:{
        "Content-type": "application/json"
    },
    body:JSON.stringify({
        title:"New Title"
    })
})

.then((response)=> response.json())
.then((data)=>{
    console.log(data)
});


//DELETE()

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then((response) => {
    console.log("Status:", response.status);
});



// | Method   | Purpose                 | Real-world example        |
// | -------- | ----------------------- | ------------------------- |
// | `GET`    | Read data               | Get product details       |
// | `POST`   | Create data             | Create new account        |
// | `PUT`    | Replace/update resource | Replace entire profile    |
// | `PATCH`  | Partially update        | Change only profile photo |
// | `DELETE` | Delete data             | Delete an account         |


// | Concept                  | Simple meaning                               |
// | ------------------------ | -------------------------------------------- |
// | **Synchronous**          | Executes line by line                        |
// | **Asynchronous**         | Doesn't make the whole program wait          |
// | **Call Stack**           | Executes JavaScript functions                |
// | **Web APIs**             | Browser-provided asynchronous features       |
// | **Callback Queue**       | Holds ready task callbacks                   |
// | **Microtask Queue**      | Holds Promise callbacks                      |
// | **Event Loop**           | Moves eligible callbacks to the Call Stack   |
// | **setTimeout()**         | Runs once after a delay                      |
// | **setInterval()**        | Runs repeatedly                              |
// | **Promise**              | Represents future success/failure            |
// | **then()**               | Handles successful Promise                   |
// | **catch()**              | Handles rejection/errors                     |
// | **finally()**            | Runs after success or failure                |
// | **Promise.all()**        | All must succeed                             |
// | **Promise.race()**       | First settled Promise                        |
// | **Promise.allSettled()** | Wait for all results                         |
// | **Promise.any()**        | First fulfilled Promise                      |
// | **async**                | Makes a function return a Promise            |
// | **await**                | Waits for a Promise inside an async function |
// | **try/catch**            | Handles async errors                         |
// | **fetch()**              | Makes HTTP/network requests                  |
// | **GET**                  | Read                                         |
// | **POST**                 | Create                                       |
// | **PUT**                  | Replace/update                               |
// | **PATCH**                | Partial update                               |
// | **DELETE**               | Delete                                       |
