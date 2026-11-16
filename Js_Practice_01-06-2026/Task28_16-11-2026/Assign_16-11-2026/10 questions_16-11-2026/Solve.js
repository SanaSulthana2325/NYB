 //1. 
 console.log("Heelo wrold")

 //2. add two numbers

 let a = 10;
 let b = 20;

 let sum = a + b;
 console.log("Sum:", sum);

// 3. check even or odd

let number = 15;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

//4. find largest 3 number

let r=10;
let s = 50;
let t = 40;
if(r>=s && r>=t){
    console.log("Largest:",r);
}else if(s >= r && s>=t){
    console.log("largest:",s);
}else{
    console.log("Largest:",t)
}

// 5. eligible for vote

let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

//6. print 1-10 numbers

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//7.find sum of 1-10 numbers

let sum1 = 0;

for (let i = 1; i <= 10; i++) {
    sum1 = sum1 + i;
}

console.log("Total Sum:", sum1);

//8.factorial

let number1 = 5;
let factorial = 1;

for (let i = 1; i <= number1; i++) {
    factorial = factorial * i;
}

console.log("Factorial:", factorial);


// 9. mutiplecation

let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

//10. reverse 

let name = "JavaScript";

let reversed = name.split("").reverse().join("");

console.log("Original:", name);
console.log("Reversed:", reversed);