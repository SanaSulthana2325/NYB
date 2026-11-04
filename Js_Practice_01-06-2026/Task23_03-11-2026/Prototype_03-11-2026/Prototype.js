// What is a Prototype in JavaScript?
// A Prototype is an object from which another object can inherit properties and methods.

// In simple words:

// A prototype allows one object to reuse properties and methods of another object instead of creating the same methods again and again.


// Creating a constructor function

function Employee(name, department) {
    this.name = name;
    this.department = department;
}

// Adding method to prototype

Employee.prototype.displayDetails = function () {
    console.log(
        "Name:", this.name,
        "Department:", this.department
    );
};

// Creating employee objects

let employee1 = new Employee("Sana", "HR");

let employee2 = new Employee("Rahul", "Development");

// Calling prototype method

employee1.displayDetails();

employee2.displayDetails();


// What is the Prototype Property?
// Every JavaScript constructor function has a prototype property.

// This property refers to an object that can be shared by instances created using that constructor.


function stu(name,age){
    this.name = name;
    this.age = age;
}

stu.prototype.study = function(){
    console.log(this.name + " is studing");
};

let stu1 = new stu("Aru",21);

let stu2 = new stu("sam",22);

console.log(stu.prototype);

console.log(Object.getPrototypeOf(stu1) === stu.prototype);
console.log(Object.getPrototypeOf(stu2) === stu.prototype);



// What is a Prototype Chain?

// A Prototype Chain is the mechanism JavaScript uses to search for a property or method in an object and, if it cannot find it, look for it in its prototype, then its prototype's prototype, and so on.


// When you access a property of an object:
// 1. JavaScript first checks the object itself.
// 2. If the property is not found, it checks the object's prototype.
// 3. If it is still not found, it checks the next prototype.
// 4. This continues until the property is found or JavaScript reaches null.

let student ={
    name:"fufa",
    age:28
};

console.log(student.name);

console.log(student.toString());

console.log(Object.getPrototypeOf(student));

//
let jj ={
    name:"gagt"
};

console.log(jj.toString())

console.log(Object.getPrototypeOf(jj))



// Difference Between __proto__ and prototype
// This is a very common JavaScript interview question.

// Both are related to prototypes, but they are not the same.
// prototype	                                    __proto__
// Property of constructor functions	       Accessor on objects that exposes their prototype
// Used when creating objects with new          	Shows an object's prototype
// Example: Employee.prototype	                  Example: employee1.__proto__

//
function Dd(name){
    this.name = name;
}

Dd.prototype.greet = function(){
    console.log("Hello", this.name);
};

let dd1 = new Dd("sana");
console.log(dd1.__proto__ === Dd.prototype);


// How to Check Whether a Property Belongs to an Object?
// Sometimes we need to check whether a property exists directly inside an object or comes from its prototype.

// For this, JavaScript provides hasOwnProperty().


function Product (name,price){
    this.name = name;
    this.price = price;
}

Product.prototype.display = function(){
    console.log(this.name,this.price);
};

let product1 = new Product("Laptop",50000);

console.log(product1.hasOwnProperty("name"));

console.log(product1.hasOwnProperty("price"));

console.log(product1.hasOwnProperty("display"));





// Prototype	                                  Prototype Chain
// An object used for inheritance	            A sequence of prototype links
// Allows objects to share methods	              Allows JavaScript to search for inherited properties
// Example: Employee.prototype	                  Example: employee → Employee.prototype → Object.prototype → null
// Helps with code reuse	                      Helps with property and method lookup