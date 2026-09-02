// The try block is used to write code that might cause an error.

// If an error occurs inside try, JavaScript stops executing the remaining code in that try block and looks for a catch block to handle the error.

// Basic Syntax
// try {
//     // Code that may cause an error
// }
// catch (error) {
//     // Code to handle the error
// }

// Think of it like:

// TRY → "Try to execute this code."
// CATCH → "If something goes wrong, catch the error."

// example
try{
    let a = 10;
    let b = 3;

    let result = a/b;
    console.log("Result:",result);
}
catch(error){
    console.log("Something went wrong");
}

// login

try{
    let username = "";
    if(username === ""){
        throw new Error("username cannot be empty");
    }
    console.log("Login successful");
}
catch(error){
    console.log("Login Error:", error.message);
}

// age invalidation
try{
    let age =16;
    if(age < 18){
        throw new Error("you must br 18 or older");
    }
    console.log("Registration successful");
}
catch(error){
    console.log("Registration Failed:",error.message);
}

// undefined variable

try{
    console.log(username);
    console.log("this line will not execute")
}
catch(error){
    console.log("Error:",error.mesagage)
}

// multiple error using try:
try{
    let num =10;
    console.log("step 1");
    console.log("unKnownVariable");

    console.log("step 3");

}
catch(error){
    console.log("An error occured");
    console.log("error.message");

}

// try with finally

try {

    console.log("Opening database...");

    throw new Error("Database connection failed");

}

catch (error) {

    console.log("Error:", error.message);

}

finally {

    console.log("Closing database connection...");

}


// Custom Errors

// A custom error is an error message that we create ourselves using throw new Error().

// example age validation
try{
    let age1 = 16;
    if(age1 < 18){
        throw new Error("You must be 18 or old");
    }
    console.log("u can register.");
}
catch(error){
    console.log("Error:", error.message)
}


// Local Storage:
// Local Storage allows a website to store data in the user's browser.

// The important thing is:

// Data stored in localStorage remains even after you close and reopen the browser.

// For example, you can use it for:

// Theme preference
// Username
// Shopping cart
console.log("LOCAL STORAGE")

localStorage.setItem("username","Tasan");
let username = localStorage.getItem("username");
console.log(username);


// remove data

localStorage.setItem("username1","AAA");
console.log(localStorage.getItem("username1"));

localStorage.removeItem("username1");
console.log(localStorage.getItem("username1"))

// clear Everything

localStorage.setItem("name", "kika");
localStorage.setItem("city","warangal");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("city"));

// localStorage.clear();

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("city"));

// local storage Stires string: stores data as string

localStorage.setItem("age",34);

let age = localStorage.getItem("age");

console.log(age);
console.log(typeof age);

// JSON.stringify()

// JSON.stringify() converts a JavaScript value/object into a JSON string.
//object in local storage

console.log("JSON.Stringify")
let stu = {
    name:"Tata",
    age: 45,
    city:"Hnk"
};

let jsonData = JSON.stringify(stu);

console.log(jsonData);
console.log(typeof jsonData);

// JavaScript Object
//        ↓
// JSON.stringify()
//        ↓
// JSON String


//Array

let fruit = ["Apple","Banana","mango"];

let jsonFruit = JSON.stringify(fruit);

console.log(jsonFruit);
console.log(typeof jsonFruit);

// object with multiple propertise

let emp = {
    id: 101,
    name:"Ajmeri",
    department:"IT",
    salary:50000
};

let data = JSON.stringify(emp);
console.log(data);


// JSON.parse():

// JSON.parse() does the opposite of JSON.stringify().

// It converts a JSON string back into a JavaScript object/value.

console.log("JSON.Parse")
let jsonData1 = '{"name":"JIJA","age":35}';

let stu1 = JSON.parse(jsonData);

console.log(stu1);
console.log(stu1.name);
console.log(stu1.age);

// JavaScript Object
//        ↓
// JSON.stringify()
//        ↓
// JSON String
//        ↓
// JSON.parse()
//        ↓
// JavaScript Object


let stu2 = {
    name:"Taj",
    age:45
};

// object-string

let jsonData2 = JSON.stringify(stu2)
console.log(jsonData2);
console.log(typeof jsonData2)

// string-- object

let newStu = JSON.parse(jsonData);

console.log(newStu);
console.log(typeof newStu);

// local , JSON.Parse(),JSON.stringify():
let student = {
    id: 101,
    name: "Sana",
    age: 22,
    course: "JavaScript"
};

// Convert object to JSON string
let studentData = JSON.stringify(student);

// Store in Local Storage
localStorage.setItem("student", studentData);

// Retrieve from Local Storage
let storedData = localStorage.getItem("student");

// Convert JSON string back to object
let studentObject = JSON.parse(storedData);

console.log(studentObject);
console.log("Name:", studentObject.name);
console.log("Course:", studentObject.course);

//shopping cart:

let cart=[
    {
        id:1,
        name:"laptop",
        price:55000
    },
    {
        id:2,
        name:"Headphones",
        price:3000
    }
];

// convert array to JSON string
let cartData =  JSON.stringify(cart);

// save cart
localStorage.setItem("cart",cartData);

// get cart
let storedCart = localStorage.getItem("cart");

// convert back to array
let cartItem = JSON.parse(storedCart);

console.log(cartItem)
console.log("First product:", cartItem[0].name);
console.log("Price:", cartItem[0].price)

// session storage: 

// sessionStorage is similar to localStorage, but there is one major difference.

// Local Storage

// Data remains until we manually remove it.

// Session Storage

// Data remains only for the current browser tab/session.

// localStorage
//      ↓
// Stays after closing browser

// sessionStorage
//      ↓
// Removed when the tab/session ends

// example store UserName

sessionStorage.setItem("username2","Baba");
let username2 = sessionStorage.getItem("username2");

console.log(username2)

// login status

sessionStorage.setItem("isLoggedIn","true");

let status = sessionStorage.getItem("isLoggedIn");

console.log("Login Status:",status);

// remove item

sessionStorage.setItem("AAA","kala");

console.log(sessionStorage.getItem("AAA"));

sessionStorage.removeItem("AAA");
console.log(sessionStorage.getItem("AAA"));


// Theme preference

let theme = "dark";
localStorage.setItem("theme",theme);

let savedTheme = localStorage.getItem("theme");


console.log("Saved Theme:", savedTheme)


// | Feature                  | `localStorage`    | `sessionStorage`       |
// | ------------------------ | ----------------- | ---------------------- |
// | Data stored in browser   | ✅                 | ✅                      |
// | Stores key-value data    | ✅                 | ✅                      |
// | Stores strings           | ✅                 | ✅                      |
// | `setItem()`              | ✅                 | ✅                      |
// | `getItem()`              | ✅                 | ✅                      |
// | `removeItem()`           | ✅                 | ✅                      |
// | `clear()`                | ✅                 | ✅                      |
// | Survives page refresh    | ✅                 | ✅                      |
// | Survives closing the tab | ✅                 | ❌                      |
// | Common use               | Preferences, cart | Temporary session data |




