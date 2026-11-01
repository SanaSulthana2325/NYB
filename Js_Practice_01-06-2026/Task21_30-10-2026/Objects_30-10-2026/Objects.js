// Object-Oriented Programming (OOP) is a way of writing code by organizing related data and functions into objects.

// Objects
// Meaning: An object stores related data as key-value pairs. It can also contain functions, which are called methods.


const AA = {
    name:"GIGI",
    age:25,
    department:"IT",
    salary:30000,

    displayDetails: function(){
        console.log("Name:",this.name);
        console.log("Department:",this.department);
        console.log("Salary:",this.salary);
    }
};

console.log(AA.name);
console.log(AA.age);

AA.displayDetails();


// Constructor Functions
// Meaning: A constructor function is a regular function designed to create multiple objects with the same structure. It is conventionally named with a capital letter and called using new.

function Emp(name,department,salary) {
    this.name = name;
    this.department = department;
    this.salary = salary;
}

const emp1 = new Emp("kaka","IT",30000);
const emp2  = new Emp("sana","HR",35000);

console.log(emp1.name);
console.log(emp2.name);
console.log(emp2.salary);

// Classes
// Meaning: A class is a template for creating objects. It can define properties and methods that its instances use.

class SS{
    constructor(name,salary){
        this.name="name";
        this.salary = salary;
    }

    displayWW(){
        console.log("Employee:",this.name);
        console.log("Salary:",this.salary);
    }
}

const employee1 = new SS("Baba", 45000);
const employee2 = new SS("jaja",40000);

employee1.displayWW();
employee2.displayWW();


// Constructors
// Meaning: A constructor is a special method inside a class that runs automatically when a new instance is created with new.


class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;

        console.log("Product created!!");
    }
}

const product1 = new Product("Laptop",50000);

console.log(product1.name);
console.log(product1.price);


// Instance Methods
// Meaning: Instance methods are methods available on individual objects created from a class. They commonly access instance properties through this.

class FF{
    constructor(name, monthlySalary){
        this.name = name;
        this.monthlySalary = monthlySalary;
    }

    calculateAnnualSalary(){
        return this.monthlySalary * 12;
    }
}

const gg = new FF("Khaja",78000);
console.log(gg.calculateAnnualSalary());


// Static Methods
// Meaning: A static method belongs to the class itself, not to individual instances. You call it using the class name.


class payroll{
    static getMonthsInYear(){
        return 12;
    }
}

console.log(payroll.getMonthsInYear());


// Getters
// Meaning: A getter lets you access a method as if it were a property. It is useful when you want to calculate or format a value when it is accessed.

class HH{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return this.firstName+ " "+ this.lastName;
}
}

const jj = new HH("Boo","Chan");

console.log(jj.fullName)


// Setters
// Meaning: A setter lets you assign a value to a property while running custom logic, such as validation.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    set salary(value) {
        if (value < 0) {
            console.log("Salary cannot be negative!");
            return;
        }

        this._salary = value;
    }

    get salary() {
        return this._salary;
    }
}

const employee = new Employee("Rahul", 30000);

console.log(employee.salary);

employee.salary = -5000;

console.log(employee.salary);


// Inheritance
// Meaning: Inheritance allows one class to reuse properties and methods defined by another class.


class Employee1 {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(this.name, "is working.");
    }
}

class Manager extends Employee1 {
    manageTeam() {
        console.log(this.name, "is managing the team.");
    }
}

const manager = new Manager("Priya");

manager.work();
manager.manageTeam();


// extends
// Meaning: The extends keyword establishes an inheritance relationship between two classes.


class Employee2 {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}

class Developer extends Employee2 {
    writeCode() {
        console.log(this.name, "writes JavaScript code.");
    }
}

const developer = new Developer("Rahul", "IT");

console.log(developer.name);
console.log(developer.department);

developer.writeCode();


// super
// Meaning: The super keyword allows a child class to call its parent's constructor or access parent methods.

class Employee5 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

class Manager1 extends Employee5 {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }

    displayManagerDetails() {
        super.displayDetails();
        console.log("Team Size:", this.teamSize);
    }
}

const manager1 = new Manager1("Sara", 60000, 5);

manager1.displayManagerDetails();



// Encapsulation
// Meaning: Encapsulation means keeping data and the methods that operate on it together, while controlling direct access to internal data.

// JavaScript supports private class fields using the # symbol.

class BankAccount{
    #balance;

    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
        if(amount <=0){
            console.log("Enter a valid amount");
            return;
        }

        this.#balance += amount;
    }
    getBalance(){
        return this.#balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
console.log("Balance:",account.getBalance());

console.log(account.balance);


// Polymorphism
// Meaning: Polymorphism means that different objects can respond to the same method call in different ways.

class sa{
    work(){
        console.log("Employee performs general work");
    }
}

class Developer1 extends sa{
    work(){
        console.log("Developer write code");
    }

}

class Designer extends sa{
    work(){
        console.log("Designer creates UI design");
    }
}

const employees = [
    new sa(),
    new Developer1(),
    new Designer(),

]

employees.forEach(function(sa){
    sa.work();
});



// Prototypes
// Meaning: A prototype is an object from which another object can inherit properties and methods.


function ba(name){
    this.name = name;
}
ba.prototype.work = function(){
    console.log(this.name,"is working");
};

const ba1 = new ba("ayesha");
const ba2 = new ba("Afreen");

ba1.work();
ba2.work();

console.log(Object.getPrototypeOf(ba1) === ba.prototype);


// Prototype Chain
// Meaning: The prototype chain is the sequence of prototype objects JavaScript searches when a property or method is not found directly on an object.

class ca{
    work(){
        console.log("Employee on work");
    }
}

class Developer2 extends ca{
    code(){
        console.log("Developer is good at code ");
    }
}

const developer1 = new Developer2();

developer1.code();
developer1.work();

console.log(developer1.toString !== undefined);



// Concept	                      Main purpose
// 1. Objects	                Store related data and methods.
// 2. Constructor Functions	Create multiple similar objects.
// 3. Classes	                Define templates for objects.
// 4. Constructors	             Initialize new instances.
// 5. Instance Methods	         Perform actions on individual instances.
// 6. Static Methods	        Perform operations associated with a class.
// 7. Getters	                  Read or calculate a value through property access.
// 8. Setters	                   Control how a property is assigned.
// 9. Inheritance	                Reuse behavior from another class.
// 10. extends                  	Establish a class inheritance relationship.
// 11. super	                  Call parent constructors or methods.
// 12. Encapsulation	          Protect internal data and control access.
// 13. Polymorphism	          Allow the same method call to behave differently.
// 14. Prototypes	            Share properties and methods between objects.
// 15. Prototype Chain	               Search prototypes for missing properties and methods. 