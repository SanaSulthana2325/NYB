// what is Execution Context?
// An Execution Context is an environment in which JavaScript executes your code.


// There are mainly three types of execution contexts:
// - Global Execution Context (GEC): Created when JavaScript starts running a script.
// - Function Execution Context (FEC): Created whenever a function is called.
// - Eval Execution Context: Created when code runs inside eval(); it is rarely used.


let balance = 5000;
let withdrawal = 1000;

function withdrawMoney(){
    let remainingBalance = balance - withdrawal;

    console.log("Available Balance: ₹" + balance);
    console.log("withdrawal Amount: ₹" + withdrawal);

    console.log("Remaining Balance: ₹" + remainingBalance);
}

withdrawMoney();

// What is a Call Stack?
// A Call Stack is a mechanism JavaScript uses to keep track of which function is currently executing and which function should execute next.

// It follows LIFO (Last In, First Out).

// Imagine stacking plates:
// - The first plate is placed at the bottom.
// - The next plate is placed on top.
// - The last plate placed on top is removed first.
// The call stack works similarly: the most recently called function finishes first.


function receiveOrder(){
    console.log("1. Order received");

    prepareFood();
}

function prepareFood(){
    console.log("2.Food is being prepared");

    serveFood();
}

function serveFood(){
    console.log("3. food is good in taste");
}
receiveOrder();
console.log("4. task completed in restaurant");








// What is the difference?
// Execution Context	                               Call Stack
// An environment where JavaScript executes code.	 Tracks active execution contexts and function calls.
// Created for the global code and function calls.	   Pushes and pops execution contexts.
// Manages variables, scope, and the value of this.	Follows LIFO order.
// Example: loginEmployee() gets its own context when called.	Example: loginEmployee() is pushed onto the stack.