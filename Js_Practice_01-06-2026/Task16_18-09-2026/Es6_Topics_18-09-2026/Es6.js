// ES6+ Features in JavaScript — Beginner-Friendly Guide

// ES6 means ECMAScript 2015. It introduced many important features that make JavaScript easier to write and more powerful.

// Modern JavaScript is generally called ES6+ because many features were added after ES6 as well.


// Destructuring

// Destructuring means taking values from an array or properties from an object and storing them directly into variables.

// example

let user = {
    name:"Tasan",
    age:31,
    city:"hyd"
};

const{name, age, city} = user;

console.log(name);
console.log(age);
console.log(city);

// array desturcturing:

const color = ["Read","Yellow","Green","Blue"];

const [first,second,third,fourth] = color

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


// Product details

const product = ["Laptop", 75000, "Dell"];

const [name1, price, brand] = product;

console.log("Product:", name1);
console.log("Price:", price);
console.log("Brand:", brand);

// skipping Values:

const numbers = [10, 20, 30];

const [first1, , third1] = numbers;

console.log(first1);
console.log(third1);

// nested destructuring

const employee = {
    name: "Arun",
    address: {
        city: "Hyderabad",
        pincode: 500001
    }
};

const {
    name3,
    address: { city3, pincode }
} = employee;

console.log(name3);
console.log(city3);
console.log(pincode);


// Spread Operator ...

// The spread operator expands an array or object into individual values/properties.

// Array example

const num = [10,20,30,40];
console.log(...num)

// copying an array

const fru = ["Apple","Banana","Mango"];
const newFru = [...fru];
console.log(newFru);

// combining array

const cart1 = ["aaa","bbb"];
const cart2 = ["ccc","ddd","eee"];

const finalCart = [...cart1,...cart2];

console.log(finalCart);


// Rest Operator ...

// The rest operator collects multiple values into one array/object.

// This is different from spread.

// example
function addnum(...num){
    console.log(num)
}
console.log(10,20,30,40,50,60);


// example
function calculateTotal(...prices) {
    let total = 0;

    for (let price of prices) {
        total += price;
    }

    return total;
}

console.log(calculateTotal(500, 200, 100));


// rest with destructuring

const numbers1 = [10, 20, 30, 40];

const [first2, second2, ...remaining] = numbers1;

console.log(first2);
console.log(second2);
console.log(remaining);



// | Spread                             | Rest                                            |
// | ---------------------------------- | ----------------------------------------------- |
// | Expands values                     | Collects values                                 |
// | Used to copy/combine               | Used to gather                                  |
// | `[...arr]`                         | `(...args)`                                     |
// | Usually used while creating values | Often used in function parameters/destructuring |


// Template Literals

// Template literals make it easier to create strings containing variables and expressions

// normal string

const name4 = "jiju";
const age3 = 23;
console.log("My name is "+ name4 + " and I am " + age +"years old.");


// with template literals

const name6 = "baba";
const age4= 29;

console.log(`My name is ${name6} and I am ${age} years old.`);


// multiple strings

const message = `
Hello Sana,

Your order has been confirmed.

Thank you for shopping!
`;

console.log(message);



// Optional Chaining ?.

// Optional chaining prevents errors when trying to access a property that may not exist.

// example
const s = {
    name5:"frog"
};
console.log(s.address?.city);


// user profile
const user3={
    name7:"ayesha",
    profile:{
        email:"Ayesha23@gmail.com"
    }
};

console.log(user3.profile?.email);
console.log(user3.profile?.phone);


// with array

const f = [
    {
        name8:"kika"
    }
];
console.log(f[0]?.name8)
console.log(f[1]?.name8)


// Nullish Coalescing ??

// The nullish coalescing operator provides a default value when something is:

// null
// undefined

// example

let username;
console.log(username ?? "Guest");

// using ||

let d = 0;
console.log(d || 18)   //Because 0 is considered falsy.



// Modules

// Modules allow us to divide JavaScript into multiple files.

import{ add,multiply } from "./Math.js";


console.log(add(10,30));
console.log(multiply(56,8));


// Benefits:

// Better organization
// Code reuse
// Easier maintenance
// Avoids unnecessary global variables
// Easier teamwork


// default export: in whole file we can export only one code
//  only 1 export can be done
//  we can import with any name
// no need to use {} at the time of input


// example

import user5 from "./Math.js";
console.log(user5.name)

//named export

// A named export is a way to export specific variables, functions, classes, or objects from one JavaScript file so that another JavaScript file can import them.


// Map

// Map is a collection of key-value pairs.

// Similar to an object, but Map provides useful methods and allows keys of many types.

// example
const stu =new Map();

stu.set(101,"tasan");
stu.set(102,"zobiya");
stu.set(103,"zeba");
stu.set(104,"Ayesha");

console.log(stu);

// getting values from map
const stu1 = new Map();

stu1.set(101,"Hafsa");
stu1.set(102,"Sana");

console.log(stu1.get(101));
console.log(stu1.get(102))


// checking map

console.log(stu1.has(101));
console.log(stu1.has(109));

// map size
console.log(stu1.size);

// delete map

stu1.delete(102);
console.log(stu1.has(102));

// Set

// A Set stores unique values.

// Duplicate values are automatically removed.

// example
const num2 = new Set([10,20,30,40,50,60]);
console.log(num2);

// remove duplicate

const e = [
    "aa",
    "bb",
    "cc",
    "dd",
    "ee"
];

const uniqueNames = new Set(e);
console.log(uniqueNames);


// set method

const skills = new Set();

skills.add("HTML");
skills.add("CSS");
skills.add("JavaScript");

console.log(skills.has("JavaScript"));
console.log(skills.size);

skills.delete("CSS");

console.log(skills);

// | Map                         | Set                  |
// | --------------------------- | -------------------- |
// | Key-value pairs             | Values only          |
// | `set(key, value)`           | `add(value)`         |
// | `get(key)`                  | No `get()`           |
// | Keys can be different types | Stores unique values |
// | `has(key)`                  | `has(value)`         |


// WeakMap

// WeakMap is similar to Map, but its keys must be objects.

const weakMap = new WeakMap();

const user7={
    name4:"tasan"
};
weakMap.set(user7,"User Information");

console.log(weakMap.get(user7));

// Why WeakMap?

// One important property of WeakMap is that it doesn't prevent its object keys from being garbage-collected when there are no other references to those objects.


// WeakSet

// WeakSet stores objects only.

const weakSet = new WeakSet();
const user8 ={
    name5:"Sonu"
};
const user9 = {
    name:"Nani"
};

weakSet.add(user8);
weakSet.add(user9);

console.log(weakSet.has(user8));
console.log(weakSet.has(user9));























