let num = 1
let pattern = setInterval(() =>{
    console.log("*".repeat(num))
    num++;
    if(num > 5){
        clearInterval(pattern)
    }
},1000)

// typying animation:
let  text = "HELLO"
let index = 0
let typying = setInterval(()=>{
    console.log(text[index])
    index++
    if(index === text.length){
        clearInterval(typying)
    }
},5000)

// game health reduction

let health = 100
let game = setInterval(()=>{
    health -=10
    console.log("health:", health)
    if(health === 0){
        clearInterval(game)
        console.log("Game Over")
    }
},9000)