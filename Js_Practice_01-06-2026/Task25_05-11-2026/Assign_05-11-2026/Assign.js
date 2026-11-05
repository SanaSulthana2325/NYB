

// ==========================================================
// TOPIC 1: ADVANCED ARRAY METHODS WITH REAL-WORLD DATASETS
// ==========================================================


let employees = [
    { id: 101, name: "Sana", department: "HR", salary: 30000 },
    { id: 102, name: "Rahul", department: "IT", salary: 45000 },
    { id: 103, name: "Priya", department: "Finance", salary: 25000 },
    { id: 104, name: "John", department: "IT", salary: 50000 },
    { id: 105, name: "Anu", department: "HR", salary: 35000 }
];

// 1. forEach()
// Executes a function for every array element.

console.log("\n1. Employee Names:");

employees.forEach(employee => {
    console.log(employee.name);
});


// 2. map()
// Creates a new array by transforming each element.

let employeeNames = employees.map(employee => employee.name);

console.log("\n2. Employee Names Array:");
console.log(employeeNames);


// 3. filter()
// Returns elements that satisfy a condition.

let hrEmployees = employees.filter(
    employee => employee.department === "HR"
);

console.log("\n3. HR Employees:");
console.log(hrEmployees);


// 4. find()
// Returns the first element that satisfies a condition.

let employeeFound = employees.find(
    employee => employee.id === 103
);

console.log("\n4. Employee Found:");
console.log(employeeFound);

// 5. findIndex()
// Returns the index of the first matching element.

let employeeIndex = employees.findIndex(
    employee => employee.name === "John"
);

console.log("\n5. Employee Index:");
console.log(employeeIndex);

// 6. some()
// Checks whether at least one element satisfies a condition.

let hasHighSalary = employees.some(
    employee => employee.salary > 45000
);

console.log("\n6. Is Anyone Earning Above 45000?");
console.log(hasHighSalary);


// 7. every()
// Checks whether all elements satisfy a condition.

let allHaveMinimumSalary = employees.every(
    employee => employee.salary >= 20000
);

console.log("\n7. Do All Employees Earn At Least 20000?");
console.log(allHaveMinimumSalary);


// 8. reduce()
// Combines all array values into a single result.

let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("\n8. Total Employee Salary:");
console.log(totalSalary);


// 9. sort()
// Sorts employees based on salary.

let sortedEmployees = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("\n9. Employees Sorted by Salary:");

sortedEmployees.forEach(employee => {
    console.log(employee.name, employee.salary);
});


// ==========================================================
// TOPIC 2: MAP(), FILTER(), AND REDUCE()
// ==========================================================

/*
Explanation:

map():
Transforms every element and returns a new array.

filter():
Selects elements based on a condition.

reduce():
Combines all elements into one final value.

Real-time example:
An HR manager calculates employee bonuses,
filters employees, and calculates the total salary.
*/


let salaries = [20000, 30000, 40000, 50000];


// 1. MAP: Increase salary by 10%.

let increasedSalaries = salaries.map(
    salary => salary + salary * 0.10
);

console.log("\nIncreased Salaries:");
console.log(increasedSalaries);


// 2. FILTER: Select salaries above 30000.

let highSalaries = salaries.filter(
    salary => salary > 30000
);

console.log("\nSalaries Above 30000:");
console.log(highSalaries);



// 3. REDUCE: Calculate total salary.

let salaryTotal = salaries.reduce(
    (total, salary) => total + salary,
    0
);

console.log("\nTotal Salary:");
console.log(salaryTotal);



// 4. COMBINATION OF MAP, FILTER, AND REDUCE

let totalBonus = employees
    .filter(employee => employee.salary > 25000)
    .map(employee => employee.salary * 0.10)
    .reduce((total, bonus) => total + bonus, 0);

console.log("\nTotal Bonus for Eligible Employees:");
console.log(totalBonus);

// ==========================================================
// TOPIC 3: FUNCTIONAL PROGRAMMING PRINCIPLES
// ==========================================================



let cart = [
    { product: "Laptop", price: 50000 },
    { product: "Mobile", price: 20000 },
    { product: "Headphones", price: 2000 }
];

// Calculate total using reduce().

