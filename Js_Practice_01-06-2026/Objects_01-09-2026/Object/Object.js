// What is Spread Operator?

// The spread operator ... is used to spread/copy the elements or properties of an existing array or object into another array/object.

// example

let emp = {
    name:"tasan",
    age:34,
    department:"IT"
};

let empCopy = {...emp};

console.log(empCopy);

// updating new properties

let emp1 = {
    name:"riya",
    department:"IT"
};

let updatedEmp1 = {...emp1, salary:50000};

console.log(updatedEmp1);

//combining two objects

let personalDetails = {
    name:"viki",
    age:77
};
let jobDetails = {
    department : "Police",
    salary:65000
};

let emp2 = {
    ...personalDetails,
    ...jobDetails
};

console.log(emp2)


// Rest Operator:
// collects remaining values/Properties

// example:
let ed = {
    name:"huhu",
    age:34,
    salary: 50000
};
let {name,...otherDetails} = ed;

console.log(name);
console.log(otherDetails);

// User Profile

let user = {
    username: "sana123",
    email: "sana@gmail.com",
    age: 22,
    city: "Warangal"
};

let {
    username,
    ...profile
} = user;

console.log("Username:", username);
console.log("Profile:", profile);

// with function
function calculateTotal(...price){
    console.log(price);
}
calculateTotal(100,200,300,400,500)


// Object.keys()

// Object.keys() returns an array containing all the property names (keys) of an object.

// Syntax
// Object.keys(object);

// example

console.log("Object.keys");

let emp4 ={
    name:"titi",
    age:56,
    salary:80000
};

console.log(Object.keys(emp4))

//count propertries

let product ={
    name: "laptop",
    price:55000,
    brand:"Dell",
    stock:10
};

console.log(Object.keys(product).length);

//object.values():
// Object.values() returns an array containing all the values of an object.

// Syntax
// Object.values(object);

console.log("Object.Values")
let em = {
    name:"tasan",
    age:34,
    salary:55000,
    place:"hyd"
};
console.log(Object.values(em));

// calculate total marks

let mark = {
    maths:56,
    english:90,
    hindi:99,
    science:88
};
let values = Object.values(mark);
let total =0;
for (let mark of values){
    total +=mark
}

console.log("Total:", total)


// check whether value exist

let employee = {
    name: "Sana",
    department: "IT",
    role: "Developer"
};

console.log(Object.values(employee).includes("IT"));
console.log(Object.values(employee).includes("HR"));


// Object.Entries():

// Object.entries() returns an array containing key-value pairs.

// Syntax
// Object.entries(object);

const syu ={
    name:"sana",
    age:45,
    course:"js"
};

console.log(Object.entries(syu))

// loops through object

console.log("object.entries")
let emp11 = {
    name: "sonu",
    age : 44,
    department: "IT",
};
let entries = Object.entries(emp11);

for (let[key,value] of entries){
    console.log(key, ":",value);
}


// product details

let pro = {
    name:"laptop",
    price:60000,
    brand:"Apple Laptop"
};

for(let[key,value] of Object.entries(pro)){
    console.log(`${key}: ${value}`);
}


// Optional Chaining ?.

// Optional chaining is used when you want to safely access a property that may not exist.

console.log("Optional Chaining");
// example:
let emp7 ={
    name:"kuku",

};
console.log(employee.address?.city);

// nested Object


let employee1 = {
    name: "Sana",

    address: {
        city: "Warangal"
    }
};

console.log(employee1.address?.city);
console.log(employee1.address?.pincode);
console.log(employee1?.name)

// with Array access

let cc = {
    color:["pink","green","yellow"]

};
console.log(cc.color?.[0]);
console.log(cc.color?.[2]);

// Nullish Coalescing ??

// The nullish coalescing operator:   ??

// is used to provide a default value when the left side is null or undefined.

// Syntax
// value ?? defaultValue

// example
let username1;

console.log(username1 ?? "Guest");

// null
let user1 = null;
console.log(user1 ?? "dog");

// actual value

let user2 = "tasan";
console.log(user2 ?? "cat");

// example

let age = 0;
console.log(age || 18);
console.log(age ?? 18)


// | Topic                      | What it does                         | Example               |
// | -------------------------- | ------------------------------------ | --------------------- |
// | **Spread `...`**           | Copies/spreads properties            | `{...employee}`       |
// | **Rest `...`**             | Collects remaining properties        | `{name, ...details}`  |
// | **`Object.keys()`**        | Gets keys                            | `["name", "age"]`     |
// | **`Object.values()`**      | Gets values                          | `["Sana", 22]`        |
// | **`Object.entries()`**     | Gets key + value                     | `[["name","Sana"]]`   |
// | **Optional Chaining `?.`** | Safely accesses missing data         | `user?.address?.city` |
// | **Nullish `??`**           | Gives default for `null`/`undefined` | `name ?? "Guest"`     |
