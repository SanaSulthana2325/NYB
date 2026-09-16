// An object stores data in key-value pairs.

// Think of an object as a real-world thing with properties and actions.

// For example, a student has:

// name
// age
// course
// marks

// Object creation

//student object

let stu ={
    name:"Minnu",
    age:20,
    course:"Human Resourse",
    marks: 90
};
console.log(stu)

// product object

let product ={
    name:"Laptop",
    price:55000,
    brand:"samsung",
};

console.log(product);


// Accessing Object Properties

// There are two main ways:

// Dot notation
// Bracket notation


let stu1 ={
    name:"GIGI",
    age:30,
    course:"React"
};
console.log(stu1.name);
console.log(stu1.age);
console.log(stu1.course);

//Bracket notation
console.log(stu1["name"]);
console.log(stu1["course"])


// When is bracket notation useful?

// It is especially useful when the property name is stored in a variable.

let student = {
    name: "Zeba",
    age: 20
};

let property = "name";

console.log(student[property]);

// Updating object property

let stu2 = {
    name:"mira",
    age:20,
    marks:90

}

stu2.marks = 90;
stu2.course="React"
delete stu2.course;
console.log(stu2)

// nested object: an object contains another object is called nested object

// example
let emp={
    name:"saba",
    age:36,
    address:{
        city:"HYD",
        state:"Telangana",
        pincode:506001
    }
};
console.log(emp)
console.log(emp.address.city);
console.log(emp.name);
console.log(emp.address.state)

// Object Methods

// A method is a function stored inside an object.

let person = {
    name:"sara",

    greet: function(){
        console.log("Hello!!! " + this.name);
    }
};
person.greet();


//Object .keys()

// Object.keys() returns an array containing all the property names.

let stu3 ={
    name:"Tata",
    age:18,
    status:"single"
};
console.log(Object.keys(stu3))

// example
let product1 = {
    name: "Laptop",
    price: 50000,
    brand: "HP",
    inStock: true
};

console.log(Object.keys(product1));


// Object.values()

// Object.values() returns an array containing all the values.

let student2 = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

console.log(Object.values(student2));


// Object.entries()

// Object.entries() returns an array containing key-value pairs.

let student3 = {
    name: "Samreen",
    age: 20,
    course: "JavaScript"
};

console.log(Object.entries(student3));



// Object Destructuring

// Destructuring allows us to extract properties from an object and store them in variables.

let emp1={
    name1:"Tasan",
    age:34,
    course:"HR"
}
let {name1,age,course} = emp1;

console.log(name1);
console.log(age);
console.log(course);



// Spread Operator ...

// The spread operator is written as:

let student7 = {
    name: "Rahul",
    age: 20
};

let updatedStudent = {
    ...student7,
    course: "JavaScript"
};

console.log(updatedStudent);


// Rest Operator ...

// The rest operator also uses:

// ...

// But its purpose is different.

// Rest collects multiple values into one variable.


let student9 = {
    name: "Rahul",
    age: 20,
    course: "JavaScript",
    marks: 90
};

let { name, ...otherDetails } = student9;

console.log(name);
console.log(otherDetails);


//Shallow Copy

//A shallow copy creates a new top-level object, but nested objects are still shared.

//Example:

let original = {
    name: "Rahul",

    address: {
        city: "Hyderabad"
    }
};

let copy = { ...original };

console.log(original === copy);




// Deep Copy

// A deep copy creates independent copies of nested objects too.

// One common modern approach is:

// structuredClone()

//Example:

let original1 = {
    name: "Rahul",

    address: {
        city: "Hyderabad"
    }
};

let copy1 = structuredClone(original1);

copy1.address.city = "Warangal";

console.log(original1.address.city);
console.log(copy1.address.city);