function calculateCartTotal(products) {
    return products.reduce(
        (total, item) => total + item.price,
        0
    );
}

let cartTotal = calculateCartTotal(cart);

console.log("Shopping Cart Total:", cartTotal);



// Get products costing more than 10000.

function getExpensiveProducts(products) {
    return products.filter(item => item.price > 10000);
}

console.log(
    "Expensive Products:",
    getExpensiveProducts(cart)
);


// ==========================================================
// TOPIC 4: PURE FUNCTIONS AND IMMUTABILITY
// ==========================================================

/*
PURE FUNCTION:
A function that:
1. Gives the same output for the same input.
2. Does not change external data.

IMMUTABILITY:
Means not directly changing the original data.
Instead, we create a new array or object.

Real-time example:
Calculating an employee bonus and updating salary details.
*/

// 1. PURE FUNCTION

function calculateBonus(salary, percentage) {
    return salary * percentage / 100;
}

console.log("Bonus:", calculateBonus(30000, 10));
console.log("Bonus Again:", calculateBonus(30000, 10));


// 2. IMPURE FUNCTION

let total = 1000;

function addAmount(amount) {
    total = total + amount;
    return total;
}

console.log("First Total:", addAmount(500));
console.log("Second Total:", addAmount(500));



// 3. IMMUTABILITY WITH ARRAYS

let originalNumbers = [10, 20, 30];

// Create a new array instead of modifying the original.

let updatedNumbers = [...originalNumbers, 40];

console.log("Original Array:", originalNumbers);
console.log("Updated Array:", updatedNumbers);


// 4. IMMUTABILITY WITH OBJECTS

let originalEmployee = {
    name: "Sana",
    salary: 30000,
    department: "HR"
};

// Create a new object using spread.

let updatedEmployee = {
    ...originalEmployee,
    salary: 35000
};

console.log("Original Employee:", originalEmployee);
console.log("Updated Employee:", updatedEmployee);


// ==========================================================
// TOPIC 5: HIGHER-ORDER FUNCTIONS
// ==========================================================


// 1. FUNCTION ACCEPTING ANOTHER FUNCTION

function calculateSalaryWithBonus(salary, bonusFunction) {
    return bonusFunction(salary);
}

function addBonus(salary) {
    return salary + 5000;
}

function deductAmount(salary) {
    return salary - 2000;
}

console.log(
    "Salary With Bonus:",
    calculateSalaryWithBonus(30000, addBonus)
);

console.log(
    "Salary After Deduction:",
    calculateSalaryWithBonus(30000, deductAmount)
);


// 2. FUNCTION RETURNING ANOTHER FUNCTION

function createBonusCalculator(percentage) {
    return function(salary) {
        return salary * percentage / 100;
    };
}

let tenPercentBonus = createBonusCalculator(10);

console.log("10% Bonus:", tenPercentBonus(30000));
console.log("10% Bonus:", tenPercentBonus(40000));


// 3. BUILT-IN HIGHER-ORDER FUNCTION

let marks = [75, 80, 90, 30, 65];

let passedStudents = marks.filter(
    mark => mark >= 35
);

console.log("Passed Students Marks:", passedStudents);



// ==========================================================
// TOPIC 6: REST AND SPREAD OPERATORS
// ==========================================================

/*
REST OPERATOR (...):
Collects multiple values into one array.

SPREAD OPERATOR (...):
Expands an array or object into individual values.

Real-time example:
An HR manager collects employee names and combines
employee department lists.
*/

console.log("\n========== TOPIC 6: REST AND SPREAD ==========");


// 1. REST OPERATOR

function displayEmployees(...names) {
    console.log("Employees:", names);
}

displayEmployees("Sana", "Rahul", "Priya", "John");


// 2. REST WITH NORMAL PARAMETERS

function calculateTotal(basicSalary, ...bonuses) {
    return basicSalary + bonuses.reduce(
        (total, bonus) => total + bonus,
        0
    );
}

console.log(
    "Total Salary:",
    calculateTotal(25000, 2000, 3000, 1000)
);


// 3. SPREAD OPERATOR WITH ARRAYS

let hrDepartment = ["Sana", "Priya"];
let itDepartment = ["Rahul", "John"];

