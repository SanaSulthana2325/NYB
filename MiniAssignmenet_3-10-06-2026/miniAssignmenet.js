//complete Array Operation


//Array searching techniques:

//1.Linear search:checks each element one by one until the item is found
let number = [20,3,40,50,60,89,90]
let target = 89

let found = false;
for(let i = 0; i < number.length; i++){
    if (number[i] === target){
        console.log("Found at index:",i)
        found = true;
        break;
    }
}
if(!found){
    console.log("Not Found")
}

//2. indexOf()
//1.indexOf(): return the first occurance of an element
let arr = [111,222,333,444,222,888,222]
console.log(arr.indexOf(333))
console.log(arr.indexOf(222))
console.log(arr.indexOf(666))

// 3. includes()
//students attendance
let stu = ["ayesha","arisha","Sana","ayesha","Tasleem","ayesha"]

console.log(stu.indexOf("ayesha"))
console.log(stu.lastIndexOf("ayesha"))
console.log(stu.includes("ayesha"))

//4. find(): Returns the first element matching a condition

let employee = [
    {id: 1, name:"Rahul"},
    {id:2, name: "Priya"},
    {id:3, name: "John"}
]
let employees = employee.find(emp => emp.id === 2)
console.log(employees)

//5. findIndex(): returns the elements of the first matching elements
let num = [10,30,40,50,60]
let index = num.findIndex(num => num === 50)
console.log(index)

//6. filter()
let Marks1 = [80,25,67,23,45,12,23]
let passedStudents = Marks1.filter(
    mark => mark >=35
)
console.log(passedStudents)

// array transformation method
//1.map(): transform data
let numbers = [1,2,3,4,5,6]
let double = numbers.map(numbers => numbers * 4)
console.log(double)


//2. filter()
let num6 = [1,2,3,4,5,6,7,8,9]
let evenNumbers = num6.filter(
    num6 => num6 % 2 === 0
)
console.log(evenNumbers)

//3.reduce()
//sum of numbers
let num12 = [10,20,30,40,50]
let sum = num12.reduce(
    (total, num12) => total + num12,0
)
console.log(sum)

//4. flatmap(): maps and then flattens the results the result into a single array

let number23 = [1,2,3,4]
let result = number23.flatMap(num => [num, num * 2])
console.log(result)

// Array iteration method

// 1.for loop
let fruit5 = ["apple","mango","Banana"]
for(let i = 0; i<fruit5.length; i++){
    console.log(fruit5[i])
}

//2.for-of loop: for..of directly gives the array values
let products = ["Mobile", "Laptop", "headphones"]
for(let product of products){
    console.log(product)
}

//3. forEach():executes a function for every element in the array (u want clean and readable code for every element)

let chips = ["salt","cheese","masala"]
chips.forEach(function(chip){
    console.log(chip)
})


//forEach using arrows
let marks2 = [78,55,34,23]
marks2.forEach(mark =>{
    console.log(mark)
})

// Array sorting(with and without built-in methods)

//Sort(): arrange array elements in order

// with sort

//example
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

// without sort:

//1. bubble sorting:repestedly compare adjacentelements and swap them if they are in the wrong order

// students marks sorting

let marks = [90,100,76,99,87,65,34,23,21,45,67]
for(let i = 0; i < marks.length; i++){
    for(let j =0; j < marks.length - i - 1; j++){
        if (marks[j] > marks[j + 1]){
            let temp = marks[j]
            marks[j] = marks[j + 1]
            marks[j + 1] = temp
        }
    }
    
}
console.log("sorted Array:", marks)

//2.selection sort:find the smallest element and place at the beginning

let arr1 = [5,3,8,1,2]
for(let i = 0; i < arr1.length - 1; i++){
    let minIndex = i;
    for(let j = i + 1; j < arr1.length; j++){
        if(arr1[j] < arr1[minIndex]){
            minIndex = j;
        }
    }
    let temp = arr1[i];
    arr1[i] = arr1[minIndex];
    arr1[minIndex] = temp;
}
console.log(arr1)

// then repat for the remaining part of the array

//3.insertion sort: Build the sorted list one item at a time bi inserting each element into its correct position
let arr2 = [9,7,6,4,3,2,4,5,6,7,7,7,6]
for (let i = 1; i < arr2.length; i++){
    let current = arr2[i]
    let j = i - 1
    while(j >= 0 && arr2[j] > current){
        arr2[j + 1] = arr2[j]
        j--
    }
    arr2[j + 1] = current
}
console.log(arr2)

//object creation and manipulation:

// object creation:
const mobile = {
    brand: "Samsung",
    model: "S24",
    Price: 70000
}
console.log(mobile.brand)

//Access, Update ,Add ,Delete object properties

//1. access properties: means reading/getting a value from an object

let emp ={
    id: 101,
    name:"sana",
    role:"developer",
    salary: 50000
}
console.log(emp.name)
console.log(emp.salary)

// use with [ ] brackets

//2. update properties:changing an existing value
let emp1 ={
    id: 101,
    name:"sana",
    role:"developer",
    salary: 59000
}
console.log(emp1.salary)

// example
let emp5 ={
    id: 101,
    name:"sana",
    role:"Senior developer",
    salary: 60000
}
console.log(emp5.role)

//3 Add new properties: creating a new property that didnt exist before

emp.department = "IT"
console.log(emp)


//4. delete properties: removing a property completely
delete emp.salary;
console.log(emp)

// oblect manipulation:
//mobile phone
const mobile1 = {
    brand:"samgang",
    model:"S24",
    displayInfo: function(){
        console.log(this.brand + " "+ this.model)
    }
}
mobile1.displayInfo()

// update
mobile1.model = "S26"
mobile1.displayInfo()

// add
mobile1.price = 50000
console.log(mobile1)

// delete
delete mobile1.price
mobile1.displayInfo()


