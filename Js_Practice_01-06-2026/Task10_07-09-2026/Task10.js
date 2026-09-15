// Introduction to JavaScript

// JavaScript (JS) is a programming language mainly used to make web pages interactive and dynamic.

// Think of a website as:

// HTML → Structure
// CSS → Design
// JavaScript → Behavior / Logic


// example
function showMsg(){
    console.log("welcome to wrold!");
}

// JavaScript can be used for:

// Button clicks
// Form validation
// Calculations
// Changing HTML/CSS
// Fetching API data
// Creating games
// Shopping carts
// Login systems
// Animations


// Variables

// A variable is a container used to store data.

var name = "sana";
console.log(name);

// can be reassigned
var city = "hyd";
var city = "Wgl";
console.log(city)

// let: is used when the value of variable may change
let age = 20
age=21;
console.log(age)

// shopping cart
let cartItems = 2;

cartItems = cartItems + 1;

console.log(cartItems);

// const: is used when u dont intend to reassign the variable

const country = "India";
console.log(country);

// example
const gst = 18;
console.log(gst);

// | Feature              | `var` | `let` | `const` |
// | -------------------- | ----- | ----- | ------- |
// | Reassign             | ✅     | ✅     | ❌       |
// | Redeclare same scope | ✅     | ❌     | ❌       |
// | Block scoped         | ❌     | ✅     | ✅       |
// | Modern JS preference | ❌     | ✅     | ✅       |




// JavaScript Data Types

// A data type tells JavaScript what kind of data a value represents.

// JavaScript data types are broadly divided into:

// Primitive
//    ↓
// Reference / Non-Primitive
// 8. Primitive Data Types

// Primitive values represent a single value.

// The main primitive types are:

// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// string
let name1 = "tasan"
console.log(name1);

// 
let msg = "welcome to my wrold"
console.log(msg)

// number:
let age1 = 22;
let price = 99;
console.log(age1);
console.log(price)

// cart example
let price1 = 500;
let quantity = 3;

let total = price1 * quantity;

console.log(total);

// Boolean

let isLoggedIn =true;
console.log(isLoggedIn)

// login example
let username = "Sana";
let passwordCorrect = true;

if (passwordCorrect) {
    console.log("Login successful");
}

// Undefined

// A variable that has been declared but hasn't been given a value contains undefined.

let email;
console.log(email);

// Null

// null means intentionally empty/no value.

let d = null
console.log(d);

// BigInt

// BigInt is used for very large integers.

let bigNum = 1235678997875455308654n;
console.log(bigNum)


// Symbol

// Symbol creates a unique value.

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);


// Reference Data Types

// Reference types can contain collections or more complex structures.

// Common examples:

// Object
// Array
// Function

// Object

//An object stores data as key-value pairs.

let stu = {
    name:"tasan",
    age:17,
    course:"React"
};
console.log(stu);
console.log(name);
console.log(age);


// product example
let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

console.log(product.name);
console.log(product.price);


// Array

// An array stores multiple values.

let fruits =["Apple","Mango","Banana","grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

// 
let cart = ["Laptop", "Mouse", "Keyboard"];

console.log(cart[0]);
console.log(cart);
console.log(cart[1]);
console.log(cart[3]);


// Function

// A function is also a type of object in JavaScript and represents reusable behavior.

function greet(){
    console.log("Hello!!");
}
greet();

// example
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(500, 3));


// typeof Operator

// typeof tells you the type of a value.

// string
console.log(typeof"hello");
// number
console.log(typeof 200);

//Boolean
console.log(typeof true);

// undefined
let x;
console.log(typeof x);

// object
let stu1 ={
    name2:"tasleem"

};
console.log(typeof stu1);

// array
let num1 = [1,2,3,4,5,6,7,8,9];
console.log(typeof num1)


// Type Conversion

// Type conversion means intentionally changing one data type into another.

// For example:

// String → Number
// Number → String
// String → Boolean


// String to Number

let age2 ="32";
console.log(typeof age2);

// convert
let age4 ="32";
age4 = Number(age4);
console.log(age4)
console.log(typeof age4)

//Number to String
let price2 = 500;

price2 = String(price2);

console.log(typeof price2);

//String to Boolean
console.log(Boolean("Hello"));

// empty string
console.log(Boolean(""));


// Type Coercion

// Type coercion happens when JavaScript automatically converts one type into another during an operation.

let result = "20" + 5;
console.log(result);


// Operators

// Operators are symbols used to perform operations.

// Arithmetic Operators

// Arithmetic operators perform mathematical calculations.

// | Operator | Meaning        |
// | -------- | -------------- |
// | `+`      | Addition       |
// | `-`      | Subtraction    |
// | `*`      | Multiplication |
// | `/`      | Division       |
// | `%`      | Remainder      |
// | `**`     | Exponent       |

// addition 
let a=10;
let b=6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// example

let totalStudents = 25;
let groups = 4;

console.log(totalStudents % groups);


// Assignment Operators

// Assignment operators assign values to variables.

//+=
let score = 100;
score +=30;
console.log(score);


//-=
let balance = 1000;
balance-= 300;
console.log(balance);


//*=
let price4 = 200;
price4 *= 4;
console.log(price4);


// Comparison Operators

// Comparison operators compare values and return:

// true

// or

// false

// Common operators:

// >
// <
// >=
// <=
// ==
// ===
// !=
// !==

r=30;
g=20;
console.log(r>g);
console.log(r<g);
console.log(r>=g);
console.log(r<=g);
console.log(r==g);
console.log(r === g);


// example

console.log(10>5);
console.log(10<5);
console.log(18>=18);
console.log(10 =="10");
console.log(10 === "10")  //  checks both value and datatype


// Logical Operators

// Logical operators are mainly used to combine conditions.

// There are three important ones:

// && → AND
// || → OR
// !  → NOT
// 18. AND &&

// Both conditions must be true.

let age5 = 45;
let u = true;
console.log(age5>=18 && u);

// example
let age6 = 16;
let hasLicense = true;

console.log(age6 >= 18 && hasLicense);


// OR ||

// With OR, at least one condition must be true.

let Email = true;
let Phone = false;
console.log(Email|| Phone);

// example

let emailLogin = false;
let googleLogin = true;

if (emailLogin || googleLogin) {
    console.log("User can login");
}

// NOT !

// NOT reverses a boolean value.

let isLoggedIn1 = true;

console.log(!isLoggedIn1);

// example
let isAvailable = false;
console.log(!isAvailable);


// Template Literals

// Template literals are one of the most useful JavaScript features.

// They allow you to easily create strings containing variables and expressions.


let name6 ="mazhar";
let message=`Hello ${name6}`;
console.log(message);

// example

let name7 = "Sana";
let age7 = 22;
let city3 = "Warangal";

console.log(`My name is ${name7}. I am ${age7} years old and I live in ${city3}.`);

// with calculation
let price3 = 500;
let quantity2 = 3;

console.log(`Total price: ₹${price3 * quantity2}`);

// example
let age8 = 20;

let result8 = `${age8 >= 18 ? "Eligible to vote" : "Not eligible to vote"}`;

console.log(result8);