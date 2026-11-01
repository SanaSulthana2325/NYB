// Shallow Copy
// Meaning: A shallow copy creates a new object, but nested objects inside it are still shared with the original object.

const emp1 = {
    name:"mira",
    department:{
        name:"IT"
    }
};

const emp2 = {...emp1};

emp2.name="minnu";
emp2.department.name = "HR";

console.log(emp1.name);
console.log(emp2.name);

console.log(emp1.department.name);
console.log(emp2.department.name);


// Deep Copy
// Meaning: A deep copy creates a copy of an object and its nested objects, so changes to copied nested data do not affect the original.

const emp3 = {
    name:"tasan",
    department:{
        name:"IT"
    }
};

const emp4 = structuredClone(emp3);

emp4.name="Sara";
emp4.department.name="HR";

console.log(emp3);
console.log(emp4);


// structuredClone() creates an independent copy of the supported data.

// Updating the copied name does not affect the original name.

// Updating the copied department does not affect the original department.


// Reference vs. Value
// Meaning: JavaScript passes values to variables and functions. Primitive values such as numbers and strings are copied independently when assigned. When you assign an object to another variable, the copied value refers to the same object.

// primitive value

let salary1 = 30000;
let salary2 = salary1;

salary2 = 40000;

console.log(salary1);
console.log(salary2);

// object reference

const employee1={
    name:"Lulu"
};

const employee2 = employee1;

employee2.name = "Lusi";

console.log(employee1.name);
console.log(employee2.name);


// Immutability
// Meaning: Immutability means avoiding changes to existing data directly. Instead, you create a new value or object containing the required changes.


const employee3 = {
    name:"AAA",
    salary:30000
};

const employee4 = {
    ...employee3,
    salary:40000
};

console.log(employee3);
console.log(employee4);


// Garbage Collection — Concept
// Meaning: Garbage collection is the process by which JavaScript automatically reclaims memory occupied by objects that are no longer reachable by the program.


function generateReport() {
    let report = {
        title: "Monthly Employee Report",
        totalEmployees: 50
    };

    console.log(report.title);
    console.log(report.totalEmployees);

    report = null;
}

generateReport();

console.log("Report generation completed.");


// Debouncing
// Meaning: Debouncing delays a function until a specified time has passed without another triggering event. If another event occurs before the timer finishes, the timer restarts.


function debounce(callback,delay){
    let timer;

    return function (value){
        clearTimeout(timer);

        timer = setTimeout(function(){
            callback(value);
        },delay);
    };
}

function searchEmployees(query){
    console.log("Searching for:",query);
}

const debouncedSearch = debounce(searchEmployees,1000);

debouncedSearch("R");
debouncedSearch("Ra");
debouncedSearch("Rag");

debouncedSearch("Raga");

// Throttling
// Meaning: Throttling limits how frequently a function can execute. A common implementation allows the function to run at most once per specified interval.


function throttle(callback, delay) {
    let lastCall = 0;

    return function() {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            callback();
        }
    };
}

function handleScroll() {
    console.log("Scroll event processed");
}

const throttledScroll = throttle(handleScroll, 1000);

// Simulate repeated scroll events
throttledScroll();
throttledScroll();
throttledScroll();



// Debouncing	                                          Throttling
// Waits until events stop for a specified period.	    Limits execution frequency during repeated events.
// Often runs after the user stops typing.	           Can run periodically during scrolling.
// Useful for search inputs.	                       Useful for scroll and resize handlers.



// Defensive Programming
// Meaning: Defensive programming means writing code that anticipates invalid inputs, missing data, and unexpected situations instead of assuming everything will be correct.


function calculateAnnualSalary(employee) {
    if (!employee) {
        console.log("Error: Employee data is missing.");
        return;
    }

    if (typeof employee.salary !== "number" ||
        !Number.isFinite(employee.salary) ||
        employee.salary < 0) {
        console.log("Error: Invalid salary.");
        return;
    }

    console.log("Annual Salary:", employee.salary * 12);
}

calculateAnnualSalary({ salary: 30000 });
calculateAnnualSalary({ salary: -5000 });
calculateAnnualSalary(null);
calculateAnnualSalary({ salary: "unknown" });


// Clean Code Practices
// Meaning: Clean code is code that is easy to read, understand, test, and maintain. It uses meaningful names, small functions, consistent formatting, and avoids unnecessary repetition.


function c(x){
    return x * 12;
}

console.log(c(30000))

// clearner approach

function calculateAnnualSalary(monthlySalary){
    const monthsInYear = 12;

    return monthlySalary * monthsInYear;
}

const monthlySalary = 30000;
const annualSalary = calculateAnnualSalary(monthlySalary);

console.log("Annual Salary:", annualSalary);



// Concept	                       Remember this

// Shallow Copy	          Copies the outer object but shares nested references.

// Deep Copy               	Copies nested data independently.

// Reference vs. Value	      Primitive assignments copy values; object assignments copy references.

// Immutability	        Create updated data rather than modifying existing data directly.

// Garbage Collection       	JavaScript automatically reclaims eligible, unreachable objects.

// Debouncing	           E xecute after events pause for a specified time.

// Throttling	             Limit how frequently a function executes.

// Defensive Programming	    Validate inputs and handle unexpected situations.

// Clean Code	                  Write clear, reusable, maintainable code.