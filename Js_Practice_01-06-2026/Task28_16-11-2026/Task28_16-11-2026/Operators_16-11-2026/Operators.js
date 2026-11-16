// What are Operators?
// Definition: Operators are special symbols used to perform operations on variables and values.


// Types of Operators
// 1. Arithmetic Operators: used to perform mathematical calculations

let price = 500;
let quantity = 5;

console.log(price + quantity);
console.log(price - quantity);
console.log(price * quantity);
console.log(price / quantity);
console.log(price % quantity);
console.log(price + quantity);

// example

let shirtPrice = 600;
let d = 78;
let totalAmount = shirtPrice * d;
console.log("Total Bill:₹" + totalAmount);


// 2. Assignment Operators: used to assign or update values in variable

let balance = 10000;
balance += 2000;
console.log(balance);

balance -= 2000;
console.log(balance);

balance *= 2;
console.log(balance);

balance /= 9;
console.log(balance);

// 3. Comparison Operators: compares two values and return either true or false

let marks = 80;

console.log(marks == 80);

console.log(marks === 80);

console.log(marks != 65);

console.log(marks > 35);

console.log(marks < 35);

console.log(marks >= 35);

console.log(marks <= 35);

// example:
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

// 4. Logical Operators: Logical operators are used to combine multiple conditions.

// There are three main logical operators.

// | Operator | Meaning |
// |---|---|
// | && | AND |
// | || | OR |
// | ! | NOT |

let username = "Aira";
let password = "12345678";
console.log(username =="Aira" && password == "12345678");

console.log(username =="Aira" || password == "12355331");

console.log(!(username == "Aira"));


// AND (&&) – Both conditions must be true.

// OR (||) – At least one condition must be true.

// NOT (!) – Reverses the Boolean result.

// 5. Increment and Decrement Operators: these perators increase or decrease a variables value by 1.

let quantity2 = 1;

quantity2++;
console.log(quantity2);

quantity2++;
console.log(quantity2);

quantity2--;
console.log(quantity2)

// 6. String Operators: The + operator can also join two or more strings. This is called string concatenation.

let firstName = "tara";
let lastName = "Minnu";

let fullName = firstName +" "+ lastName;
console.log("welcome " + fullName);

// 7. Ternary Operator:is the shoeter way of writing a simple if...else condition.

let marks1 = 80;

let result = marks1 >= 35? "pass":"Fail";

console.log(result);


// Expressions in JavaScript?
// Definition: An expression is a combination of values, variables, and operators that produces a result.

let e = 50;
let f = 20;

let result1 = e + f;
console.group(result1);

// employee salary

let basicSalary = 200000;
let bonus = 5000;
let deduction = 2000;

let netSalary = basicSalary + bonus - deduction;

console.log("Net Salary:₹" + netSalary);


// What are Conditional Statements?
// Definition: Conditional statements are used to execute different blocks of code depending on whether a condition is true or false.

// 1. if: if statement executes a block of code only when the given condition is true.

let marks3 = 89;
if(marks3 >= 35){
    console.log("Student Passed");
}

// 2. if...else:The if...else statement executes one block when the condition is true and another block when it is false.

let marks4 = 26;

if(marks4 >= 35){
    console.log("Pass");
}else{
    console.log("Fail");
}

// 3. if...else if...else: is used when we need to check multiple conditions

let marks5 = 80;
if(marks5 >= 90){
    console.log("Grade A");
}else if (marks5 >= 75){
    console.log("Grade B");
}else if(marks5 >= 60){
    console.log("Grade c");
}else if(marks5 >= 35){
    console.log("Grade D")
}else{
    console.log("Fail");
}

// 4. Nested if: When we write an if statement inside another if statement, it is called a nested if statement.

let username1 = "Affu";
let password1 = "123456";

if(username1 == "Affu"){
    if (password1 === "123456"){
        console.log("Login Successful");
    }else {
        console.log("Incorrect password");
    }

}else{
    console.log("Incorrect Username");
}

// 5. switch:The switch statement is used when we need to execute different code blocks based on different possible values of one expression.

let choice = 2;

switch (choice) {

    case 1:
        console.log("Check Balance");
        break;

    case 2:
        console.log("Withdraw Money");
        break;

    case 3:
        console.log("Deposit Money");
        break;

    case 4:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}




// Topic	        Important concept	Real-time application
// String	        Stores text          	Employee name
// Number	        Stores numbers	        Salary
// Boolean	        True or false	         Employee attendance
// Array	        Stores multiple values	Employee list
// Object	        Stores key-value pairs	Employee details
// Type Conversion	Changes data type	     Shopping bill
// Arithmetic	    Mathematical calculations	Salary calculation
// Assignment	    Assigns values	            Bank balance
// Comparison	    Compares values	           Exam results
// Logical	        Combines conditions     	Login system
// if...else	    Makes decisions      	Pass or fail
// switch	        Multiple choices	    ATM menu