// addEventListener(): it is used to make a webpage respond to user action like:
//clicking a button
// typing in an input box
//moving the mouse
// pressing a key

//
let btn = document.querySelector("button")
console.log(btn)
let button = document.createElement("button")
button.textContent = "click me sana"
document.body.append(button)
console.log(button)

// event handlers types
//1.click
let btn1 = document.createElement("button")
btn1.textContent = "click Me"
btn1.addEventListener("click",function(){
   console.log("button was clicked")
    btn1.textContent = "clicked"
    btn1.style.bakground = "green"

})
document.body.append(btn1)
console.log("finished")

// 2.single click button
let btn2 = document.createElement("button")
btn2.textContent = "single click me"
btn2.addEventListener("click",() =>{
    console.log("you clicked once")
    btn2.style.background = "lightgreen"
})
document.body.append(btn2)


// 3.doubleclick
let btn3 = document.createElement("button")
btn3.textContent = "Double click me"
btn3.addEventListener("dblclick",() => {
    console.log("you double clicked")
    btn3.textContent = "clicked twice"
})
document.body.append(btn3)

//4.mouseover// when mouse is on sana sulthana the turns orange
let btn4 = document.createElement("button")
btn4.textContent = "sana sulthana"
btn4.addEventListener("mouseover",() => {
    btn4.style.background = "orange"
    btn4.style.color = "white"
})
document.body.append(btn4)

//5.mouseout// when mouse goes from tasan it turns pink
let btn5 = document.createElement("button")
btn5.textContent = "tasan"
btn5.style.background = "red"
btn5.addEventListener("mouseout",() => {
    btn5.style.background = "pink"
    
})
document.body.append(btn5)

//onclick
let btn7 = document.createElement("button")
btn7.textContent = "sana - onclick"
btn7.onclick = function(){
    alert("button clicked using onclick")
    btn7.textContent = "sulthana"
}
document.body.append(btn7)

//ex
let btn8 = document.createElement("button")
btn8.textContent = "sana1 - onclick"
btn8.onclick = function(){
    alert("button clicked using onclick")
    btn8.textContent = "clicked"
}
document.body.append(btn8)

// by new method addEventListener
let btn9 = document.createElement("button")
btn9.textContent = "clickme - addEventListener"
btn9.addEventListener("click", () => {
    alert("button clicked using addEventlistener")
    btn9.textContent = "clicked"
})
document.body.append(btn9)

//ex on onclick and AddeventListener
 btn8.onclick = () =>
    console.log("first")
 btn8.onclick = () =>
    console.log("second")

 // for addEventListener
 btn9.addEventListener("click",() =>
 console.log("first"))
 btn9.addEventListener("click",() =>
 console.log("second"))
 
//mouse down and mouse up

// apply all these in one code
let btn6 = document.createElement("button")
btn6.textContent = "test me"

btn6.addEventListener("mousedown",() =>
console.log("1.Mouse Down"))
btn6.addEventListener("moused up",() =>
console.log("2.Mouse up"))
btn6.addEventListener("click",() =>
console.log("3.click fried"))
btn6.addEventListener("dblclick",() =>
console.log("4.Double Click"))
btn6.addEventListener("mouseover",() =>
console.log("5.Mouse Over"))
btn6.addEventListener("mouseout",() =>
console.log("6.Mouse Out"))

document.body.append(btn6)

// counter button
let count = 0
let counterbtn = document.createElement("button")
let p = document.createElement("p")

counterbtn.textCount = "Count:0"
counterbtn.addEventListener("click",() =>{
    count++
    counterbtn.textContent = "count:" + count
    p.textContent = "you clicked" +count + "times"

})
document.body.append(counterbtn,p)




// synchronous: code executive in order line by line in numbers 

//  asynchronous Executions

//
let child = document.getElementById("innertext")
function action(){
    console.log("inner h1 clicked")
}
child.addEventListener("click",action)

//
let parent = document.getElementById("outertext")
function action1(){
    console.log("outer text")
}
parent.addEventListener("click",action1,true)

//event bubbling: this event travels from child to parent element
let div = document.getElementById("div")
function action2(){
    console.log("parent element")
}
div.addEventListener("click",action2)

// capturing:
let div1 = document.getElementById("div1")
function action3(){
    console.log("top parent clicked")
}
div1.addEventListener("click",action3,true)

//
let list = document.getElementById("list")
function listclick(){
    console.log("clicked")
}
list.addEventListener("click",listclick)

//deligation
let list1 = document.getElementById("list")
function listclick(){
    console.log("clicked")
}
list1.addEventListener("click",function (e){
console.log(e.target.innerText)
})

//window.onscroll

console.log(window)


//normal event


// Throttling

//Debouncing


