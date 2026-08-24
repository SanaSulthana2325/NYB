// Function Composition in JavaScript

// Function Composition means combining two or more functions so that the output of one function becomes the input of another function.

// Simple definition

// Function Composition = Combining small functions to create a bigger operation.

// example

function double(num){
    return num * 2;
}

function addFive(num){
    return num + 5;
}

const result = addFive(double(10));

console.log(result)


// three function
function double(num1){
    return num1 * 2;
}
function addTen(num1){
    return num1 + 10
}
function square(num1){
    return num1 * num1;
}

const result1 = square(addTen(double(6)));
console.log(result1)

// shopping cart

function applyDisc(price){
    return price-(price * 10/100);
}

function addTax(price){
    return price + (price * 18/100);
}

const finalPrice= addTax(applyDisc(1000));

console.log(finalPrice);

// user Data

function trimName(name){
    return name.trim();
}
function makeLowerCase(name){
    return name.toLowerCase();
}

function capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}
const result2 = capitalize(
    makeLowerCase(
        trimName("  SANA")
    )
);
console.log(result2);

// with Arrow function

const double1 = n => n * 2;
const addFive1 = n => n + 5;
const square1 = n => n * n;

const compose = (f, g) => value => f(g(value));

const result4 = compose(addFive, double);

console.log(result4(10));