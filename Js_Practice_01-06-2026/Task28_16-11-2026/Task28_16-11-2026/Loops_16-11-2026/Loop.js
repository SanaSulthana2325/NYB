// What are Loops?
// Definition: Loops are used to execute a block of code repeatedly until a particular condition is satisfied.

// for Loop
// Definition: A for loop is used when we know how many times we want to execute a block of code.

for (let i = 1; i <= 5; i++) {
    console.log("Employee ID: " + i);
}

// example

let prices = [500, 1000, 1500];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

console.log("Total Bill: ₹" + total);


// while Loop
// Definition: A while loop executes a block of code repeatedly as long as the given condition is true.

// It is useful when we don't know exactly how many times the loop needs to run.


let balance = 3000;

while (balance > 0) {

    console.log("Available Balance: ₹" + balance);

    balance = balance - 1000;
}


// do-while Loop
// Definition: A do-while loop executes the code at least once before checking the condition.

let attempts = 1;

do {

    console.log("Login Attempt: " + attempts);

    attempts++;

} while (attempts <= 3);



// Loop	When to use	                                       Important point
// for     	Known number of repetitions	                  Initialization, condition and update together
// while	  Repetitions depend on a condition	               Checks condition before execution
// do-while	Code must execute at least once              	Checks condition after execution


// Function?
// Definition: A function is a reusable block of code designed to perform a particular task.

// In simple words, instead of writing the same code repeatedly, we write it once inside a function and call it whenever required.


// Function Declaration
// A function declaration defines a function using the function keyword.

function welcomeEmployee() {

    console.log("Welcome to our company!");

}

welcomeEmployee();
welcomeEmployee();
welcomeEmployee();

// Function with Parameters
// Definition: Parameters are values passed into a function so that it can perform operations using different inputs.


function calculateSalary(basicSalary, bonus) {

    let totalSalary = basicSalary + bonus;

    console.log("Total Salary: ₹" + totalSalary);

}

calculateSalary(20000, 5000);
calculateSalary(30000, 10000);


// Function with Return Statement
// Definition: The return statement sends a result back from a function to the place where it was called.

function calculateBill(price, quantity) {

    return price * quantity;

}

let total1 = calculateBill(500, 3);

console.log("Total Bill: ₹" + total1);


// Function Expression
// Definition: A function expression means creating a function and storing it inside a variable.

// Unlike a function declaration, a function expression is not available to be called before its initialization.


let calculateBalance = function(balance, withdrawal) {

    return balance - withdrawal;

};

let remainingBalance = calculateBalance(10000, 3000);

console.log("Remaining Balance: ₹" + remainingBalance);


// Function Declaration	                           Function Expression
// Declared using function name	                    Stored inside a variable
// Can be called before declaration due to hoisting	Cannot be called before initialization
// Example: function add()	                            Example: let add = function()


// Arrow Function?
// Definition: An arrow function is a shorter way of writing functions in JavaScript. It was introduced in ES6 (ECMAScript 2015)


const calculateDiscount = (price, discount) => {

    let discountAmount = price * discount / 100;

    return price - discountAmount;

};

console.log(calculateDiscount(1000, 10));


// Arrays in JavaScript
// Definition: An Array is a collection of multiple values stored in a single variable.

let employees = [
    "Rahul",
    "Priya",
    "Sana",
    "John"
];

console.log(employees);
console.log(employees[0]);
console.log(employees[2]);

// push()
// Definition: Adds a new element at the end of an array.

let employees1 = ["Rahul", "Priya"];

employees1.push("Sana");

console.log(employees1);

// pop()
// Definition: Removes the last element from an array.

let employees2 = ["Rahul", "Priya", "Sana"];

employees2.pop();

console.log(employees2);

// unshift()
// Definition: Adds an element at the beginning of an array.

let employees3 = ["Rahul", "Priya"];

employees3.unshift("Sana");

console.log(employees3);

// shift()
// Definition: Removes the first element from an array.

let employees4 = ["Rahul", "Priya", "Sana"];

employees4.shift();

console.log(employees4);

// includes()
// Definition: Checks whether an array contains a particular value.

let employees5 = ["Rahul", "Priya", "Sana"];

console.log(employees5.includes("Sana"));
console.log(employees5.includes("John"));


// indexOf()
// Definition: Returns the index position of an element in an array. Returns -1 if the element is not found.

let employees6 = ["Rahul", "Priya", "Sana"];

console.log(employees6.indexOf("Priya"));

// length
// Definition: Returns the total number of elements in an array.


let employees7 = ["Rahul", "Priya", "Sana"];

console.log(employees7.length);


// forEach
let employees8 = ["Rahul", "Priya", "Sana"];

