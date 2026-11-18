
console.log("===== MAP METHOD =====");

let salaries = [20000, 25000, 30000, 35000];

let updatedSalary = salaries.map(salary => salary + 5000);

console.log(updatedSalary);


console.log("===== FILTER METHOD =====");

let eligibleEmployees = salaries.filter(salary => salary >= 25000);

console.log(eligibleEmployees);


console.log("===== REDUCE METHOD =====");

let totalSalary = salaries.reduce((total, salary) => total + salary, 0);

console.log("Total Salary:", totalSalary);


console.log("===== FIND METHOD =====");

let employeeNames = ["Rahul", "Priya", "Arjun", "Sneha"];

let employee = employeeNames.find(name => name === "Priya");

console.log(employee);


console.log("===== SOME METHOD =====");

let marks = [80, 90, 25, 75];

console.log(marks.some(mark => mark < 35));


console.log("===== EVERY METHOD =====");

console.log(marks.every(mark => mark >= 35));


console.log("===== MAP DATA STRUCTURE =====");

let employees = new Map();

employees.set(101, "Rahul");
employees.set(102, "Priya");

console.log(employees.get(101));
console.log(employees.size);



// Method	Purpose	                       Returns
// map()	Transforms every element	New array
// filter()	Selects matching elements	New array
// reduce()	Combines elements	         Single accumulated value
// find()	Finds first matching element	Element or undefined
// some()	Checks whether at least one matches	Boolean
// every()	Checks whether all match	Boolean


console.log("===== SET DATA STRUCTURE =====");

let skills = new Set();

skills.add("HTML");
skills.add("CSS");
skills.add("JavaScript");
skills.add("HTML");

console.log(skills);

//
let numbers = [10, 20, 30, 20, 40, 10, 50];

let uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);


console.log("===== WEAKMAP =====");

let employee1 = {
    name: "Rahul"
};

let privateData = new WeakMap();

privateData.set(employee1, {
    salary: 30000
});

console.log(privateData.get(employee1));


console.log("===== WEAKSET =====");

let trainedEmployees = new WeakSet();

trainedEmployees.add(employee1);

console.log(trainedEmployees.has(employee1));


// Method	Purpose
// set()	Adds or updates a key-value pair
// get()	Gets a value using a key
// has()	Checks whether a key exists
// delete()	Deletes a key-value pair
// clear()	Removes all entries
// size	Returns the number of entries


// Feature	             Map	           Set	                WeakMap	                    WeakSet
// Stores	         Key-value pairs	Unique values	       Key-value pairs	               Unique objects
// Keys/values	       Any types	      Any types	   Object or non-registered symbol keys 	Objects only
// Iterable  	         Yes	            Yes	                   No	                             No
// Size property        Yes	                 Yes	              No	                              No
// Garbage collection	Strong references	Strong references	Weak keys	                     Weak values
// Duplicate keys/values Keys are unique	Values are unique	Keys are unique	                Object references are unique