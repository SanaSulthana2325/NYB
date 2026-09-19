
// ======================================================
// 1. TIMERS - setTimeout and setInterval
// ======================================================

console.log("1. Timer Example Started");

setTimeout(() => {
    console.log("setTimeout executed after 2 seconds");
}, 2000);

let count = 1;

let timer = setInterval(() => {
    console.log("setInterval:", count);
    count++;

    if (count > 3) {
        clearInterval(timer);
        console.log("setInterval stopped");
    }
}, 1000);


// ======================================================
// 2. PROMISE - Create and Consume
// ======================================================

let orderPromise = new Promise((resolve, reject) => {
    let orderPlaced = true;

    if (orderPlaced) {
        resolve("Order placed successfully");
    } else {
        reject("Order failed");
    }
});

orderPromise
    .then((message) => {
        console.log("2. Promise:", message);
    })
    .catch((error) => {
        console.log("Promise Error:", error);
    });




// ======================================================
// 3. PROMISE CHAINING
// ======================================================

Promise.resolve(10)
    .then((number) => {
        return number * 2;
    })
    .then((number) => {
        return number + 5;
    })
    .then((result) => {
        console.log("3. Promise Chaining Result:", result);
    });




// ======================================================
// 4. PROMISE COMBINATORS
// ======================================================

let promise1 = Promise.resolve("User Data");
let promise2 = Promise.resolve("Product Data");
let promise3 = Promise.resolve("Order Data");


// Promise.all()
Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log("4A. Promise.all:", result);
    });



    // Promise.allSettled()
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed")
])
    .then((result) => {
        console.log("4B. Promise.allSettled:", result);
    });



    // Promise.race()
Promise.race([
    Promise.resolve("First Promise Finished")
])
    .then((result) => {
        console.log("4C. Promise.race:", result);
    });


    // Promise.any()
Promise.any([
    Promise.reject("Error 1"),
    Promise.resolve("First Successful Promise")
])
    .then((result) => {
        console.log("4D. Promise.any:", result);
    });


// ======================================================
// 5. ASYNC / AWAIT
// ======================================================

function getUser() {
    return Promise.resolve("User received");
}

async function displayUser() {
    let result = await getUser();
    console.log("5. Async/Await:", result);
}

displayUser();



// ======================================================
// 6. TRY-CATCH ERROR HANDLING
// ======================================================

try {
    let number = 10;

    if (number < 20) {
        throw new Error("Number is less than 20");
    }

    console.log(number);

} catch (error) {
    console.log("6. Try-Catch Error:", error.message);
}



// ======================================================
// 7. FETCH API - GET
// ======================================================



// Fetch is asynchronous, so the result appears later.

async function getPosts() {

    console.log("7. Fetch: Loading...");

    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        let data = await response.json();

        console.log("7. Fetch GET:", data);

    } catch (error) {
        console.log("Fetch Error:", error.message);
    }
}

getPosts();




// ======================================================
// 8. FETCH - POST
// ======================================================

async function createPost() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "JavaScript",
                    body: "Learning Fetch API",
                    userId: 1
                })
            }
        );

        let data = await response.json();

        console.log("8. POST:", data);

    } catch (error) {
        console.log("POST Error:", error.message);
    }
}

createPost();




// ======================================================
// 9. FETCH - PUT
// ======================================================

async function updatePost() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    id: 1,
                    title: "Updated Title",
                    body: "Updated Body",
                    userId: 1
                })
            }
        );

        let data = await response.json();

        console.log("9. PUT:", data);

    } catch (error) {
        console.log("PUT Error:", error.message);
    }
}

updatePost();




// ======================================================
// 10. FETCH - PATCH
// ======================================================

async function patchPost() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "Only Title Updated"
                })
            }
        );

        let data = await response.json();

        console.log("10. PATCH:", data);

    } catch (error) {
        console.log("PATCH Error:", error.message);
    }
}

patchPost();




// ======================================================
// 11. FETCH - DELETE
// ======================================================

async function deletePost() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        );

        console.log("11. DELETE: Post deleted");

    } catch (error) {
        console.log("DELETE Error:", error.message);
    }
}