employees8.forEach(function(name) {
    console.log(name);
});


//map:

let salaries = [20000, 25000, 30000];

let updatedSalaries = salaries.map(
    salary => salary + 5000
);

console.log(updatedSalaries);


// filter: Creates a new array containing only elements that satisfy a condition.

let salaries1 = [20000, 25000, 30000, 40000];

let result = salaries1.filter(
    salary => salary > 25000
);

console.log(result);


// Objects in JavaScript
// Definition: An Object is a collection of properties stored as key-value pairs.

// In simple words, an object is used to store detailed information about a particular person, product, or employee.


let employee = {

    name: "Sana",
    employeeId: 101,
    age: 25,
    department: "HR",
    salary: 30000

};

console.log(employee.name);
console.log(employee.employeeId);
console.log(employee.department);
console.log(employee.salary);


// Object.keys()
// Returns all property names in an object.


let employee1 = {
    name: "Rahul",
    age: 25,
    department: "HR"
};

console.log(Object.keys(employee1));


// object.values: Returns all property values in an object.

let employee2 = {
    name: "Rahul",
    age: 25,
    department: "HR"
};

console.log(Object.values(employee2));



// Object.entries()
// Returns property names and values as pairs.


let employee3 = {
    name: "Rahul",
    age: 25
};

console.log(Object.entries(employee3));



// Arrays	Objects
// Store multiple values	Store key-value pairs
// Access using index	Access using property name
// Use []	Use {}
// Example: Employee names	Example: Employee details


// String Methods in JavaScript
// Definition: String methods are built-in JavaScript methods used to perform operations on text.

// toUpperCase():

let employeeName = "Asas";
console.log(employeeName.toUpperCase());

// toLowerCase():
let email = "RAHUL@GMAIL.COM";
console.log(email.toLowerCase());

//trim():Removes whitespace from the beginning and end of a string.

let username = " sana ";
console.log(username.trim());


// includes()
// Checks whether a string contains a particular word or character.


let email1 = "rahul@gmail.com";

console.log(email1.includes("@"));
console.log(email1.includes("gmail"));


// indexOf()
// Returns the position of a particular character or word.

let company = "JavaScript";
console.log(company.indexOf("Script"));


// slice()
// Extracts a portion of a string.

let name = "lulu";
console.log(name.slice(0,5));


// replace()
// Replaces a particular text with another text.


let message = "Welcome Rahul";

console.log(message.replace("Rahul", "Sana"));

// split

let emp2 = "AAA,BBB,CCC,DDD";
console.log(emp2.split(","));

// length:

let password = "javascript1234";
console.log(password.length);



// Method	Purpose
// toUpperCase()	Converts to uppercase
// toLowerCase()	Converts to lowercase
// trim()	Removes surrounding spaces
// includes()	Checks whether text exists
// indexOf()	Finds character position
// slice()	Extracts part of a string
// replace()	Replaces text
// split()	Converts string into array
// length	Counts characters



// Number Methods in JavaScript
// Definition: Number methods are built-in methods used to work with numeric values.

// They are useful in banking applications, shopping websites, billing systems, and salary calculations.

// toFixed()
// Definition: Converts a number into a string with a specified number of decimal places.

let price = 340.678;
console.log(price.toFixed(2));


// parseInt()
// Definition: Converts a value into an integer by parsing it.

let age = "25.89";

console.log(parseInt(age));

// parseFloat()
// Definition: Converts a value into a floating-point number.


let price1 = "250.75";

console.log(parseFloat(price1));


// Number()
// Definition: Converts a value into a number when possible.

let amount = "500";

console.log(Number(amount));
console.log(typeof Number(amount));


// isNaN()
// Definition: Checks whether a value is NaN (Not-a-Number).

let age1 = "twenty";

console.log(isNaN(age1));

let marks = "85";

console.log(isNaN(marks));


// Math.round()
// Rounds a number to the nearest integer.

let p = 99.6;

console.log(Math.round(p));

// . Math.floor()
// Rounds a number down to the nearest integer.

let num = 26.8;
console.log(Math.floor(num));


// Math.ceil()
// Rounds a number up to the nearest integer.


let number = 25.1;

console.log(Math.ceil(number));

// Math.random()
// Generates a random decimal number greater than or equal to 0 and less than 1.

let randomNumber = Math.floor(Math.random() * 1000);

console.log(randomNumber);


// Method	Purpose
// toFixed()	Sets decimal places
// parseInt()	Parses an integer
// parseFloat()	Parses a decimal number
// Number()	Converts to Number
// isNaN()	Checks for NaN
// Math.round()	Rounds to nearest integer
// Math.floor()	Rounds down
// Math.ceil()	Rounds up
// Math.random()	Generates random number

