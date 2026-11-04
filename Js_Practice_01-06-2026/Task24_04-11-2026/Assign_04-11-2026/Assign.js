// Understand the JavaScript event loop and execution flow.

// What is the Event Loop?
// The Event Loop is a mechanism in JavaScript that manages the execution of synchronous and asynchronous code.

console.log("Start");

setTimeout(()=>{
    console.log("Timer");
},2000);

console.log("END");

// Differentiate between synchronous and asynchronous operations.

// synchronous means executing code one after another

console.log("AAA");

console.log("BBBB");

console.log("CCCC");

console.log("DDDD");

console.log("All customers completed");


// What is asynchronous operation?
// Asynchronous means starting an operation and allowing other code to execute while waiting for that operation to complete.

console.log("order placed");

setTimeout(()=>{
    console.log("Food is ready");
},3000);

console.log("You can do other work");

console.log("checking other orders");

// Synchronous                            	Asynchronous
// Executes step by step	            Allows other code to execute while waiting
// Blocks the current execution until 
// the operation finishes	             Does not block the main JavaScript thread while waiting for supported async operations
// Easier to understand	             Requires understanding callbacks, Promises, or async/await
// Example: Normal function calls	     Example: setTimeout(), fetch()
// Next instruction waits	            Other instructions can continue


// Synchronous example

function syncExample() {

    console.log("Sync: Task 1");

    console.log("Sync: Task 2");

    console.log("Sync: Task 3");

    console.log("Sync: Completed");
}


// Asynchronous example

function asyncExample() {

    console.log("Async: Task 1");

    setTimeout(() => {

        console.log("Async: Task 2");

    }, 3000);

    console.log("Async: Task 3");

    console.log("Async: Completed");
}

// Practice callback functions and avoid callback hell.

function greet(name, callback) {

    console.log("Hello " + name);

    callback();

}

function message() {

    console.log("Welcome to JavaScript");

}

greet("Sana", message);

// setTimeOut

function orderFood(callback) {

    console.log("Food order placed");

    setTimeout(() => {

        console.log("Food preparation completed");

        callback();

    }, 3000);

}

function delivery() {

    console.log("Food delivered successfully");

}

orderFood(delivery);


//callback hell

function delivery() {
    console.log("Product delivered");
}

function packing() {
    console.log("Product packed");
    delivery();
}

function payment() {
    console.log("Payment completed");
    packing();
}

function placeOrder() {
    console.log("Order placed");
    payment();
}

placeOrder();


// using Asign await

function placeOrder() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Order placed");

        }, 1000);

    });

}

function payment() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Payment completed");

        }, 1000);

    });

}

function delivery() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Product delivered");

        }, 1000);

    });

}

async function completeOrder() {

    let order = await placeOrder();

    console.log(order);

    let pay = await payment();

    console.log(pay);

    let deliver = await delivery();

    console.log(deliver);

}

completeOrder();



/************************************************************
 TOPIC 4: CREATE AND HANDLE PROMISES
************************************************************/


// Real-time example: Online shopping orders

function orderLaptop() {

    return new Promise((resolve, reject) => {

        console.log("Laptop order processing...");

        setTimeout(() => {

            resolve("Laptop order completed");

        }, 3000);

    });

}

function orderMobile() {

    return new Promise((resolve, reject) => {

        console.log("Mobile order processing...");

        setTimeout(() => {

            resolve("Mobile order completed");

        }, 2000);

    });

}

function orderHeadphones() {

    return new Promise((resolve, reject) => {

        console.log("Headphones order processing...");

        setTimeout(() => {

            resolve("Headphones order completed");

        }, 1000);

    });

}


// Handle the promises

async function handleOrders() {

    const laptop = await orderLaptop();

    console.log(laptop);

    const mobile = await orderMobile();

    console.log(mobile);

    const headphones = await orderHeadphones();

    console.log(headphones);

    console.log("All orders completed");

}


/************************************************************
 TOPIC 5: PROMISE CHAINING
************************************************************/


// Real-time example: Food ordering process

function placeOrder() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("1. Food order placed");

        }, 1000);

    });

}

function prepareFood() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("2. Food preparation completed");

        }, 1000);

    });

}

function packFood() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("3. Food packed");

        }, 1000);

    });

}

function deliverFood() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("4. Food delivered");

        }, 1000);

    });

}


// Implement Promise chaining

function foodDelivery() {

    placeOrder()

        .then((result) => {

            console.log(result);

            return prepareFood();

        })

        .then((result) => {

            console.log(result);

            return packFood();

        })

        .then((result) => {

            console.log(result);

            return deliverFood();

        })

        .then((result) => {

            console.log(result);

            console.log("Food delivery completed");

        })

        .catch((error) => {

            console.log("Food order failed:", error);

        });

}


/************************************************************
 TOPIC 6: MAJOR PROMISE METHODS
************************************************************/


// Helper function to create sample promises

function createTask(name, time, shouldFail = false) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (shouldFail) {

                reject(new Error(name + " failed"));

            } else {

                resolve(name + " completed");

            }

        }, time);

    });

}


// 1. Promise.all()

