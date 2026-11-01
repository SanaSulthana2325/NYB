
// ======================================================
// 1. CLOSURES
// ======================================================

// Practical example: A counter that remembers its value.

console.log("\n1. CLOSURES");

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 


// ======================================================
// 2. THIS IN DIFFERENT EXECUTION CONTEXTS
// ======================================================


console.log("\n2. THIS");

const employee = {
    name: "Rahul",

    showName() {
        return this.name;
    }
};

console.log(employee.showName()); 

const detachedMethod = employee.showName;
console.log(detachedMethod.call(employee));


// Correct way to call a detached method:
console.log(detachedMethod.call(employee)); 

const team = {
    name: "Developers",

    showTeam: () => "Arrow function uses outer this"
};

console.log(team.showTeam());
// Arrow function uses outer this



// ======================================================
// 3. CALL(), APPLY(), AND BIND()
// ======================================================

console.log("\n3. CALL, APPLY, AND BIND");

function introduce(city, job) {
    return `${this.name} works as a ${job} in ${city}.`;
}

const person = {
    name: "Priya"
};

console.log(
    introduce.call(person, "Hyderabad", "Developer")
);

console.log(
    introduce.apply(person, ["Chennai", "Designer"])
);

const boundIntroduce = introduce.bind(person, "Warangal");

console.log(boundIntroduce("Tester"));



// ======================================================
// 4. JAVASCRIPT CLASSES
// ======================================================

console.log("\n4. CLASSES");

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        return `${this.name} is ${this.age} years old.`;
    }
}

const student1 = new Student("Anu", 21);

console.log(student1.display());




// ======================================================
// 5. INHERITANCE USING EXTENDS AND SUPER
// ======================================================

console.log("\n5. INHERITANCE");

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

class CollegeStudent extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    study() {
        return `${this.name} studies ${this.course}.`;
    }
}

const student2 = new CollegeStudent("Kiran", "JavaScript");

console.log(student2.greet());
console.log(student2.study());




// ======================================================
// 6. GETTERS AND SETTERS
// ======================================================



console.log("\n6. GETTERS AND SETTERS");

class Product {
    constructor(price) {
        this.price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value < 0) {
            throw new Error("Price cannot be negative");
        }

        this._price = value;
    }
}

const product1 = new Product(500);

console.log(product1.price); 

product1.price = 800;

console.log(product1.price); 



// ======================================================
// 7. PROTOTYPES AND PROTOTYPE CHAINING
// ======================================================


console.log("\n7. PROTOTYPES");

const animal = {
    eat() {
        return "The animal is eating.";
    }
};

const dog = Object.create(animal);

dog.name = "Tommy";

console.log(dog.name);
console.log(dog.eat());
console.log(Object.getPrototypeOf(dog) === animal);


// ======================================================
// 8. SETS
// ======================================================


console.log("\n8. SETS");

const numbers = new Set([10, 20, 10, 30, 20]);

console.log([...numbers]);
console.log(numbers.has(20));
console.log(numbers.size);

numbers.add(40);
numbers.delete(10);

console.log([...numbers]);




// ======================================================
// 9. MAPS
// ======================================================


console.log("\n9. MAPS");

const employees = new Map();

employees.set(101, "Rahul");
employees.set(102, "Priya");
employees.set(103, "Anu");

console.log(employees.get(101));
console.log(employees.has(102));
console.log(employees.size);

employees.delete(103);

console.log(employees.size);



// ======================================================
// 10. SHALLOW COPY AND DEEP COPY
// ======================================================


console.log("\n10. SHALLOW AND DEEP COPY");

// Shallow copy
const original1 = {
    name: "Asha",
    address: {
        city: "Hyderabad"
    }
};

const shallowCopy = { ...original1 };

shallowCopy.address.city = "Chennai";

console.log(original1.address.city); // Chennai

// Deep copy
const original2 = {
    name: "Ravi",
    address: {
        city: "Delhi"
    }
};

const deepCopy = structuredClone(original2);

deepCopy.address.city = "Mumbai";

console.log(original2.address.city); // Delhi



// ======================================================
// 11. DEBOUNCE FUNCTION
// ======================================================


console.log("\n11. DEBOUNCE");

function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

const search = debounce((text) => {
    console.log("Searching for:", text);
}, 300);

search("J");
search("Ja");
search("Java");


// ======================================================
// 12. THROTTLE FUNCTION
// ======================================================

console.log("\n12. THROTTLE");

function throttle(callback, delay) {
    let waiting = false;

    return function (...args) {
        if (waiting) {
            return;
        }

        callback(...args);
        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}

const showClick = throttle((message) => {
    console.log(message);
}, 1000);

showClick("First call");
showClick("Second call");
showClick("Third call");



// ======================================================
// 13. REUSABLE MODULES AND CLEAN CODING
// ======================================================


console.log("\n13. REUSABLE CODE");

const Calculator = (() => {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    return {
        add,
        multiply
    };
})();

console.log(Calculator.add(10, 20));
console.log(Calculator.multiply(5, 4));




// Clean coding example:
// Use meaningful names, validate inputs, and return values.

function calculateTotal(price, quantity) {
    if (price < 0 || quantity < 0) {
        throw new Error("Price and quantity must be non-negative.");
    }

    return price * quantity;
}

console.log(calculateTotal(100, 3));

