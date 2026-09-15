// Function Declaration

// A function declaration is the traditional way of creating a function.

// Syntax
// function functionName() {
//     // code
// }

// example
function calTotal(price,quantity){  // parameters
    return price * quantity; 
}
let total = calTotal(500,5); // arguments
console.log(total);

// example
function greet(){
    console.log("welcome to world")
}
greet();

// login message
function showmessage(){
    console.log("welcome back, sana")
}
showmessage();

// calculate employee
function calculateSalary(basicSalary, bonus) {
    let totalSalary = basicSalary + bonus;

    console.log("Total Salary: ₹" + totalSalary);
}

calculateSalary(30000, 5000);
calculateSalary(40000, 8000);

// pass or fail
function checkResults(marks){
    if(marks >= 40){
        console.log("student passed");
    }else{
        console.log("student failed")
    }
}
checkResults(34);
checkResults(89);

// Function Expression

// A function can also be stored inside a variable.

const calDiscount = function(price,discount){
    return price - (price * discount/100);
};
console.log(calDiscount(1000,20));

//login
const loginMessage = function(){
    console.log("Login Successful!");
};
loginMessage();

// function declaration and expression
// function declaration
function a(){
    console.log("Welcome world");
}
a();

// function expression

const rr = function(){
    console.log("hello!");
};
rr();


// Why Use Function Expressions?

// Function expressions are useful when:

// You want to store a function in a variable.
// You want to pass a function to another function.
// You want to create functions conditionally.
// You want to use callbacks.
// You want to use anonymous functions.


//Anonymous Function : a function without a name

const greet1 = function(){
    console.log("Welcome to the wrold!");

};
greet1()

// named function : function has its own name

const greet2 = function welcomeUser(){
    console.log("Welcom Nashu");
};
greet2();

//Arrow function
//Arrow functions provide a shorter syntax for writing functions.

const add = (a,b) =>{
    return a+b;
};
console.log(add(10,30))

// example
const calGST = price => price * 0.18;
console.log(calGST(1000))


// Callback Functions

// A callback function is a function passed to another function as an argument.

function Z(name,callback){
    console.log("Hello "+ name);
    callback()
}
function g(){
    console.log("Welcome home!!");
}
Z("minnu", g);

// example
function preparefood(callback){
    console.log("Food id prepared....");
    callback();
}
function h(){
    console.log("your food is ready!!");
}
preparefood(h);


// Higher-Order Functions

// A higher-order function is a function that:

// Takes another function as an argument, OR
// Returns another function.

// example
function processOrder(order,callback){
    console.log("Processing "+ order);
    callback();
}
processOrder("Pizza",function(){
    console.log("Order confirmed!!");
});

// example with map
let prices = [100,200,300,400,500];

let newPrices = prices.map(function(price){
    return price + 50;
});
console.log(newPrices)



// First-Class Functions

// JavaScript treats functions as values.

// That means you can:

// Store functions in variables
// Put functions in arrays
// Pass functions as arguments
// Return functions from functions

// example
const d = function(){
    console.log("hello!");
}
d()

// inside an array
const operations = [
    function(){
        console.log("Adding....");
    },
    function(){
        console.log("Subtracting.....");
    }
];
operations[0]();
operations[1]();


// Default Parameter
// A default parameter is a value that JavaScript uses automatically when you don't provide an argument when calling a function.

// Simple definition

// Default parameter = Backup/default value for a function parameter.

// example
function ta(name = "guest"){
    console.log("Hello " + name);
}
ta("tasleem");
ta();
ta();

// example
function createAccount(username,role = "user"){
    console.log(username + " is Registered as "+role);
}
createAccount("mira");
createAccount("AdminUser","Admin");



//Rest Parameters

// Rest parameters allow a function to accept any number of arguments.

// Syntax:

// ...parameter

function calT(...price){
    let total = 0;

    for(let price of prices){
        total += price;
    }
    return total;
}
console.log(calT(100,200,300,400,500));
console.log(calT(30,20,40,50,60,44,55));

