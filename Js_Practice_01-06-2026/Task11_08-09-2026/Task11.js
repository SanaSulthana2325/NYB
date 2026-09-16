// Truthy and Falsy Values

// In JavaScript, every value can be treated as either:

// Truthy → behaves like true
// Falsy → behaves like false
// Falsy values

// The main falsy values are:

// false
// 0
// -0
// ""
// null
// undefined
// NaN

// example empty string
let username = "";

if (username) {
    console.log("Username entered");
} else {
    console.log("Please enter username");
}

// truthy
let username1 = "Sana";

if (username1) {
    console.log("Username entered");
} else {
    console.log("Please enter username");
}

// shopping cart
let cartItems = 0;

if (cartItems) {
    console.log("Items are available");
} else {
    console.log("Your cart is empty");
}



// Conditional Statements

// Conditional statements allow JavaScript to make decisions.

// 1.if Statement

// The if statement executes code when a condition is true.

// Syntax
// if (condition) {
//     // code
// }

let age = 22;

if (age >= 18) {
    console.log("You are eligible to vote");
}


// 2. if...else

// Use else when you want to execute another block if the condition is false.

// Login
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome to your account");
} else {
    console.log("Please login first");
}



// 3.else if

// When there are multiple conditions, use else if.


//Student grades
let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Nested Conditions

// A condition inside another condition is called a nested condition.


// switch

// switch is useful when you want to compare one value against multiple possible values.


//Day of the week
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid day");
}

// Why break?

// Without break, JavaScript can continue executing the following cases.


// Ternary Operator

// The ternary operator is a short form of if...else.

// Syntax
// condition ? valueIfTrue : valueIfFalse;

let age1 = 20;
let result = age1 >=18?"Eligible" : "Not Eligible";

console.log(result);

// example

let isOnline = true;

let status = isOnline ? "Online" : "Offline";

console.log(status);


// Loops

// Loops are used when we want to repeat code multiple times.


// for Loop

// The for loop is commonly used when you know how many times you want to repeat something.

// Syntax
// for (initialization; condition; increment) {
//     // code
// }

// example
for (let i=1; i<=5; i++){
    console.log(i);
}


// display products

let products = ["Laptop", "Mobile", "Headphones"];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}


// while Loop

// A while loop executes as long as the condition is true.

//Example
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// example of ATM

let attempts = 1;

while (attempts <= 3) {
    console.log("Login attempt:", attempts);
    attempts++;
}

// do...while

// A do...while loop is different because it executes the code at least once, even if the condition is false.

// let num =10;
// do{
//     //console.log(num);
//     num++;

// }while(num< 5);


// example
let choice = "exit";

do {
    console.log("Menu displayed");
} while (choice !== "exit");


// for...in

// for...in is generally used to iterate over the keys/properties of an object.

// 
let student = {
    name: "Sana",
    age: 22,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}


// for...of

// for...of is used to get the values of an iterable, such as an array or string.


let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}


// example
let fruits1 = ["Apple", "Banana"];

for (let index in fruits1) {
    console.log(index);
}


// Functions

// A function is a reusable block of code.

// Instead of writing the same code repeatedly, create a function once and call it whenever needed.



// Function Declaration

// Syntax
// function functionName() {
//     // code
// }


// Example
function greet() {
    console.log("Welcome to JavaScript");
}

greet();

// example

function showWelcomeMessage() {
    console.log("Welcome to our website!");
}

showWelcomeMessage();
showWelcomeMessage()



//Function Expression

//A function can be stored inside a variable.

const greet1 = function () {
    console.log("Hello!");
};

greet1();



//Arrow Functions

//Arrow functions provide a shorter syntax for writing functions.

//Normal function
function add(a, b) {
    return a + b;
}


//Arrow function
const add1 = (a, b) => {
    return a + b;
};
console.log(add1(23,8))


//
const add2 = (a, b) => a + b;

console.log(add2(10, 20));


// Parameters

// Parameters are variables defined when creating the function.

function greet2(name) {
    console.log("Hello", name);
}
greet2("AAA")

//example

function add3(a, b) {
    console.log(a + b);
}

add3(10, 20);


// Default Parameters

// A default parameter provides a value when no argument is supplied.

function greet4(name = "Guest") {
    console.log("Hello", name);
}

greet4("Sana");
greet4();



// Rest Parameters

// Rest parameters allow a function to accept any number of arguments.

// Syntax:

// ...numbers


// Example

function addNumbers(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 20, 30, 40));


// Arguments Object

// Regular functions have an arguments object containing the arguments passed to the function.

function showArguments() {
    console.log(arguments);
}

showArguments("Apple", "Banana", "Mango");


// Recursive Functions

// A recursive function is a function that calls itself.

// It must have a base condition to stop.


// Example: Countdown


function countdown(number) {

    if (number === 0) {
        console.log("Done!");
        return;
    }

    console.log(number);

    countdown(number - 1);
}

countdown(5);


// Callback Functions

// A callback is a function that is passed as an argument to another function.

// Simple example


function greet5(name, callback) {
    console.log("Hello", name);

    callback();
}

function welcomeMessage() {
    console.log("Welcome to JavaScript!");
}

greet5("Sana", welcomeMessage);


//array with callback

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number);
});


// | Type                 | Example                     |
// | -------------------- | --------------------------- |
// | Function Declaration | `function add() {}`         |
// | Function Expression  | `const add = function() {}` |
// | Arrow Function       | `const add = () => {}`      |


