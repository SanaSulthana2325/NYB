// What are Data Types in JavaScript?
// Definition: Data types specify what kind of data we are storing in a variable.

// Primitive

//1. String: used to stire text or characters

let stuName = "AAA";
console.log(stuName);
console.log(typeof stuName);

//2.number: used to store numeric values

let salary = 25000;
let marks = 89;

console.log(salary);
console.log(marks);

console.log(typeof salary);

//3. Boolean: stores only true or false values

let empPresent = true;
console.log(empPresent);
console.log(typeof empPresent);

//4. Null: represent absence of value

let empDepartment = null;

console.log(empDepartment);
console.log(typeof empDepartment);

//5.BigInt: used to store very large integer value 

let largeNum = 187897653899326373n;
console.log(largeNum);
console.log(typeof largeNum);

//6.Symbol: creates unique value

let id = Symbol("employeeID");
console.log(typeof id)

//7. undefined: variable declared but value has been assigned

let stuAge;
console.log(stuAge);
console.log(typeof stuAge);


// non-Primitive

//Object: stires data in key-value pairs

let emp ={
    name:"sara",
    age:27,
    department:"HR"
};

console.log(emp.name);
console.log(emp.age);
console.log(emp.department);

//array:used to store multiple values in a single variable

let emp1 =["AAA","BBB","CCC","DDD","EEE"];

console.log(emp1);
console.log(emp1[0])
console.log(emp1[3])


//function: function is a reusable block of code that performs a particular task

function calculateSalary(){
    return 25000;

}
console.log(calculateSalary());


// type conversion: changing one datatype into another datatype

// - String to Number
// - Number to String
// - String to Boolean
// There are two types of type conversion:
// 1. Explicit Type Conversion
// 2. Implicit Type Conversion


// A. Explicit Type Conversion
// When a developer manually changes one data type into another, it is called explicit conversion.

let price = "500";
let quantity = 2;

let total = Number(price) * quantity;

console.log(total);
console.log(typeof total);


// example
let a = "100";
let b = 200;

console.log(Number(a));
console.log(String(b));
console.log(parseInt("45.90"));
console.log(parseFloat("45.90"));


// Implicit Type Conversion
// When JavaScript automatically converts one data type into another, it is called implicit conversion or type coercion.

let price1 = "500";
let quantity1 = 4;

console.log(price1 + quantity1);
console.log(price1 * quantity1);