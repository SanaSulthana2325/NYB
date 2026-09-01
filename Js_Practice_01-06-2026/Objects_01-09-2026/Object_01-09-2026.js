// What is an Object?

// An object stores related data in key–value pairs.

// For example, an employee has:

// name
// age
// salary
// department

// example
let emp ={
    name:"Sasa",
    age:45,
    salary: 65000,
    department:"IT"
};

console.log(emp);


//Creating an Object

// The most common way is using object literal syntax.

// students

let stu = {
    name:"AAA",
    age: 32,
    course:"React",
    marks:90
};
console.log(stu)

// Accessing Object Properties

// There are mainly two ways to access properties:

// Dot notation .
// Bracket notation []

let stu1 = {
    name:"Yo-Yo",
    age:35,
    course:"HTML"
};
console.log(stu1.name);
console.log(stu1.age);
console.log(stu1.course);


//Bracket Notation[]

let stu2 = {
    name:"Jiga",
    age:32,
    place:"warangal"
};

console.log(stu2["name"]);
console.log(stu2["age"]);
console.log(stu2["place"]);


//When Do We Use Bracket Notation?

//Bracket notation becomes very useful when the property name is stored inside a variable.

let stu3 ={
    name:"vira",
    city:"hyderabad",
    place:"hitech city"

};

let property = "name";
console.log(stu3[property]);


// employee example

let employee = {
    id: 101,
    name:"tasan",
    department:"hr",
    salary:45000,

};
console.log("Employee Id:",employee.id);
console.log("Employee name:",employee.name);
console.log("Employee Department:",employee.department);
console.log("Employee Salary:",employee.salary);


// adding new property

let  emp2 = {
    name:"Sana",
    department:"HR"
};
emp2.salary = 50000;

console.log(emp2);

// updating an object property

let aa ={
    name : "Tara",
    salary:50000,
};
console.log(aa.salary);
aa.salary = 60000;
console.log(aa.salary);

// delete property

let bb = {
    name:"gaga",
    age:80,
    city:"hyd"
};

delete bb.age
console.log(bb)

// check whether a property exist ar not

let gg = {
    name:"popa",
    department:"IT"
};
console.log("name" in gg);
console.log("salary"  in gg);

// withdifferent data types
let product = {
    name: "Laptop",
    price: 55000,
    available: true,
    discount: null
};

console.log(product.name);
console.log(product.price);
console.log(product.available);
console.log(product.discount);

// objects with array

let ff = {
    name:"sana",
    age:25,
    hobbies:["listening to song","cooking","dancing"]
};

console.log(ff.name);
console.log(ff.age);
console.log(ff.hobbies);
console.log(ff.hobbies[2]);

// object with another object:
let employee1 = {
    name: "Sana",
    department: {
        name: "IT",
        floor: 3
    }
};

console.log(employee1.name);
console.log(employee1.department.name);
console.log(employee1.department.floor);