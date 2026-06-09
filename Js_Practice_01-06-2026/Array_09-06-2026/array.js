//Array.some(): Someone must pass
// checks whether at least one elememt in an array satisfies a given condition
//---> if one or more elements satisfy the condition ----> returns true
//----> if none satisfy the condition ----> returns false

//example
let num = [10,20,30,40,50,60,70]
let result = num.some(num => num > 50)
console.log(result)

// check student pass
let marks = [65,67,78,90,75]
let topperExists = marks.some(mark => mark > 90)
console.log(topperExists)

//E- Commerce Cart
let product = [
    {name: "dresses", stock:2},
    {name: "ear rings", stock:10},
    {name: "Rings", stock:8}
]
let OutOfStock = product.some(product => product.stock === 0)
console.log(OutOfStock)


// Array.every(): Everyone must pass
// check whether all elements in an array satisfy a condition
//---> if every element passes the condition ---> returns true
//---> if even one element fails the condition --->return false

//chek all numbers are positive
let num1 = [12,45,34,23]
let result1 = num1.every(num1 => num1 > 0)
console.log(result1)

//if one number fails
let num2 = [12,45, -7,34,23]
let result2 = num2.every(num2 => num2 > 0)
console.log(result2)


// age eligibility check
let age = [40,20,10,50,46]
let eligible = age.every(
    age => age >= 18
)
console.log(eligible)

// difference between every() and some()

//every()
let num3 = [45,67,89,25,10,90,99]
let result3 = num3.every(num3 => num3 >= 35)
console.log(result3)

//because not all students pass

//some()
let num4 = [45,67,89,25,10,90,99]
let result4 = num4.some(num4 => num4 >= 35)
console.log(result4)

// Looping Through Arrays: visiting each element of an array one by one

// using for loop:
let fruits = ["apple","mango","banana"]
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
// when to use:
//1.need index values
//2. need to skip or brak iteration
//3. ,ore control over looping

//using while loop:
let fruit = ["pineapple","mango","cherry"]
let i = 0;
while(i < fruit.length){
    console.log(fruit[i])
    i++
}

//when to use 
//no of iterations is not fixed
//loop depends on a condition

//3.for-Of loop

let chips = ["salt","masala","cheese"]
for(let chip of chips) {
    console.log(chip);
}

// when to use
//1. need only values
//2. cleaner and easier to read

//4.forEach()
let chips1 = ["salt1","masala1","cheese1"]
chips.forEach(function(chip){
    console.log(chip)
}) 

// when to use
//1.performing an action on each element
//2.modern js applications


// Join():Convert all array elements into a single string
let fruit2 = ["apple","mango","orange"]
console.log(fruit2.join())
console.log(fruit2.join("-"))
console.log(fruit2.join("   "))

// number array
let num5 = [10,20,30,40,50]
console.log(num5.join(" , "))

//creatinga URl path
let path = ["users", "profile","edit"]
let url = path.join(" / ")
console.log(url)

//Sort(): arrange array elements in order

//
let alp = ["aaa","bbb","ccc"]
alp.sort()
console.log(alp)

// reverse order
let alp2 = ["aaa","bbb","ccc","ddd"]
alp2.sort().reverse()
console.log(alp2)

//sort numbers ascending
let num7 = [4,6,7,8,5,2,1,9,0,]
num7.sort((a,b) => a -b)
console.log(num7)

//sort numbers decending
let num8 = [4,6,7,8,5,2,1,9,0]
num8.sort((a,b) => b - a)
console.log(num8)

//Array Flattening:
//Flattening means converting a nested array inyo a single-level array

let arr = [1,[2,3,4],[5,6,7,]]
let result7 = arr.flat()
console.log(result7)

// nested array
let arr1 = [1,[2,3,[4,5,6,[7,8,9,]]]]
console.log(arr1.flat(3))

// multiple student list
let classA = ["john", "sara"];
let classB = ["David", "mike"];
let classC = ["Emma", "Tom"]
let student = [classA, classB, classC]
console.log(student.flat())

//Removing Duplicates: means keeping only unique values in the array
let arr3 = [1,2,3,4,4,5,6,6,6]
console.log(arr3)
//using set:
let arr4 = [1,2,3,4,4,5,6,6,6]
let uniqueArr = [...new Set(arr4)]
console.log(uniqueArr)

//how it works
//Set stores only unique values
// Spread operator(...) converts the Set back into an array


// using filter()
let arr5 = [1,2,2,2,2,3,3,3,4,4,4,5,5,5,5,6,6,6,7,7,7]
let uniqueArr1 = arr5.filter(
    (item, index) => arr5.indexOf(item) === index
)
console.log(uniqueArr1)

// usig forEach()
let arr6 = [1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,6,7,7,7,9,9,9]
let result9 = []
arr6.forEach(item => {
    if(!result9.includes(item)){
        result9.push(item)
    }
})
console.log(result9)

// for loop
let arr10 = [34,45,67,89,9,87,65,43,9,9,9,9,9,9]
let uniqueArr2 = []
for(let i = 0;i < arr10.length; i++){
    if(!uniqueArr2.includes(arr10[i])){
        uniqueArr2.push(arr10[i])
    }
}
console.log(uniqueArr2)


// reduce()

//1.indexOf(): return the first occurance of an element
let arr17 = [111,222,333,444,222,888,222]
console.log(arr17.indexOf(333))
console.log(arr17.indexOf(222))
console.log(arr17.indexOf(666))

// latIndexOf(): Returns the last occurence of an element
let num19 = [10,20,30,40,50,60,20,30,89,76,20]
console.log(num19.lastIndexOf(20))

// example
//students attendance
let stu = ["ayesha","arisha","Sana","ayesha","Tasleem","ayesha"]

console.log(stu.indexOf("ayesha"))
console.log(stu.lastIndexOf("ayesha"))

//map(): transform data
let numbers = [1,2,3,4,5,6]
let double = numbers.map(numbers => numbers * 4)
console.log(double)

// example
let salary = [20000, 30000,50000]
let updatedSalary = salary.map(
    salary => salary + 6000
)
console.log(updatedSalary)

//student grade
let Marks = [70, 80, 90,60]
let grades = Marks.map(Mark => Mark + 9)
console.log(grades)

//filter():select data// creates a new array containing only elements that satisfy a condition
let num6 = [1,2,3,4,5,6,7,8,9]
let evenNumbers = num6.filter(
    num6 => num6 % 2 === 0
)
console.log(evenNumbers)

// students passed
let Marks1 = [80,25,67,23,45,12,23]
let passedStudents = Marks1.filter(
    mark => mark >=35
)
console.log(passedStudents)

//reduce(): combine data
//reduces all array elements into one single value

//sum of numbers
let num12 = [10,20,30,40,50]
let sum = num12.reduce(
    (total, num12) => total + num12,0
)
console.log(sum)

// comparion of map(),filter(),reduce()
let num13 = [1,2,3,4,5,6,2,2,]
let result8 = num13.map(num => num * 2)
console.log(result8)
let result14 = num13.filter(num13 => num13 > 2)
console.log(result14)
let result15 = num13.reduce(
    (sum, num) => sum + num,0
)
console.log(result15)

// real time senario
// employees salary

let salaries = [20000,30000,40000,50000,60000]
let increased = salaries.map(
    salary => salary + 6000
)
console.log(increased)

let highEarners = increased.filter(
    salary => salary > 40000
)
console.log(highEarners)

let total = highEarners.reduce(
    (sum, salary) => sum + salary,0
)
console.log(total)


//