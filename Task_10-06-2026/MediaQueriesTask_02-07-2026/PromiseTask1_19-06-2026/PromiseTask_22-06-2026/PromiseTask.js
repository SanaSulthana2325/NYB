//Create examples using Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any().

// food delivery app
function getRestaurants(){
    return Promise.resolve("Restaurant Loaded");

}

function getOffers(){
    return Promise.resolve("Offeres Loaded");

}

function getAddress(){
    return Promise.resolve("Address assign is Loaded");

}

function getRecommendation(){
    return Promise.resolve("Recommendation is made");

}
Promise.all([
    getRestaurants(),
    getOffers(),
    getAddress(),
    getRecommendation()
])
.then((result)=>{
    console.log(result)
})

// fail case in promise.all
let p1 = Promise.resolve("success 1");
let p2 = Promise.reject("server error");
let p3 = Promise.resolve("Success 3")
Promise.all([p1,p2,p3])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

// bank dashboard
Promise.all([
    Promise.resolve("Balance loaded"),
    Promise.resolve("transaction loaded"),
    Promise.resolve("loan details loaded"),
    Promise.resolve("credit score loaded")
])
.then((result)=>{
    console.log(result)
})

// proomise.race
// API timeout
let apiCall = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Data Loaded")
    },5000)
})

let timeout = new Promise((reject)=>{
    setTimeout(()=>{
        reject("Request timeout")
    },3000)
})
Promise.race([apiCall, timeout])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

//promise.race with rejection
let f1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("success")
    },3000)
})

let f2 = new Promise((reject)=>{
    setTimeout(()=>{
        reject("Fast error")
    },1000)
})
Promise.race([f1, f2])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

// addition race
let add1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(10 + 20)
    },3000)
})

let add2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(50 + 50)
    },1000)
})
Promise.race([add1, add2])
.then((result)=>{
    console.log(result)
})

// promise.allSettled

// e- commerce website
Promise.allSettled([
    Promise.resolve("Product Loaded"),
    Promise.resolve("reviews loaded"),
    Promise.reject("offers failed "),
    Promise.resolve("stock loaded")
])
.then((result)=>{
    console.log(result)
})

//social media app
Promise.allSettled([
    Promise.resolve("Feed Loaded"),
    Promise.reject("Stories Failed"),
    Promise.resolve("Notifications Loaded "),
    Promise.resolve("Messages loaded")
])
.then((result)=>{
    console.log(result)
})

//mathematical calculations
let calc1 = Promise.resolve(10 + 30);
let calc2 = Promise.reject("calculation error");
let calc3 = Promise.resolve(89 * 67);
Promise.allSettled([calc1, calc2, calc3])
.then((result)=>{
    console.log(result)
})


// promise.any:
// login system:
let googlelogin = new Promise(( resolve,reject)=>{
    setTimeout(()=>{
        reject("google login failed")
    },1000)
})

let facebookLogin = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("facebook login successful")
    },2000)
})

let githubLogin = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("github login success")
    },3000)
})
Promise.any([googlelogin, facebookLogin, githubLogin])
.then((result)=>{
    console.log(result)
})

// calculation
let cal1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("calculation failed")
    },1000)
})
let cal2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(200+4356)
    },2000)
})

let cal3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(200*4356)
    },3000)
})
Promise.any([cal1, cal2, cal3])
.then((result)=>{
    console.log(result)
})

//-----> if all the promise failed it shows aggregate error: multiple errors togeather

//Compare the behavior and use cases of each Promise method.

//1. Promise.all()
//--->Behavior
//Waits for all promises to succeed
//Returns all results in an array
//If even one promise fails → entire Promise fails immediately

let k1 = Promise.resolve("HTML Loaded");
let k2 = Promise.resolve("CSS Loaded");
let k3 = Promise.resolve("JS Loaded");

Promise.all([k1, k2, k3])
.then((result) => {
    console.log(result);
});

//Use Cases
//All tasks are required
//One failure should stop everything

let p11 = Promise.resolve("Task 1");
let p21 = Promise.reject("Task 2 Failed");
let p31 = Promise.resolve("Task 3");

Promise.all([p11, p21, p31])
.catch((error) => {
    console.log(error);
});

// 2. Promise.race()
//Behavior
//Returns the first settled promise
//First resolved OR rejected promise wins
//Does not wait for others
let fast = new Promise((resolve) => {
    setTimeout(() => resolve("Fast Response"), 1000);
});

let slow = new Promise((resolve) => {
    setTimeout(() => resolve("Slow Response"), 3000);
});

Promise.race([fast, slow])
.then((result) => {
    console.log(result);
});

//for rejection
let j1 = new Promise((_, reject) => {
    setTimeout(() => reject("Server Failed"), 500);
});

let j2 = new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 2000);
});

Promise.race([j1, j2])
.catch((error) => {
    console.log(error);
});

//Use Cases

//Only the fastest response matters
//Timeout handling
//Selecting fastest server

// 
//3. Promise.allSettled()
//Behavior
//Waits for all promises
//Does not fail if one rejects
//Returns success and failure details

let o1 = Promise.resolve("Login Success");
let o2 = Promise.reject("Payment Failed");
let o3 = Promise.resolve("Profile Loaded");

