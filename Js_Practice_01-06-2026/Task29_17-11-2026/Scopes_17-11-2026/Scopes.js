// What is Scope?

// Scope means where a variable can be accessed or used in JavaScript.

// Global Scope
// A variable declared outside all functions and blocks is called a global variable.

// It can be accessed from different parts of the program.


let companyName = "TCS";
function employee1(){
    console.log(companyName);
}
function employee2(){
    console.log(companyName);
}

employee1();
employee2();

console.log(companyName);


// Function Scope
// A variable declared inside a function can only be accessed within that function.

// Variables declared using var, let, and const inside a function are function-scoped in terms of accessibility.

function employeeDetails(){
    let empName = "AAA";
    let Salary = 30000;

    console.log(empName);
    console.log(Salary);

}

employeeDetails();
// console.log(empName);


// Block Scope
// A block is a piece of code written inside curly braces { }.

// Variables declared using let and const inside a block are accessible only within that block.

if (true){
    let emp1 = "Priya";
    const department = "HR";
    var company = "AbAb company";

    console.log(emp1);
    console.log(department);
    console.log(company);
}

console.log(company);
//console.log(emp1);


//  What is the difference between var, let, and const?
// Feature	        var	        let	     const
// Scope	       Function 	Block	Block
// Re-declaration	Yes      	No	      No
// Re-assignment	Yes     	Yes	       No
// Hoisting	    Yes, initialized as undefined	Yes, but TDZ	Yes, but TDZ



// What is Hoisting?

// Hoisting is JavaScript's behavior of processing declarations before executing the code.

// In simple words, JavaScript knows about certain variable and function declarations before reaching their actual declaration line.


// using var
var emp;
console.log(emp);
 emp = "Sara";

// using let

// console.log(emp2);
let emp2 = "shahi";

// Temporal Dead Zone (TDZ)
// TDZ is the time between entering a scope and initializing a let or const variable.

// During this period, accessing the variable causes a ReferenceError.
{
    //console.log(name1);
    let name1 = "Sasa";

    console.log(name1)

}

// function hoisting

greet();
function greet(){
    console.log("Welcome to CSS")
}



// What is the difference between Hoisting and TDZ?
// - Hoisting: JavaScript processes declarations before execution.
// - TDZ: The period during which let and const cannot be accessed before initialization.



// What is Execution Context?

// Execution context is the environment in which JavaScript code is executed.

// Whenever JavaScript executes code, it creates an execution context.

// 1. Global Execution Context
// When JavaScript starts executing a program, it creates the Global Execution Context.

let com = "google";
let location1 = "HYD";

console.log(com);
console.log(location1);


// Function Execution Context
// Whenever a function is called, JavaScript creates a new function execution context.

let com1 = "lula";
function interview(){
    let candidate = "haha";

    console.log("Company:",com1);
    console.log("Candidate:",candidate);
}

interview();



// What is Call Stack?

// Call Stack is a mechanism JavaScript uses to keep track of function calls.

// It follows the LIFO principle:

// LIFO = Last In, First Out.

function first() {
    console.log("First function started");

    second();

    console.log("First function ended");
}

function second() {
    console.log("Second function started");

    third();

    console.log("Second function ended");
}

function third() {
    console.log("Third function executed");
}

first();



// Lexical Scope

// Lexical scope means an inner function can access variables declared in its outer function.

// In simple words, a function can access variables based on where it is written in the code.


function department(){
    let departmentName = "HR";
    function employee2(){
        console.log(departmentName);
    }
    employee2()
}
department();


// What is Closure?

// A closure happens when an inner function remembers and continues to access variables from its outer function, even after the outer function has finished executing.

// In simple words:

// A closure allows a function to remember its previous environment.


function bankAccount() {

    let balance = 1000;

    function deposit(amount) {

        balance = balance + amount;

        console.log("Current Balance:", balance);
    }

    return deposit;
}

let myAccount = bankAccount();

myAccount(500);
myAccount(1000);
myAccount(200);


//
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log("Count:",count);

    };
}

let result = counter();

result();
result();
result();
result();


// Lexical Scope	                     Closure
// Access depends on code location	        Function remembers outer variables
// Inner function accesses outer variables	Inner function retains access after outer function returns
// Defines variable accessibility	        Preserves access to an outer environment


// What is this?

// The this keyword refers to the object associated with the current function call.

// The value of this depends on how a function is called.


let emp3 = {
    name:"KAKA",
    department:"Marketing",
    salary:25000,
    showDetails:function(){
        console.log("Name:",this.name);
        console.log("Department:",this.department);
        console.log("Salary:", this.salary);
    }
};

emp3.showDetails();


// this in regular function

function show(){
    console.log(this)

}
show();


// this inside arrow function

let employee = {

    name: "Priya",

    showDetails: function() {

        let display = () => {

            console.log(this.name);

        };

        display();

    }

};

employee.showDetails();