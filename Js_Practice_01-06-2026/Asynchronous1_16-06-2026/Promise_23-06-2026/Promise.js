//Async and Await
//async and await are modern JavaScript features used to handle asynchronous operations in a cleaner and easier way.

// async: it is used before a function and it makes the function always return a promise



// await: used inside async function and it waits until the promise is completed

// error handling
function login() {
    return new Promise((resolve, reject) => {
        let success = false;

        if (success) {
            resolve("Login Successful");
        } else {
            reject("Login Failed");
        }
    });
}

async function userLogin() {
    try {
        const result = await login();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

userLogin();

//product fetching
function getProduct() {
    return Promise.resolve({
        name: "Laptop",
        price: 50000
    });
}

async function showProduct() {
    const product = await getProduct();

    console.log(product);
}

showProduct();

//payment gateway
function payment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Payment Successful");
        }, 3000);
    });
}

async function processPayment() {
    console.log("Processing Payment...");

    const result = await payment();

    console.log(result);
}

processPayment();

//weather app
function getWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                city: "Hyderabad",
                temperature: 35
            });
        }, 2000);
    });
}

async function weatherReport() {
    const weather = await getWeather();

    console.log(weather);
}

weatherReport();

// file uploading
function uploadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File Uploaded");
        }, 4000);
    });
}

async function upload() {
    console.log("Uploading...");

    const result = await uploadFile();

    console.log(result);
}

upload();

// try...catch: awaits/ can also receive rejected promise