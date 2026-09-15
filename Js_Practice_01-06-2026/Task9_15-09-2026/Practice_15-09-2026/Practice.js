//Create examples using different types of functions.

// function declaration

function calPrice(price,quantity){
    return price *quantity;
}

let total = calPrice(600,9);
console.log("Total Price:",total);

// with no parameters

function welcome(){
    console.log("Welcome to our new wrold");
}
welcome();

// function expression

const calDis = function(Price,Discount){
    return Price-(Price * Discount/100)
}
let finalPrice = calDis(1000, 10);
console.log("Final Price:",finalPrice);

// anonymous function
const greet = function(){
    console.log("Hello!, how are u");
}
greet();

// named function

const k = function addnNum(a,b){
    return a + b
}
console.log(k(19,67))

// Arrow function
let add = (a,b)=>{
    return a + b;
};
console.log(add(23,57))

//example
const multiply = (a,b) => a * b;
console.log(multiply(6,9));

// with one parameter
const square = num=> num * num;

console.log(square(7))

// callback function

function order(callback){
    console.log("Order is being Processed.......");
    callback();
}
function ordercom(){
    console.log("Order is ready!!!");
}
order(ordercom);

// callback with arrow function
function chips(callback){
    console.log("Chips ordered....");
    callback();
}
chips(()=>{
    console.log("Chips received!!!");
});

// higher order function

function cal(a,b, operation){
    return operation(a,b);
}
function add1(x,y){
    return x +y;
}
function multiply1(x,y){
    return x*y
}
console.log(cal(20,30,add1));
console.log(cal(56,78, multiply1))

// map with hof

let p = [100,200,300,400,500];
let updatedp = p.map(p=>p + 50);
console.log(updatedp);

// default parameter
function greet1(name = "Guest") {
    console.log("Hello " + name);
}

greet1("Sana");
greet1();

//IIFE

(function(){
    console.log("Application Started!");
})();

// functional scope
function login (){
    let username = "tasan";
    console.log(username);
}
login();

//block scope
if(true){
    let msg = "login successful";
    console.log(msg)
}


//Convert normal functions into arrow functions.

// without parameter

//normal
function greet2(){
    console.log("hai!!")
}

//arrow
let greet3 = () =>{
    console.log("hai!!")
};
greet3()

// with one parameter
function square1(num){
    return num * num;
}
console.log(square1(9))

// arraow
let sqrt = num =>{
    return num * num;
};
console.log(sqrt(6))


//convert one line arrow function
function multiply1(a,b){
    return a* b;
}
console.log(multiply1(5,9))

// arrow function
const multiply3 = (a,b) => a*b;
console.log(multiply3(67,99))

// with return a boolean
function isEven(num){
    return num %2 === 0;
}
console.log(isEven(11))

// arraow
let isEven1 = num => num%2===0;
console.log(isEven1(30));
console.log(isEven1(8));

// with callback

let num11 = [10,20,30,40,50,60,70,80];
let result = num11.map(function(number){
    return number * 2;
})
console.log(result);

// arrow
let numbers = [1, 2, 3, 4, 5];

let result1 = numbers.map(number => number * 2);

console.log(result1);


//Create functions that accept other functions as arguments.

// example
function greet4(name,callback){
    console.log("hai!!"+ name);
    callback();
}
function welcome(){
    console.log("welcome to the lulu mall");
}
greet4("Zeba",welcome);


//example
function placeOrder(order, callback) {
    console.log("Order placed: " + order);

    callback();
}

function sendNotification() {
    console.log("Notification sent to customer.");
}

placeOrder("Pizza", sendNotification);

// login system
function login1(username,callback){
    console.log(username + " logged in successfully");
    callback();
}
function showDashboard(){
    console.log("Opening dashboard........");

}
login1("minnu", showDashboard);


// with filter 
let ages = [12,14,23,31,32,15,18,19,20];
let adults = ages.filter(function(age){
    return age >= 18;
});
console.log(adults);

// example
function greet6(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet6("Sana", function() {
    console.log("Good Morning!");
});


//Implement Higher Order Functions.

// using Arrow function
function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(10, 5, (a, b) => a + b));
console.log(calculate(10, 5, (a, b) => a - b));
console.log(calculate(10, 5, (a, b) => a * b));

// with map
let numbers1 = [1, 2, 3, 4, 5];

let doubled = numbers1.map(function(number) {
    return number * 2;
});

console.log(doubled);

