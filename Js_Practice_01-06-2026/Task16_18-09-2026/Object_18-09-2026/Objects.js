// Object-Oriented Programming (OOP) is a programming style where we organize code around objects that contain:

// Properties → data/state
// Methods → actions/behavior

//Objects

// An object is a collection of related properties and methods.

const stu ={
    name:"saba",
    age:29,
    course:"React",

    study(){
        console.log(`${this.name} is studing ${this.course}`);
    }
};

console.log(stu.name);
console.log(stu.age);

stu.study();

// example bank

const account = {
    accountHolder: "Rahul",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ₹${amount}`);
    },

    checkBalance() {
        console.log(`Balance: ₹${this.balance}`);
    }
};

account.checkBalance();

account.deposit(2000);

account.checkBalance();


// Constructor Functions

// Before ES6 classes, JavaScript commonly used constructor functions to create multiple similar objects.


function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("Sana", 22);
const student2 = new Student("Rahul", 24);

console.log(student1);
console.log(student2);


// Classes

// ES6 introduced the class syntax, which provides a cleaner way to create objects and inheritance relationships.

class stu5{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);

    }
}

const stu2 = new stu5("sara",28);

stu2.introduce();


// Constructor

// The constructor() method runs automatically when an object is created using new.


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const product = new Product("Laptop", 60000);

console.log(product.name);
console.log(product.price);


// Prototype

// Every JavaScript object has an internal link to another object called its prototype.

// The prototype can provide properties and methods to objects.

// example

const student = {
    name: "Sana"
};

console.log(student.toString());


// constructor function prototype

function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.introduce = function() {
    console.log(`My name is ${this.name}`);
};

const student11 = new Student("Sana", 22);
const student22 = new Student("Rahul", 24);

student11.introduce();
student22.introduce();


// Prototype Chain

// If JavaScript cannot find a property or method on an object, it looks at its prototype.

// If it isn't there, JavaScript continues looking upward.

// This is called the prototype chain.

// example

const employee = {
    name: "Rahul"
};

console.log(employee.hasOwnProperty("name"));
console.log(employee.hasOwnProperty("salary"));



// Inheritance

// Inheritance allows one class to reuse properties and methods from another class.


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

const dog = new Dog();

dog.eat();
dog.bark();


// extends

// extends establishes inheritance between classes.


class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    message() {
        console.log("Hello from Child");
    }
}

const child = new Child();

child.greet();
child.message();


// super

// super is used to access the parent class.


class Employee {
    constructor(name) {
        this.name = name;
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
}

const manager = new Manager("Sana", "IT");

console.log(manager.name);
console.log(manager.department);


// Why super()?

// When a child class has its own constructor, it must call super() before using this.


// Encapsulation

// Encapsulation means keeping data and the operations that work with that data together, while controlling direct access to internal state.

// Modern JavaScript supports private class fields using #


class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new BankAccount();

account1.deposit(5000);

console.log(accountgetBalance());


// Iterators

// An iterator is an object that provides values one at a time through the next() method.

// An iterator's next() returns an object like:


// example

const numbers44 = [10, 20, 30];

const iterator = numbers44[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Generators

// A generator function is a special function that can pause and resume execution.


function* numbers55() {
    yield 10;
    yield 20;
    yield 30;
}

const generator = numbers55();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());