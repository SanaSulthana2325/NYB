//Create examples using setTimeout() and setInterval().

// setTimeout(): runs code only once after a delay

// simple message
setTimeout(()=>{
    console.log("hello universe")

},2000)

// welcome message
console.log("opening website....")
setTimeout(()=>{
    console.log("welcome user")
},3000)

// OTP sent

console.log("sending OTP.....")
setTimeout(()=>{
    console.log("OTP sent successfully")
},2000)

// Delayed notification
setTimeout(()=>{
    console.log("you have a new message")
},5000)

// stop setTimeOut()

let timer = setTimeout(()=>{
    console.log("this will not run")
},3000)
clearInterval(timer)


// setInterval():runs code again and again after fixed interval
setInterval(()=>{
    console.log("Hello")
},2000)


//counter
let count = 1
setInterval(()=>{
    console.log(count);
    count++;
},1000)
setTimeout(()=>{
    clearInterval(count);
    console.log("counter stopped")
},5000)



//Implement programs using clearTimeout() and clearInterval().

//cleartimeout()

// 
let OTP = setTimeout(()=>{
    console.log("OTP sent")
},5000)
clearTimeout(OTP)
console.log("OTP Cancelled")

// cancle food order
let order = setTimeout(()=>{
    console.log("Food Delivered")
},4000)
console.log("cancelling order...")
clearTimeout(order)
console.log("order cancelled")

//Auto logout cancle
let logout = setTimeout(()=>{
    console.log("User Logged Out")
},10000)
console.log("User Active")
clearTimeout(logout)
console.log("Logout Cancelled")


// undo delete
let deleteFile = setTimeout(()=>{
    console.log("File Deleted")
},5000)

console.log("Undo Delete")
clearTimeout(deleteFile)


//stop clock
let clock = setInterval(()=>{
    let time = new Date()
    console.log(time.toLocaleTimeString())
},1000)
setTimeout(() => {
    clearInterval(clock)
    console.log("clock stopped")
},5000)


//Build a countdown timer application.

let time = 5
let countdown = setInterval(()=>{
    console.log(time)
    time++;
    if(time === 0){
        clearInterval(countdown)
        console.log("time up")
    }
},1000)

// combination of setTimeout() and ClearTimeout()
let message = setTimeout(()=>{
    console.log("welcome user")
},3000)
console.log("cancelling welcome message")
clearTimeout(message)   



//Document the difference between synchronous and asynchronous execution.

      //Synchronous Execution            Asynchronous Execution
      // 1. Executes line by line        1. Does not wait for tasks
      // 2. Blocking behavior            2. Non-blocking behavior
      // 3. One task at a time            3. Multiple operations possible
      // 4. Slower for long tasks         4. Faster and efficient
      // 5. Can freeze UI                 5. Keeps UI responsive
      // 6. Easier flow                   6. More complex internally


// number patterns using setInterval()
let num = 1
let pattern = setInterval(() =>{
    console.log("*".repeat(num))
    num++;
    if(num > 5){
        clearInterval(pattern)
    }
},)
//
let num1 = 1
let Npattern = setInterval(() =>{
    console.log("*".repeat(num1))
    num1++;
    if(num1 > 5){
        clearInterval(Npattern)
    }
},5000)


// typying animation:
let  text = "HELLO"
let index = 0
let typying = setInterval(()=>{
    console.log(text[index])
    index++
    if(index === text.length){
        clearInterval(typying)
    }
},1000)