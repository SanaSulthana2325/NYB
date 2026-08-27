// Spread = Expand / unpack values
// Rest = Collect / pack values

// Spread Operator (...)

// The Spread Operator takes elements from an array or properties from an object and spreads them out.

// example:
const num = [10,20,30,40,50];
console.log(...num)


// spread with Arrays:
const fruits=["Apple","Mango","Mango","Grapes"];

const newFruits = [...fruits];
console.log(newFruits);

// adding in spread at first

const colors=["pink","Red"];
const newColors = [...colors, "green","Purple"];

console.log(newColors)

// for combining student

const classA = ["Ravi","minu", "mira","afsa",];
const classB = ["Ajmeri", "sneha","saba"]

const allStudents = [...classA,...classB];
console.log(allStudents);

// adding Properties to an object

const student ={
    name:"titi",
    age:67
}
const updateStudent = {
    ...student,
    course:"JAVASCRIPT"
};
console.log(updateStudent);

// combining Objects

const personal = {
    name:"sonu",
    age:34
}
const Professional = {
    department:"IT",
    role:"HR"

}
const employee = {
...personal,
...Professional
};

console.log(employee);


//User Profile

const basicInfo = {
    name:"Tasan",
    age:29

};
const contactInfo = {
    email:"Tasan456@gmail.com",
    phone:"3456433423"

};
const profile = {
    ...basicInfo,
    ...contactInfo
};

console.log(profile);

// with  function Argumrnts

function add(a,b,c,d){
    return a+b+c+d;
}
const number = [10,20,30,40];
console.log(add(...number));

// fincding max number:

const mark = [39,40,58,62,74,9,80]
console.log(Math.max(...mark));

// Rest:

// The Spread Operator takes elements from an array or properties from an object and spreads them out.

 function showNum(...num){
    console.log(num)
 }
 showNum(10,20,30,40)


//with function

function add(...nums1){
    let total = 0;

    for(const num1 of nums1){
        total +=num1;
    }
    return total;
}

console.log(add(10,20,80));
console.log(add(20,30,80));
console.log(add(50,20));
console.log(add(10,20));

// Rest with named parameter

function stu1(name,...subject){
    console.log(name);
    console.log(subject);
}

stu1(
    "Sam",
    "Raju",
    "Neha",
    "sonu"
);

// student subject

function stuReport(name,...sub){
    console.log("Students:",name);
    console.log("Subjects:",sub);
}

stuReport(
    "maths",
    "english",
    "social",
    "hindi",
    "telugu"
)


// with array  Destructuring

const num2 =[10,20,25,30,45,67,59];
const[first, ...remaining] = num2;

console.log(first);
console.log(remaining);


// example

const fruits1 =["apple","mango","banana","grapes"];
const[first1, second, ...others] = fruits1;

console.log(first1);
console.log(second);
console.log(others);


// spread and rest example

function addNumber(...number){
    return Math.max(...number)
}

console.log(addNumber(30,40,50,60,20,10));






//  | Feature            | Spread                          | Rest                               |
// | ------------------ | ------------------------------- | ---------------------------------- |
// | Symbol             | `...`                           | `...`                              |
// | Meaning            | Expand                          | Collect                            |
// | Purpose            | Unpack values                   | Pack values                        |
// | Commonly used with | Arrays, objects, function calls | Function parameters, destructuring |
// | Example            | `[...arr]`                      | `function test(...args)`           |


//              ...
//              │
//        ┌─────┴─────┐
//        │           │
//     SPREAD        REST
//        │           │
//     Expand       Collect
//        │           │
//  [1,2,3] → 1,2,3  1,2,3 → [1,2,3]