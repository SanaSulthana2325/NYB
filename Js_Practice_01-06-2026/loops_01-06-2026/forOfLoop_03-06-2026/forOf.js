// for of loop:used to iterate over the vaules of iterablr objects such as:
//array
// string
// maps
// sets
//  it directly gives value of each element

//for array
let colors = ["green","blue","red","orange","yellow"]
for(let color of colors){
    console.log(color)
}

// string 
let name ="sulthana"
for (let letter of name){
    console.log(letter)
}

// calculating total marks
let marks =[50,90,89,77,76]
let total = 0
for (let mark of marks){
    total += mark
}
console.log("total marks:", total)

// finding largest number
let number=[20,90,67,87,99,87,55]
let largest = number[0]
for (let num of number){
    if(num > largest){
        largest = num
    }
}
console.log(largest)

// count vowels
let text = "sana sulthana"
let count = 0
for(let char of text){
    if("aeiou".includes(char)){
        count++
    }
}
console.log("vowels:",count)

// converting string into uppercase
let text1 = "tasan"
for(let char of text1){
    console.log(char.toUpperCase())
}

// finding even numbers
let numbers = [3,5,6,7,8,9,0,,23,34,56,78,88]
for(let num of numbers){
    if(num % 2 ===0){
        console.log(num)
    }
}


// use cases:
// array values
// string
// shopping cart items
// students marks list
