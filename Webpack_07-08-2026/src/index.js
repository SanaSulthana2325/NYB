// // src/index.js

// const name = "Sana";

// function greet(user) {
//     return `Hello ${user}, Welcome to Webpack!`;
// }

// const message = greet(name);

// console.log(message);

// // Display output on webpage
// document.body.innerHTML = `
//     <h1>${message}</h1>
// `;

// import { add, multiply } from "./math.js";
// import greet from "./message.js";


// const sum = add(10, 20);

// const product = multiply(5, 4);

// const message = greet();


// console.log(sum);
// console.log(product);
// console.log(message);


// document.body.innerHTML = `
//     <h1>${message}</h1>
//     <p>Addition: ${sum}</p>
//     <p>Multiplication: ${product}</p>
// `;


// import{user} from "./user.js";

// import {product} from "./product.js"

// user();

// product();

// import "./style.css";


// console.log("CSS Loaded");

// import logo from "./logo.png";

// console.log("logo imported");


// index.js //Student example


import { student } from "./student.js";
import { marks } from "./marks.js";
import { calculateResult } from "./result.js";

const result = calculateResult(marks);

console.log("Student Name:", student.name);
console.log("Roll No:", student.rollNo);
console.log("Course:", student.course);

console.log("Maths:", marks.maths);
console.log("Science:", marks.science);
console.log("English:", marks.english);

console.log("Total:", result.total);
console.log("Average:", result.average);
console.log("Status:", result.status);