// Arguments Object

// Normal JavaScript functions have an arguments object.

// It contains the arguments passed to the function.

function showProduct(){
    console.log(arguments);
}
showProduct("Laptop","Phone","Tablet");

// or
function j (){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

}
j("lays","Bingo","kurkure","popcon")


// Global Scope

// A variable declared outside functions and blocks can have global scope.

let com = "tech";
function showCom(){
    console.log(com);
}
showCom();


// Function Scope

// Variables declared inside a function are available only inside that function.

// example

function login3(){
    let username1 = "Sana";
    console.log(username1);
}
login3();
//console.log(username1);



// Block Scope

// let and const are block-scoped.

// A block is usually represented by { }.

//example

if(true){
    let message = "Login successful";
    const status = 200;

    console.log(message);
    console.log(status);
}

//scope Comparion

var a = 10;
let b = 20;
const c = 30;

function test(){
    let x = 100;

    if(true){
        let y =200;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(x);
        console.log(y);
    }
}
test()


// Lexical Scope

// Lexical scope means a function can access variables based on where the function was written, not where it was called.

// example

let msg = "hai";
function outer(){
    let name = "Sonu";

    function inner(){
        console.log(msg);
        console.log(name);
    }
    inner();
}

outer();



// Clouser:

// A closure occurs when an inner function remembers variables from its outer function even after the outer function has finished executing.

// example

function createCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = createCounter();

counter();
counter();
counter();
counter();
counter();


// bank example
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            console.log("Balance:", balance);
        },

        withdraw(amount) {
            balance -= amount;
            console.log("Balance:", balance);
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);


// IIFE means:

// Immediately Invoked Function Expression

// It is a function that runs immediately after it is created.

// Syntax
// (function() {
//     console.log("Function executed!");
// })();


// example

(function(){
    let appName = "Foodie App"
    console.log(appName);
})();

// with parameters

(function(name){
    console.log("Hello "+ name);
})("Dida");

// login
(function(username) {

    console.log("User logged in:", username);
    console.log("Welcome back!");

})("Sana");

// with return value

let result = (function(a, b) {

    return a + b;

})(10, 20);

console.log(result);


// Hoisting

// Hoisting is JavaScript's behavior where certain declarations are processed before the code executes.

// functon declaration with hoisting

greet();
function greet(){
    console.log("Hello!,this is me");
}

// with var
var x;
console.log(x);
x = 10;

// with let
let name ="Tasan";
console.log(name);
//const name = "tasan";  // TDZ (temporal dead zone)


// with var example used in fi=unction scope
if (true){
    var msg1 = "hello";
}
console.log(msg1)

// let with blocked scope
let age = 34
age =23;
console.log(age)

// const with block scoped
const country = "India";
console.log(country);


// | Feature               | `var`         | `let`                  | `const`        |
// | --------------------- | ------------- | ---------------------- | -------------- |
// | Scope                 | Function      | Block                  | Block          |
// | Reassign              | ✅             | ✅                      | ❌              |
// | Redeclare same scope  | ✅             | ❌                      | ❌              |
// | Hoisted               | Yes           | Yes*                   | Yes*           |
// | TDZ                   | ❌             | ✅                      | ✅              |
// | Modern recommendation | Usually avoid | Use when value changes | Use by default |


// const → default choice
// let   → when value needs to change
// var   → generally avoid in modern code


// TDZ:temporal dead zone
// TDZ is the time during which a let or const variable exists in a scope but cannot be accessed yet.



// | Scope              | Where declared                 | Accessible where?                    |
// | ------------------ | ------------------------------ | ------------------------------------ |
// | **Global Scope**   | Outside functions/blocks       | Throughout accessible code           |
// | **Function Scope** | Inside a function              | Inside that function                 |
// | **Block Scope**    | Inside `{}`                    | Inside that block                    |
// | **Lexical Scope**  | Based on where code is written | Inner scopes can access outer scopes |