Promise.allSettled([o1, o2, o3])
.then((result) => {
    console.log(result);
});

//Use Cases

//Need results of all tasks
//Some failures are acceptable
//Want detailed status reporting

//4. Promise.any()
//Behavior
//Returns first successful promise
//Ignores rejected promises
//Fails only if all promises fail

let p12 = Promise.reject("Server 1 Failed");

let p22 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Server 2 Success");
    }, 2000);
});

Promise.any([p12, p22])
.then((result) => {
    console.log(result);
});

//Use Cases
//Need only one successful result
//Backup systems
//Redundant servers
//Fault-tolerant applications


//Understand Promise states and execution flow.
//A Promise is an object that represents the future result of an asynchronous operation.

//A Promise has 3 states.

//Pending--->	Initial state, operation not completed
//Fulfilled--->	Operation completed successfully
//Rejected--->	Operation failed

//1. Pending State

//When the Promise starts, it is in the pending state.

let promise = new Promise((resolve, reject) => {

});

console.log(promise);

//2.Fulfilled State

//When resolve() is called

//Promise becomes fulfilled.

let promise1 = new Promise((AAA, BBB) => {

    AAA("Payment Successful");

});

promise1.then((result) => {
    console.log(result);
});

// 3. reject:Promise becomes rejected, error and failure
let promise4 = new Promise((resolve, reject) => {

    reject("Payment Failed");

});

promise4.catch((error) => {
    console.log(error);
});

// execution flow
console.log("Start");

let u = new Promise((resolve, reject) => {

    console.log("Promise Running");

    resolve("Success");

});

u.then((result) => {
    console.log(result);
});

console.log("End");

//4.finally

//Study the basics of Async and Await.
//async and await are modern JavaScript features used to handle asynchronous operations in a simple and readable way.

//They are built on top of Promises.

//1.async:it is used before a function and it makes the function always return a promise
async function greet() {
    return "Hello";
}

greet().then((result) => {
    console.log(result);
});


//2.await():used inside async function and it waits until the promise is completed
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data Received");
        }, 2000);

    });

}

async function getData() {

    console.log("Loading...");

    let result = await fetchData();

    console.log(result);

}

getData();


// comparion of both
function task1() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Task 1 Done");
        }, 1000);

    });

}

function task2() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Task 2 Done");
        }, 2000);

    });

}

async function runTasks() {

    let result1 = await task1();
    console.log(result1);

    let result2 = await task2();
    console.log(result2);

}

runTasks();

// execution flow
//async function starts
//        ↓
//await encountered
//        ↓
//pause execution
//        ↓
//Promise completes
//        ↓
//execution resumes



//Document observations and outputs for each Promise implementation.

//3. Promise.all()
let p17 = Promise.resolve("HTML Loaded");

let p27 = Promise.resolve("CSS Loaded");

let p37 = Promise.resolve("JavaScript Loaded");

Promise.all([p17, p27, p37])

.then((results) => {
    console.log(results);
})

.catch((error) => {
    console.log(error);
});

//| Observation             | Explanation                |
//| ----------------------- | -------------------------- |
//| Waits for all promises  | All tasks must complete    |
//| Returns array           | Stores all results         |
//| Executes simultaneously | Improves performance       |
//| Order maintained        | Output follows input order |

//Promise.allSettled
let p14 = Promise.resolve("Profile Loaded");

let p24 = Promise.reject("Payment Failed");

let p34 = Promise.resolve("Posts Loaded");

Promise.allSettled([p14, p24, p34])

.then((results) => {
    console.log(results);
});

//Observation	                      Explanation
//Waits for all promises	        Even rejected ones
//Never stops execution	          All results collected
//Returns status objects	        Detailed information
//Useful for reports	           Success + failure tracking


//promise.any()

let p16 = Promise.reject("Server 1 Failed");

let p26 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Server 2 Success");
    }, 2000);

});

let p36 = Promise.reject("Server 3 Failed");

Promise.any([p16, p26, p36])

.then((result) => {
    console.log(result);
})

.catch((error) => {
    console.log(error);
});


//| Observation               | Explanation                 |
//| ------------------------- | --------------------------- |
//| Ignores rejected promises | Continues searching success |
//| First success returned    | Stops after success         |
//| Useful for backup systems | Fault-tolerant design       |

//asyn and await
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data Received");
        }, 2000);

    });

}

async function getData() {

    console.log("Loading...");

    let result = await fetchData();

    console.log(result);

}

getData();

//| Observation             | Explanation              |
//| ----------------------- | ------------------------ |
//| `await` pauses function | Waits for Promise        |
//| Cleaner syntax          | Easier readability       |
//| Looks synchronous       | But works asynchronously |
//| Improves debugging      | Simpler flow             |

// promise.race
let fast1 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Fast Server");
    }, 1000);

});

let slow1 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Slow Server");
    }, 3000);

});

Promise.race([fast, slow])

.then((result) => {
    console.log(result);
});

//| Observation                | Explanation                |
//| -------------------------- | -------------------------- |
//| First settled promise wins | Fastest result returned    |
//| Does not wait for others   | Remaining promises ignored |
//| Useful for timeout systems | Quick response selection   |

