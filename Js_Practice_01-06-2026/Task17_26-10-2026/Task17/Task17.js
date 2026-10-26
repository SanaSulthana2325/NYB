// Introduction to JavaScript
// JavaScript is a programming language that adds logic and interactivity to web pages. It works alongside HTML and CSS.
// - HTML defines the structure.
// - CSS defines the appearance.
// - JavaScript defines the behavior.


console.log("Welcome to the Employee Portal!");


// JavaScript Features
// JavaScript has several useful features:
// - Dynamic typing: Variables can hold different types of values.
// - Interpreted/JIT execution: Modern JavaScript engines execute code using interpretation and just-in-time compilation.
// - Event-driven: It can respond to clicks, keyboard input, and other events.
// - First-class functions: Functions can be stored in variables and passed to other functions.
// - Asynchronous programming: It supports Promises and async/await.
// - Cross-platform: It runs in browsers and environments such as Node.js.

let quantity = 2;
quantity = quantity + 1;
console.log("Cart quantity:", quantity);



// JavaScript Execution Environment
// An execution environment provides the tools JavaScript needs to run.

// Two common environments are:
// - Browser: Provides document, window, and browser APIs.
// - Node.js: Provides server-side capabilities, file-system APIs, and other runtime features.

console.log("JavaScript is running");
console.log(10+20);


// JavaScript in the Browser
// JavaScript can interact with HTML elements through the DOM (Document Object Model).

function changeMessage(){
document.getElementById("message").textContent = "Welcome to our employee wrold!";
}



// Variables: var, let, and const
// Variables store information that a program can use.
// 5.1 var
// var declares a variable that can be reassigned and redeclared within the same scope. It is function-scoped, or global-scoped when declared at the top level of a classic browser script.


var age = 27;
age = 34;
console.log(age);

// let
// let declares a block-scoped variable. Its value can be changed, but it cannot be redeclared in the same scope.

let Ca = 3;
Ca = 4;
console.log(Ca);


// const
// const declares a block-scoped binding that cannot be reassigned. It must be initialized when declared.

const ta = 0.19;
console.log(ta);

const emp = {name:"Sam"};
emp.name = "Tasan";

console.log(emp.name);


// Comparison of var, let, and const

// Feature	                 var	   let	   const
// Reassign value	          Yes	   Yes	     No
// Redeclare in same scope	  Yes	    No	      No
// Block-scoped	               No	   Yes	     Yes
// Must initialize immediately	No	   No	          Yes



// Scope in JavaScript
// Scope determines where a variable can be accessed.

// 6.1 Global Scope
// A global variable is available across the relevant global scope.

const company = "Tasan Pvt Ltd";

function showCompany(){
    console.log(company);
}

showCompany();
console.log(company);


// Function Scope
// A variable declared with var inside a function is accessible within that function, but not outside it.


function calculateSaraly(){
    var salary = 30000;
    console.log(salary);
}

calculateSaraly()


// Block Scope
// A block is a section of code enclosed in { }. Variables declared with let and const inside a block are accessible only within that block.

if(true){
    let bonus = 5000;
    console.log(bonus);
}


//  Hoisting
// Hoisting describes how JavaScript processes declarations before executing code.
// - var declarations are initialized with undefined.
// - let and const declarations are hoisted but cannot be accessed before initialization.
// - Function declarations can generally be called before their declaration in the same scope.


console.log(empName);

var empName = "Anu";
console.log(empName);


// Temporal Dead Zone (TDZ)
// The Temporal Dead Zone is the period between entering a scope and initializing a let or const variable. Accessing the variable during this period causes a ReferenceError.


// console.log(username);

// let username = "rahul";



// Data Types in JavaScript
// A data type tells JavaScript what kind of value a variable contains.

// JavaScript data types are divided into two broad groups:
// - Primitive types: String, Number, Boolean, Undefined, Null, BigInt, and Symbol.
// - Reference types: Objects, including arrays and functions.


//Primitive

//a.String
// A string represents text and is written inside single quotes, double quotes, or backticks.


