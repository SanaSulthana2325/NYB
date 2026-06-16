//Asynchronous JavaScript:
//async : task can run without waiting for previou task to complete 
// and save time while dealing with operations like API calls,timers,or file loading

//
console.log("start")
setTimeout(() =>{
    console.log("task completed")
},2000);
console.log("end")


//setTimeout():is used to execute a piece of code after a specified delay
//---> runs onces
//--->delayed execution
//---> used for one time tasks

console.log("start")
setTimeout(() =>{
    console.log("Hello after 3 seconds")
},3000);
console.log("end")// because end is async

// OTP

console.log("sending OTP....");
setTimeout(() => {
    console.log("OTP sent successfully")
}, 2000);

//loading screen

console.log("loading screen.......");
setTimeout(() =>{
    console.log("website loading")
},3000);

//notification

setTimeout(() =>{
    console.log("new Notification")
},4000)


//using name function

function greet(){
    console.log("welcome Sana")
}
setTimeout(greet,2000)


// passing parameters:
function greet(name){
    console.log("Hello "+ name);
}
setTimeout(greet, 2000, "sana")

//delayed in message
setTimeout(()=>{
    console.log("Welcome Back");
},2000)


// loding spinner
console.log("loading............")
setTimeout(()=>{
    console.log("Data Loaded")
},3000);


// splash screen: apps show logo for few seconds

setTimeout(()=>{
    console.log("Open Home Page")
},4000)

// Auto redirect

setTimeout(()=>{
    console.log("redirecting to dashboard")
},5000)

// Animation
setTimeout(()=>{
    console.log("show animation")
},2000)

//Reminder system

setTimeout(()=>{
    console.log("drink water")
},5000)

// retry failed request

setTimeout(()=>{
    console.log("retrying request......")
},3000)

//clearTimeout():to cancle setTimeout we use this

let timer = setTimeout(() => {
    console.log("this will not run");
},3000)

clearTimeout(timer);

// cancle order
let order = setTimeout(() =>{
    console.log("order confirmed")
},5000)
 clearTimeout(order);
 console.log("order cancelled");


 //multiple setTimeout()

 setTimeout(() =>{
    console.log("1 second");
 }, 1000);

 setTimeout(() =>{
    console.log("2 second");
 }, 2000);

 setTimeout(() =>{
    console.log("3 second");
 }, 3000);


 //setInterval()
//--->runs repeatedly
//---> repeated execution
//--->used for continuous task




let myTimer = setInterval(()=>{
    console.log("runs again and again")
},1000)

// to stop it

setTimeout(()=>{
    clearInterval(myTimer)
    console.log("stopped")
},5000)


// digital clock
setInterval(()=>{
    let time = new Date();
    console.log(time.toLocaleTimeString())
},1000)


// example
let timer1= setInterval(()=>{
    console.log("hello world")
},1000)
setTimeout(()=>{
    clearInterval(timer1)
    console.log("interval stopped")
},5000)

//clearInterval(): stops repeating task


// countdown Timer
let count = 6
let timer2 = setInterval(()=>{
    console.log(count)
    count--;
    if(count === 0){
        clearInterval(timer2)
        console.log("time Up")
    }
},1000)

// stop clock

let clock = setInterval(()=>{
    let time = new Date();
    console.log(time.toLocaleTimeString())

},1000)
setTimeout(() => {
    clearInterval(clock)
    console.log("clocked stopped")
}, 2000);


//
let count1 = 0
let timer3 = setInterval(()=>{
    
    count1++;
    console.log(count1)
    if(count1 === 5){
        clearInterval(timer3)
        console.log("stopped")
    }
},1000)


