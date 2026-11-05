// What is a Higher-Order Function?
// A Higher-Order Function is a function that does at least one of the following:
// 1. Accepts another function as an argument.
// 2. Returns another function as its result.
// In simple words, a function that works with another function is called a Higher-Order Function.


// Function to calculate bonus
function calculateBonus(salary) {
    return salary * 0.10;
}

// Higher-order function
function employeeSalary(salary, bonusFunction) {

    let bonus = bonusFunction(salary);

    return salary + bonus;
}

// Calling the function
let result = employeeSalary(30000, calculateBonus);

console.log("Total Salary:", result);


// returning a function


function bonusCalculator(percentage) {

    return function(salary) {

        return salary * percentage / 100;

    };

}

// Creating different bonus functions
let juniorBonus = bonusCalculator(10);

let seniorBonus = bonusCalculator(20);

// Calling the returned functions
console.log("Junior Bonus:", juniorBonus(30000));

console.log("Senior Bonus:", seniorBonus(50000));


//
let sal = [20000,30000,40000];

let result1 = sal.map(salary => salary + 5000);

console.log(result1)



// What is a Callback Function?
// A Callback Function is a function that is passed as an argument to another function and is called or executed inside that function.


function interviewScheduled() {

    console.log("Interview has been scheduled.");

}

function sendConfirmation(callback) {

    console.log("Sending interview confirmation...");

    callback();

}

// Passing callback function
sendConfirmation(interviewScheduled);


//Callback with parameters

function welcomeEmployee(name) {

    console.log("Welcome to our company, " + name);

}

function registerEmployee(name, callback) {

    console.log(name + " registered successfully.");

    callback(name);

}

// Calling function
registerEmployee("Sana", welcomeEmployee);


// Synchronous Callback:


function processEmployee(callback) {

    console.log("Processing employee...");

    callback();

}

processEmployee(function() {

    console.log("Employee processed.");

});


// Asynchronous callback

console.log("HR process started.");

setTimeout(function() {

    console.log("Interview reminder sent.");

}, 2000);

console.log("HR process completed.");


// Rest Operator (...)
// What is the Rest Operator?
// The Rest Operator is used to collect multiple values and combine them into a single array or object.

function calculateTotalSalary(...salaries){

    let total = 0;

    for(let salary of salaries){
        total = total + salary;
    }

    return total;
}

let result2 = calculateTotalSalary( 20000,30000,40000,50000);
console.log("Total salary:",result2)


// Rest Operator with array destructuring

let employees = [
    "Sana",
    "Rahul",
    "Priya",
    "Arjun",
    "John"
];

let [firstEmployee, secondEmployee, ...remainingEmployees] = employees;

console.log("First Employee:", firstEmployee);

console.log("Second Employee:", secondEmployee);

console.log("Remaining Employees:", remainingEmployees);


// Spread Operator (...)
// What is the Spread Operator?
// The Spread Operator is used to expand or unpack elements of an array or properties of an object.


let employees1 = [
    "AAA",
    "BBB",
    "CCC"
];

// Copying the original array
let newEmployees = [...employees1];

console.log("Original Employees:", employees1);

console.log("New Employees:", newEmployees);


// Passing array elements as function arguments


function calculateTotal(a, b, c) {

    return a + b + c;

}

let numbers = [10, 20, 30];

let result3 = calculateTotal(...numbers);

console.log("Total:", result3);



// Rest Operator	                       Spread Operator
// Collects multiple values.	       Expands multiple values.
// Combines values into an array.	   Unpacks values from an array or object.
// Used in function parameters.	  Used in function calls.
// Used in destructuring.	           Used in copying and combining arrays or objects.
// Collects remaining values.	      Spreads existing values.



// What is Map?
// A Map is a JavaScript data structure used to store data in the form of key-value pairs.


// Creating a Map
let employees11 = new Map();

// Adding employee details
employees11.set(101, "Sana");
employees11.set(102, "Rahul");
employees11.set(103, "Priya");

// Displaying employee details
console.log(employees11);

