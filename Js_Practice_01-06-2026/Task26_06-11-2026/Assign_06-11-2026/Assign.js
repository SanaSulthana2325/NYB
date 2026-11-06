// Implement Module, Singleton, Factory, and Observer patterns.

// Module Pattern – Organizes code and protects private data.

// Singleton Pattern – Ensures only one instance of an object is created.

// Factory Pattern – Creates different objects using a common function.

// Observer Pattern – Notifies multiple objects when something changes.


const BankAccount = (function () {

    // Private variable
    let balance = 5000;

    // Public methods
    return {
        deposit: function (amount) {
            balance += amount;
            console.log("Deposited:", amount);
        },

        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log("Withdrawn:", amount);
            } else {
                console.log("Insufficient balance");
            }
        },

        getBalance: function () {
            return balance;
        }
    };

})();

// Using the module
BankAccount.deposit(2000);
BankAccount.withdraw(1000);

console.log("Current Balance:", BankAccount.getBalance());


// singleton pattern:

const AppConfig = (function () {

    let instance;

    function createInstance() {

        return {
            appName: "Shopping App",
            version: "1.0",
            theme: "Dark",

            display: function () {
                console.log("Application:", this.appName);
                console.log("Version:", this.version);
                console.log("Theme:", this.theme);
            }
        };
    }

    return {
        getInstance: function () {

            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    };

})();

// Creating instances
let app1 = AppConfig.getInstance();
let app2 = AppConfig.getInstance();

app1.display();

console.log("Are both instances same?", app1 === app2);


//Factory Pattern

function ProductFactory(type, name, price) {

    if (type === "mobile") {
        return {
            category: "Mobile",
            name: name,
            price: price
        };
    }

    else if (type === "laptop") {
        return {
            category: "Laptop",
            name: name,
            price: price
        };
    }

    else if (type === "headphone") {
        return {
            category: "Headphone",
            name: name,
            price: price
        };
    }

    else {
        return {
            error: "Invalid product type"
        };
    }
}

// Creating products using the factory
let product1 = ProductFactory("mobile", "Samsung", 20000);

let product2 = ProductFactory("laptop", "Dell", 55000);

let product3 = ProductFactory("headphone", "Boat", 2000);

console.log(product1);
console.log(product2);
console.log(product3);


// obser pattern


// Subject
class YouTubeChannel {

    constructor() {
        this.subscribers = [];
    }

    // Add subscribers
    subscribe(user) {
        this.subscribers.push(user);
    }

    // Notify subscribers
    uploadVideo(video) {
        this.subscribers.forEach(user => {
            user.notify(video);
        });
    }
}

// Observer
class Subscriber {

    constructor(name) {
        this.name = name;
    }

    notify(video) {
        console.log(this.name + " received: " + video);
    }
}

// Create channel
let channel = new YouTubeChannel();

// Create subscribers
let user1 = new Subscriber("Sana");
let user2 = new Subscriber("Aisha");

// Subscribe users
channel.subscribe(user1);
channel.subscribe(user2);

// Upload video
channel.uploadVideo("JavaScript Tutorial");



// Understand memory management and garbage collection.

//memory allocation:

let stuName = "Sana";
let marks = [80,70,48];

//mwmory usage

console.log(stuName);
console.log(marks);

// remove reference

stuName = null;
marks = null;

// garbage collection

let stu = {
    name:"GIGI",
    age:45
};
console.log(stu);

stu = null;


// Practice event bubbling, capturing, and delegation.

// event bubbling

let parent = document.getElementById("parent");
let child = document.getElementById("child");
let button = document.getElementById("btn");

parent.addEventListener("click", function () {
    console.log("Parent clicked");
});

child.addEventListener("click", function () {
    console.log("Child clicked");
});

button.addEventListener("click", function () {
    console.log("Button clicked");
});


// Event Capturing

let parent1 = document.getElementById("parent1");
let child1 = document.getElementById("child1");
let button1 = document.getElementById("btn1");

parent1.addEventListener("click", function () {
    console.log("Parent clicked");
}, true);

child1.addEventListener("click", function () {
    console.log("Child clicked");
}, true);

button1.addEventListener("click", function () {
    console.log("Button clicked");
}, true);


// Event Delegation

let products = document.getElementById("products");

products.addEventListener("click", function (event) {

    if (event.target.classList.contains("product")) {

        console.log(event.target.textContent + " added to cart");

    }

});


// ==================================================
// TOPIC 1: BROWSER STORAGE MECHANISMS
// ==================================================

// A. LOCAL STORAGE

localStorage.setItem("username", "Sana");
localStorage.setItem("course", "JavaScript");

console.log("LOCAL STORAGE");

console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("course"));

