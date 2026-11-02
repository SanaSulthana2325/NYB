// Understand how JavaScript code execution works.

// Global Execution Context

// Memory Creation Phase

// Code Execution Phase

// Function Execution Context

// Call Stack

//

let name = "Rahul";

let age = 25;

function greet(){
    console.log("Hello " + name);
}

greet();

console.log(age)

// Global Execution Context
// When JavaScript starts running a program, it creates a Global Execution Context (GEC).

let company ="Dare solutions"

console.log(company);


// Memory Creation Phase
// Before executing the code line by line, JavaScript prepares memory for variables and function declarations.

var a=10;
var b=20;

function add(){
    console.log(a + b);
}
add();


// Code Execution Phase
// JavaScript now executes the code.


// Function Execution Context
// Whenever a function is called, JavaScript creates a new Function Execution Context to execute that function.


let balance = 5000;
function withdraw(amount){
    balance = balance - amount;
    console.log("Remaining balance:",balance);
}

withdraw(1000);
withdraw(102);


// Call Stack
// The Call Stack keeps track of which function is currently executing. It follows LIFO: Last In, First Out.


function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();


// Concept	                       Meaning
// Execution Context	         The environment in which JavaScript code runs
// Memory Creation Phase	    Prepares variables and function declarations
// Code Execution Phase	    Executes statements and assigns values
// Function Execution Context	The execution environment created for a function call
// Call Stack	                 Tracks active function calls


// Practice execution context and call stack examples.

//nested function calls

function palceOrder(){
    console.log("Order placed");
    prepareFood();
}
function prepareFood(){
    console.log("Food preparation started");
    packFood();
}
function packFood(){
    console.log("Food Packed");
}

palceOrder();

// return value

function calculateTotal(price,quantity){
    return price * quantity;
}

function displayBill(){
    let total = calculateTotal(100,3);
    console.log("Total bill:",total);
}
displayBill();

//
console.log("A");

function show(){
    console.log("B");
}

console.log("C")
show();


//
function one(){
    console.log(1);
    two();
    console.log(2);
}

function two(){
    console.log(3);
}
one();



// Implement examples demonstrating hoisting and scope.

// Hoisting in JavaScript
// Hoisting means JavaScript processes declarations before executing the code. The behavior differs depending on whether you use var, let, const, or a function declaration.


// with var

console.log(name1);
var name1 = "sana";
console.log(name1)

// with let and const

//console.log(age1); // reference error
let age1 = 26


// functional Hoisting

greet();
function greet(){
    console.log("Hello, welcome to the wrold");
}

// Scope in JavaScript
// Scope determines where a variable can be accessed in your code.

// JavaScript has three commonly discussed types of scope:
// - Global scope

let com = "Gika Solutions";

function displayCom(){
    console.log(com);
}

displayCom();
console.log(com);


// - Function scope:

function empDetails(){
    let empName = "Anas";
    console.log(empName);
}

empDetails();

//console.log(empName);

// - Block scope:

if(true){
    let age2 = 27;

    const city = "Hyd"

    console.log(age2);
    console.log(city);
}

//console.log(age2);   //.. reference error age cannot be accessed outside if

//var and const

if(true){
    var a = 10;
    let b = 20;
}

console.log(a);
console.log(b);


// Create closures and understand data privacy using closures.


// What is a Closure?
// A closure happens when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.


function outerFunction(){
    let msg = "hello";

    function innerFunction(){
        console.log(msg);
    }

    return innerFunction;
}

let result = outerFunction();
result();


// data privacy using clouser


function createBankAccount(){
    let balance = 1000;

    return{
        deposit: function (amount){
            if(amount >0){
                balance += amount;
                console.log("Deposited:",amount);
            }else{
                console.log("Enyer a Valid Amount")
            }
        },

        withdraw:function(amount){
            if(amount >0 && amount  <= balance){
                balance -= amount;
                console.log("withdrawn:", amount);
                
            }else{
                console.log("Invalid amount ");
            }
        },

        checkBalance: function(){
            console.log("Current balance:",balance);
        }
    };
}

const account = createBankAccount();

account.checkBalance();
account.deposit(900);
account.withdraw(500);
account.checkBalance();
account.checkBalance();