// Getting employee name using key
console.log(employees11.get(101));

// Checking whether employee ID exists
console.log(employees11.has(102));

// Getting total employees
console.log(employees11.size);


// What is Set?
// A Set is a JavaScript data structure used to store unique values.


let employeeIds = new Set();

// Adding employee IDs
employeeIds.add(101);
employeeIds.add(102);
employeeIds.add(103);
employeeIds.add(101);
employeeIds.add(102);

console.log(employeeIds);

console.log("Total Employees:", employeeIds.size);



// Map	                                    Set
// Stores key-value pairs	          Stores unique values
// Uses set() to add entries	       Uses add() to add values
// Uses get() to retrieve values	    No get() method
// Keys must be unique	                 Values must be unique
// Example: Employee ID and name	   Example: Unique employee IDs


// What is WeakMap?
// A WeakMap is similar to Map, but it allows only objects as keys and holds those keys weakly.


// Creating employee objects
let employee1 = {
    name: "Sana",
    department: "HR"
};

let employee2 = {
    name: "Rahul",
    department: "IT"
};

// Creating WeakMap
let employeeDetails = new WeakMap();

// Adding confidential information
employeeDetails.set(employee1, {
    performance: "Excellent",
    rating: 5
});

employeeDetails.set(employee2, {
    performance: "Good",
    rating: 4
});

// Getting employee details
console.log(employeeDetails.get(employee1));

console.log(employeeDetails.get(employee2));

console.log(employeeDetails.has(employee1));


// What is WeakSet?
// A WeakSet is similar to Set, but it stores only objects and holds them weakly.


// Creating employee objects
let employee12 = {
    name: "Sana"
};

let employee22 = {
    name: "Rahul"
};

let employee32 = {
    name: "Priya"
};

// Creating WeakSet
let completedTraining = new WeakSet();

// Adding employees
completedTraining.add(employee12);
completedTraining.add(employee22);

// Checking training status
console.log(completedTraining.has(employee12));

console.log(completedTraining.has(employee22));

console.log(completedTraining.has(employee32));



// WeakMap	                                        WeakSet
// Stores key-value pairs	                   Stores objects only
// Keys must be objects or 
// non-registered symbols	                    Values must be objects or non-registered symbols
// Uses set()	                                Uses add()
// Uses get()	                                Does not have get()
// Useful for object-associated information	Useful for tracking object membership


// What is an Iterator?
// An Iterator is an object that allows us to access elements one by one from a collection.


let employees21 = [
    "Sana",
    "Rahul",
    "Priya",
    "Arjun"
];

// Creating an iterator
let iterator = employees21[Symbol.iterator]();

// Getting values one by one
console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());


// with loop

let employeeIds1 = [101, 102, 103, 104];

let iterator1 = employeeIds1[Symbol.iterator]();

let result4 = iterator1.next();

while (!result4.done) {

    console.log("Employee ID:", result4.value);

    result4 = iterator1.next();

}


// What is a Generator?
// A Generator is a special type of function that can pause its execution and resume it later.


function* employeeGenerator() {

    yield 101;

    yield 102;

    yield 103;

    yield 104;

}

// Creating generator object
let employees23 = employeeGenerator();

// Getting values one by one
console.log(employees23.next());

console.log(employees23.next());

console.log(employees23.next());

console.log(employees23.next());

console.log(employees23.next());


// calculate bonus amount

function* bonusGenerator() {

    let salaries = [20000, 30000, 40000];

    for (let salary of salaries) {

        yield salary * 0.10;

    }

}

let bonuses = bonusGenerator();

console.log("Bonus 1:", bonuses.next().value);

console.log("Bonus 2:", bonuses.next().value);

console.log("Bonus 3:", bonuses.next().value);



// Iterators	                                  Generators
// Used to access values one by one.	Used to generate values one by one.
// Can be created manually.	           Created using function*.
// Requires implementing the Iterator protocol.	Automatically provides Iterator behaviour.
// Uses the next() method.	                       Uses yield and next().
// Can require more code.	                     Usually requires less code.