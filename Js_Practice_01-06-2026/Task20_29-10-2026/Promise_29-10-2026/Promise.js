// A Promise in JavaScript is an object that represents the eventual result of an operation that may finish in the future. The operation can succeed or fail.

// Real-time example: Imagine you order a mobile phone online. Your order is placed, then it gets confirmed, or it may fail because the item is unavailable.

// JavaScript Promises help us handle operations such as:
// - Fetching data from an API.
// - Logging in to a website.
// - Processing online payments.
// - Uploading files.
// - Loading product details from a server.


// Promise Concept
// A Promise represents the result of an asynchronous operation.


const aaPromise = new Promise ((resolve,reject) =>{
    const orderAvailable = true;

    if(orderAvailable){
        resolve("order confirmed successfully!!");
    }else{
        reject("Soory, the product is out of stock");
    }
});

aaPromise
.then(message => console.log(message))
.catch(error => console.log(error));


// Pending State
// Pending means the Promise has not yet succeeded or failed.

const orderPromise = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Your order has been confirmed")
    },3000)
})

console.log(orderPromise)


// by using .then

const bbPromise  = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("your order has been confirmed")
    },3000);
});

bbPromise.then(message =>{
    console.log(message)
});


// Fulfilled State
// Fulfilled means the asynchronous operation has completed successfully.


const paymentPromise = new Promise((resolve,reject) =>{
    const paymentSuccessful = true;

    if(paymentSuccessful){
        resolve("payment Successful!!");
    }else{
        reject("payment failed!!");
    }
});

paymentPromise.then(message =>{
    console.log(message);
});


// Rejected State
// Rejected means the operation failed.

const paymentPromise1 = new Promise((resolve,reject) =>{
    const paymentSuccessful1 = false;

    if(paymentSuccessful1){
        resolve("payment successful to minnu!")
    }else{
        reject("payment failed! please try again.");
    }

});

paymentPromise1.catch(error =>{
    console.log(error);
})


// .then()
// The .then() method runs a callback when a Promise is fulfilled. It can also accept a second callback to handle rejection, although .catch() is often clearer for error handling.

const ccPromise = new Promise(resolve =>{
    resolve("sana is good girl");
});

ccPromise.then(message =>{
    console.log(message);
    console.log("receipt generated");
});

//

Promise.resolve(500)
.then(amount =>{
    return amount + 200;
})
.then(total =>{
    console.log(total)
});


// .catch()
// The .catch() method handles a rejected Promise or an error thrown by an earlier callback in the Promise chain.


const loginPromise = new Promise((resolve,reject) =>{
    const passwordCorrect = false;

    if(passwordCorrect){
        resolve("Login successfull!");

    }else{
        reject("Incorrect Password!");
    }
});

loginPromise
.then(message =>{
    console.log(message);
})
.catch(error =>{
console.log(error)
});

//
Promise.resolve("User found")
.then(message =>{
    console.log(message);
    throw new Error("unable to load profile");
})
.catch(error =>{
    console.log(error.message);
});


// .finally()
// The .finally() method runs when a Promise settles, whether it is fulfilled or rejected.

const profilePromise = new Promise((resolve,reject) =>{
    const profileLoaded = true;

    if(profileLoaded){
        resolve("Profile loaded to sam");
    }else{
        reject("Failed to load sam!!");
    }
});

profilePromise
.then(message => console.log(message))
.catch(error => console.log(error))
.finally(()=>{
    console.log("Loading finished sam")
})


// Promise Chaining
// Promise chaining means connecting multiple .then() calls so that one asynchronous operation can depend on the result of another.

const ddPromise = new Promise(resolve =>{
    resolve("order confirmed");

});

ddPromise
.then(message =>{
    console.log(message);
    return "payment paid to mira"
})
.then(message =>{
    console.log(message);
    return"product packed";
})
.then(message =>{
    console.log(message);
    return"product shipped to mira";
})
.then(message =>{
    console.log(message);
})
.catch(error =>{
    console.log("Error:",error);
})
.finally(()=>{
    console.log("Ordering process completed to Mira")
})



// Concept	         Meaning	                   Common method

// Promise	    Represents a future result	       new Promise()

// Pending	      Operation is unfinished	       Initial state

// Fulfilled	     Operation succeeded	        resolve()

// Rejected	       Operation failed	             reject()

// Handle success	   Process the result	         .then()

// Handle errors	     Process failures	         .catch()

// Cleanup	           Run after settlement	         .finally()

// Chain operations	Connect multiple steps	   .then().then()