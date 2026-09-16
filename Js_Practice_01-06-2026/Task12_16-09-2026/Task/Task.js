//Solve array manipulation problems using different array methods.

// push

let a =["DDD","UUU","OOO","PPP"];
a.push("JJJ");
console.log(a)


//pop
let b = ["ggg","biba","gana"];
let removed = b.pop();

console.log(b);
console.log("Removed:",removed);

// unshift

let c = ["iu","ice","ipad"];
c.unshift("ice cream");
console.log(c);

// shift
let d = ["dog","cat","loin"];
let removed1 = d.shift()

console.log(d);
console.log("Removed:",removed1)

// splice():

let fruits = ["Apple","Mango","Orange"];
fruits.splice(1,1,"Banana");
console.log(fruits)

// slice()

let e = ["jija","jug","jungle","jail","july","june"];
let selected= e.slice(0,3);
console.log(selected)

//map
let num =[2,3,4,5,6,7];
let result = num.map(function(num){
    return num*2
});
console.log(result);

// or
let result1 = num.map(num => num*3);
console.log(result1)

// filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

// find():

let numbers1 = [10, 25, 45, 60, 80];

let result2 = numbers1.find(num => num > 50);

console.log(result2);

// findIndex()
let num3 = [10,20,30,40,50,60];
let index = num3.findIndex(num => num === 40);
console.log(index);

//some:
let h = [35,67,89,90,12,34,25,26,];
let result4 = h.some(h => h >=40);
console.log(result4)

// every
let v = [56,78,90,89,80]
let result5 = v.every(v => v >= 35);
console.log(result5);

//reduce
let sal =[25000,15000,40000,29000,30000];
let total = sal.reduce((sum,sal) =>{
    return sum + sal;
},0);
console.log(total);

// forEach:
let t = ["tv","laptop","mobile","fridge"];
t.forEach((t,index)=>{
    console.log(index,t);
});

// includes

let products = ["Laptop", "Mouse", "Keyboard"];

console.log(products.includes("Mouse"));
console.log(products.includes("Mobile"));

// remove duplicates:
let numbers6 = [10, 20, 10, 30, 20, 40, 30];

let uniqueNumbers = [...new Set(numbers6)];

console.log(uniqueNumbers);

// join():
let fruits5 = ["Apple", "Mango", "Orange"];

let result7 = fruits5.join(", ");

console.log(result7);

// example
let words = ["JavaScript", "is", "good"];

console.log(words.join(" "));

//flat
let numbers9 = [1, 2, [3, 4], [5, 6]];

let result9 = numbers9.flat();

console.log(result9);


//Implement sorting with and without built-in methods.

//1.Sorting Using Built-in sort()
//example

let num4 =[50,20,40,10,30];
num4.sort((a,b) => a-b);

console.log(num4);


//Sorting in Descending Order
let numbers10 = [50, 20, 40, 10, 30];

numbers10.sort((a, b) => b - a);

console.log(numbers10);


// Sorting Without Built-in Methods

// Suppose the interviewer says:

// "Sort this array without using sort()."

// We can use Bubble Sort.

// example

let numbers11 = [5, 3, 8, 1, 2];

for (let i = 0; i < numbers11.length; i++) {

    for (let j = 0; j < numbers11.length - 1 - i; j++) {

        if (numbers11[j] > numbers11[j + 1]) {

            let temp = numbers11[j];

            numbers11[j] = numbers11[j + 1];

            numbers11[j + 1] = temp;
        }
    }
}

console.log(numbers11);

// product example
let prices =[499,199,999,299,799];

for(let i=0; i<prices.length;i++){
    for(let j=0;j < prices.length -1 -i; j++){
        if (prices[j] > prices[j + 1]){
            let temp = prices[j];
            prices[j] = prices[j + 1];
            prices[j + 1] = temp;
        }
    }
}

console.log(prices);


// | Method         | Built-in? | Technique                     |
// | -------------- | --------- | ----------------------------- |
// | `sort()`       | ✅ Yes     | JavaScript's built-in sorting |
// | Bubble Sort    | ❌ No      | Compare adjacent elements     |
// | Selection Sort | ❌ No      | Find minimum and swap         |


//Remove duplicate values from an array.

// Using Set() — Most Common
// Problem

