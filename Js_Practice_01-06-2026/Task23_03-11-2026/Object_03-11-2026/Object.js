// What is an Object in JavaScript?
// An object is a collection of related data stored in the form of key-value pairs.

// In simple words, an object is used to store multiple details about one particular thing.


let emp = {
    name:"Tata",
    age:45,
    empId:101,
    Department:"Finance",
    salary:60000
};

console.log(emp.name);
console.log(emp.empId);
console.log(emp.age);
console.log(emp.Department);
console.log(emp.salary);
console.log(emp.name);

//
let employee = {
    name:"Yoyo",
    employeeId:108
};

console.log(employee.name);
console.log(employee.employeeId);


// How to Access Object Properties?
// There are two common ways to access object properties.
// A. Dot Notation (.)
// We use the dot (.) followed by the property name.

let stu = {
    name:"jaja",
    age:34,
    course:"JavaScript"
};

console.log(stu.name);
console.log(stu.age);
console.log(stu.course);


// Bracket Notation ([])
// We use square brackets and provide the property name as a string.

let stu1 = {
    name:"sam",
    age:34,
    course:"finanace"
};

console.log(stu1["name"]);
console.log(stu1["age"]);
console.log(stu1["course"]);


//
let aa ={
    name:"oioi",
    salary:40000
};

let property = "salary";
console.log(aa[property]);


// . How to Add, Update and Delete Object Properties?
// In real-time applications, we frequently add, update, and delete information.

let bb ={
    name:"ganga",
    age:45
};

bb.department = "marketing";

console.log(bb);


// update salary

bb.salary = 57000;
console.log(bb.salary);


// Delete salary

delete bb.age;
console.log(bb)


// What is Object Destructuring?
// Important JavaScript Concept
// Object Destructuring is a JavaScript feature that allows us to extract properties from an object and store them in separate variables easily.

// In simple words:

// Instead of accessing every property using the object name, we can directly extract the values into variables.


let cc ={
    name:"kika",
    age:45,
    department:"Hr",
    salary:40000
};

let { name,age,department,salary} = cc;

console.log(name);
console.log(age);
console.log(department);
console.log(salary);



// Object Destructuring with Default Values
// Sometimes an object may not contain a particular property.

// In that situation, we can provide a default value.


let student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};

// Destructuring with default value

let {
    name1,
    age1,
    course,
    city = "Not Provided"
} = student;

console.log("Name:", name1);
console.log("Age:", age1);
console.log("Course:", course);
console.log("City:", city);


// Nested Object Destructuring
// Sometimes an object contains another object inside it.

// This is called a nested object.



let user = {
    name2: "Sana",
    age2: 24,

    address: {
        city1: "Warangal",
        state: "Telangana",
        country: "India"
    }
};

// Nested Object Destructuring

let {
    name2,
    age2,
    address: { city1, state, country }
} = user;

console.log("Name:", name2);
console.log("Age:", age2);
console.log("City:", city1);
console.log("State:", state);
console.log("Country:", country);


// Object Destructuring in Functions
// This is very important in real-time JavaScript projects.

// We can pass an object to a function and directly extract its properties through function parameters.


let ff ={
    name:"bajaj",
    department:"HR",
    salary:40000
};

function displayff({name,department,salary}){
    console.log("Name:",name);
    console.log("Department:",department);
    console.log("Salary:",salary);

}

displayff(ff);



// Difference Between Objects and Object Destructuring
// Objects	                              Object Destructuring
// Stores related data	                 Extracts data from an object
// Uses key-value pairs	              Uses property names
// Example: let user = {name: "Sana"}	  Example: let {name} = user
// Used to organize data	                    Used to access data easily



// What is an Object Reference in JavaScript?
// An Object Reference means that a variable stores a reference to an object rather than storing a separate copy of the object.

// In simple words:

// When we assign one object variable to another variable, both variables point to the same object in memory.

let dd = {
    name:"lulu",
    age:34,
    department:"Hr"
};

let ee = dd;

console.log("dd:",dd);
console.log("ee:",ee);


// Changing One Object Affects Another
// This is the most important thing to understand about object references.

let gg ={
    name:"lusi",
    age:34,
    salary:45000
};

let hh = gg;

hh.salary = 46000;

console.log("Employee 1 salary:", gg.salary);
console.log("Employee 1 salary:", hh.salary);


// Comparing Objects Using == and ===
// In JavaScript, when we compare two different objects, JavaScript checks whether they refer to the same object.


let user1 = {
    name: "Rahul"
};

let user2 = user1;

console.log(user1 === user2);
console.log(user1 == user2);


// What is Object Cloning?

// Object Cloning means creating a new object by copying the properties and values of an existing object.


let employee1 = {
    name: "Sana",
    age: 24,
    salary: 30000
};

// Creating a clone

let employee2 = { ...employee1 };

// Updating employee2

employee2.salary = 40000;

// Displaying both objects

console.log("Employee 1:", employee1);

console.log("Employee 2:", employee2);


// Different Ways to Clone an Object
// JavaScript provides different ways to clone objects.

// Using the Spread Operator (...)
// The spread operator (...) is the easiest and most commonly used way to create a shallow copy of an object.

let product1 ={
    productName:"laptop",
    price:50000,
    brand:"HR"
};

let product2 = {...product1};

product2.price = 60000;

console.log("Original product:", product1);
console.log("Cloned product:", product2);


// Where is it used?
// - Creating copies of product information.
// - Updating user profile data.
// - Managing employee details.
// - Creating modified versions of existing objects.


// Using Object.assign()
// Object.assign() is another way to clone an object.

// It copies properties from one or more source objects into a target object.


let student1 = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};

// Cloning using Object.assign()

let student2 = Object.assign({}, student1);

// Updating cloned object

student2.name = "Arun";

console.log("Original Student:", student1);

console.log("Cloned Student:", student2);


// What is Shallow Copy?
// Very Important
// A Shallow Copy creates a new object and copies its top-level properties.

// However, if the original object contains another object inside it, the nested object is still shared between the original and cloned objects.

let user11 = {
    name:"kika",
    age:34,
    address:{
        city:"Wgl",
        state:"AP"
    }
};

let user12 ={...user11};

user12.name = "haya";

user12.address.city = "hyder";

console.log("User 1:",user11);
console.log("User 2:",user12);


// What is Deep Copy?

// A Deep Copy creates a completely independent copy of an object, including its nested objects and arrays.

let emp11 = {
    name:"sam",
    age:34,
    address:{
        city:"AAAA",
        state:"AP"
    }
};

let emp22 = structuredClone(emp11);

emp22.name = "babbu";

emp22.address.city = "vaizak";

console.log("Original Employee:",emp11);
console.log("Cloned Employee:",emp22);
