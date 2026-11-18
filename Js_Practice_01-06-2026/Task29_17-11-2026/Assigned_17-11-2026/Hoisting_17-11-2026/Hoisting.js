// Hoisting in JavaScript
// Meaning: Hoisting is JavaScript's behaviour of processing declarations before executing the code.

// hoisting var 

console.log(empName);
var empName = "sana"


console.log("===== 1. HOISTING =====");

// var hoisting
console.log(employeeName);
var employeeName = "Sana";

// Function hoisting
welcomeEmployee();

function welcomeEmployee() {
    console.log("Welcome to ABC Technologies");
}


// ===== 2. CLOSURES =====

// What is a closure?

// A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.

console.log("\n===== 2. CLOSURES =====");

function employeeSalary() {
    let salary = 25000;

    return function (increment) {
        salary += increment;
        console.log("Updated Salary:", salary);
    };
}

let updateSalary = employeeSalary();

updateSalary(5000);
updateSalary(3000);


// ===== 3. THIS KEYWORD =====

// What is this in JavaScript?

// this refers to the value determined by the function's calling context.

console.log("\n===== 3. THIS KEYWORD =====");

let employee = {
    name: "Sana",
    role: "HR Intern",

    displayDetails: function () {
        console.log("Employee:", this.name);
        console.log("Role:", this.role);
    }
};

employee.displayDetails();


// Arrow function and this
let company = {
    companyName: "ABC Technologies",

    showCompany: function () {
        let display = () => {
            console.log("Company:", this.companyName);
        };

        display();
    }
};

company.showCompany();


// Constructor and this
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

let emp1 = new Employee("Rahul", 30000);

console.log("Constructor Employee:", emp1.name);


// ===== 4. CALL, APPLY AND BIND =====

console.log("\n===== 4. CALL APPLY BIND =====");

let employee1 = {
    name: "Sana",
    role: "HR"
};

let employee2 = {
    name: "Rahul",
    role: "Developer"
};

function employeeDetails(city, salary) {
    console.log("Name:", this.name);
    console.log("Role:", this.role);
    console.log("City:", city);
    console.log("Salary:", salary);
}

// CALL
console.log("\nUsing CALL:");
employeeDetails.call(employee1, "Hyderabad", 25000);

// APPLY
console.log("\nUsing APPLY:");
employeeDetails.apply(employee2, ["Warangal", 30000]);

// BIND
console.log("\nUsing BIND:");

let boundEmployee = employeeDetails.bind(employee1);

boundEmployee("Hyderabad", 28000);



console.log("===== 1. DESTRUCTURING =====");

let employee11 = {
    name: "Sana",
    age: 23,
    department: "HR",
    salary: 15000
};

let { name, department, salary } = employee11;

console.log(name);
console.log(department);
console.log(salary);

//Array Destructuring

let employees12 = ["Sana", "Rahul", "Priya"];

let name1 = employees12[0];
let name2 = employees12[1];

console.log(name1);
console.log(name2);

// skipping values

let employees2 = ["AAA", "BBB", "CCC"];

let [first, , third] = employees2;

console.log(first);
console.log(third);

// ===== 2. SPREAD OPERATOR =====

console.log("\n===== 2. SPREAD =====");

let hrTeam = ["Sana", "Priya"];
let itTeam = ["Rahul", "Arjun"];

let allEmployees = [...hrTeam, ...itTeam];

console.log(allEmployees);

let updatedEmployee = {
    ...employee,
    salary: 18000
};

console.log(updatedEmployee);


// ===== 3. REST OPERATOR =====

// Meaning: The rest operator collects multiple values into a single array or object.

// It uses the same three dots as spread, but its purpose is different.

console.log("\n===== 3. REST =====");


function totalSalary(...salaries) {
    return salaries.reduce((total, salary) => total + salary, 0);
}

console.log(totalSalary(15000, 20000, 25000));

let [firstEmployee, ...remainingEmployees] = allEmployees;

console.log(firstEmployee);
console.log(remainingEmployees);

