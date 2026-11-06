// Error Handling Best Practices
// Meaning: Error handling means identifying and managing errors in JavaScript so that your application does not crash unexpectedly.


// try and catch

try{
    let result = 10/0;
    console.log(result);

    let name = undefined;
    console.log(name.toUpperCase());
}catch(error){
    console.log("something went wrong!");
    console.log(error.message);
}


// try catch and finally

try{
    console.log("Login process started");

    let age = 15;

    if(age < 18){
        throw new Error("you are not eligible to register");
    }
    console.log("registration successful");
}catch(error){
    console.log("Error:",error.message);
}finally{
    console.log("registration process completed");
}


//Custom error using throw

function withdrawMoney(balance, amount) {

    if (amount <= 0) {
        throw new Error("Enter a valid amount");
    }

    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    return balance - amount;
}

try {
    let remainingBalance = withdrawMoney(5000, 6000);

    console.log("Remaining balance:", remainingBalance);

} catch (error) {
    console.log("Transaction failed:", error.message);
}


// Code Organization and Reusability
// Meaning: Code organization means arranging JavaScript code into separate functions, files, and modules so that it is easy to understand, maintain, and update.

// Code reusability means writing code once and using it multiple times instead of repeating the same code.


function addNum(a,b){
    return a + b;
}

console.log(addNum(10,20));
console.log(addNum(30,70));
console.log(addNum(50,90));


// organizing code using function

// Student details
function displayStudent(name, marks) {
    console.log("Student Name:", name);
    console.log("Marks:", marks);
}

// Calculate total
function calculateTotal(marks) {
    return marks.reduce((total, mark) => total + mark, 0);
}

// Calculate average
function calculateAverage(marks) {
    return calculateTotal(marks) / marks.length;
}

// Check result
function checkResult(average) {
    return average >= 35 ? "Pass" : "Fail";
}

// Main program
let studentName = "Sana";
let marks = [80, 75, 90, 85, 70];

displayStudent(studentName, marks);

let total = calculateTotal(marks);
let average = calculateAverage(marks);
let result = checkResult(average);

console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Result:", result);