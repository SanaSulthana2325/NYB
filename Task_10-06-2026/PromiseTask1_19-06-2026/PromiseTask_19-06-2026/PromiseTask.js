//Create and consume Promises.
// create promise:build the promise using new Promise()
// consume Promise: uses .then()and . catch() to get the results


//online exam results
// example create promise
let examResult = new Promise((resolve,reject) =>{
    let marks = 86;
    setTimeout(() =>{
        if (marks >= 35){
            resolve("student passed")
        }else{
            reject("student failed")
        }
    }, 2000)

})

// consume promise
examResult
.then((result) =>{
    console.log(result)
})
.catch((error) => {
    console.log(error)
})

// movie ticket booking
let movieBooking = new Promise((resolve, reject) =>{
    let seatAvailable = false;
    setTimeout(() =>{
        if (seatAvailable){
            resolve("ticket booked successfully")
        }else{
            reject("seat not available")
        }
    }, 1500)
})

movieBooking
.then((msg) =>{
    console.log(msg)
})

.catch((err) =>{
    console.log(err)
})

//Downloading a file

let downloading = new Promise((resolve,reject) =>{
    let internet = true;
    setTimeout(() =>{
        if (internet){
            resolve("file downloaded")
        }else{
            reject("downloaded failed")
        }
    }, 2500)

})

downloading
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

// OTP verification
let verifyOTP = new Promise((resolve,reject) =>{
    let OTP = 8787;
    setTimeout(() =>{
        if (OTP === 8787){
            resolve("OTP Verified")
        }else{
            reject("Invalid OTP")
        }
    }, 2500)

})

verifyOTP
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

//cab booking app

let bookCab = new Promise((resolve,reject) =>{
    let driverAvailable = true;
    setTimeout(() =>{
        if (driverAvailable){
            resolve("Cab Arriving in 5 minutes")
        }else{
            reject("No Drivers Available")
        }
    }, 2500)

})

bookCab
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

//youtube video loading

let loadVideo = new Promise((resolve,reject) =>{
    let serverWorking = false;
    setTimeout(() =>{
        if (serverWorking){
            resolve("Video playing")
        }else{
            reject("Video Cannot Be Loaded")
        }
    }, 2500)

})

loadVideo
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

//chat message 

let sendMessage = new Promise((resolve,reject) =>{
    let network = true;
    setTimeout(() =>{
        if (network){
            resolve("Message sent")
        }else{
            reject("Message failed")
        }
    }, 1500)

})

sendMessage
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

// game level unlock

let unlockLevel = new Promise((resolve,reject) =>{
    let score = true;
    setTimeout(() =>{
        if (unlockLevel){
            resolve("Next level unlock")
        }else{
            reject("Scored too low")
        }
    }, 2500)

})

unlockLevel
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

//Handle Promise responses using .then() and .catch().

// example
let promise = new Promise((resolve,reject) =>{
    let success = true;
    
        if (success){
            resolve("success")
        }else{
            reject("failed")
        }


})

promise
.then((result) =>{
    console.log(result)
})
.catch((err) =>{
    console.log(err)
})

//online shopping order

let placeOrder = new Promise((resolve,reject) =>{
    let stockAvailable = true;
    setTimeout(() =>{
        if (stockAvailable){
            resolve("order placed successfully")
        }else{
            reject("Product out of stock")
        }
    }, 1000)

})

placeOrder
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

//email sending system
let sendEmail = new Promise((resolve,reject) =>{
    let serverconnected = false;
    setTimeout(() =>{
        if (serverconnected){
            resolve("Email sent successfully")
        }else{
            reject("Email sending failed")
        }
    }, 1500)

})

sendEmail
.then((responses) =>{
    console.log(responses)
})
.catch((err) =>{
    console.log(err)
})


//student course enrollment

let enrollCourse = new Promise((resolve,reject) =>{
    let seatsLeft = 5;
    setTimeout(() =>{
        if (seatsLeft){
            resolve("Enrollment successful")
        }else{
            reject("Course full")
        }
    }, 1500)

})

enrollCourse
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})


//cloud backup
let backupData = new Promise((resolve,reject) =>{
    let internet = true;
    setTimeout(() =>{
        if (internet){
            resolve("Backup completed")
        }else{
            reject("Backup failed")
        }
    }, 1500)

})

backupData
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})

//ATM withdrawal

let withdrawMoney = new Promise((resolve,reject) =>{
    let balance = 2000;
    let withdrawAmount = 5000;
    setTimeout(() =>{
        if (balance >= withdrawAmount){
            resolve("withdrawal successful")
        }else{
            reject("Insufficient balance")
        }
    }, 2000)

})

withdrawMoney
.then((res) =>{
    console.log(res)
})
.catch((err) =>{
    console.log(err)
})


//Compare callbacks and Promises with examples.
//Both Callbacks and Promises are used to handle asynchronous operations in JavaScript.


// callback:
//A callback is a function passed into another function and executed later.

// example
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData((message) => {
    console.log(message);
});

//promise
//A Promise is an object representing the future result of an async operation.

let promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received");
    }, 2000);

});

promise1
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

    // execution flow
    //Promise created
     //Async task starts
     //After 2 seconds → resolve() runs
     //.then() receives result
     //Output printed

// comparison of call back and promise

//Feature	                 Callbacks	                 Promises
//Readability	           Difficult for large code	      Cleaner
//Callback Hell	                Yes	                         No
//Error Handling	           Hard	                     Easy with .catch()
//Chaining	                 Difficult	                 Easy using .then()
//Code Maintenance	            Hard	                     Easier
//Modern Usage	           Older method	                   Modern approach

// example food delivery
//1.call back
function orderFood(callback) {
    setTimeout(() => {
        callback("Food Delivered");
    }, 2000);
}

orderFood((message) => {
    console.log(message);
});


//2.promise
function orderFood() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Food Delivered");
        }, 2000);

    });
}

orderFood()
    .then((message) => {
        console.log(message);
    });