const studentName = "tasan";
console.log(studentName);

console.log(typeof studentName);

//b.Number
// The Number type represents integers and decimal numbers.


const DressPrice = 45000;
const heelsPrice = 5000;

console.log(DressPrice + heelsPrice);


//c.Boolean
// A Boolean has only two values: true and false.

const isLoggedIn = true;
console.log(isLoggedIn);

console.log(typeof isLoggedIn )


//d.Undefined
// undefined commonly indicates that a variable has been declared but has not been assigned a value.

let phoneNumber;
console.log(phoneNumber);
console.log(typeof phoneNumber);


//e.Null
// null represents an intentionally empty or absent value.

const manager = null;

console.log(manager);
console.log(typeof manager);

//f.BigInt
// BigInt represents integers larger than the range safely represented by the ordinary Number type.

const largeNumber = 23847823748237474728n;

console.log(largeNumber);

console.log(typeof largeNumber);

//g.Symbol
// A Symbol creates a unique primitive value, often used as a unique object property key.


const empId = Symbol("id");

console.log(typeof empId);

console.log(empId === Symbol ("id"));


// Reference Data Types
// Objects store collections of properties. Arrays store ordered collections of values. Both are reference types.


const emp1 = {
    name:"san",
    age:34
};

const skills = ["cooking","singing","dancing"];

console.log(emp.name);
console.log(skills[2]);

//a.Objects
// An object stores data as key-value pairs.

const product = {
    name:"Mobile",
    price:30000,
    inStock: true
};

console.log(product.name);
console.log(product.price);
console.log(product.inStock);


// b. Arrays
// An array stores multiple values in an ordered list. Array indexes start at 0.


const emp2 = ["AAA","BBB","CCC","DDD"];

console.log(emp2[0]);
console.log(emp2[1]);
console.log(emp2[2]);
console.log(emp2[3]);
console.log(emp2[4]);


// Type Conversion
// Type conversion means explicitly changing a value from one data type to another.


const price = "250";

const numericPrice = Number(price);

console.log(numericPrice + 50);
console.log(typeof numericPrice);

console.log(String(100));
console.log(Number("26"));
console.log(Boolean(1));


// Type Coercion
// Type coercion happens when JavaScript automatically converts a value's type during an operation.

console.log("100" + 50);

console.log("100" - 30)


// typeof Operator
// The typeof operator returns a string describing a value's type.

console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);


console.log(Array.isArray([]));


// Operators in JavaScript
// Operators perform calculations, compare values, assign values, and combine conditions.


// Arithmetic Operators
// Arithmetic operators perform mathematical calculations.

// Operator            	Meaning	        Example result
// +	                Addition	     10 + 5 → 15
// -	               Subtraction	      10 - 5 → 5
// *	              Multiplication	  10 * 5 → 50
// /	               Division	           10 / 5 → 2
// %	              Remainder         	10 % 3 → 1
// **	              Exponentiation	  2 ** 3 → 8


// example

const itemPrice = 200;
const quantity1 = 3;

console.log(itemPrice * quantity1);
console.log(itemPrice + quantity1);
console.log(itemPrice - quantity1);
console.log(itemPrice / quantity1);
console.log(itemPrice % quantity1);
console.log(itemPrice ** quantity1);


// Assignment Operators
// Assignment operators assign or update variable values.

let quantity2 = 2;
//quantity2 +=3;
//quantity2 -=3;
//quantity2 *=3;
//quantity2 /=3;
 quantity2 %=3;


console.log(quantity2);


// Comparison Operators
// Comparison operators compare values and return a Boolean.


const age1 = 26;

console.log(age1 >18);
console.log(age1 <18);
console.log(age1 >=18);
console.log(age1 <=18);
console.log(age1 ===18);
console.log(age1 !==18);

// Logical Operators
// Logical operators combine or reverse conditions.
// - && — AND: both conditions must be truthy.
// - || — OR: at least one condition must be truthy.
// - ! — NOT: reverses truthiness.


const isLoggedIn1 = true;

const hasPermission = true;

