// Promise.all()
// Meaning: Promise.all() waits for all the Promises to fulfill. If even one Promise rejects, the returned Promise rejects immediately with that rejection reason.


const employees = new Promise(resolve =>{
    setTimeout(()=>{
        resolve("Employee details loaded");
    },1000);
});

const department = new Promise(resolve =>{
    setTimeout(()=>{
        resolve("Department details loaded");
    },2000)
});

const salaries = new Promise(resolve =>{
    setTimeout(()=>{
        resolve("Salary details loaded");
    },1500);
});

Promise.all([employees,department,salaries])
.then(results =>{
    console.log(results);
    console.log("dashboard loaded successfully");
})
.catch(error =>{
    console.log("Error:",error);
});


// Promise.allSettled()
// Meaning: Promise.allSettled() waits until every Promise has either fulfilled or rejected. It gives you the result of each operation, including its status.

const order1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Order 101 delivered");
    }, 1000);
});

const order2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Order 102 not found");
    }, 1500);
});

const order3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Order 103 dispatched");
    }, 2000);
});

Promise.allSettled([order1, order2, order3])
    .then(results => {
        results.forEach((result, index) => {
            console.log(`Order ${index + 1}:`, result);
        });
    });


// Promise.race()
// Meaning: Promise.race() settles as soon as the first input Promise settles. The winner can either fulfill or reject.


const server1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server 1 responded");
    }, 2000);
});

const server2 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server 2 responded");
    }, 1000);
});

Promise.race([server1, server2])
    .then(result => {
        console.log("First result:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });


// Promise.any()
// Meaning: Promise.any() fulfills as soon as the first input Promise fulfills. It ignores rejections as long as at least one Promise eventually fulfills.

// If every Promise rejects, Promise.any() rejects with an AggregateError.

const server11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server 11 failed");
    }, 500);
});

const server21 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server 21 connected successfully");
    }, 1000);
});

const server3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server 31 connected successfully");
    }, 1500);
});

Promise.any([server11, server21, server3])
    .then(result => {
        console.log("Connected:", result);
    })
    .catch(error => {
        console.log("All servers failed:", error.errors);
    });




//     Utility	                             When does it settle?	                               If one Promise rejects
// Promise.all()	                      When all fulfill, or as soon as one rejects	                Rejects
// Promise.allSettled()	              After all Promises settle	                                 Collects the rejection and continues waiting
// Promise.race()	                     As soon as the first Promise settles	                      Rejects if the first settled Promise rejects
// Promise.any()	                     As soon as the first Promise fulfills, or all reject	     Ignores the rejection if another Promise can still fulfill

