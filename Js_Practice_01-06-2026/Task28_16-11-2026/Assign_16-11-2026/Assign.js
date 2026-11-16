
// ==================================================
// TOPIC 1: VARIABLE DECLARATIONS AND DATA TYPES
// ==================================================

console.log("\n===== TOPIC 1: VARIABLES AND DATA TYPES =====");

// 1. var
var studentName = "Sana";
console.log("Student Name:", studentName);

// 2. let
let studentAge = 22;
console.log("Student Age:", studentAge);

// Updating let variable
studentAge = 23;
console.log("Updated Age:", studentAge);

// 3. const
const collegeName = "ABC College";
console.log("College:", collegeName);

// Different data types

let name = "Rahul";          // String
let age = 21;                // Number
let isStudent = true;        // Boolean
let marks = null;            // Null
let address;                 // Undefined
let skills = ["HTML", "CSS", "JS"]; // Array

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Marks:", marks);
console.log("Address:", address);
console.log("Skills:", skills);

console.log("Type of Name:", typeof name);
console.log("Type of Age:", typeof age);
console.log("Type of Boolean:", typeof isStudent);
console.log("Type of Skills:", typeof skills);


// ==================================================
// TOPIC 2: CONDITIONAL STATEMENTS
// ==================================================

console.log("\n===== TOPIC 2: CONDITIONAL STATEMENTS =====");

// Real-time example: Student examination result

let marksObtained = 85;

if (marksObtained >= 90) {
    console.log("Grade: A+");
}
else if (marksObtained >= 75) {
    console.log("Grade: A");
}
else if (marksObtained >= 60) {
    console.log("Grade: B");
}
else if (marksObtained >= 35) {
    console.log("Grade: C");
}
else {
    console.log("Result: Fail");
}



// 2. Switch statement
// Real-time example: Selecting a day

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid Day");
}




// 3. Ternary operator

let ageForVoting = 20;

let votingResult = ageForVoting >= 18
    ? "Eligible to Vote"
    : "Not Eligible to Vote";

console.log(votingResult);




// ==================================================
// TOPIC 3: DIFFERENT TYPES OF LOOPS
// ==================================================

console.log("\n===== TOPIC 3: LOOPS =====");

// 1. FOR LOOP
// Real-time example: Displaying employee numbers

for (let i = 1; i <= 5; i++) {
    console.log("Employee Number:", i);
}




// 2. WHILE LOOP
// Real-time example: Printing shopping item numbers

let item = 1;

while (item <= 3) {
    console.log("Shopping Item:", item);
    item++;
}




// 3. DO-WHILE LOOP
// Real-time example: Login attempts

let attempts = 1;

do {
    console.log("Login Attempt:", attempts);
    attempts++;
}
while (attempts <= 3);




// ==================================================
// TOPIC 4: FUNCTIONS - DIFFERENT APPROACHES
// ==================================================

console.log("\n===== TOPIC 4: FUNCTIONS =====");

// 1. Function Declaration
// Real-time example: Calculating employee salary

function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}

let salary = calculateSalary(15000, 2000);

console.log("Total Salary:", salary);




// 2. Function Expression

const calculateTotal = function(price, quantity) {
    return price * quantity;
};

let bill = calculateTotal(500, 3);

console.log("Shopping Bill:", bill);




// 3. Function with no parameters

function welcomeMessage() {
    console.log("Welcome to JavaScript Learning!");
}

welcomeMessage();




// 4. Function with parameters

function greetUser(userName) {
    console.log("Hello", userName);
}

greetUser("Sana");




// ==================================================
// TOPIC 5: ARROW FUNCTIONS AND CALLBACK FUNCTIONS
// ==================================================

console.log("\n===== TOPIC 5: ARROW AND CALLBACK FUNCTIONS =====");

// 1. Arrow Function

const addition = (a, b) => {
    return a + b;
};

console.log("Addition:", addition(10, 20));




// 2. Short Arrow Function

const multiply = (a, b) => a * b;

console.log("Multiplication:", multiply(5, 4));




// 3. Callback Function
// A callback is a function passed as an argument
// to another function.

function orderFood(foodName, callback) {
    console.log("Your order:", foodName);

    callback();
}

function orderConfirmation() {
    console.log("Your food order is confirmed!");
}

orderFood("Pizza", orderConfirmation);




// 4. Callback using setTimeout

setTimeout(() => {
    console.log("Your delivery is on the way!");
}, 2000);



// ==================================================
// TOPIC 6: ARRAYS AND ARRAY OPERATIONS
// ==================================================

