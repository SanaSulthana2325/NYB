// What is a Constructor Function?
// A Constructor Function is a regular JavaScript function used to create multiple objects with similar properties and methods.

function Employee(name,age,department){
    this.name = name;
    this.age = age;
    this.department = department;
}

let employee1 = new Employee("ayesha",26,"management");

let employee2 = new Employee("Affu",31,"Development");

let employee3 = new Employee("Aru",29,"finance");

console.log(employee1);

console.log(employee2);
console.log(employee3);


// What is a Class?
// A Class is a blueprint or template used to create objects.


// What is an Object?
// An Object is an actual instance created from a class.


// Creating a class

class Student {

    // Constructor

    constructor(name, age, course) {

        this.name = name;
        this.age = age;
        this.course = course;

    }

    // Method

    displayDetails() {

        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);

    }

}

// Creating objects

let student1 = new Student("Sana", 24, "JavaScript");

let student2 = new Student("Rahul", 21, "Python");

// Calling methods

student1.displayDetails();

console.log("----------------");

student2.displayDetails();



// Constructor Function	          Class
// Created using function	        Created using class
// Uses this	                   Uses this
// Uses new to create objects	   Uses new to create objects
// Methods can be added 
// through prototype	            Methods are automatically placed on prototype
// Older JavaScript style	            Modern JavaScript style



// What is Inheritance?
// Inheritance means one class can acquire the properties and methods of another class.


// Parent Class

class Employee1 {

    constructor(name, age, department) {

        this.name = name;
        this.age = age;
        this.department = department;

    }

    displayDetails() {

        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Department:", this.department);

    }

}


// Child Class 1

class Manager extends Employee1 {

    manageTeam() {

        console.log(this.name, "is managing the team");

    }

}


// Child Class 2

class Developer extends Employee1 {

    writeCode() {

        console.log(this.name, "is writing code");

    }

}


// Creating Manager object

let manager1 = new Manager("Sana", 23, "HR");

manager1.displayDetails();

manager1.manageTeam();

console.log("----------------");

// Creating Developer object

let developer1 = new Developer("Rahul", 25, "IT");

developer1.displayDetails();

developer1.writeCode();


//

class Animal{
    eat()
{
    console.log("Animal is eating");
}
}

class Dog extends Animal{
    bark(){
        console.log("Dog is Barking");
    }
}

let dog1 = new Dog();
dog1.eat();
dog1.bark();


// Where is inheritance used in real-time?
// - Employee Management Systems.
// - Banking applications.
// - E-commerce applications.
// - User authentication systems.
// - Applications with different user roles.


// What is Encapsulation?
// Encapsulation means wrapping data and methods together inside a class and controlling access to that data.

class BankAccount{
    #balance = 0;

    constructor(name,balance){
        this.name = name;
        this.#balance = balance; 
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log("Deposited:",amount);
        }else{
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;

            console.log("withdrawn:", amount);
        }else{
            console.log("Insufficient balance or invalid amount");
        }
    }

    checkBalance(){
        console.log("Current Balance:", this.#balance);
    }
}

let account1 = new BankAccount("Sara", 10000)

account1.checkBalance();
account1.deposit(5000);
account1.withdraw(3000);

account1.checkBalance();