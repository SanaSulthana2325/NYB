//implememt array sorting without using built-in sort method

//Bubble sort

let arr = [9,7,5,3,2,4,1,6,8,9,]
for(let i = 0; i < arr.length; i++){
    for(let j =0; j < arr.length - i - 1; j++){
        if (arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
    
}
console .log( arr)

//2.selection sort

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


//3. Insertion Sort

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

//forEach():
// add attendance status

let stu = ["Sana","Arisha","Sofiya", "Fathima"]
stu.forEach(function(stu){
    console.log(stu + " - present")
});

// example
// emloyee salary list
let salary = [25000,30000,35000,40000]
salary.forEach(function(salary){
    console.log("salary:₹" + salary)
})

//using indexfor each
let fruits = ["apple","mango","orange"]
fruits.forEach(function(fruit,index){
    console.log(index + " : " + fruit)
})

// we can calculate total marks
let marks = [89,90,45,60,78]
let total = 0
marks.forEach(function(mark){
    total += mark;
})
console.log(total)

//mobile contacts
let contacts = ["Mom", "Dad","sister","brother"]
contacts.forEach(function(contact){
    console.log("calling " + contact)
})


//pass or fail
 let marks1 = [35,56,23,35,19,90,99]
marks1.forEach(function(mark){
    if(mark >= 35){
        console.log(mark + " - pass")

    }else{
        console.log(mark + " - fail")
    }
});

// arrays of objects

let emp = [
    {name: "Sana", salary: 60000},
    {name: "Rahul", salary:20000},
    {name:"Rohit", salary:30000}

];
emp.forEach(function(emp){
    console.log(emp.name + " earns ₹" + emp.salary)
})

