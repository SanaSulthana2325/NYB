// What is a Promise?
// A Promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation.


// I will give you the result later. It may succeed or fail."


let order = new Promise(function(resolve,reject){
    let orderPlace = true;

    if(orderPlace){
        resolve("Order place successfully");
    }else{
        reject("Order failed");
    }
});
order.then(function(message){
    console.log(message);
}).catch(function(error){
    console.log(error);
});

// promise with rejection

let payment = new Promise(function(resolve,reject){
    let paymentSuccess = false;

    if(paymentSuccess){
        resolve("Payment successfull");
    }else{
        reject("Payment failed");
    }
});

payment.then(function(message){
    console.log(message);
}).catch(function(error){
    console.log(error);
});

let payment1 = new Promise(function(resolve,reject){
    let success = true;

    if(success){
        resolve("Payment successful");
    }else{
        reject("payemnt failed");
    }
});

payment1
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.group(error);
})
.finally(function(){
    console.log("Payment process completed");
});



//  What is Promise Chaining?
// Promise Chaining means connecting multiple .then() methods one after another to execute asynchronous operations in sequence.

// Instead of writing one callback inside another callback, we can use multiple .then() methods one after another.


function placeOrder() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("1. Order placed");

            resolve();

        }, 1000);

    });

}

function payment2() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("2. Payment completed");

            resolve();

        }, 1000);

    });

}

function confirmOrder() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("3. Order confirmed");

            resolve();

        }, 1000);

    });

}

function packProduct() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("4. Product packed");

            resolve();

        }, 1000);

    });

}

function deliverProduct() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("5. Product delivered");

            resolve();

        }, 1000);

    });

}

// Promise Chaining

placeOrder()
.then(() => payment2())
.then(() => confirmOrder())
.then(() => packProduct())
.then(() => deliverProduct())
.then(() => console.log("Order process completed"))
.catch(error => console.log(error));



// Feature	        Callback	                   Callback Hell	                     Promise
// Meaning	    Function passed to another         function	Nested callbacks	Object representing an async result
// Code structure	Simple	                               Deeply nested	             Chained
// Readability	    Easy	                               Difficult	                  Easier
// Error handling	Manual	                              Complicated	                   .catch()
// Example	        callback()	                         Nested functions	                  .then()



// Promise.all()

// Promise.all() is a JavaScript method that takes multiple Promises and waits until all of them are fulfilled.

let laptop = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Laptop order completed");
    },3000);
});

let mobile = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Mobile order completed");
    },2000);
});

let headphones = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Headphones order completed");
    },1000);
});

Promise.all([laptop, mobile, headphones])
.then((results) =>{
    console.log("All orders completed");
    console.log(results);
})
.catch((error)=>{
    console.log("Order failed:", error);
});



// Promise.allSettled()

// Promise.allSettled() waits until all the given Promises have settled, whether they are fulfilled or rejected.

let emp = Promise.resolve("Employee Details loaded");

let salary = Promise.reject("Salary detailed Failed");

let attendance = Promise.resolve("Attendance details loaded");

Promise.allSettled([emp,salary,attendance])

.then((results)=>{
    console.log(results);
});



// Promise.race()

// Promise.race() returns the result of the first Promise that settles, whether it is fulfilled or rejected.


let driver1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Driver 1 responded");
    },5000);
});

let driver2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Driver 2 responded")
    },2000)
});

let driver3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Driver 3 responded");
    },4000)
});

Promise.race([driver1,driver2,driver3])

.then((result)=>{
    console.log(result);
});


// with reject

let task1 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Task 1 completed");
    },3000);
});

let task2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        reject("Task 2 failed")
    },1000)
});

Promise.race([task1,task2])

.then((result)=>{
    console.log(result);
})
.catch((error) =>{
    console.log(error);
});


// Promise.any()

// Promise.any() returns the result of the first Promise that gets fulfilled successfully.


let hotelA = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        reject("Hotel  booking Failed")
    },1000);
});
let hotalB = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Hotel B Booking successful");
    },2000);
});

let hotelC = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("hotel C booking successful");
    },3000);
});

Promise.any([hotelA,hotalB,hotelC])
.then((result)=>{
    console.log(result);
})
.catch((error) =>{
    console.log(error);
});



// Method	                What does it wait for?	    If one fails?
// Promise.all()	        All fulfilled	               Rejects
// Promise.allSettled()	All settled	                Collects all results
// Promise.race()	        First settled	           Rejects if first settles by rejection
// Promise.any()	        First fulfilled	           Ignores individual failures


// What is Async/Await?
// async and await are used to handle asynchronous operations in JavaScript.

// In simple words, they help us wait for an operation to finish before moving to the next step, without blocking the entire JavaScript program.


function getFood(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Food is ready");
        },3000);
    });
}

getFood().then((result)=>{
    console.log(result);
});

console.log("Waiting for food....");


// Using Async/Await

function getFood1(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Hai hello!!!");

            
    },3000);
})
}

async function orderFood(){
    console.log("Ordering Food...");

    let result = await getFood();
    console.log(result);
    console.log("Start eating!!"); 

}

orderFood();
console.log("I am doing orther work right now");


// Fetching employee details from API


async function getEmployee() {

    console.log("Fetching employee details...");

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    let data = await response.json();

    console.log("Employee Name:", data.name);
    console.log("Employee Email:", data.email);
}

getEmployee();


// Error Handling with Try/Catch
// What is Try/Catch?
// try and catch are used to handle errors in JavaScript.

// In simple words:
// - try: Write the code that might produce an error.
// - catch: Handle the error if one occurs.


console.log("Program started");

try{
    let result = x + 10;

    console.log(result);
}
catch(error){
    console.log("something went wrong!!");
    console.log(error.message);
}

console.log("Program completed");


// login validation


function login(password){
    try{
        if(password === ""){
            throw new Error("Password cannot be empty");
        }

        if (password.length < 6){
            throw new error("Password must contain atleast 6 characters");
        }

        console.log("Login successful!!");
    }

    catch(error){
        console.log("Login Failed:",error.message);
    }
}

login("124");
login("Welcome124");
login("");


//Try/Catch with Async/Await


async function getUsers() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        let data = await response.json();

        console.log("Users:", data);

    }

    catch (error) {

        console.log("Error:", error.message);

    }

}

getUsers();