deletePost();




// ======================================================
// 12. LOADING, SUCCESS, EMPTY AND ERROR STATES
// ======================================================

async function loadProducts() {

    let products = [];

    console.log("12. State: Loading...");

    try {

        // Simulating API response
        products = ["Laptop", "Mobile", "Headphones"];

        if (products.length === 0) {
            console.log("12. State: Empty");
        } else {
            console.log("12. State: Success");
            console.log("Products:", products);
        }

    } catch (error) {

        console.log("12. State: Error");

    }
}

loadProducts();




// ======================================================
// 13. MAP - REAL WORLD EXAMPLE
// ======================================================

let students = new Map();

students.set(101, "Rahul");
students.set(102, "Priya");
students.set(103, "Aman");

console.log("13. Map:", students);
console.log("Student with ID 102:", students.get(102));




// ======================================================
// 14. SET - REAL WORLD EXAMPLE
// ======================================================

let uniqueSkills = new Set();

uniqueSkills.add("JavaScript");
uniqueSkills.add("HTML");
uniqueSkills.add("CSS");
uniqueSkills.add("JavaScript"); // Duplicate ignored

console.log("14. Set:", uniqueSkills);




// ======================================================
// 15. CLASS AND OBJECT
// ======================================================

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(
            `15. Student: My name is ${this.name} and I am ${this.age} years old.`
        );
    }
}

let student1 = new Student("Sana", 22);

student1.introduce();




// ======================================================
// 16. INHERITANCE - extends and super
// ======================================================

class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(
            this.name + " is barking. Breed: " + this.breed
        );
    }
}

let dog1 = new Dog("Tommy", "Labrador");

console.log("16. Inheritance:");

dog1.eat();
dog1.bark();




// ======================================================
// 17. PROTOTYPE
// ======================================================

function Employee(name) {
    this.name = name;
}

Employee.prototype.work = function () {
    console.log(this.name + " is working");
};

let employee1 = new Employee("John");

console.log("17. Prototype:");

employee1.work();




// ======================================================
// 18. CUSTOM ITERATOR
// ======================================================

let numbers = [10, 20, 30];

let customIterator = {

    index: 0,

    next() {

        if (this.index < numbers.length) {

            return {
                value: numbers[this.index++],
                done: false
            };

        } else {

            return {
                value: undefined,
                done: true
            };
        }
    }
};

console.log("18. Custom Iterator:");

console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());




// ======================================================
// 19. GENERATOR FUNCTION
// ======================================================

function* numberGenerator() {

    yield 10;
    yield 20;
    yield 30;
}

let generator = numberGenerator();

console.log("19. Generator:");

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());




// ======================================================
// 20. OPTIONAL CHAINING
// ======================================================

let user = {
    name: "Sana",
    address: {
        city: "Warangal"
    }
};

console.log(
    "20. Optional Chaining:",
    user.address?.city
);

console.log(
    "Missing Property:",
    user.contact?.phone
);



// ======================================================
// 21. NULLISH COALESCING
// ======================================================

let username = null;

let displayName = username ?? "Guest";

console.log(
    "21. Nullish Coalescing:",
    displayName
);



// ======================================================
// 22. DESTRUCTURING
// ======================================================

let person = {
    personName: "Rahul",
    age: 25
};

let { personName, age } = person;

console.log(
    "22. Destructuring:",
    personName,
    age
);



// ======================================================
// 23. SPREAD OPERATOR
// ======================================================

let frontend = ["HTML", "CSS"];
let backend = ["Node.js", "MongoDB"];

let fullStack = [...frontend, ...backend];

console.log(
    "23. Spread:",
    fullStack
);




// ======================================================
// 24. REST OPERATOR
// ======================================================

function addNumbers(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(
    "24. Rest:",
    addNumbers(10, 20, 30, 40)
);



// ======================================================
// 25. TEMPLATE LITERALS
// ======================================================

let name = "Sana";
let course = "JavaScript";

console.log(
    `25. Template Literal: ${name} is learning ${course}`
);


