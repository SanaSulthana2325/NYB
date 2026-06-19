// promise: 
//A Promise in JavaScript is an object that represents the future result of an asynchronous operation.


// it is divided into 2 state like a pyramid
//1. pending : still working,result not ready
//2.resolve : for success and // it is used for .then(): waits until the promise is resolved and receives the results from the previous promise
//3.reject : for failure // it is use .catch(): if promise rejected or an error is occurs the control goes to  .catch()

//Callback hell is a situation in JavaScript where you have many nested callbacks inside callbacks, making the code:

//Hard to read 
//Difficult to maintain 
//Very messy 

// example
let foodOrder = new Promise((resolve, reject) =>{
    let foodAvailable = true;
    setTimeout(() =>{
        if (foodAvailable){
            resolve("food is delivered!");
        }else{
            reject("food is not available");
        }
    }, 2000)
})

foodOrder
.then((message) =>{
    console.log(message)
})

.catch((error) =>{
    console.log(error)
})

// login system
let login = new Promise((resolve, reject) =>{
    let username = "admin";
    let password = "89765";

    setTimeout(() =>{
        if (username === "admin" && password === "89765"){
            resolve("Login successful!");
        }else{
            reject("Invalid credentials");
        }
    }, 1500)
})

login
.then((res) =>{
    console.log(res)
})

.catch((err) =>{
    console.log(err)
})

// promise chaining : promise can be connected one after another
let step1 = new Promise((resolve) => {
    resolve("Step 1 completed");
});
step1
.then((res) => {
    console.log(res)
    return "step 2 completed"
})
.then((res) =>{
    console.log(res);
    return "Step 3 completed";
})
.then((res) =>{
    console.log(res)
});

//promise.all(): used when all task must complete

let p1 = Promise.resolve("Task 1 done")
let p2 = Promise.resolve("task 2 done")

Promise.all([p1, p2])
.then((result) =>{
    console.log(result)
})


//.then(): used to handle successful results

// payment confirmation

let payment = new Promise((resolve) =>{
    setTimeout(() => resolve("payment Successful"), 2000 )
});
payment.then(msg => console.log(msg))

//File Upload system
let upload = new Promise((resolve) =>{
    setTimeout(() => resolve("File Uploaded"), 1500)
})
upload.then(res => console.log(res))

//multiple step process chaining


//.catch(): used to handle errors and failures

// why .catch() is important
// without .catch
//----> errors may crash your application
// ----> user may not know what went wrong
// ---->debugging becomes difficult

// login error
let login1 = new Promise((resolve,reject) =>{
    setTimeout(() => reject("wrong username or password"), 1500)
})
login1.catch(err => console.log(err))


// file upload
let upload1 = new Promise((resolve, reject) =>{
    setTimeout(() => reject("Uploaded failed: No Internet"), 1500)
})
upload1.catch(err => console.log(err))

//combination of all
let task = new Promise((resolve, reject) =>{
    let success = false;
    if(success) {
        resolve("task completed")
    }else{
        reject("task failed")
    }
})

task
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})
.finally(() =>{
    console.log("Process Finished")
})

//.finally:Runs after Promise is settled (either success or failure)


//.any:Returns the first successful Promise
let p11 = new Promise((resolve, reject) => setTimeout(() => reject("P1 Failed"), 1000));
let p21 = new Promise((resolve, reject) => setTimeout(() => resolve("P2 Success"), 2000));
let p31 = new Promise((resolve, reject) => setTimeout(() => resolve("P3 Success"), 3000));

Promise.any([p11, p21, p31])
    .then(result => {
        console.log("First Success:", result);
    })
    .catch(error => {
        console.log("All Failed:", error);
    });



//.race:Returns the first Promise that finishes (success or failure)
let p12 = new Promise(resolve => setTimeout(() => resolve("P1 Done"), 3000));
let p22 = new Promise(resolve => setTimeout(() => resolve("P2 Done"), 1000));
let p32 = new Promise(resolve => setTimeout(() => resolve("P3 Done"), 2000));

Promise.race([p12, p22, p32])
    .then(result => {
        console.log("Race Winner:", result);
    });


// promise.all:is used to run multiple Promises together in parallel and wait until all of them complete successfully.

let p15 = new Promise((resolve) => {
    setTimeout(() => resolve("Pizza Delivered"), 2000);
});

let p25 = new Promise((resolve) => {
    setTimeout(() => resolve("Burger Delivered"), 1000);
});

let p35 = new Promise((resolve) => {
    setTimeout(() => resolve("Ice Cream Delivered"), 3000);
});

Promise.all([p15, p25, p35])
    .then((result) => {
        console.log("All Orders:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

