// An array is a collection of multiple values stored in a single variable.

// Array Creation

// There are several ways to create an array.

// Array literal

let colors = ["pink","red","yellow","green"];
console.log(colors)

// numbers

let marks = [34,67,89,80,65,76,98];
console.log(marks);

// different datatypes : can contain diff types of values

let stu = ["Tasan",21,true,null];
console.log(stu);


// accessing array element

let fruits = ["Apple","Banana","Mango","grapes"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


// Adding Elements

// There are two common methods:

// push() → adds to the end
// unshift() → adds to the beginning

//push()

let fru = ["Apple","Banana"]
fru.push("Grapes","Mango");
console.log(fru);

// unshift(): add element at beginning

let chips = ["lays","bingo"];
chips.unshift("kuekure");
console.log(chips)


// Removing Elements

// Two important methods:

// pop() → removes from the end
// shift() → removes from the beginning

//pop():

let a = ["AAA","BBB","CCC","DDD"];
let removed = a.pop();

console.log(a);
console.log(removed);

// shift(
let b = ["yoyo","koko","lolo","popo"];
let removed1 = b.shift();

console.log(b);
console.log(removed)

//splice: can add,remove,replace element

let c=["lili","kiki","mimi","didi","riri"];
c.splice(1,1); //(index element)
c.splice(0,1);

console.log(c)


// Searching Arrays

// JavaScript provides several methods for searching.

// Important ones:

// includes()
// indexOf()
// find()
// findIndex()

// includes(): checks whether an element exist

let d = ["mom","dad","bro","sis"];
console.log(d.includes("mom"));
console.log(d.includes("Nana"))

// indexOf(): returns the index of an element

let e =["mutton biryani","chicken biryani","paneer biryani","fish biryani","prawns biryani"];
console.log(e.indexOf("fish biryani"));
console.log(e.indexOf("vegetable biryani")); // means element was not found


// Array Iteration

// Iteration means going through the elements of an array one by one.

// using for loop

let fru1 =["Apple","Mango","Banana"];

for (let i = 0;i <fru1.length; i++){
    console.log(fru1[i])
}

// using for of

let fru2 = ["Apple","Cherry","Mango"];

for(let fruit of fru2){
    console.log(fruit)
}

// for each(): executes a function for every element
let f = ["laptop","mobile","ipad","headphones","tv"];

f.forEach(function(f, index){
    console.log(index, f);
});



// map()

// map() creates a new array by transforming every element.

let num = [1,2,3,4,5,6,7,8]

let double = num .map(function(num){
    return num*2;
});

console.log(double)

// arrow function
let num1 = [11,22,33,44,55,66,77,88];
let square = num1.map(num => num * num);

console.log(square)


// filter()

// filter() returns a new array containing elements that satisfy a condition.

// even number:

let num2 = [1,2,3,4,5,6,7,8,9];
let evenNumber = num2.filter(num=> num % 3 ===0);

console.log(evenNumber)

// marks

let marks1 =[15,67,54,42,37,89,78];
let passed = marks.filter(mark=> mark >= 50);
console.log(passed)

//example

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Phone", price: 30000 }
];

let expensive = products.filter(product => product.price > 10000);

console.log(expensive);


// reduce()

// reduce() is commonly used to combine all array elements into one value.

let num3 = [10,20,30,40,50,60];
let total = num3.reduce((sum,num) =>{
    return sum + num;
},0);

console.log(total)



// find()

// find() returns the first element that satisfies a condition.

let num4 =[10,20,30,40,50,60];
let result = num4.find(num => num > 25);

console.log(result)

// example
let stu5 =[
    { name:"Rahul",marks:78},
    {name:"Priya", marks:90},
    {name:"Minnu",marks:95}
];

let student = stu5.find(student => student.marks > 75);
console.log(student);


//findIndex()

// findIndex() returns the index of the first element satisfying a condition.

let num6 = [10,20,30,40,50,60];
let index = num6.findIndex(num => num >30);
console.log(index);



//  some()

// some() checks whether at least one element satisfies a condition.

let h = [35,40,75,45,89];

let result2 = h.some(h => h >= 45);
console.log(result2) 

// example
let numbers1 = [1, 3, 5, 7];

console.log(numbers1.some(num => num % 2 === 0));


// every(): 
// every() checks whether ALL elements satisfy a condition.

let g = [20,30,40,50,60,70];
let result3 = g.every(g => g >= 50);
console.log(result3)


// sort()

// sort() sorts an array.

let j = ["dede","jeje","ueue","bebe"]
j.sort();
console.log(j);

// number

let num7 =[10,8,45,32,59,32,27,89,26];
num7.sort();
console.log(num7);

// join(): combines array elements into string

let u =["Apple","Mango","Banana"];
let result1 = u.join("-");
console.log(result1)

//
let y = [101,102,103,104,105];
let result4 = y.join("-");
console.log(result4)


//flat(): used to convert nested array into flatter array

let num8 = [1,2,3,[4,5,[6,7,[8]]]];
console.log(num8.flat(0));

// removing duplicates

// set: stores only unique values
let num9 = [1,2,3,4,5,6,7,8,2,3,4,5]
let uniqueNumbers = [...new Set(num9)];
console.log(uniqueNumbers);

// removing duplicatestring

let names = [
    "Rahul",
    "Priya",
    "Rahul",
    "Aman",
    "Priya"
];

let uniqueNames = [...new Set(names)];

console.log(uniqueNames);



// | Method        | Main Purpose                  | Returns               |
// | ------------- | ----------------------------- | --------------------- |
// | `push()`      | Add at end                    | New length            |
// | `pop()`       | Remove from end               | Removed element       |
// | `unshift()`   | Add at beginning              | New length            |
// | `shift()`     | Remove from beginning         | Removed element       |
// | `splice()`    | Add/remove/replace            | Removed elements      |
// | `includes()`  | Check existence               | `true` / `false`      |
// | `indexOf()`   | Find exact value's index      | Index / `-1`          |
// | `forEach()`   | Perform action on each        | `undefined`           |
// | `map()`       | Transform every element       | New array             |
// | `filter()`    | Select matching elements      | New array             |
// | `reduce()`    | Combine into one value        | Single value          |
// | `find()`      | Find first matching element   | Element / `undefined` |
// | `findIndex()` | Find first matching index     | Index / `-1`          |
// | `some()`      | Check if at least one matches | `true` / `false`      |
// | `every()`     | Check if all match            | `true` / `false`      |
// | `sort()`      | Sort elements                 | Sorted array          |
// | `join()`      | Convert array to string       | String                |
// | `flat()`      | Flatten nested arrays         | New array             |
// | `Set`         | Remove duplicates             | Unique values         |
