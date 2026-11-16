// What is JavaScript?
// JavaScript is a programming language used to make websites interactive and dynamic.

// HTML, CSS, and JavaScript are the three main technologies used in web development.


// What is a variable?
// A variable is a container used to store data in a program.


// var in JavaScript
// Definition: var is used to declare a variable whose value can be changed and which can be redeclared in the same scope.


var stuName = "Sam";
console.log(stuName);

stuName = "Tasan";
console.log(stuName);

var stuName = "Sonu";
console.log(stuName);


// let in JavaScript
// Definition: let is used to declare a variable whose value can be changed, but it cannot be redeclared in the same scope.


let quantity = 1;
console.log("Initial Quantity:", quantity);

quantity = 3;
console.log("Updated Quantity:",quantity);

//let quantity = 6;


// const in JavaScript
// Definition: const is used to declare a variable whose binding cannot be reassigned after initialization.

const bankName = "state bank";
console.log("Bank Name:",bankName);


// Feature	              var	           let	               const
// Redeclaration	      Yes	          No (same scope)	No (same scope)
// Reassignment	      Yes	          Yes	                 No
// Scope	            Function	      Block              	Block
// Initialization required	No	            No	                   Yes
// Modern usage	      Avoid generally	Use when changing	Use by default

