// store employee details using let and const

const empName = "Rajab";
let empAge = 27;
let empSalary = 20000;

console.log("Employee Name:",empName);
console.log("Employee Age:",empAge);
console.log("Employee Salary:",empSalary);

//updated salary:
empSalary = 30000;
console.log("Updated Salary:",empSalary)

//2. using arrow function

const calculateSalary = (monthlySalary) =>{
    return monthlySalary * 12;
};

console.log(calculateSalary(20000));

// using template literals

const name = "lulu";
const dept = "HR";
const salary= 25000;

const message = `hello ${name}, Your department is ${dept}. your monthly salary is ₹${salary}.`;

console.log(message);


// using destructuring

const employee = {
    name1: "Arjun",
    age: 24,
    department: "IT",
    salary1: 30000
};

const { name1, age, department, salary1 } = employee;

console.log(name1);
console.log(age);
console.log(department);
console.log(salary1);


// spread operator

const oldEmployee = ["AAA","BBB","CCC","DDD"];

const newEmployee = [...oldEmployee,"BBB","lusi"];

console.log(oldEmployee);
console.log(newEmployee);

// rest method

function calculateTotal(...marks){
    let total = 0;

    for(let mark of marks){
        total += mark;
    }
    return total;
}

console.log(calculateTotal(80,45,37,89,76,54,32));

// optional chaining

const stu = {
    name:"sara",
    address:{
        city:"HYD"
    }
};

console.log(stu.address?.city);
console.log(stu.address?.pincode);
console.log(stu.contact?.phone);


// Nullish coalescing

let salary11 = null;

let finalSalary = salary ?? 15000;

console.log(finalSalary);

//
let empSalary1 = 0;
console.log(empSalary1 ?? 15000);
