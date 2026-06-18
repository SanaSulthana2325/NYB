// call back function: it is function that is passed as an argument to another function and is executed later after a task is completed

// example
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayBye(){
    console.log("Good Bye!")
}
greet("Sana", sayBye)

// why are call back functions are important:
//mainly used for
// 1. asynchronous operations
// 2. events
// 3. timers
// 4. API calls
// 5. array method

// call back with button

function showMessage(){
    console.log("Button Clicked!")
}
document.getElementById("btn").addEventListener("click", showMessage);

//callback wth setTimeout()

function displayMessage(){
    console.log("Welcome after 3 seconds")
}
setTimeout(displayMessage,3000)

//callback with array method
let number=[1,2,3,4,5,6,7,8]
number.forEach(function(num){
    console.log(num * 2)
});

//callback with API stimulator
function fetchData(callback){
    console.log("Fetching data....");

    setTimeout(() =>{
        callback()
    }, 2000);
}
function showData(){
    console.log("Data  received")
}
fetchData(showData)

//callback for calculator

function calculate(a, b, operation){
    return operation(a, b)
}
function add(x, y){
    return x + y;
}
console.log(calculate(100, 270, add));

//chat apps using call back
function sendMessage(callback){
    let msg = document.getElementById("message").value;
    console.log("Sending:", msg);
    callback(msg);

}
function messageDelivered(text){
    console.log("Deliverd:", text)
}
document.getElementById("send").addEventListener("click", () => {
    sendMessage(messageDelivered)
});

// Data filtering

let products = [100,200,300,400,500,600]
let filtered = products.filter(function(price){
    return price > 200
})
console.log(filtered)

//API handling
function fetchUser(callback){
    console.log("fetching user....")
    setTimeout(() =>{
        let users = ["Sana","sulthana","Sanam"]
        callback(users)
    }, 2000)
}

function displayUsers(data) {
    console.log(data)
}
fetchUser(displayUsers)

// games using callback

function startGame(callback){
    console.log("Game Started")
    setTimeout(() =>{
        
        callback();
    }, 4000);
}

function gameOver() {
    console.log("Game Over")
}
startGame(gameOver)


