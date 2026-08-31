// Array methods are built-in functions that allow us to perform operations on arrays, such as adding, removing, searching, copying, sorting, and transforming elements.

//1.push() - Add Element at the end

let cart = ["laptop","mouse"];
cart.push("keyboard");
console.log(cart);

//2. pop() - remove element from the last

let cart1 = ["tv","mobile","laptop"];
 let removedItem = cart1.pop();
 console.log(cart1);
 console.log(removedItem);


 //unshift() = Add element at the first

 let queue = ["Ayesha","Fatima","John"];

 queue.unshift("Sasa");

 console.log(queue);

 // Shift() = Remove first element
 let queue1 = ["AAA","BBB","CCC","DDD","EEE"];
 let servedCustomer = queue1.shift();

 console.log(queue1);
 console.log("Served:", servedCustomer);

// length - Find No.of elements

let pro = ["Gigi","Tata","nmnm","klkl"];
console.log(pro.length)

//include():

let pro1 = ["lulu","lusi","lula","luli","lallu"];

console.log(pro1.includes("lula"));
console.log(pro1.includes("lulu"));
console.log(pro1.includes("lui"));

//indexOf() - find the index

let stu2 = ["ala","alu","affu","aue"];
console.log(stu2.indexOf("alu"));


//join() - Convert Array into String

let skills = ["HTML","CSS","React"];

let result = skills.join("-");
console.log(result)

// Slice() = extracts part of an array without changing the original array

let stu4 = ["baba","bebe","bfbf","bgbg","btbt","bts"];

let selected = stu4.slice(2,6);

console.log(selected);
console.log(stu4);


//splice() - can add, remove,replace elements

let aa = ["minnu","mira","mimi","mili"];
aa.splice(2,3);

// Start at index 1
// Remove 1 element
console.log(aa);

// adding an element using splice

let pro2 = ["laptop","keyboard","mobile"];
pro2.splice(1,0,"mouse");
console.log(pro2)

// forEach(): execute something for every element

let stu5 = ["sana","tasan","fatima","hayat"];
stu5.forEach(function(stu5){
    console.log(stu5)
});

// map() - create a new Array
//create a new array by applying an operation to every element

let price = [100,200,300,400,500];
let newPrice = price.map(function(price){
    return price + 50;
});
console.log(newPrice);


// filter() - create a new array containing element that satisfy a consdition.

let mark = [35,67,8,9,90,76,54,32,45];
let passed = mark.filter(function(mark){
    return mark >= 40;
});

console.log(passed);

//find(): return first element that satisfies the condition

let price1 = [200,300,400,600,700,800];

let result1 = price1.find(function(price){
    return price > 500
});
console.log(result);

// fndIndex() - find index of first element

let mark1 = [25,30,35,40,45,50,55,60,65];
let index = mark1.findIndex(function(mark1){
    return mark1 >= 50;
});
console.log(index);

// some() = returns true if atleast one element satisies the condition

let b = [34,56,8,90,87,65,64,23];
let result3 = b.some(function(b){
    return b < 40;
})
console.log(result3)

// every() - return true only when all elements satisfy the condition

let cc = [34,56,78,90,88,77,55,33];
let result5 = cc.every(function(cc){
    return cc>= 90;
})
console.log(result5);


// sort() - sort the array

let stu6 = ["SSS","HHH","UUU","KKK"];
stu6.sort();
console.log(stu6)

// numerical sorting

let num1 = [100,4,67,89,25,2];
num1.sort(function(a,b){
    return a-b;
});
console.log(num1)

// reverse

let j = ["tara","tofa","tera","tiga","tak","tik"];
j.reverse()
    console.log(j);



//concat : combines two arrays

let gg = ["finance","hr","marketing"]
let hh = ["cooking","singing","dancing"]
let skill = gg.concat(hh);
console.log(skill)

//spread operator ... = combine arrays

let boys = ["sonu","atif"];
let girls = ["ayesha","fathima"];

let stu7 = [...boys,...girls];

console.log(stu7)

// flatten nested arrays 
//flat()

let num7 = [1,2,[3,4,5,[6,7,8[9]]]]

console.log(num7);
console.log(num7[2][1])
//console.log(num7[3][2])



// Array.isArray() - check whether it is an array or not

let stu9 = ["nanu","nyny","miku"];
console.log(Array.isArray(stu9));


//Removing Duplicate Elements from an Array

// Sometimes an array contains the same value multiple times.

let arr = [10,20,0,40,50];
console.log(arr);


//using set

let arr1 = [10,20,40,50,60];
let uniqueNumbers = [...new Set(arr1)];
console.log(uniqueNumbers)

// student
let students = [
    "Sana",
    "Ayesha",
    "Sana",
    "Fatima",
    "Ayesha"
];

let uniqueStudents = [...new Set(students)];

console.log(uniqueStudents);


// removing duplicate products:

let products = [
    "Laptop",
    "Mouse",
    "Laptop",
    "Keyboard",
    "Mouse"
];

let uniqueProducts = [...new Set(products)];

console.log(uniqueProducts);

//using filter and index

let numbers = [10, 20, 10, 30, 20, 40];

let uniqueNumbers1 = numbers.filter(function(value, index) {
    return numbers.indexOf(value) === index;
});

console.log(uniqueNumbers1);


// using map fro products

let students1 = [
    { id: 101, name: "Sana" },
    { id: 102, name: "Ayesha" },
    { id: 101, name: "Sana" }
];

let uniqueStudents2 = [
    ...new Map(students1.map(student1 => [student1.id, student1])).values()
];

console.log(uniqueStudents2);


// | Method                   | Best For                                  |
// | ------------------------ | ----------------------------------------- |
// | `[...new Set(array)]`    | Simple values like strings/numbers        |
// | `filter() + indexOf()`   | Understanding how duplicate removal works |
// | `forEach() + includes()` | Manual approach                           |
// | `Map()`                  | Objects with a unique property            |
// | `filter() + findIndex()` | Objects based on a property               |

//  | Method      | Action | Position  |
// | ----------- | ------ | --------- |
// | `push()`    | Add    | End       |
// | `pop()`     | Remove | End       |
// | `unshift()` | Add    | Beginning |
// | `shift()`   | Remove | Beginning |




// | Method        | Purpose                     | Changes Original? |
// | ------------- | --------------------------- | ----------------- |
// | `push()`      | Add at end                  | ✅ Yes             |
// | `pop()`       | Remove from end             | ✅ Yes             |
// | `unshift()`   | Add at beginning            | ✅ Yes             |
// | `shift()`     | Remove from beginning       | ✅ Yes             |
// | `splice()`    | Add/remove/replace          | ✅ Yes             |
// | `slice()`     | Extract portion             | ❌ No              |
// | `map()`       | Transform elements          | ❌ No              |
// | `filter()`    | Select matching elements    | ❌ No              |
// | `find()`      | Find first matching element | ❌ No              |
// | `findIndex()` | Find index of first match   | ❌ No              |
// | `forEach()`   | Execute for each element    | Usually ❌         |
// | `includes()`  | Check existence             | ❌ No              |
// | `indexOf()`   | Find index                  | ❌ No              |
// | `join()`      | Array → String              | ❌ No              |
// | `concat()`    | Combine arrays              | ❌ No              |
// | `sort()`      | Sort elements               | ✅ Yes             |
// | `reverse()`   | Reverse elements            | ✅ Yes             |
// | `flat()`      | Flatten nested arrays       | ❌ No              |
