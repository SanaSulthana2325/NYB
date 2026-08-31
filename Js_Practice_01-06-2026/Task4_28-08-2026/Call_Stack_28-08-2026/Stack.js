// Call Stack:

// Call Stack is a mechanism JavaScript uses to keep track of which functions are currently running and which function should run next.

// It follows:

// LIFO → Last In, First Out

// example

function first(){
    console.log("First function");
}

function second(){
    console.log("Second Function");
}

first();
second();

// function calling another function

function aa(){
    console.log("inside First aa");

    bb();
    console.log("Back to first");
}
function bb(){
    console.log("Inside second bb");
}

aa();

// Login System
function login(){
    console.log("Login started");

    ValidUser();

    console.log("Login successful");
}
function ValidUser(){
    console.log("Checking username and password")
}
login();

// shopping example

function placeOrder(){
    console.log("Order Placed")

    processPayment();

    console.log("Order Confirmed");
}

function processPayment(){
    console.log("Processing payment");
    ValidPayment();
    console.log("Payment successful");
}
function ValidPayment(){
    console.log("Validating Payment details");
}

placeOrder();

// Restaurant example

function orderFood() {
    console.log("Order received");

    prepareFood();

    console.log("Food ready");
}

function prepareFood() {
    console.log("Preparing food");

    cookFood();

    console.log("Food cooked");
}

function cookFood() {
    console.log("Cooking food");
}

orderFood();

// first()
//   ↓
// second()
//   ↓
// second() finishes
//   ↓
// back to first()
//   ↓
// first() finishes