console.log("\n===== TOPIC 6: ARRAYS =====");

// Real-time example: Shopping cart

let shoppingCart = ["Shirt", "Shoes", "Watch"];

console.log("Original Cart:", shoppingCart);

// 1. push() - Add item at the end

shoppingCart.push("Bag");

console.log("After Push:", shoppingCart);




// 2. pop() - Remove last item

shoppingCart.pop();

console.log("After Pop:", shoppingCart);




// 3. unshift() - Add item at beginning

shoppingCart.unshift("Mobile");

console.log("After Unshift:", shoppingCart);




// 4. shift() - Remove first item

shoppingCart.shift();

console.log("After Shift:", shoppingCart);




// 5. includes() - Check item availability

console.log("Is Shoes Available?", shoppingCart.includes("Shoes"));



// 6. indexOf() - Find item position

console.log("Watch Position:", shoppingCart.indexOf("Watch"));




// 7. map() - Create a new array

let prices = [100, 200, 300];

let updatedPrices = prices.map(price => price + 50);

console.log("Updated Prices:", updatedPrices);




// 8. filter() - Get selected values

let studentMarks = [35, 45, 80, 90, 25];

let passedStudents = studentMarks.filter(mark => mark >= 35);

console.log("Passed Marks:", passedStudents);




// 9. reduce() - Calculate total

let productPrices = [100, 200, 300];

let totalAmount = productPrices.reduce(
    (total, price) => total + price, 0
);

console.log("Total Amount:", totalAmount);



// ==================================================
// TOPIC 7: OBJECTS AND OBJECT MANIPULATION
// ==================================================

console.log("\n===== TOPIC 7: OBJECTS =====");

// Real-time example: Employee information

let employee = {
    name: "Sana",
    age: 22,
    role: "HR Intern",
    salary: 8000,
    company: "ABC Company"
};

// Access object properties

console.log("Employee Name:", employee.name);
console.log("Employee Role:", employee.role);
console.log("Employee Salary:", employee.salary);




// Add new property

employee.department = "Human Resources";

console.log("Department:", employee.department);




// Update existing property

employee.salary = 15000;

console.log("Updated Salary:", employee.salary);




// Delete property

delete employee.age;

console.log("Updated Employee:", employee);


// Object.keys()

console.log("Object Keys:", Object.keys(employee));



// Object.values()

console.log("Object Values:", Object.values(employee));


// Object.entries()

console.log("Object Entries:", Object.entries(employee));


// ==================================================
// TOPIC 8: STRING METHODS
// ==================================================

console.log("\n===== TOPIC 8: STRING METHODS =====");

// Real-time example: User registration

let fullName = "  javascript beginner  ";

// 1. length

console.log("String Length:", fullName.length);




// 2. toUpperCase()

console.log("Uppercase:", fullName.toUpperCase());




// 3. toLowerCase()

console.log("Lowercase:", fullName.toLowerCase());




// 4. trim() - Remove extra spaces

console.log("Trimmed Name:", fullName.trim());




// 5. includes()

console.log("Contains JavaScript:", fullName.includes("javascript"));




// 6. replace()

let message = "Hello Student";

console.log("Updated Message:", message.replace("Student", "Sana"));




// 7. slice()

let language = "JavaScript";

console.log("Slice:", language.slice(0, 4));




// 8. split()

let skillsList = "HTML,CSS,JavaScript";

console.log("Skills Array:", skillsList.split(","));




// ==================================================
// TOPIC 9: NUMBER METHODS
// ==================================================

console.log("\n===== TOPIC 9: NUMBER METHODS =====");

// Real-time example: Shopping bill calculation

let productPrice = 199.5678;

// 1. toFixed() - Fix decimal places

console.log("Fixed Price:", productPrice.toFixed(2));




// 2. Math.round() - Round number

console.log("Rounded Price:", Math.round(productPrice));




// 3. Math.floor() - Round down

console.log("Floor Value:", Math.floor(productPrice));


// 4. Math.ceil() - Round up

console.log("Ceiling Value:", Math.ceil(productPrice));




// 5. Math.max() - Find highest number

console.log("Highest Price:", Math.max(100, 500, 300));




// 6. Math.min() - Find lowest number

console.log("Lowest Price:", Math.min(100, 500, 300));




// 7. Number() - Convert string into number

let priceString = "500";

console.log("Converted Number:", Number(priceString));




// 8. parseInt() - Convert into integer

console.log("Integer:", parseInt("250.75"));




// 9. parseFloat() - Convert into decimal

console.log("Decimal:", parseFloat("250.75"));