async function promiseAllExample() {

    
    try {

        const results = await Promise.all([

            createTask("Laptop", 300),

            createTask("Mobile", 200),

            createTask("Headphones", 100)

        ]);

        console.log(results);

    } catch (error) {

        console.log("Error:", error.message);

    }

}


// 2. Promise.allSettled()

async function promiseAllSettledExample() {

    
    const results = await Promise.allSettled([

        createTask("Payment", 200),

        createTask("Delivery", 300, true)

    ]);

    console.log(results);

}


// 3. Promise.race()

async function promiseRaceExample() {

    
    const result = await Promise.race([

        createTask("Fast server", 100),

        createTask("Slow server", 500)

    ]);

    console.log(result);

}


// 4. Promise.any()

async function promiseAnyExample() {

   
    const result = await Promise.any([

        createTask("Server A", 100, true),

        createTask("Server B", 200),

        createTask("Server C", 300)

    ]);

    console.log(result);

}


// 5. Promise.resolve()

async function promiseResolveExample() {

    
    const result = await Promise.resolve(

        "Promise resolved successfully"

    );

    console.log(result);

}


// 6. Promise.reject()

async function promiseRejectExample() {

    console.log("\n6. Promise.reject()");

    try {

        await Promise.reject(

            new Error("Promise rejected")

        );

    } catch (error) {

        console.log(error.message);

    }

}


// Run all Promise method examples

async function runPromiseMethods() {

    await promiseAllExample();

    await promiseAllSettledExample();

    await promiseRaceExample();

    await promiseAnyExample();

    await promiseResolveExample();

    await promiseRejectExample();

}


/************************************************************
 TOPIC 7: API CALLS USING ASYNC/AWAIT
************************************************************/


// Real-time example: Fetch employee details from a server

async function getEmployee() {

    console.log("Fetching employee details...");

    const response = await fetch(

        "https://jsonplaceholder.typicode.com/users/1"

    );

    if (!response.ok) {

        throw new Error("API request failed: " + response.status);

    }

    const employee = await response.json();

    console.log("Employee Name:", employee.name);

    console.log("Employee Email:", employee.email);

    console.log("Employee City:", employee.address.city);

}


/************************************************************
 TOPIC 8: ASYNCHRONOUS ERROR HANDLING USING TRY-CATCH
************************************************************/


// Real-time example: Online payment

function makePayment() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const paymentSuccessful = false;

            if (paymentSuccessful) {

                resolve("Payment successful");

            } else {

                reject(new Error("Payment failed"));

            }

        }, 1000);

    });

}


async function handlePayment() {

    try {

        console.log("Processing payment...");

        const result = await makePayment();

        console.log(result);

    } catch (error) {

        console.log("Payment error:", error.message);

    } finally {

        console.log("Payment process finished");

    }

}


/************************************************************
 TOPIC 9: DEBOUNCE AND THROTTLE
************************************************************/

//console.log("\n========== TOPIC 9: DEBOUNCE & THROTTLE ==========");


// 1. DEBOUNCE

// Debounce executes a function after the user
// stops triggering an event for a given delay.

function debounce(callback, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}


// Real-time example: Search box

function searchProducts(searchText) {

    console.log("Searching products:", searchText);

}

const debouncedSearch = debounce(searchProducts, 1000);


async function debounceExample() {

    //console.log("\nDebounce example:");

    console.log("User typed: Lap");

    debouncedSearch("Lap");

    await new Promise(resolve => setTimeout(resolve, 300));

    console.log("User typed: Laptop");

    debouncedSearch("Laptop");

    await new Promise(resolve => setTimeout(resolve, 300));

    console.log("User typed: Laptop Bag");

    debouncedSearch("Laptop Bag");

    // Wait for debounce delay

    await new Promise(resolve => setTimeout(resolve, 1200));

}


// 2. THROTTLE

// Throttle executes a function at most once
// during a specified time interval.

function throttle(callback, delay) {

    let lastTime = 0;

    return function (...args) {

        const currentTime = Date.now();

        if (currentTime - lastTime >= delay) {

            lastTime = currentTime;

            callback(...args);

        }

    };

}


// Real-time example: Scroll event

function updateScroll() {

    console.log("Scroll event executed");

}

const throttledScroll = throttle(updateScroll, 1000);


async function throttleExample() {

    //console.log("\nThrottle example:");

    console.log("Scroll event 1");

    throttledScroll();

    await new Promise(resolve => setTimeout(resolve, 200));

    console.log("Scroll event 2");

    throttledScroll();

    await new Promise(resolve => setTimeout(resolve, 200));

    console.log("Scroll event 3");

    throttledScroll();

    await new Promise(resolve => setTimeout(resolve, 1100));

    console.log("Scroll event 4");

    throttledScroll();

}


/************************************************************
 RUN ALL TOPICS SEQUENTIALLY
************************************************************/

async function runAllExamples() {

    await handleOrders();

    foodDelivery();

    // Wait for the food delivery chain to finish
    await new Promise(resolve => setTimeout(resolve, 4500));

    await runPromiseMethods();

    try {

        await getEmployee();

    } catch (error) {

        console.log("API error:", error.message);

    }

    await handlePayment();

    await debounceExample();

    await throttleExample();

    
}

runAllExamples();
