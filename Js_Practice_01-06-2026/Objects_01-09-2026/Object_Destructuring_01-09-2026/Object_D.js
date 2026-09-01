// Object Destructuring in JavaScript

// Object destructuring is a way to take values from an object and store them directly in variables.

let stu = {
    name:"AAA",
    age:45,
    place:"hyd"
}
let {name,age,place} = stu;

console.log(name);
console.log(age);
console.log(place);


// exact only propertirs needed
let emp = {
    id:101,
    name1:"tasan",
    department: "HR",
    salary:45000
};
 
let{id,name1,department,salary} = emp

console.log(id);
console.log(name1);
console.log(department);
console.log(salary);

// when the property is null

let user = {
    name:"Apsari",
    age1: null
};
let {age1 = 27} = user;

console.log(age1)

// with array

let stu1 = {
    name2:"tasan",
    subject:["maths","english","EVS"]
};
let {name2, subject} = stu1;

console.log(name2)
console.log(subject)

// rest operator with destructuring


let employee = {
    name3: "Sana",
    age: 22,
    department: "IT",
    salary: 50000
};

let { name3, ...otherDetails } = employee;

console.log(name3);
console.log(otherDetails);