// sorting without built-in Method

//1. bubble sorting:repestedly compare adjacentelements and swap them if they are in the wrong order
//2.selection sort:find the smallest element and place at the beginning
// then repat for the remaining part of the array
//3.insertion sort: Build the sorted list one item at a time bi inserting each element into its correct position

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
console.log("sorted Array:", arr)

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

// e-commerce price sorting

let price = [989,876,567,456,322,123,234,299,999,888,976]
for(let i = 0; i < price.length; i++){
    for(let j =0; j < price.length - i - 1; j++){
        if (price[j] > price[j + 1]){
            let temp = price[j]
            price[j] = price[j + 1]
            price[j + 1] = temp
        }
    }
    
}
console.log("sorted Array:", price)


//forEach()
// print student names
let stu = ["Sana","Ayesha","Rahul","sulthana"];
stu.forEach(function(stu){
    console.log(stu);
})



