// Object Destructuring in JavaScript

// Object destructuring is a JavaScript feature that allows us to extract values from an object and store them directly in variables.

// students details

const student = {
    name:"Tasan",
    age:22,
    course:"React"
};

const{name, age, course} = student;

console.log(name);
console.log(age);
console.log(course);


// employee info

const emp = {
    id:101,
    name1:"Aly",
    department:"IT",
    salary:40000
};

const{name1, department,salary} = emp

console.log("Employee:",name1);
console.log("Department:",department);
console.log("Salary:",salary);


// Destructuring with diff variable

const user = {
    name:"Jasmine",
    age:22
};
const{name:userName, age:userAge} = user;

console.log(userName);
console.log(userAge);

// default values

const user1 = {
    name2:"Affu",
    age1:45
};
const{name2, age1, city="Hyd"} = user1;

console.log(name2);
console.log(age1);

console.log(city);

// example

const product = {
    name3:"Laptop",
    price:50000
}
const {name3, price, stock = 0} = product

console.log("Product:" ,name3);
console.log(price);
console.log(stock);


// Nested object destructuring
const stu = {
    name4:"Minnu",
    age3:22,
    address:{
        city1:"hyd",
        state:"Telangana"
    }
};

const{
    name4, address:{ city1,state}} = stu;

    console.log(name4);
    console.log(city1);
    console.log(state);

// object destructuring in function parameter

function displayStudent(student){
    console.log(student.name5);
    console.log(student.age3);
    console.log(student.course1);

}
displayStudent({
    name5:"SASA",
    age3:43,
    course1:"HTML"

});
