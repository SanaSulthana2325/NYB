//Dom

// document object model

// getElementById() // single element

console.log(document)
let h1 = document.getElementById("heading")
console.log(h1)

let h2 = document.getElementById("text")
console.log(h2)

//
let heading = document.getElementById("title")
console.log(heading.innerText)
heading.style.color = "red"

// getElementByClassName() // list of elements or collection of elements

let c = document.getElementsByClassName("h3")
console.log(c)

//
let paras = document.getElementsByClassName("text")
console.log(paras.length)
console.log(paras[0].innerText)
paras[1].style.color = "blue"


// getElementsByTagName()// grab element using HTML tag name
let E = document.getElementsByTagName("h1")
console.log(E)

//
let allPara = document.getElementsByTagName("p")
console.log(allPara)
console.log(allPara.length)


//
let allButtons = document.getElementsByTagName("button")
console.log(allButtons)

//
let buttons = document.getElementsByTagName("button")
console.log(buttons.length)
buttons[0].innerText = "new text"

//
let allDiv = document.getElementsByTagName("div")
console.log(allDiv)

// querySelector() // grab first match using CSS selector
let q = document.querySelector("h1")
console.log(q)

//
let firstBox = document.querySelector(".box")
console.log(firstBox.innerText)

let para = document.querySelector("#para")
let firstP = document.querySelector("P")
console.log(para)
console.log(firstP)

let name ="Sana"
document.getElementById("output").innerHTML = name
console.log(name)

// querySelectorAll() // grab all matches using css selector
 let allBoxes = document.querySelectorAll(".box")
 console.log(allBoxes.length)

 //
 allBoxes.forEach(box => {
    box.style.background = "yellow"
 })

 // to grab elements
 let input = document.getElementById("userName")
 let title = document.querySelector(".heading")
console.log(input)


// read properties
console.log(input.value)
console.log(title.innerText)

// change properties
title.innerText = "Hello" + input.value
title.style.color = "green"

// querySelector example

let firstPara = document.querySelector(".para")
console.log(firstPara.innerText)
firstPara.style.color="yellow"

//querySelectorAll()
let allParas = document.querySelectorAll(".para")
console.log(allParas.length)

// By ID with #
let heading2 = document.querySelector("#title")
heading2.innerText = "hi Sana"
console.log(heading2)