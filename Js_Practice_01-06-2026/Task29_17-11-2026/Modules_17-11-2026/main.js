
// main.js

import {
    employeeName,
    department,
    employeeDetails,
    welcomeMessage
} from "./employee.js";

console.log(employeeName);
console.log(department);

employeeDetails();

welcomeMessage();



// main.js

import calculateSalary from "./salary.js";

let result = calculateSalary(25000, 5000);

console.log("Total Salary:", result);