console.log(isLoggedIn1 && hasPermission);
console.log(isLoggedIn1 || hasPermission);

console.log(!isLoggedIn1)


// Ternary Operator
// The ternary operator is a short way to choose between two values based on a condition.

//syntax:condition ? valueIfTrue : valueIfFalse


const orderAmount = 1500;

const delivery = orderAmount >= 1000 ? "free Delivery":"Delivery Charges Apply";

console.log(delivery);


// Nullish Coalescing (??)
// The nullish coalescing operator returns the right-hand value only when the left-hand value is null or undefined.


const userName = null;

console.log(userName ?? "Guest");

console.log(0 ?? 300)


// Optional Chaining (?.)
// Optional chaining safely accesses a property or method when the value before ?. is null or undefined.


const emp3 = {
    name:"Mano"
};

console.log(emp3.department?.name);
console.log(emp3.name)

// Conditional Statements
// Conditional statements let a program make decisions based on conditions.


//a.if Statement
// The if statement executes code when a condition is true.

const performanceScore = 99;

if(performanceScore >= 50){
    console.log("Employee is Eligible for a bonus");
}

// b. else Statement
// The else statement executes when the if condition is false.

const purchaseAmt = 800;

if(purchaseAmt >= 1000){
    console.log("Discount Applied");
}else{
    console.log("No Discount");
}


// c. else if Statement
// Use else if to check multiple conditions in sequence.


const marks = 90;

if(marks >=90){
    console.log("Grade A");
}else if (marks >= 70){
    console.log("Grade B");
}else if (marks >=50){
    console.log("Grade C")
}else{
    console.log("Fail")
}


// switch Statement
// A switch statement selects a matching case from several possible values.


const orderStatus = "shipped";

switch(orderStatus){
    case "pending":
        console.log("Order is Pending");
        break;

    case "shipped":
        console.log("Order is an the Way");
        break;

    case "delivered":
        console.log("Order Delivered successfully")
        break;

        default:
            console.log("Unknown order status");
}


// Loops in JavaScript
// Loops repeat a block of code. They are useful for displaying employees, processing products, and calculating totals.

//a.for Loop
// A for loop is useful when you know how many times you want to repeat an operation.

for(let id = 1; id <= 5; id++){
    console.log("Employee ID:",id)
}


// The three parts of the loop are:
// - Initialization: let id = 1
// - Condition: id <= 5
// - Update: id++


//b.while Loop
// A while loop repeats as long as its condition is true. The condition is checked before each iteration.

let task = 1;

while (task <= 3){
    //console.log("Processing task:",task);
    task++;
}


// do...while Loop
// A do...while loop executes its body at least once because the condition is checked after the body.

let attempts = 1;

do{
    console.log("showing login menu");
    attempts++;
}while(attempts <=0)


// break Statement
// The break statement immediately exits the nearest enclosing loop or switch.

const employees = ["Anu", "Ravi", "Priya"];

for (let i = 0; i < employees.length; i++) {
  if (employees[i] === "Ravi") {
    console.log("Employee found:", employees[i]);
    break;
  }
}


// continue Statement
// The continue statement skips the rest of the current loop iteration and proceeds to the next one.

for(let id = 1; id <= 6; id++){
    if(id === 3){
        continue;
    }

    console.log("Processing Employee:",id)
}



// Topic	                                   Main purpose
// JavaScript	                  Adds behavior and logic to applications
// var, let, const	               Declare variables
// Scope	                     Determines where variables are accessible
// Hoisting	                 Describes how declarations are processed
// TDZ	                         Prevents early access to uninitialized let and const
// Data types	                 Classify the kinds of values
// Type conversion	             Explicitly changes a value's type
// Type coercion	             Automatically converts types
// typeof	                      hecks the type category of a value
// Operators	                 Calculate, compare, assign, and combine conditions
// if, else, else if	         Execute code based on conditions
// switch	                     Select a matching case
// for, while, do...while	     Repeat code
// break	                      Exit a loop or switch
// continue	                  Skip the current loop iteration