// with functio parameter
function calculateTotalSalary(...salaries) {
    let total = 0;

    for (let salary of salaries) {
        total += salary;
    }

    console.log("Total Salary:", total);
}

calculateTotalSalary(15000, 20000, 25000, 30000);


// ===== 4. ADVANCED ARRAY METHODS =====

console.log("\n===== 4. ARRAY METHODS =====");

let employees = [
    { name: "Sana", department: "HR", salary: 15000 },
    { name: "Rahul", department: "IT", salary: 30000 },
    { name: "Priya", department: "HR", salary: 20000 },
    { name: "Arjun", department: "IT", salary: 25000 },
    { name: "Kiran", department: "Sales", salary: 18000 }
];

// MAP
let names = employees.map(emp => emp.name);
console.log("Names:", names);

// FILTER
let hrEmployees = employees.filter(
    emp => emp.department === "HR"
);
console.log("HR Employees:", hrEmployees);

// REDUCE
let total = employees.reduce(
    (sum, emp) => sum + emp.salary, 0
);
console.log("Total Salary:", total);

// example

let totalSalary1 = employees.reduce((total, emp) => {
    return total + emp.salary;
}, 0);

console.log(totalSalary1);


// FIND
let found = employees.find(
    emp => emp.name === "Rahul"
);
console.log("Found:", found);

// SOME
let highSalary = employees.some(
    emp => emp.salary > 40000
);
console.log("Any salary above 40000:", highSalary);

// EVERY
let minimumSalary = employees.every(
    emp => emp.salary >= 15000
);
console.log("All salaries >= 15000:", minimumSalary);

// SORT
let sorted = [...employees].sort(
    (a, b) => a.salary - b.salary
);
console.log("Sorted:", sorted.map(emp => emp.name));


// FOREACH
employees.forEach(emp => {
    console.log(emp.name, emp.department);
});




// Method	  Purpose	                  Returns
// map()	  Transform elements	       New array
// filter()	Select matching elements	New array
// reduce()	Calculate one final result	Single accumulated value
// find()	  Find first matching element	Element or undefined
// some()	  Check at least one match	      Boolean
// every()	  Check all elements	        Boolean
// sort()	  Sort elements	                  Sorted original array
// forEach()	Perform an action for each element	undefined


// ===== 5. MAP =====

console.log("\n===== 5. MAP =====");

let employeeMap = new Map();

employeeMap.set(101, "Sana");
employeeMap.set(102, "Rahul");
employeeMap.set(103, "Priya");

console.log(employeeMap.get(101));
console.log(employeeMap.has(102));
console.log("Map Size:", employeeMap.size);

// iterating through map
employeeMap.forEach((name, id) => {
    console.log(id, name);
});


// ===== 6. SET =====

console.log("\n===== 6. SET =====");

// Set is a collection that stores unique values. It automatically removes duplicate values.
let departments = new Set();

departments.add("HR");
departments.add("IT");
departments.add("Sales");
departments.add("HR");

console.log(departments);
console.log("Set Size:", departments.size);
console.log("Has HR:", departments.has("HR"));

// removing duplicates

let duplicateNames = [
    "Sana", "Rahul", "Priya", "Sana", "Rahul"
];

let uniqueNames = [...new Set(duplicateNames)];

console.log("Unique Names:", uniqueNames);


// Map                          	Set
// Stores key-value pairs	   Stores unique values
// Uses set() to add entries	Uses add() to add values
// Uses get() to retrieve values	No get() method
// Keys must be unique	            Values must be unique
// Example: Employee ID → Name	Example: Unique departments




// What is destructuring?	Extracting values from arrays or objects into variables.
// What is spread?	Expands elements or properties.
// What is rest?	Collects multiple elements into one array or object.
// Difference between map and filter?	Map transforms; filter selects.
// What does reduce do?	Combines values into one accumulated result.
// Difference between find and filter?	Find returns the first match; filter returns all matches.
// What is Map?	A key-value collection.
// What is Set?	A collection of unique values.
// How do you remove duplicates from an array?	Use [...new Set(array)].
// Does sort change the original array?	Yes, sort() mutates the original array.