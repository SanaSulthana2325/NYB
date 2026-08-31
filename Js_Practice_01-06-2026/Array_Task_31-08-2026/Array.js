//Array:An array in JavaScript is used to store multiple values in a single variable.


let stu =["sana","ayesha","tasan"];
console.log(stu);

// with index values
console.log(stu[0]);
console.log(stu[1]);
console.log(stu[2]);


// with numbres
let num = [10,20,30,40,50,60];
console.log(num);
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);

// with different data types
let data = ["sana",24,true, 10.5]

console.log(data)
console.log(data[0]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);

// with empty array:
console.log("Empty Array")
let stu1 = [];
console.log(stu1)

// using array Constructor

let fruit = new Array("Apple","Banana","Mango")

console.log(fruit)

//
let numb = new Array(5);
console.log(numb);
console.log(numb.length);

// access using variable:
let fruits = ["Apple","Mango","Grapes"];

let index =1;
console.log(fruits[index])

// using Loop

let product = ["Mobile","laptop","ipad"];
for(let i=0; i< product.length; i++){
    console.log(product[i])

}

// using for-of:
let fruits1 = ["Apple","Orange","Mango"];
for (let fruit1 of fruits1){
    console.log(fruit1)
}


// forEach()
let chip = ["bingo","lays","kurkure"];
chip.forEach(function(chip){
    console.log(chip);
});


// nested Array

let stu2 = [
    ["AAA",23],
    ["BBB",45],
    ["GGG",34]
];
console.log(stu2[0]);
console.log(stu2[0][0]);
console.log(stu2[0][1]);

// example
let stu3 = ["Rahul","Ayesha","ShaSha","Mira"];

console.log("First student:", stu3[0]);
console.log("Second student:", stu3[1]);
console.log("Last student:", stu3[stu3.length -1]);

// check numbers of elements

let a = [1,2,3,4,5,6,7,9];
console.log(a.length);
