// ES6 (ECMAScript 2015) introduced many features that made JavaScript easier and more powerful.

// Some important ES6+ features are:

// let and const
// Arrow functions
// Template literals

// example with let and const

let name = "Sana";
name = "Ayesha";

const age = 22;

console.log(name);
console.log(age);

// 

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// Optional Chaining ?.

// Optional chaining allows us to safely access properties that might not exist.

let student = {
    name: "Sana"
};

console.log(student.address?.city);


// nested object
let student1 = {
    name: "Sana",

    address: {
        city: "Warangal",
        state: "Telangana"
    }
};

console.log(student1.address?.city);
console.log(student1.address?.country);

// function call

let stu = {
    name:"AAA"
};
stu .sayHello?.()


// Nullish Coalescing ??

// The nullish coalescing operator provides a default value when something is:

// null
// undefined


// example
let username;

console.log(username ?? "Guest");


// null
let phone = null;

console.log(phone ?? "Phone number not available");




// Spread Operator ...

// The spread operator expands or spreads values.

// It is commonly used with:

// Arrays
// Objects
// Function arguments

// copying an array
let numbers = [10, 20, 30];

let newNumbers = [...numbers];

console.log(newNumbers);


//JavaScript Modules

// A module is a JavaScript file containing code that can be shared with another JavaScript

// export function add(a, b) {
//     return a + b;
// }

// export function subtract(a, b) {
//     return a - b;
// }