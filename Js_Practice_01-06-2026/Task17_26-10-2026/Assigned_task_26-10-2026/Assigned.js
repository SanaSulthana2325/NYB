// Practice declaring variables using var, let, and const.

// Variables store data such as employee names, salaries, product prices, and login status.
// - var: Can be redeclared and reassigned.
// - let: Can be reassigned but not redeclared in the same scope.
// - const: Cannot be reassigned.

var empName = "Aru";
empName = "sam";

let salary = 25000;
salary = 45000;

const company = "Tasan Company";

console.log("Employee:",empName);
console.log("Salary:",salary);
console.log("Company:",company);

// Identify differences between variable scopes.


// Global scope: Accessible throughout the relevant global scope.

// Function scope: A var variable declared inside a function is accessible within that function.

// Block scope: A let or const variable declared inside { } is accessible only within that block.


const com = "Ta company";

function calculateBonus(){
    var bonus = 5000; // functional scope

    if(true){
        let empName = "Nashu";    // blocked scope

        console.log("Employee:",empName);
        console.log("Bonus:",bonus);
        console.log("Company:",com);
    }
}

calculateBonus();

// Practice all JavaScript data types.

// JavaScript has seven primitive types: string, number, boolean, undefined, null, bigint, and symbol. Objects and arrays are reference types.


const name = "Anu";                 // String
const age = 24;                     // Number
const isEmployee = true;            // Boolean
let department;                     // Undefined
const manager = null;               // Null
const employeeCount = 9007199254740993n; // BigInt
const employeeId = Symbol("id");    // Symbol

const employee = { name: "Anu" };   // Object
const skills = ["HTML", "CSS"];     // Array

console.log(typeof name);
console.log(typeof age);
console.log(typeof isEmployee);
console.log(typeof department);
console.log(typeof manager);
console.log(typeof employeeCount);
console.log(typeof employeeId);
console.log(typeof employee);
console.log(Array.isArray(skills));

// Perform type conversion and type coercion exercises.

//Type conversion means explicitly changing a value's type. 

//Type coercion means JavaScript automatically converts a value's type during an operation.

const price = "500";

const deliveryCharge = 70;

console.log(Number(price) + deliveryCharge);

console.log(price + deliveryCharge);   // because js performs string concatenation

console.log(Boolean(1));

console.log(String(100));

// Practice arithmetic, comparison, and logical operators.


const price1 = 500;
const quantity = 3;

const total = price1 * quantity;
const addition = price1 + quantity;
const subtraction = price1 - quantity;
const division = price1 / quantity;
const remainder = price1 % quantity;

const minimumOrder = 1000;
const isLoggedIn = true;

console.log("Total:", total);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Division:", division);
console.log("Remainder:", remainder);

console.log("Eligible for discount:", total >= minimumOrder);
console.log("Eligible for discount:", total > minimumOrder);
console.log("Eligible for discount:", total <= minimumOrder);
console.log("Eligible for discount:", total < minimumOrder);
console.log("Eligible for discount:", total === minimumOrder);

console.log("Can place order:", isLoggedIn && total >= minimumOrder);
console.log("Can place order:", isLoggedIn || total >= minimumOrder);


console.log("Remaining for minimum:", minimumOrder - total);


// Implement conditional statements.

// Conditional statements allow JavaScript to make decisions.

const score = 92;
if(score >= 90){
    console.log("Excellent Performance");
}else if(score >= 75){
    console.log("Good Performance");
} else if(score >= 50){
    console.log("Average Performance");
}else{
    console.log("Needs Improvement")
}

// Create programs using switch.

// A switch statement is useful when one variable can have several specific values.

const status = "delivered";

switch(status){
    case"pending":
    console.log("Orderis being Prepared");
    break;

    case "shipped":
    console.log("Order is on the way");
    break;

    case"delivered":
    console.log("Order delivered to the addressed successfully");
    break;

    case "cancelled":
        console.log("Order was Cancelled");
        break;
        default:
            console.log("Invalid order Status")
}

// Practice different types of loops.

// Loops repeat code to process lists, display records, or perform calculations.

// for Loop:

for (let id=101; id <= 106; id++){
    console.log("Employee ID:", id)
}

// while loop

let task = 1;

while(task <=3){
    console.log("Task:",task);
    task++;
}

//
let count = 5;
while(count >= 1){
    console.log(count);

    count--;
}

console.log("Happy New Year!");

// do...while loop

let start = 1;

do{
    console.log("Display login menu");
    start++;
} while(start <=3)


//for-of loop : Use for...of to get the values from an iterable, such as an array or string.

const fruits = ["Apple","mango","orange","Grapes"];

for(const fruit of fruits){
    console.log(fruits);
}

//

const word = "Tasleem";

for(const letter of word){
    console.log(letter);
}

// for-in loop:  Use for...in mainly to loop through the keys or property names of an object.

const emp1 = {
    name:"Nashu",
    age:26,
    role:"Developer"
};

for(const key in emp1){
    console.log(key,":",emp1[key]);
}

// 
const colors = ["red","yellow","Pink","Green"];

for(const index in colors){
    console.log(index,colors[index]);
}

//

for(let i=1;i<=4; i++){
    let pattern="";

    for(let j=1;j<= i; j++){
        pattern +="*";
    }
    console.log(pattern)
}

// Use break and continue.

// break

for(let i=1;i<=7;i++){
    if(i ===6){
        break;
    }
    console.log(i)
}

// continue statement:


const products = ["Laptop", "Unavailable", "Mouse"];

for (const product of products) {
  if (product === "Unavailable") {
    continue;
  }

  console.log("Available product:", product);
}

//
for(let i=1;i<=10;i++){
    if(i===5){
        continue;
    }

    console.log(i)
}

//Array loop

const prices = [500,300,400,700,400,670,800,380];
let total1 = 0;

for(const price of prices){
    total1 +=price;
}
console.log("Total price:",total);


// Practice optional chaining and nullish coalescing.

// Optional chaining (?.)
// Optional chaining safely accesses nested properties when an intermediate value is null or undefined.

const student={
    name:"Mira",
    department:{
        name:"MBA"
    }
};

const student2={
    name:"Minnu"
};

console.log(student.department?.name);

console.log(student2.department?.name)

// Nullish coalescing (??)
// The nullish coalescing operator provides a default value only when the left side is null or undefined.

const stu1 = null;
const stu2 = "";
const stu3 = "Sara";
const stu4 = 0;


console.log(stu1 ?? "Guest");
console.log(stu2 ?? "Guest");
console.log(stu3 ?? "Guest");
console.log(stu4 ?? "900");




// Solve basic logical programming problems.

//Check whether a number is even or odd

const number = 259098;

if(number % 2 ===0){
    console.log(number + " is Even");
}else{
    console.log(number +" is Odd");
}

// Find the largest of three numbers

const a = 34;
const b = 45;
const c = 89;

if(a >=b && a >=c){
    console.log("Largest:",a);
}else if(b>=a && b >=c){
    console.log("Largest:",b);
}else{
    console.log("Largest:",c)
}

// Calculate the total salary of employees

const salaries = [25000,30000,35000,40000];

let totalSalary = 0;

for(const salary of salaries){
    totalSalary +=salary;
}

console.log("Total Salary:",totalSalary)