// Remove duplicate numbers:

let numbers12 = [10, 20, 10, 30, 20, 40, 30];

let uniqueNumbers1 = [...new Set(numbers12)];

console.log(uniqueNumbers1);


// can use filter().

let numbers13 = [10, 20, 10, 30, 20, 40, 30];

let uniqueNumbers2 = numbers13.filter((value, index) => {
    return numbers13.indexOf(value) === index;
});

console.log(uniqueNumbers2);


// Using for Loop

// This is useful when an interviewer asks you to implement the logic yourself.

let numbers14 = [10, 20, 10, 30, 20, 40, 30];

let uniqueNumbers3 = [];

for (let i = 0; i < numbers14.length; i++) {

    if (!uniqueNumbers3.includes(numbers14[i])) {
        uniqueNumbers3.push(numbers14[i]);
    }
}

console.log(uniqueNumbers3);


// using for-of()

let numbers15 = [10, 20, 10, 30, 20, 40, 30];

let uniqueNumbers4 = [];

for (let number15 of numbers15) {

    if (!uniqueNumbers4.includes(number15)) {
        uniqueNumbers4.push(number15);
    }
}

console.log(uniqueNumbers4);

//Find highest and lowest values from an array.


//using max and min

let numbers16 = [10, 25, 5, 80, 45, 60];

let highest = Math.max(...numbers16);
let lowest = Math.min(...numbers16);

console.log("Highest:", highest);
console.log("Lowest:", lowest);

// using for Loop

let numbers17 = [10, 25, 5, 80, 45, 60];

let highest1 = numbers17[0];
let lowest1 = numbers17[0];

for (let i = 1; i < numbers17.length; i++) {

    if (numbers17[i] > highest1) {
        highest1 = numbers17[i];
    }

    if (numbers17[i] < lowest1) {
        lowest1 = numbers17[i];
    }
}

console.log("Highest:", highest1);
console.log("Lowest:", lowest1);


// reduce
let numbers18 = [10, 25, 5, 80, 45, 60];

let highest2 = numbers.reduce((max, current) => {
    return current > max ? current : max;
});

console.log("Highest:", highest);

//find lowest

let numbers19 = [10, 25, 5, 80, 45, 60];

let lowest2 = numbers.reduce((min, current) => {
    return current < min ? current : min;
});

console.log("Lowest:", lowest);



//Group and filter objects based on conditions.

// filter based on consition

let students20 = [
    { name: "Rahul", marks: 85 },
    { name: "Zeba", marks: 65 },
    { name: "Ayesha", marks: 92 },
    { name: "kazim", marks: 45 }
];

let toppers = students20.filter(student => student.marks > 80);

console.log(toppers);

//filter students who are passed
let passedStudents = students20.filter(student => student.marks >= 40);

console.log(passedStudents);

// filter students who are failed

let failedStudents = students20.filter(student => student.marks < 40);

console.log(failedStudents);


// | Operation       | Method     | Purpose                             |
// | --------------- | ---------- | ----------------------------------- |
// | Filter objects  | `filter()` | Select objects matching a condition |
// | Find one object | `find()`   | Get first matching object           |
// | Group objects   | `reduce()` | Organize objects by a property      |
// | Check any       | `some()`   | Check if at least one matches       |
// | Check all       | `every()`  | Check if all match                  |


//Manipulate nested objects.

let student = {
    name: "Sana",
    age: 22,
    address: {
        city: "Warangal",
        state: "Telangana",
        pincode: 506001
    }
};
student.address.city = "hyderabad"//  update
student.address.country = "India"; // add new property
delete student.address.pincode;// delete


console.log(student);
console.log(student.address.city);
console.log(student.address.state);
console.log(student["address"]["city"]);
console.log(student.address.city);
console.log(student.address);
console.log(student.address);


//Practice Object Destructuring.


// example

let student21 = {
    name: "Sana",
    age: 22,
    course: "JavaScript"
};

let { name, age, course } = student21;

console.log(name);
console.log(age);
console.log(course);

// with different variable

let user = {
    name: "Priya",
    age: 24
};

let { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);


// default values

let student22 = {
    name1: "Sana",
    age1: 22
};

let { name1, age1, city = "Hyderabad" } = student22;

console.log(name1);
console.log(age1);
console.log(city);