let allEmployees = [...hrDepartment, ...itDepartment];

console.log("All Employees:", allEmployees);

// 4. SPREAD TO COPY AN ARRAY

let originalList = ["HTML", "CSS", "JavaScript"];

let copiedList = [...originalList];

copiedList.push("React");

console.log("Original List:", originalList);
console.log("Copied List:", copiedList);


// 5. SPREAD WITH OBJECTS

let employeeDetails = {
    name: "Sana",
    department: "HR",
    salary: 30000
};

let newEmployeeDetails = {
    ...employeeDetails,
    salary: 35000,
    city: "Warangal"
};

console.log("Updated Employee:", newEmployeeDetails);


// ==========================================================
// TOPIC 7: MAP AND SET
// ==========================================================

/*
MAP:
Stores data in key-value pairs.
Keys can be strings, numbers, objects, etc.

SET:
Stores only unique values.
Duplicate values are automatically removed.

Real-time example:
Map: Employee ID and employee name.
Set: Unique employee names attending training.
*/




// 1. MAP

let employeeMap = new Map();

employeeMap.set(101, "Sana");
employeeMap.set(102, "Rahul");
employeeMap.set(103, "Priya");

console.log("Employee 101:", employeeMap.get(101));
console.log("Total Employees:", employeeMap.size);



// 2. CHECK MAP KEY

console.log("Is ID 102 Available?", employeeMap.has(102));


// 3. DELETE MAP ENTRY

employeeMap.delete(103);

console.log("After Deletion:", employeeMap);


// 4. LOOP THROUGH MAP

let salaryMap = new Map([
    ["Sana", 30000],
    ["Rahul", 40000],
    ["Priya", 35000]
]);

salaryMap.forEach((salary, name) => {
    console.log(name, ":", salary);
});


// 5. SET TO REMOVE DUPLICATES

let trainingList = [
    "Sana",
    "Rahul",
    "Sana",
    "Priya",
    "Rahul",
    "John"
];

let uniqueTrainingList = new Set(trainingList);

console.log("Unique Employees:", uniqueTrainingList);


// 6. CONVERT SET INTO ARRAY

let uniqueArray = [...uniqueTrainingList];

console.log("Unique Employee Array:", uniqueArray);


// 7. ADD AND DELETE SET VALUES

let skills = new Set(["HTML", "CSS", "JavaScript"]);

skills.add("React");

console.log("After Adding:", skills);

skills.delete("CSS");

console.log("After Deleting:", skills);



// ==========================================================
// TOPIC 8: ITERATORS AND GENERATORS
// ==========================================================

/*
ITERATOR:
An iterator returns values one by one using next().

GENERATOR:
A special function that creates an iterator.
It uses function* and yield.

Real-time example:
An HR manager accesses employee records one at a time
instead of processing the complete list at once.
*/



// 1. ARRAY ITERATOR

let employeeNamesList = ["Sana", "Rahul", "Priya"];

let nameIterator = employeeNamesList[Symbol.iterator]();

console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());


// 2. CUSTOM ITERATOR

let customIterator = {
    names: ["Sana", "Rahul", "Priya"],
    index: 0,

    next: function() {
        if (this.index < this.names.length) {
            return {
                value: this.names[this.index++],
                done: false
            };
        }

        return {
            value: undefined,
            done: true
        };
    }
};

console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());


// 3. GENERATOR FUNCTION

function* employeeGenerator() {
    yield "Sana";
    yield "Rahul";
    yield "Priya";
}

let employeeData = employeeGenerator();

console.log(employeeData.next());
console.log(employeeData.next());
console.log(employeeData.next());
console.log(employeeData.next());


// 4. GENERATOR WITH SALARIES

function* salaryGenerator() {
    yield 20000;
    yield 30000;
    yield 40000;
}

let salaryData = salaryGenerator();

console.log("Salary 1:", salaryData.next().value);
console.log("Salary 2:", salaryData.next().value);
console.log("Salary 3:", salaryData.next().value);


// 5. GENERATOR USING LOOP

function* generateEmployeeIDs() {
    for (let id = 101; id <= 105; id++) {
        yield id;
    }
}

for (let id of generateEmployeeIDs()) {
    console.log("Employee ID:", id);
}




