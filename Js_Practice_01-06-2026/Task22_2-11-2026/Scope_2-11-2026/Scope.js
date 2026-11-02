// What is Global Scope?
// A variable declared outside all functions and blocks has global scope (subject to how it is declared). It can generally be accessed throughout the script, including inside functions.


let companyName = "Tech solutions";

function showEmployee(){
    console.log("Employee works at:", companyName);
}

function showManager(){
    console.log("Manager works at:",companyName);
}

showEmployee();
showManager();

console.log("Company Name:",companyName);


// Function Scope
// What is Function Scope?
// A variable declared using let or const inside a function can be accessed only within that function and its nested scopes.

// Variables declared with var are also function-scoped, even if declared inside a block within that function.

function calculateSalary(){
    let salary = 30000;
    let bonus = 5000;

    let totalSalary = salary + bonus;

    console.log("Basic Salary:", salary);
    console.log("Bonus:",bonus);
    console.log("Total salary:",totalSalary);
}

calculateSalary();

// if we access outside the function it shows reference error

function calculateSalary(){
    let salary = 30000;
    console.log("Inside function:", salary);
}
calculateSalary();
//console.log("outside function:",salary);


// Block Scope
// What is Block Scope?
// A block is a section of code surrounded by curly braces { }, such as an if statement or a for loop.

// Variables declared with let and const inside a block are accessible only within that block and its nested scopes.

let orderAmount = 2000;

if(orderAmount >= 1000){
    let discount = 200;
    const message = "Discount applied!";

    console.log(message);
    console.log("Discount:",discount);
}

console.log("Order Amount:",orderAmount);



// Feature	              Global Scope	                            Function Scope	                  Block Scope
// Where declared?	     Outside functions and blocks	      Inside a function	                      Inside { } blocks
// Where accessible?	Throughout its accessible scope	       Inside the function and nested scopes	Inside the block and nested scopes
// Common 
// declarations	    let, const, var	                                  let, const, var	                let, const
// Real-time 
// example	         Company name	S                               alary calculation	                    Shopping discount


// What is Hoisting?
// Hoisting is JavaScript's behavior of processing declarations before executing the code in their scope.

// This means JavaScript handles variable and function declarations during the creation phase of an execution context, before running the code line by line.

// Hoisting behaves differently for var, let, const, and function declarations.


console.log(employeeName);

var employeeName = "Rahul";

console.log(employeeName);

//

var employeeName;
console.log(employeeName);
employeeName = "san";
console.log(employeeName);

//
calSalary();

function calSalary(){
    let salary = 30000;
    let bonus = 5000;

    console.log("Monthly Salary:",salary + bonus);
}


// Temporal Dead Zone (TDZ)
// What is the Temporal Dead Zone?
// The Temporal Dead Zone (TDZ) is the period between entering a scope and the point where a let or const variable is initialized.

// During this period, the variable exists in the scope but cannot be accessed. Attempting to access it causes a ReferenceError.


//console.log(paymentAmount);
let paymentAmount = 2000;

// 
function registerEmploye(){
    console.log("Employee registration started");

    console.log(employeeName);

    let employeeName = "Priya";

    console.log("Employee Name:",employeeName);
}

//registerEmploye();



// Feature	                    Hoisting	                                               Temporal Dead Zone

// Meaning      	How declarations are processed before execution                    Period when let and const cannot yet be accessed

// var	              Initialized to undefined	                                             No TDZ for var

// let	             Declaration is processed, but access before initialization fails	       Yes

// const	          Declaration is processed, but access before initialization fails	               Yes

// Function declarations	Can generally be called before their declaration	              Not applicable to ordinary function declarations

// Typical result	      May print undefined or allow a function call	                         Throws ReferenceError when accessed too early

console.log(price);

var price = 100;


//console.log(price1);

let price1 = 100;

//console.log(price2);

//const price2 = 100;

