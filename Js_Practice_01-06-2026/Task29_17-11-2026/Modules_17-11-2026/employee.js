
// employee.js

export let employeeName = "Rahul";

export let department = "HR";

export function employeeDetails() {
    console.log("Employee Name:", employeeName);
    console.log("Department:", department);
}

export function welcomeMessage() {
    console.log("Welcome to our company!");
}




// What is Export?
// Export means making variables, functions, or classes available for use in another JavaScript file.

// There are two main types of exports:
// 1. Named Export.
// 2. Default Export.
// A. Named Export
// Named export allows us to export multiple variables, functions, or classes from one file.