// call(), apply(), and bind() are JavaScript methods used to control the value of the this keyword.

// In simple words, they allow us to use a function with a particular object.

// call
let emp1={
    name:"Tasan",
    department:"HR"
};
let emp2 = {
    name:"Sara",
    department:"IT"
};

function empDetails(salary,city){
    console.log("Name:", this.name);
    console.log("Department:", this.department);
    console.log("Salary:", salary);
    console.log("City:", city);
}

empDetails.call(emp1,28000,"HYD");
empDetails.call(emp2,31000,"Bangalore");

// apply: apply() works similarly to call(), but arguments are passed as an array.

let emp = {
    name:"Affu",
    department:"HR"
};

function employeeDetails(salary, city){
    console.log("Name:", this.name);
    console.log("Department:",this.department);
    console.log("Salary:", salary);
    console.log("City:",city);
}

employeeDetails.apply(emp,[25000,"HYD"]);


// bind: bind() does not execute the function immediately.

// It creates a new function with a fixed this value.

let emp3 = {
    name:"jira",
    department:"Finance"
};

function employeeDetails1(salary, city){
    console.log("Name:", this.name);
    console.log("Department:", this.department);
    console.log("Salary:", salary);
    console.log("City:",city);
}
let result = employeeDetails1.bind(emp3,35000,"Nagpur");

result();



// Feature	       Call	         Apply	        Bind
// Execution	 Immediately	Immediately 	Later
// Arguments	Individually	Array	        Individually
// Returns	   Function result	Function result	New function
// Main purpose	Invoke with this	Invoke with this	Create reusable function


// What is Destructuring?
// Destructuring is a JavaScript feature that allows us to extract values from arrays or properties from objects and store them in separate variables.

// Array Destructuring
// with out

let emp4 = ["heera",26,"Finance"];

let name = emp4[0];
let age = emp4[1];
let dept = emp4[2];

console.log(name);
console.log(age);
console.log(dept);


// with destructuring

let emp5 = ["ayesha",27,"HR"];

let [name1,age1,department] = emp5;

console.log(name1);
console.log(age1);
console.log(department);

// Object destructuring

let employee = {
    name2: "Priya",
    age2: 24,
    department2: "HR",
    salary: 25000
};

let { name2, age2, department2, salary } = employee;

console.log("Name:", name2);
console.log("Age:", age2);
console.log("Department:", department2);
console.log("Salary:", salary);


// Array Destructuring	      Object Destructuring
// Uses square brackets []	   Uses curly braces {}
// Based on position	        Based on property name
// Order matters	           Property order does not matter


// Spread Operator

// The spread operator expands elements of an array or properties of an object.

// In simple words, it spreads the values.

// spread with array
let emp6 = ["AAA","BBB","CCC","DDD"];

let newEmp = [...emp6,"Sneha"];
console.log("Old Employees:",emp6);
console.log("New Employees:", newEmp)


// combining two arrays

let frontend = [12,34,56,78,90,65];
let backend = ["sara","lala","lulu","lusi"];

let fullStack = [...frontend,...backend];

console.log(fullStack);


// Rest Operator

// The rest operator collects multiple values into a single array or object.

// In simple words, it gathers the remaining values.

// with function
function empName1(...names){
    console.log(names);
}
empName1("Adad","HIja","KAfa","Jiru");

// with function parameter


function calculateTotal(...salary) {

    let total = 0;

    for (let amount of salary) {

        total = total + amount;

    }

    console.log("Total Salary:", total);

}

calculateTotal(20000, 25000, 30000, 35000);


// array destructuring

let employees = ["Rahul", "Priya", "Arjun", "Sneha"];

let [first, second, ...remaining] = employees;

console.log(first);
console.log(second);
console.log(remaining);



// Template Literals
// Template literals allow us to create strings using backticks (`).

// They allow us to insert variables and expressions directly inside strings using ${}.

let a = "sana";
 let b = "HR";

 let message = `Welcome ${a} to the specific role  of ${b}`;

 console.log(message);

// calculation
let price = 1000;

let quantity = 5;

console.log(`Total Amount: ${price * quantity}`);

// condition

let marks = 85;

let result1 = `Result: ${marks >= 40 ? "Pass" : "Fail"}`;

console.log(result1);


// Default Parameters
// Default parameters allow us to assign default values to function parameters.

// If the user does not pass an argument, JavaScript uses the default value.

function welcome(name5,company2 = "Infosys"){
    console.log(`welcome ${name5} to ${company2}`);
}

welcome("Mira");


// with calculations

function calculateSalary(basicSalary, bonus = 5000) {

    let totalSalary = basicSalary + bonus;

    console.log("Total Salary:", totalSalary);

}

calculateSalary(25000);

calculateSalary(30000, 10000);