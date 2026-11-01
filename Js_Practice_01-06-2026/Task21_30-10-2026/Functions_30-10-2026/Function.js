// Scope Chain
// Meaning: The scope chain is how JavaScript searches for a variable. If a variable is not found inside the current function, JavaScript looks in its outer scope, continuing outward until it finds the variable or reaches the global scope.


const company = "lusi technologies";

function department(){
    const departmentName = "IT";

    function employee(){
        const employeeName = "mira";

        console.log(employeeName);
        console.log(departmentName);
        console.log(company);
    }
    employee()
}

department();


// . Lexical Environment
// Meaning: A lexical environment is the internal structure JavaScript uses to keep track of variables and their relationship to the surrounding code.

// The important idea is that a function's access to variables depends on where the function is written, not where it is called.

function createBill(){
    const taxRate = 10;

    function calculateTax(amount){
        return amount * taxRate/100;
    }
    console.log(calculateTax(2000));
}

createBill();


// Closures
// Meaning: A closure occurs when a function retains access to variables from its surrounding lexical environment, even after the outer function has finished executing.

function createCart(){
    let itemCount = 0;

    return function addItem(){
        itemCount++;

        console.log("Items in cart:",itemCount);
    };
}

const cart = createCart();

cart();
cart();
cart();
cart();


// Higher-Order Functions
// Meaning: A higher-order function is a function that accepts another function as an argument, returns a function, or does both.

const employees=[
    {name:"AAA",salary:25000},
    {name:"BBB",salary:40000},
    {name:"CCC",salary:35000}
];

const highSalaryEmployees = employees.filter (function(employee){
    return employee.salary >=30000;
});

console.log(highSalaryEmployees);


// Callback Functions
// Meaning: A callback is a function passed to another function so that the receiving function can execute it.

function registerEmployee(name, callback){
    console.log(name + " registered successfully");

    callback();
}

function sendWelcomeMessage(){
    console.log("Welcome to the company");
}

registerEmployee("Sara",sendWelcomeMessage);

//

setTimeout(function(){
    console.log("Data Loaded");
},2000)


// Function Composition
// Meaning: Function composition means combining two or more functions so that the output of one function becomes the input of another function.


function applyDiscount(price){
    return price- price * 0.10;
}

function addDelivery(price){
    return price + 10;
}

function calculateFinalPrice(price){
    return addDelivery(applyDiscount(price));
}

console.log(calculateFinalPrice(1000));


// Currying – Introduction
// Meaning: Currying transforms a function that takes multiple arguments at once into a sequence of functions, each taking one argument at a time.

function calculateTotal(price){
    return function(quantity){
        return price * quantity;
    };
}

const calculateLaptopTotal = calculateTotal(50000);

console.log(calculateLaptopTotal(2));
console.log(calculateLaptopTotal(3));


// normal with currying

// Normal function
function total(price, quantity) {
    return price * quantity;
}

console.log(total(50000, 2)); 

// Curried function
function totalCurried(price) {
    return function(quantity) {
        return price * quantity;
    };
}

console.log(totalCurried(50000)(2)); 


// The this Keyword
// Meaning: The this keyword refers to a value determined by how a function is called. In a regular object method, this usually refers to the object before the dot used to call that method.

const emp ={
    name:"sana",
    department:"IT",

    displayeDetails: function(){
        console.log("Name:",this.name);
        console.log("Department:",this.department)
    }
};

emp.displayeDetails();


// call()
// Meaning: call() invokes a function immediately, letting you explicitly specify what this refers to and pass arguments individually.


function displayEmp(city,salary){
    console.log("Name:", this.name);
    console.log("City:",city);
    console.log("Salary:",salary);
}

const emp1 = {
    name:"ansa"
};
const emp2 = {
    name:"anas"
};
 
displayEmp.call(emp1,"Hyderabad",30000);
displayEmp.call(emp2,"Andhra Pradesh",40000);


// apply()
// Meaning: apply() works like call(), but instead of passing arguments individually, you pass them as an array (or another array-like object)


function displayEmp(city, salary) {
    console.log("Name:", this.name);
    console.log("City:", city);
    console.log("Salary:", salary);
}

const employee = {
    name: "Amit"
};

const employeeDetails = ["Bengaluru", 45000];

displayEmp.apply(employee, employeeDetails);


// Difference between call() and apply()
// call()	                                 apply()
// Arguments are passed individually.	Arguments are passed in an array or array-like object.
// fn.call(obj, a, b)	                fn.apply(obj, [a, b])
// Executes immediately.	             Executes immediately.


// bind()
// Meaning: bind() creates a new function with a specified this value and, optionally, preset arguments. Unlike call() and apply(), it does not execute the function immediately.

const emp4 = {
    name:"shayan"
};

function greetEmp(message){
    console.log(message+ ","+this.name);
}

const greetShayan = greetEmp.bind(emp4,"welcome");

greetShayan();
greetShayan();
greetShayan();


// Method	How arguments are passed	       When does it execute?
// call()	Individually	                     Immediately
// apply()	As an array or array-like object	Immediately
// bind()	Individually; can preset arguments	  When the returned function is called





// Concept	Remember this
// 1. Scope Chain	              JavaScript searches outward for variables.
// 2. Lexical Environment	      Stores variable bindings and the surrounding environment reference.
// 3. Closures	                   A function retains access to its outer variables.
// 4. Higher-Order Functions	  Accept or return functions.
// 5. Callback Functions	      Functions passed to other functions for execution.
// 6. Function Composition	         Connect functions by passing one result into another.
// 7. Currying	                    Convert multiple arguments into a sequence of single-argument functions.
// 8. this	                     Its value depends on the calling context, except for lexical cases such as arrow functions.
// 9. call()	                Set this and pass arguments individually.
// 10. apply()	                Set this and pass arguments as an array-like object.
// 11. bind()	                Create a new function with a chosen this value.