//Practice callback functions with practical examples.


// example
function login11(username, callback) {
    let message = username + " logged in successfully.";

    callback(message);
}

function displayMessage(message) {
    console.log(message);
}

login11("Zobiya", displayMessage);

// shopping cart

function calculateTotal(price, quantity, callback) {
    let total = price * quantity;

    callback(total);
}

function showTotal(total) {
    console.log("Total amount: ₹" + total);
}

calculateTotal(500, 3, showTotal);

// setTimeout() with callback

console.log("Start");

setTimeout(function() {
    console.log("Task completed");
}, 2000);

console.log("End");

//Demonstrate different types of scope.

//global scope
let username = "Isra";

function greet33() {
    console.log("Hello " + username);
}

greet33();

console.log(username);

// example
let compyName = "convient Store";

function showCompy(){
    console.log(compyName);
}
function displaycompy(){
    console.log(compyName);
}
showCompy();
displaycompy();

// functional scope

function login23(){
    let username = "tara";
    console.log(username);
}
login23();
console.log(username);

// Block scope
 if(true){
    let msg = "hello world";
    console.log(msg)
 }

// 
if(true){
    var msg1 = "hai";

}
console.log(msg1);

// var
if(true){
    var x=20;
}
console.log(x);

// let
if(true){
    let x=30;
}
console.log(x)

// const and var
if (true) {
    var a = 10;
    const b = 20;
}

console.log(a);
//console.log(b);

// nested scope

let company = "tata";

function nestedOuter() {

    let department = "IT";

    function inner() {

        let employee = "Sana";

        console.log(company);
        console.log(department);
        console.log(employee);
    }

    inner();
}

nestedOuter();

// lexical scope

let name2 = "jd";
function lexicalouter(){
    let msg2 = "welcome";
    function inner(){
        console.log(msg2);
        console.log(name2);
    }
    let name2 = "sara"
    inner();
}
lexicalouter();

// scope chain
let aa = 10;

function scopeChainOuter() {
    let b = 20;

    function inner() {
        let c = 30;

        console.log(c);
        console.log(b);
        console.log(aa);
    }

    inner();
}

scopeChainOuter();

//Demonstrate the differences between var, let, and const.

// | Feature                     | `var`           | `let`  | `const` |
// | --------------------------- | --------------- | ------ | ------- |
// | Scope                       | Function        | Block  | Block   |
// | Reassign                    | ✅ Yes           | ✅ Yes  | ❌ No    |
// | Redeclare in same scope     | ✅ Yes           | ❌ No   | ❌ No    |
// | Hoisted                     | ✅ Yes           | ✅ Yes* | ✅ Yes*  |
// | TDZ                         | ❌ No            | ✅ Yes  | ✅ Yes   |
// | Must initialize immediately | ❌ No            | ❌ No   | ✅ Yes   |
// | Modern JS preference        | ❌ Usually avoid | ✅      | ✅       |



//Create examples for hoisting.

//var hoisting
console.log(name22)
var name22 = "dada"

// var with number
console.log(age);
var age = 25;
console.log(age)

//let hoisting

//console.log(name4);
let name4 = "kaka";

//const Hoisting
//console.log(age1)
//const age1 = 34

// hoisting inside function
// function test1(){
//     console.log(x);
//     var x= 100
// }
// test1()


// Implement IIFE examples.
// example



(function(){
    console.log("hello mom")
})();

// with parameter

(function(name5){
    console.log("Hello " + name5);
})("lili");

//
(function() {
    console.log("Application started");
    console.log("Loading user settings...");
    console.log("Application ready");
})();



// Create practical examples demonstrating Closures.

function Aouter() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

let result3 = Aouter();

result3();

//counter

function createCounter() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();

// login attempts
function createLoginTracker() {

    let attempts = 0;

    return function() {
        attempts++;

        console.log("Login attempts:", attempts);
    };
}

const trackLogin = createLoginTracker();

trackLogin();
trackLogin();
trackLogin();

// | IIFE                                                  | Closure                                              |
// | ----------------------------------------------------- | ---------------------------------------------------- |
// | Function executes immediately                         | Function remembers outer variables                   |
// | Main purpose can be immediate execution/private scope | Main concept is preserved lexical access             |
// | Written as `(...)()`                                  | Created when inner function accesses outer variables |
// | Can exist without closure                             | Usually involves an inner function                   |
// | Example: initialization                               | Example: counter                                     |
