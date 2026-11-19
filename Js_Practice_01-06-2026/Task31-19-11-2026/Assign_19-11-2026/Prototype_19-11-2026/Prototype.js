// class

class Employee {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Salary:", this.salary);
    }
}

// Creating objects
let emp1 = new Employee("Sana", 25, 25000);

let emp2 = new Employee("Rahul", 28, 35000);

// Calling methods
emp1.displayDetails();
emp2.displayDetails();


// prototype:

function Employee1(name, salary) {
    this.name = name;
    this.salary = salary;
}

// Adding method to prototype
Employee1.prototype.display = function() {
    console.log(this.name, this.salary);
};

// Creating objects
let emp11 = new Employee1("Sana", 25000);
let emp21 = new Employee1("Rahul", 30000);

emp11.display();
emp21.display();


// What is Inheritance in JavaScript?
// Inheritance means one class can acquire properties and methods from another class.


// Parent class
class Employee2 {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

// Child class
class Manager extends Employee2 {

    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    showDepartment() {
        console.log("Department:", this.department);
    }
}

// Creating object
let manager1 = new Manager("Sana", 50000, "HR");

manager1.display();
manager1.showDepartment();



// Keyword	Purpose
// extends	Inherits from another class
// super()	Calls the parent class constructor
// this	Refers to the current object


//What is Debouncing in JavaScript?
// Debouncing means executing a function only after the user stops performing an action for a specified amount of time.


function debounce(func, delay) {

    let timer;

    return function() {

        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);

    };
}

// Normal function
function search() {
    console.log("Searching...");
}

// Applying debounce
let debouncedSearch = debounce(search, 500);

// Calling function
debouncedSearch();
debouncedSearch();
debouncedSearch();


// What is Throttling in JavaScript?
// Throttling means allowing a function to execute only once within a specified time interval, even if the user triggers it multiple times.


function throttle(func, delay) {

    let lastCall = 0;

    return function() {

        let now = Date.now();

        if (now - lastCall >= delay) {

            func();

            lastCall = now;

        }

    };

}

// Normal function
function showMessage() {
    console.log("Function executed");
}

// Applying throttle
let throttledFunction = throttle(showMessage, 1000);

// Calling repeatedly
throttledFunction();
throttledFunction();
throttledFunction();


// Debouncing	                                Throttling
// Executes after the user stops an action.	   Executes at controlled intervals.
// Waits for inactivity.	                   Limits execution frequency.
// Useful for search boxes.                	Useful for scrolling.
// Uses setTimeout() and clearTimeout().	Can use Date.now() or timers.
// Executes after the final action.	         Can execute during continuous actions.