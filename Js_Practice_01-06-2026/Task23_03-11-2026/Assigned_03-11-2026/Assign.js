// Practice object cloning using different approaches.

// Object cloning means creating a copy of an existing object.

// Object Reference – Not Cloning


let emp = {
    name:"Lusi",
    age:26,
    department:"HR"
};

let emp1 = emp;

emp1.name = "gigi";

console.log("Employee 1:",emp);
console.log("Employee 2:",emp1);


// Using Object.assign() – Shallow Cloning
// Object.assign() copies the properties of one object into another object.


let emp2 = {
    name:"tara",
    age:31,
    department:"HR"

};

let emp3 = Object.assign({}, emp2);

emp3.name = "Husna";

console.log("Original Employee:", emp2);
console.log("Cloned Employee:", emp3);



// Using Spread Operator (...) – Shallow Cloning


let product1 ={
    productName:"Laptop",
    price:50000,
    brand:"Dell"
};

let product2 ={...product1};

product2.price = 45000;
product2.price = "Samsung";

console.log("Original Product:",product1);
console.log("Cloned Product:",product2);


// nested object

let student1 = {
    name: "Sana",
    marks: {
        maths: 90,
        science: 85
    }
};

let student2 = { ...student1 };

student2.marks.maths = 95;

console.log("Original Student:", student1);
console.log("Cloned Student:", student2);


// Using JSON.parse() and JSON.stringify() – Deep Cloning
// This approach creates a separate copy of nested objects too, provided the data is JSON-compatible.


let stu1 = {
    name:"gaba",
    age:27,

    address:{
        city:"Warangal",
        state:"Telangana"
    },

    marks:{
        maths:90,
        science:89
    }
};

let stu2 = JSON.parse(JSON.stringify(stu1));

stu2.name = "khala";
stu2.address.city = "Asasa";
stu2.marks.maths = 95;

console.log("Original student:", stu1);
console.log("Cloned student:", stu2);


// Using structuredClone() – Modern Deep Cloning
// JavaScript provides a modern built-in method called structuredClone().


let ii ={
    name:"Rahul",
    salary:30000,

    address:{
        city:"Adda",
        state:"AP"
    }
};

let jj = structuredClone(ii);

jj.name = "Mira";
jj.address.city = "goa";

console.log("Original Employee:", ii);
console.log("Cloned Employee:", jj);


// Understand shallow copy and deep copy differences.


// What is Shallow Copy?
// A Shallow Copy creates a new object and copies its top-level properties.

let kk = {
    name:"fifa",
    age:34,

    address:{
        city:"Gaga",
        state:"AP"
    }
};

let ll ={...kk};
 
ll.name = "shahenaz";

ll.address.city = "hyd";

console.log("Original Employee:",kk);
console.log("Cloned Employee:", ll);


// What is Deep Copy?
// A Deep Copy creates a new object and also creates independent copies of nested objects.


let employee1 = {
    name: "Sana",
    age: 24,

    address: {
        city: "Warangal",
        state: "Telangana"
    }
};

// Creating deep copy
let employee2 = structuredClone(employee1);

// Changing copied object
employee2.name = "Rahul";
employee2.address.city = "Hyderabad";

console.log("Original Employee:", employee1);
console.log("Copied Employee:", employee2);



// Shallow Copy	                                               Deep Copy
// Creates a new outer object.	                       Creates a new outer object.
// Copies top-level properties.	                  Copies top-level and nested properties.
// Nested objects are shared.	                      Nested objects are independently copied.
// Changes to nested objects affect the original.	  Changes to nested objects do not affect the original.
// Faster and simpler for simple objects.	           More suitable when independent nested data is required.
// Example: {...obj}	                               Example: structuredClone(obj)


// Prototype-based inheritance means one object can access the properties and methods of another object without creating them again.

// prototype:

let sa = {
    name:"sam",
    department:"HR"
};

console.log(sa.name);
console.log(sa.department);

console.log(Object.getPrototypeOf(sa));


//Prototype-Based Inheritance Using Object.create()
// Object.create() creates a new object using an existing object as its prototype.


// Parent object
let person = {
    greet: function () {
        console.log("Hello, welcome!");
    }
};

// Child object inherits from person
let employee = Object.create(person);

employee.name = "Sana";
employee.department = "HR";

// Accessing own properties
console.log(employee.name);
console.log(employee.department);

// Accessing inherited method
employee.greet();



// . Prototype-Based Inheritance Using Constructor Functions


// Parent constructor function
function Employee(name, department) {
    this.name = name;
    this.department = department;
}

// Adding method to Employee prototype
Employee.prototype.displayDetails = function () {
    console.log("Name:", this.name);
    console.log("Department:", this.department);
};

// Child constructor function
function Manager(name, department, teamSize) {

    // Calling parent constructor
    Employee.call(this, name, department);

    this.teamSize = teamSize;
}

// Connecting Manager prototype to Employee prototype
Manager.prototype = Object.create(Employee.prototype);