// B. SESSION STORAGE

sessionStorage.setItem("student", "Sana");
sessionStorage.setItem("marks", "90");

console.log("SESSION STORAGE");

console.log(sessionStorage.getItem("student"));
console.log(sessionStorage.getItem("marks"));

// C. COOKIES

document.cookie = "username=Sana; max-age=3600; path=/";

console.log("COOKIES");

console.log(document.cookie);


// ==================================================
// TOPIC 2: MEMORY LEAKS
// ==================================================

// A. USING SETINTERVAL AND CLEARINTERVAL

console.log("MEMORY LEAK PREVENTION");

let count = 0;

let timer = setInterval(function () {

    count++;

    console.log("Count:", count);

    if (count === 3) {

        clearInterval(timer);

        console.log("Timer stopped");

    }

}, 1000);


// B. REMOVE EVENT LISTENER

let button2 = document.getElementById("btn2");

function handleClick() {

    console.log("Button clicked");

}

if (button) {

    button.addEventListener("click", handleClick);

    // Remove listener when no longer needed
    // button.removeEventListener("click", handleClick);

}


// C. AVOID UNNECESSARY GLOBAL VARIABLES

function studentDetails() {

    let name = "Sana";

    let age = 23;

    console.log(name);
    console.log(age);

}

studentDetails();


// ==================================================
// TOPIC 3: JAVASCRIPT PERFORMANCE OPTIMIZATION
// ==================================================

// A. AVOID UNNECESSARY CALCULATIONS

console.log("PERFORMANCE OPTIMIZATION");

let numbers = [10, 20, 30, 40, 50];

let length = numbers.length;

for (let i = 0; i < length; i++) {

    console.log(numbers[i]);

}


// B. USE FILTER METHOD

let marks1 = [45, 80, 90, 35, 75, 95];

let passedStudents = marks1.filter(function (mark) {

    return mark >= 50;

});

console.log("Passed Marks:", passedStudents);


// C. REDUCE DOM MANIPULATION

let students = ["Sana", "Ravi", "Priya"];

let list = document.getElementById("studentList");

if (list) {

    let output = "";

    students.forEach(function (student) {

        output += `<li>${student}</li>`;

    });

    // Update DOM only once
    list.innerHTML = output;

}


// D. DEBOUNCING

let search = document.getElementById("search");

let searchTimer;

if (search) {

    search.addEventListener("input", function () {

        clearTimeout(searchTimer);

        searchTimer = setTimeout(function () {

            console.log("Searching:", search.value);

        }, 500);

    });

}


// ==================================================
// TOPIC 4: REUSABLE AND MAINTAINABLE CODE
// ==================================================

// A. REUSABLE FUNCTION

console.log("REUSABLE FUNCTIONS");

function addNumbers(a, b) {

    return a + b;

}

console.log(addNumbers(10, 20));
console.log(addNumbers(50, 30));


// B. MEANINGFUL VARIABLE NAMES

let productPrice = 500;

let deliveryCharge = 10;

let totalAmount = productPrice + deliveryCharge;

console.log("Total Amount:", totalAmount);


// C. ARROW FUNCTION

const square = (number) => {

    return number * number;

};

console.log("Square:", square(5));
console.log("Square:", square(10));


// D. SEPARATE FUNCTIONS FOR DIFFERENT TASKS

let studentNames = ["Sana", "Ravi", "Priya"];

function displayStudents() {

    console.log("Student Names:");

    studentNames.forEach(function (name) {

        console.log(name);

    });

}

function addStudent(name) {

    studentNames.push(name);

}

function removeStudent(name) {

    studentNames = studentNames.filter(function (student) {

        return student !== name;

    });

}

// Add a student
addStudent("Rahul");

displayStudents();

// Remove a student
removeStudent("Ravi");

console.log("After Removing Ravi:");

displayStudents();
