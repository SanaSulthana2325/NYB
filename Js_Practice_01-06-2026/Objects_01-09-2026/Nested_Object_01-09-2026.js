// Nested Objects in JavaScript

// A nested object means an object inside another object.

let emp = {
    name:"dara",
    age:34,

    address:{
        city:"warangal",
        state:"Telangana",
        pincode:506007
    }


};
console.log(emp)
console.log(emp.address.city);
console.log(emp.address.state);

// student example

let student = {
    name: "raj",
    age: 20,

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log("Student Name:", student.name);
console.log("Age:", student.age);
console.log("City:", student.address.city);
console.log("State:", student.address.state);

// employee details
let company = {
    name: "Tasan Pvt ltd",

    employee: {
        name: "Sana",

        address: {
            city: "Warangal",
            state: "Telangana"
        }
    }
};

console.log(company.name);
console.log(company.employee.name);
console.log(company.employee.address.city);
console.log(company.employee.address.state);

// with Array

let student1 = {
    name: "Sana",

    address: {
        city: "Warangal",
        state: "Telangana"
    },

    subjects: ["maths", "English", "Social"]
};

console.log(student1.name);
console.log(student1.address.city);
console.log(student1.subjects);
console.log(student1.subjects[0]);

// adding property to nested object
let emp1 ={
    name:"Tasan",
    address:{
        city:"HNK",
        state:"Telangana"
    }
};
emp1.address.pincode = 506003;
console.log(emp1.address)