// employees salary


function createEmployee(name, salary) {
    let privateSalary = salary;

    return {
        showName: function() {
            console.log("Employee:", name);
        },

        showSalary: function() {
            console.log("Salary:", privateSalary);
        },

        increaseSalary: function(amount) {
            if (amount > 0) {
                privateSalary += amount;
                console.log("Salary increased");
            }
        }
    };
}

const employee = createEmployee("Rahul", 25000);

employee.showName();
employee.showSalary();

employee.increaseSalary(5000);
employee.showSalary();

console.log(employee.privateSalary);


// counter using clouser

function createCounter(){
    let count = 0;

    return function(){
        count++;
        console.log("Count:",count);
    };
}

const counter = createCounter();

counter();
counter();
counter();
counter();
counter();

//
function outer(){
    let value = 10;

    return function(){
        value +=5;

        console.log(value);
    };
}

const test = outer();

test();
test();
test();



// Practice different behaviours of the `this` keyword.


//this inside an object method

const aa = {
    name:"gigi",
    salary:25000,

    showDetails: function(){
        console.log("Name:",this.name);
        console.log("Salary:",this.salary);
    }
};
aa.showDetails();


// this inside a regular function
function showThis() {
    "use strict";
    console.log("Function this:", this);
}

showThis();


// in arrow function


const user = {
    name:"yoyo",
    showNmae: function(){
        const display = () =>{
            console.log("User:", this.name);
        };

        display();
    }
};

user.showNmae();

// in constructor function

function Bb(name,salary){
    this.name = name;
    this.salary = salary;
}

const cc = new Bb("kaka",26000);
const dd = new Bb("Sonu",34000);

console.log(cc.name);
console.log(cc.salary);

console.log(dd.name);
console.log(dd.salary);


// with event handler


const button = document.getElementById("myButton");

button.addEventListener("click",function(){
    console.log(this);
    console.log(this.textContent);
});


// using call() to change this

function showEmployee(){
    console.log("Employee:", this.name);
}

const emp11 = {name:"lulu"};
const emp22 ={name:"lusi"};

showEmployee.call(emp11);
showEmployee.call(emp22);



// Implement examples using `call()`, `apply()`, and `bind()`.


// call() Method
// Definition: The call() method invokes a function immediately and lets you specify what this refers to. Additional arguments are passed individually.


function calculateSalary(bonus,allowance){
    let total = this.salary + bonus + allowance;

    console.log("Employee:",this.name);
    console.log("Basic Salary:",this.salary);
}

const ee = {
    name:"tara",
    salary: 25000
};

const ff = {
    name:"hara",
    salary:30000
};

calculateSalary.call(ee,5000,2000);
calculateSalary.call(ff,4000,1000);


// apply() Method
// Definition: The apply() method also invokes a function immediately, but it accepts the function's arguments as an array (or array-like object).

function calculatePayment(bonus, overtime){
    let total = this.salary + bonus + overtime;

    console.log("Employee:",this.name);
    console.log("Total Payment:",total);
}

const gg = { 
    name:"Anu",
    salary:28000

};
const extraPayments = [3000,1500];


// bind() Method
// Definition: The bind() method returns a new function with a specified this value. It does not execute that function immediately.


function greetEmployee(role){
    console.log("Employee:",this.name);
    console.log("Role:",role);
}

const hh = {
    name:"kiran"
};

const greetKiran = greetEmployee.bind(hh);

console.log("Function created");

greetKiran("Developer");
greetKiran("Team Leader");


// Call: execute now, arguments separated by commas.

// Apply: execute now, arguments in an array.

// Bind: create a function to execute later.




function showDetails(city, country) {
    console.log("Name:", this.name);
    console.log("City:", city);
    console.log("Country:", country);
}

const person = {
    name: "Rahul"
};

console.log("--- call() ---");
showDetails.call(person, "Hyderabad", "India");

console.log("--- apply() ---");
showDetails.apply(person, ["Chennai", "India"]);

console.log("--- bind() ---");
const showRahulDetails = showDetails.bind(
    person,
    "Bengaluru",
    "India"
);

showRahulDetails();
