// map()
// Meaning: The map() method is used to create a new array by performing an operation on every element of the existing array.
// - It processes every element.
// - It returns a new array.
// - It does not modify the original array.


let salaries = [20000,30000,40000,50000];

let increasedSalaries = salaries.map(salary =>{
    return salary + salary * 0.10;
});

console.log(increasedSalaries);
console.log(salaries);


// filter()
// Meaning: The filter() method is used to create a new array containing only the elements that satisfy a particular condition.
// - It checks every element.
// - It returns only matching elements.
// - It does not modify the original array.


let emp = [
    {name:"sana",salary:25000},
    {name:"Ayesha",salary:45000},
    {name:"Affu",salary:55000},
    {name:"Sara",salary:15000},
];

let result = emp.filter(emp =>{
    return emp.salary > 30000;
});

console.log(result);

// reduce()
// Meaning: The reduce() method is used to reduce all array elements into one single value.


let sal = [20000,30000,40000,50000];

let totalSalary = sal.reduce((total,sal)=>{
    return total + sal;
},0);

console.log(totalSalary)


// find()
// Meaning: The find() method returns the first element that satisfies the given condition.
// - It checks elements one by one.
// - It stops after finding the first matching element.
// - If no element matches, it returns undefined.

let emp1 =[
    {id:101, name:"AAA"},
    {id:102, name:"BBB"},
    {id:103, name:"CCC"},
    {id:104, name:"DDD"},
    {id:105, name:"EEE"},
]

let emp2 = emp1.find(emp => emp.id === 103);

console.log(emp2)


// some()
// Meaning: The some() method checks whether at least one element in an array satisfies a condition.

// It returns only a Boolean value:
// - true – At least one element matches.
// - false – No elements match.


let sal1 = [20000,30000,40000,50000];

let result1 = sal1.some(salary => salary > 50000);

console.log(result1)

let marks = [20,30,40,50,60];

let result2 = marks.some(mark => marks > 90);

console.log(result2);


// every()
// Meaning: The every() method checks whether all elements in an array satisfy a given condition.

// It returns a Boolean value:
// - true – All elements satisfy the condition.
// - false – At least one element does not satisfy the condition.

let marks1 = [75,80,65,90,99];

let result3 = marks1.every(mark => mark >= 35);

console.log(result3);


// flat()
// Meaning: The flat() method is used to remove nested array levels and create a single-level array.

let studentGroups = [
    ["sana", "Priya"],
    ["AAA","NNN"],
    ["KKK","ttt"]
];

let stu = studentGroups.flat();

console.log(stu);


//

let num = [1,2,3,4,[5,6,[7,8,[9]]]];

console.log(num.flat());
console.log(num.flat(2));

console.log(num.flat(Infinity))



// flatMap()
// Meaning: The flatMap() method combines two operations:
// 1. map() – Transforms every element.
// 2. flat() – Flattens the resulting array by one level.
// In simple words, flatMap() maps the elements and flattens the result into a single-level array.

let emp3 =[
    {name:"tata",skills:["adad","ijij"]},
    {name:"haha",skills:["yoyo","lulu"]},
    {name:"kaka",skills:["lusi","kasi"]},
];

let allSkills = emp3.flatMap(emp =>{
    return emp.skills;
});

console.log(allSkills);

//
let num1 = [1,2,3,4,5];

let result4 = num1.flatMap(num => [num, num * 2])

console.log(result4)



// Method	           Purpose	                    Returns
// map()	     Transforms every element	       New array
// filter()	Selects matching elements	        New array
// reduce()	Combines elements into one value	Single value
// find()	    Finds the first matching element	Element or undefined
// some()	    Checks whether at least one matches	Boolean
// every()	    Checks whether all elements match	Boolean
// flat()	     Removes nested array levels	     New array
// flatMap()	Maps and flattens one level	          New array



// What is Functional Programming?
// Functional Programming (FP) is a programming style in which we write programs using functions to perform operations and solve problems.

// In simple words, instead of writing all the logic in one place, we divide the program into small, reusable functions.

let emp5 = {
    name:"tasan",
    salary:45000
};

function calculateBonus(salary){
    return salary * 0.10;
}

function calculateTotalSalary(salary,bonus){
    return salary + bonus;
} 

function displayEmployee(name,totalSalary){
    console.log("Employee Name:",name);
    console.log("Total Salary:",totalSalary);
}

let bonus = calculateBonus(emp5.salary);

let totalSalary1 = calculateTotalSalary(emp5.salary,bonus);

displayEmployee(emp5.name,totalSalary1);


// What is a Pure Function?
// A Pure Function is a function that:
// 1. Always returns the same output for the same input.
// 2. Does not modify any external variable or data.
// 3. Does not produce side effects.

function calculateBonus(salary){
    return salary * 2;
}

console.log(calculateBonus(30000));
console.log(calculateBonus(30000));
console.log(calculateBonus(30000));

//
function calculateSalary(basicSalary,bonus){
    return basicSalary + bonus;
}

let result11 = calculateSalary(30000,5000);
let result12 = calculateSalary(40000,5000);

console.log(result11);
console.log(result12);


// What is an Impure Function?
// An Impure Function is a function that either:
// 1. Modifies or depends on external data, or
// 2. Produces side effects outside returning a value.


let bonus1 = 5000;

function calculateSalary1(salary){
    return salary + bonus;
}

console.log(calculateSalary1(30000));
console.log(calculateSalary1(30000));


bonus1 = 10000;
console.log(calculateSalary1(30000))


// array

let emp6 = ["sam","tasan","taori","loki"];

function addEmployee(name){
    emp6.push(name);

    return emp6;
}

console.log(addEmployee("lusa"));
console.log(addEmployee("arhan"));



// Pure Function	                            Impure Function
// Same input gives the same output	       Output may depend on external changes
// Does not modify external data	            May modify external data
// No side effects	                           May produce side effects
// Easy to test	                           Can be harder to test
// More predictable	                        Less predictable
// Depends only on its inputs	                 May depend on external variables



// What is Immutability?
// Immutability means not changing the original data after it has been created.

// In simple words, when we want to update existing data, instead of modifying the original data, we create a new copy with the required changes.

let emp7 ={
    name:"haya",
    salary:30000,
    department:"HR"
};

let updatedEmployee = {
    ...emp7,
    salry:78000
};

console.log("Original Employee:");

console.log(emp7);

console.log("Updated Employee:");

console.log(updatedEmployee);


// with array

let emp8 = ["sasa","jaja","haha","lala"];

let updatedEmployees = [...emp8,"Arjun"];

console.log("Original Employee:");
console.log(emp8);

console.log("Updated Employees:");
console.log(updatedEmployees);

// removing employee

let emp9 = ["rare","rahul","tata","haha"];

let updatedEmployees1 = emp9.filter(emp9 =>{
    return emp9 !=="rahul";
});

console.log("Original Employee:");
console.log(emp9);

console.log("Updated Employee:");
console.log(updatedEmployees1)



// Mutable	                                               Immutable
// Original data can be changed.	                       Original data is not changed.
// Modifies existing objects or arrays.	                Creates a new object or array for updates.
// Can cause unexpected changes through shared references.   	Helps avoid unexpected changes.
// Example: push(), direct property assignment.	            Example: map(), filter(), spread operator.