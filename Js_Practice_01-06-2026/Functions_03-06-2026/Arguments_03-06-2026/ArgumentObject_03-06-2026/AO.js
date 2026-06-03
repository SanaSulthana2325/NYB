// argument object: it is a special object available inside every regular function
//it contain all the values(arguments)passed tonthat function when it is called

//
function showArguments(){
    console.log(arguments)
}
showArguments("sana", 23, "HTML")

//why we use argument object: it allows a function to accept any number of arguments without defining parameters

//
function sum(){
    let total = 0
    for (let i = 0; i< arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(sum(60,77))
console.log(sum(444,890))


// billing system
function calculateBill(){
    let total = 0
    for (let i = 0; i< arguments.length; i++){
        total += arguments[i]
    }
    console.log("total bill:", total)
}
calculateBill(100,60,8766,89)

//find largest number
function findMax(){
    let max = arguments[0]
    for(let i = 1; i < arguments.length;i++){
        if(arguments[i]> max){
            max = arguments[i]
        }
    }
    console.log("maximum:", max)
}
findMax(90,77,65,43,23,1000,789)


// attendance system
function attendance(){
    console.log("students present:", arguments.length)
}
attendance("aaa","bbb", "ccc","dddd","rrr")


// access individual argument
function employee(){
    console.log("Name:",arguments[0])
    console.log("Department:",arguments[1])
    console.log("Salary:",arguments[2])
}
employee("Sana","HR", 50000)