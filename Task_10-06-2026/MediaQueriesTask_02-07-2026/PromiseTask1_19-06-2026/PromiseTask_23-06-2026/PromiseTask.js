//Convert Promise-based programs into Async/Await implementations.
// example
function getUser(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("user data loaded")
        },2000)
    })
}
getUser()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)

})

//  await/ async
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function getData() {
    try {
        const result = await fetchData();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getData();


// login example
function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Login Successful");
        }, 1000);
    });
}

login()
.then((msg) => {
    console.log(msg);
});

// await/ async
function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Login Successful");
        }, 1000);
    });
}

async function userLogin() {
    const msg = await login();

    console.log(msg);
}

userLogin();



//Practice error handling with Async/Await.

// error handling
function payment() {
    return new Promise((resolve, reject) => {
        let success = false;

        if (success) {
            resolve("Payment Successful");
        } else {
            reject("Payment Failed");
        }
    });
}

payment()
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});

//awit/async
function payment() {
    return new Promise((resolve, reject) => {
        let success = false;

        if (success) {
            resolve("Payment Successful");
        } else {
            reject("Payment Failed");
        }
    });
}

async function processPayment() {
    try {
        const msg = await payment();

        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

processPayment();


// sequential async operations
function step1() {
    return Promise.resolve("Step 1 Completed");
}

function step2() {
    return Promise.resolve("Step 2 Completed");
}

step1()
.then((result1) => {
    console.log(result1);

    return step2();
})
.then((result2) => {
    console.log(result2);
});

//await/async
function step1() {
    return Promise.resolve("Step 1 Completed");
}

function step2() {
    return Promise.resolve("Step 2 Completed");
}

async function executeSteps() {
    const result1 = await step1();
    console.log(result1);

    const result2 = await step2();
    console.log(result2);
}

executeSteps();