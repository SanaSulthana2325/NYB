// What is Debouncing?
// Debouncing is a technique that delays the execution of a function until the user stops performing an action for a specified amount of time.


function debounce(callback, delay) {

    let timer;

    return function() {

        clearTimeout(timer);

        timer = setTimeout(() => {
            callback();
        }, delay);

    };

}

function search() {
    console.log("Searching...");
}

let searchInput = debounce(search, 1000);

// Simulating user typing

searchInput();
searchInput();
searchInput();
searchInput();

//example

function debounce(callback, delay) {

    let timer;

    return function(...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);

    };

}

function searchProduct(event) {

    console.log("Searching for:", event.target.value);

}

let input = document.getElementById("search");

let optimizedSearch = debounce(searchProduct, 500);

input.addEventListener("input", optimizedSearch);



// What is Throttling?
// Throttling is a technique that limits how frequently a function can execute within a specified time interval.

function throttle(callback, delay) {

    let lastTime = 0;

    return function(...args) {

        let currentTime = Date.now();

        if (currentTime - lastTime >= delay) {

            callback(...args);

            lastTime = currentTime;

        }

    };

}

function handleScroll() {

    console.log("Page is scrolling...");

}

window.addEventListener(
    "scroll",
    throttle(handleScroll, 1000)
);


// Debouncing	                                   Throttling
// Waits until activity stops	               Executes at regular permitted intervals
// Executes after a delay from the last event	Limits execution frequency
// Best for search input	                    Best for scrolling
// Avoids unnecessary API requests	             Avoids excessive function execution


// What is a Prototype?
// A prototype is an object from which another JavaScript object can inherit properties and methods.


let employee = {

    greet: function() {

        console.log("Welcome to our company!");

    }

};

let emp1 = Object.create(employee);

emp1.name = "Rahul";

console.log(emp1.name);

emp1.greet();


// What is a Class?
// A class is a blueprint or template used to create objects.


class Employee {

    constructor(name, age, department) {

        this.name = name;

        this.age = age;

        this.department = department;

    }

    display() {

        console.log("Name:", this.name);

        console.log("Age:", this.age);

        console.log("Department:", this.department);

    }

}

let emp11 = new Employee("Affu", 25, "HR");

let emp2 = new Employee("sara", 23, "IT");

emp11.display();

emp2.display();


// example

class Student {

    constructor(name, marks) {

        this.name = name;

        this.marks = marks;

    }

    result() {

        if (this.marks >= 35) {

            console.log(this.name + " is Pass");

        } else {

            console.log(this.name + " is Fail");

        }

    }

}

let student1 = new Student("Anu", 85);

let student2 = new Student("Ravi", 25);

student1.result();

student2.result();


// What is Inheritance?
// Inheritance means one class can acquire the properties and methods of another class.

// In simple words:

// A child class can reuse the functionality of a parent class.


class Animal {

    eat() {

        console.log("Animal is eating");

    }

}

class Dog extends Animal {

    bark() {

        console.log("Dog is barking");

    }

}

let dog1 = new Dog();

dog1.eat();

dog1.bark();


// Prototype	                                          Class
// JavaScript's underlying inheritance mechanism	Cleaner syntax for creating objects
// Uses prototype objects	                         Uses class and extends
// Methods can be added through .prototype	         Methods can be declared inside classes
// Supports prototype-based inheritance	             Implements inheritance using prototypes


// What is Shallow Copy?
// A shallow copy creates a new object, but nested objects inside it are still shared between the original and copied objects.


let employee1 = {

    name: "saba",

    age: 25,

    address: {

        city: "Hyderabad",

        state: "Telangana"

    }

};

// Creating shallow copy

let copyEmployee = { ...employee1 };

// Changing top-level property

copyEmployee.name = "lusi";

// Changing nested property

copyEmployee.address.city = "Warangal";

console.log("Original:", employee1);

console.log("Copy:", copyEmployee);


// for arrays

let num = [10,20,30];
let copy = [...num];
console.log(copy)


// What is Deep Copy?
// A deep copy creates a completely independent copy of an object, including its nested objects.


let employee2 = {

    name: "sam",

    age: 25,

    address: {

        city: "Hyderabad",

        state: "Telangana"

    }

};

// Creating deep copy

let copyEmployee2 = structuredClone(employee2); // create independent copy

// Changing copied values

copyEmployee2.name = "fatima";

copyEmployee2.address.city = "Warangal";

console.log("Original:", employee2);

console.log("Copy:", copyEmployee2);



// Shallow                              Copy	Deep Copy
// Creates a new top-level object	Creates an independent copy
// Nested objects are shared	       Nested objects are copied
// Nested changes affect original	      Nested changes do not affect original
// Faster and simpler	               Can require more processing
// Spread operator, Object.assign	      structuredClone()





// What is debouncing?	Executes a function after the user stops performing an action for a specified time.
// What is throttling?	Limits how frequently a function executes.
// Where is debouncing used?	Search boxes and form validation.
// Where is throttling used?	Scroll and resize events.
// What is a prototype?	An object from which another object can inherit properties and methods.
// What is a class?	A blueprint for creating objects.
// What is inheritance?	One class acquiring properties and methods from another class.
// What is extends?	Used to create a child class.
// What is super()?	Calls the parent class constructor or method.
// What is shallow copy?	Creates a new top-level object but shares nested references.
// What is deep copy?	Creates an independent copy, including nested objects.
// What is structuredClone()?	A built-in method for deep cloning supported JavaScript values.