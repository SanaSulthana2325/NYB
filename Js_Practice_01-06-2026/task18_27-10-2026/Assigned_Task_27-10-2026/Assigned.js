
// ========================================
// 1. EMPLOYEE DATA AND NESTED OBJECTS
// ========================================

const employees = [
    {
        id: 1,
        name: "Sam",
        salary: 25000,
        department: "IT",
        address: {
            city: "Hyderabad",
            country: "India"
        }
    },
    {
        id: 2,
        name: "Ayesha",
        salary: 29000,
        department: "HR",
        address: {
            city: "Warangal",
            country: "India"
        }
    },
    {
        id: 3,
        name: "Zeba",
        salary: 35000,
        department: "IT",
        address: {
            city: "Hyderabad",
            country: "India"
        }
    },
    {
        id: 4,
        name: "Zobia",
        salary: 45000,
        department: "Finance",
        address: {
            city: "Karimnagar",
            country: "India"
        }
    }
];
console.log(employees);


// ========================================
// 2. DIFFERENT FUNCTION SYNTAX STYLES
// ========================================

// A. Function declaration
function greetEmployee(name) {
    return "Welcome " + name;
}

// B. Function expression
const calculateSalary = function(salary) {
    return salary * 12;
};

// C. Arrow function (ES6)
const getEmployeeName = emp => emp.name;

// D. Traditional function converted to ES6
// Traditional: function(a, b) { return a + b; }
const add = (a, b) => a + b;


console.log(greetEmployee("Sam"));
console.log("Annual salary:", calculateSalary(25000));
console.log("Employee name:", getEmployeeName(employees[0]));
console.log("Addition:", add(10, 20));


// ========================================
// 3. CALLBACK AND HIGHER-ORDER FUNCTIONS
// ========================================

// A callback is a function passed to another function.
function processEmployee(emp, callback) {
    return callback(emp);
}

const employeeMessage = processEmployee(
    employees[1],
    emp => `${emp.name} works in ${emp.department}`
);

// A higher-order function accepts or returns a function.
function calculateBonus(emp, bonusFunction) {
    return bonusFunction(emp.salary);
}

const bonus = calculateBonus(
    employees[0],
    salary => salary * 0.10
);


console.log(employeeMessage);
console.log("Sam's bonus:", bonus);


// ========================================
// 4. CLOSURE: REMEMBER BONUS PERCENTAGE
// ========================================

function createBonusCalculator(percentage) {
    return function(salary) {
        return salary * percentage / 100;
    };
}

const tenPercentBonus = createBonusCalculator(10);
const fifteenPercentBonus = createBonusCalculator(15);

console.log("10% bonus:", tenPercentBonus(30000));
console.log("15% bonus:", fifteenPercentBonus(30000));


// ========================================
// 5. ARRAY METHODS
// ========================================

// MAP: create a new array of names
const names = employees.map(emp => emp.name);

// FILTER: get employees earning above 30000
const highEarners = employees.filter(
    emp => emp.salary > 30000
);

// REDUCE: calculate total salary expenses
const totalSalary = employees.reduce(
    (total, emp) => total + emp.salary,
    0
);

// FIND: get the first employee earning above 30000
const firstHighEarner = employees.find(
    emp => emp.salary > 30000
);

// SORT: sort by salary, lowest to highest
// Spread creates a copy, so the original array stays unchanged.
const sortedEmployees = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("MAP - Names:", names);
console.log(
    "FILTER - Salary above 30000:",
    highEarners.map(emp => emp.name)
);
console.log("REDUCE - Total salaries:", totalSalary);
console.log("FIND - First high earner:", firstHighEarner.name);
console.log(
    "SORT - Lowest to highest:",
    sortedEmployees.map(emp => `${emp.name}: ${emp.salary}`)
);


// ========================================
// 6. OBJECT AND ARRAY DESTRUCTURING
// ========================================

// Object destructuring
const { name, salary, address } = employees[0];

// Nested object destructuring
const {
    address: { city }
} = employees[0];

// Array destructuring
const [firstEmployee, secondEmployee] = employees;

console.log("Name:", name);
console.log("Salary:", salary);
console.log("City:", city);
console.log("First employee:", firstEmployee.name);
console.log("Second employee:", secondEmployee.name);


// ========================================
// 7. SPREAD AND REST OPERATORS
// ========================================

// SPREAD: copy and update an object
const updatedSam = {
    ...employees[0],
    salary: 27000
};

// SPREAD: combine arrays
const extraNames = ["Ravi", "Priya"];
const allNames = [...names, ...extraNames];

// REST: collect multiple arguments into an array
function sumNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log("Updated Sam's salary:", updatedSam.salary);
console.log("Combined names:", allNames);
console.log("Sum:", sumNumbers(10, 20, 30, 40));


// ========================================
// 8. REUSABLE UTILITY FUNCTIONS
// ========================================

// Find employee by name
const findEmployeeByName = (list, employeeName) =>
    list.find(emp => emp.name === employeeName);

// Calculate annual salary
const getAnnualSalary = emp => emp.salary * 12;

// Format salary as Indian currency
const formatSalary = amount =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);

const foundEmployee = findEmployeeByName(employees, "Zeba");

console.log("Found:", foundEmployee.name);
console.log("Annual salary:", formatSalary(getAnnualSalary(foundEmployee)));
console.log("Formatted salary:", formatSalary(foundEmployee.salary));


// ========================================
// 9. COMBINE ARRAYS, OBJECTS AND FUNCTIONS
// ========================================

const employeeReport = employees.map(emp => ({
    name: emp.name,
    department: emp.department,
    monthlySalary: emp.salary,
    annualSalary: getAnnualSalary(emp),
    bonus: tenPercentBonus(emp.salary)
}));


console.log(employeeReport);


// ========================================
// 10. FINAL SUMMARY
// ========================================

console.log("Number of employees:", employees.length);
console.log("Total monthly salaries:", formatSalary(totalSalary));
console.log(
    "Average salary:",
    formatSalary(totalSalary / employees.length)
);
console.log(
    "Highest-paid employee:",
    sortedEmployees[sortedEmployees.length - 1].name
);
