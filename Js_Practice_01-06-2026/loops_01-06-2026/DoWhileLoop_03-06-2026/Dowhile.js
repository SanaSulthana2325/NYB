//3. do while:executes the code atleast once even if the condition is false

let i =1
do{
    console.log(i)
    i++
}while(i <=8)

//

let choice = 0
do{
    console.log("welcome to world")
}
while( choice !== 0)
    
// login system
let password = "admin"
let enterPassword = "guest"
do{
    console.log("checking password....")
    enterPassword = "admin"
}while(enterPassword !== password)
    console.log("login successful")

//ATM withdrawal

let balance = 5000
let withdraw = 1000
do{
    balance -= withdraw
    console.log("withdrawn:", withdraw)
}while(false)
    console.log("Remaining Balance:",balance)

//guess number
let secretNumber = 5
let guess= 2
do {
    console.log("wrong guess")
    guess = 5
}while(guess !== secretNumber)
    console.log("Correct guess")

// multiplication:
let num = 5
let k = 1
do{
    console.log(`${num} x ${k} = ${num * k}`)
    k++
}while(k <= 10)

// uses cases:
//menu display
// input validation
// Game loops