// Restoring constructor reference
Manager.prototype.constructor = Manager;

// Adding child-specific method
Manager.prototype.manageTeam = function () {
    console.log(this.name, "manages", this.teamSize, "employees");
};

// Creating manager object
let manager1 = new Manager("Sana", "HR", 10);

// Calling parent method
manager1.displayDetails();

// Calling child method
manager1.manageTeam();


// Create constructor functions and ES6 classes.


// What is a Constructor Function?
// A Constructor Function is a normal JavaScript function used to create multiple objects with the same structure.

function Employee(name,age,department,salary){
    this.name = name;
    this.age = age;
    this.department = department;

    this.salaru = salary;
}

let emp11 = new Employee("fafa",34,"HR",30000);

let emp12 = new Employee("Naina",25, "IT",40000);

let emp13 = new Employee("Aru",27, "Testing",27000)


console.log(emp1);
console.log(emp2);
console.log(emp3);


// What are ES6 Classes?
// ES6 Classes were introduced in ECMAScript 2015.

// A Class is a blueprint or template used to create objects.

// Instead of writing a constructor function, we can use the class keyword.


// Creating class
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
let student11 = new Student("Sana", 24, "JavaScript");

let student21 = new Student("Rahul", 22, "Python");

// Calling methods
student11.displayDetails();

console.log("----------------");

student21.displayDetails();



// Constructor Functions	                                              ES6 Classes
// Use the function keyword.	                                    Use the class keyword.
// Constructor name usually starts with a capital letter.	       Class name usually starts with a capital letter.
// Properties are initialized inside the function.	              Properties are initialized inside constructor().
// Shared methods are commonly added using .prototype.         	Methods are written directly inside the class body.
// Traditional JavaScript approach.	                           Modern JavaScript syntax.


//constructor Function
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.showDetails = function () {
    console.log("Name:", this.name);
    console.log("Salary:", this.salary);
};

let emp15 = new Employee("Sana", 30000);

emp15.showDetails();
  

//Es6


class Employee55 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let emp14 = new Employee55("Sana", 30000);

emp14.showDetails();



// Implement inheritance using `extends` and `super`.

// What is inheritance?

// Inheritance means one class can acquire the properties and methods of another class.

// Parent class
class Employee22 {

    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
    }
}

// Child class
class Manager2 extends Employee22 {

    constructor(name, department, salary, teamSize) {

        // Calling parent constructor
        super(name, department, salary);

        this.teamSize = teamSize;
    }

    manageTeam() {
        console.log("Managing Team:", this.teamSize);
    }
}

// Creating Manager object
let manager11 = new Manager2("Sana", "HR", 40000, 10);

// Calling parent method
manager11.displayDetails();

// Calling child method
manager11.manageTeam();



// Practice encapsulation and reusable class methods.


// What is Encapsulation?
// Encapsulation means keeping data and the methods that work with that data together inside a class, while controlling direct access to certain properties.


class BankAccount {

    // Private property
    #balance;

    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }

    // Deposit money
    deposit(amount) {

        if (amount > 0) {
            this.#balance += amount;
            console.log("Amount Deposited:", amount);
        } else {
            console.log("Invalid Amount");
        }

    }

    // Withdraw money
    withdraw(amount) {

        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Amount Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance or Invalid Amount");
        }

    }

    // Check balance
    checkBalance() {
        console.log("Available Balance:", this.#balance);
    }

}

// Creating object
let account1 = new BankAccount("Sana", 10000);

// Calling methods
account1.checkBalance();

account1.deposit(5000);

account1.withdraw(3000);

account1.checkBalance();


//  Implement getters, setters, and static methods.


// Getters and Setters
// Getters and setters allow us to access and update properties through methods that look like normal property access.
// - Getter (get): Used to read or calculate a value.
// - Setter (set): Used to update a value with validation.


class Employee23 {

    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }

    // Getter
    get salary() {
        return this._salary;
    }

    // Setter
    set salary(newSalary) {

        if (newSalary > 0) {
            this._salary = newSalary;
            console.log("Salary Updated Successfully");
        } else {
            console.log("Invalid Salary");
        }

    }

}

let employee12 = new Employee23("Sana", 30000);

// Using getter
console.log("Old Salary:", employee12.salary);

// Using setter
employee12.salary = 40000;

// Using getter again
console.log("New Salary:", employee12.salary);

// Invalid salary
employee12.salary = -5000;


// Static Methods
// What is a Static Method?

// A static method belongs to the class itself, not to individual objects.


class Employee17 {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    // Static method
    static companyInfo() {
        console.log("Company Name: ABC Technologies");
        console.log("Location: Hyderabad");
        console.log("Total Employees: 100");
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Department:", this.department);
    }

}

// Calling static method using class name
Employee17.companyInfo();

// Creating object
let employee18 = new Employee17("Sana", "HR");

// Calling normal method using object
employee18.displayDetails();

