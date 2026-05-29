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
div.addEventListener("click",action)
// ex
document.getElementById("btn").addEventListener("click",() =>{
    console.log("button clicked")
})
document.getElementById("inner").addEventListener("click",() =>{
    console.log("inner div clicked")
})

document.getElementById("outer").addEventListener("click",() =>{
    console.log("Outer div clicked")
})


// capturing:
let div1 = document.getElementById("div1")
function action3(){
    console.log("top parent clicked")
}
div1.addEventListener("click",action3,true)

// ex
document.getElementById("outer").addEventListener("click",() =>{
    console.log("Outer div captured")
},true)

document.getElementById("btn").addEventListener("click",() =>{
    console.log("button clicked")
})


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

//
let list2 = document.getElementById("list2")
list2.addEventListener("click",function(e){
    console.log(e.target.innerText + "clicked")

})


//window.onscroll

console.log(window)


//normal event:// the function runs every time  the event happens

//
let button=document.getElementById("button")

let a = 0
let b = 0
let d = 0

button.addEventListener("click",function (){
    a+=1
    button.textContent = "button clicked"
    console.log("value of a is:",a)
    console.log("button clicked")
})

// ex
let btn = document.getElementById("btn");
let count = 0;

function handleClick() {
  count++;
  console.log(`Normal: Clicked ${count} times`);
}

btn.addEventListener("click", handleClick);


//
let button1=document.getElementById("button1")

let r = 0
let g = 0
let h = 0

button1.addEventListener("click",function (){
    r+=1
    button1.textContent = "button1 clicked"
    console.log("value of r is:",r)
    console.log("button1 clicked")
})

// Throttling

let lastclick=0

button.addEventListener("click",function (){
    let current = Date.now()
    if(current-lastclick > 2000){
        b+=1;
        console.log("value of B is:",b);
        lastclick = current;
    }
    console.log("button clicked")
})

//

let lastclick1=0

button1.addEventListener("click",function (){
    let current = Date.now()
    if(current-lastclick1 > 2000){
        g+=1;
        console.log("value of g is:",g);
        lastclick1 = current;
    }
    console.log("button1 clicked")
})

//Debouncing
let t
button.addEventListener("click",function (){
    clearTimeout(t)
    t=setTimeout(function(){
        d+=1
        console.log("value of c is:",d)
    },2000)
})
//
let t1
button1.addEventListener("click",function (){
    clearTimeout(t1)
    t=setTimeout(function(){
        h+=1
        console.log("value of h is:",h)
    },2000)
})




// call back function

function function1(s){
    console.log(s)
}

function one(a,b,c){
    console.log("one is executed")
    c(a+b)
}

one(1,2,function1)