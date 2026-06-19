//DOM Introduction( document object model)

//The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents a web page as a tree-like structure of objects, allowing JavaScript to access, modify, add, or delete elements and content dynamically.

//Why is the DOM Important?

//The DOM enables JavaScript to:

//Change HTML content
//Modify CSS styles
//Respond to user actions (clicks, key presses, etc.)
//Create and remove elements dynamically


//Key DOM Concepts:
//Nodes: Every element, attribute, and text in a document is a node.
//Elements: HTML tags such as <div>, <p>, and <h1>.
//Attributes: Properties like id, class, and src.
//Events: Actions such as clicks, key presses, and mouse movements.
//Traversal: Moving between parent, child, and sibling elements.


// example changing content using Dom

function changeText(){
    document.getElementById("title").innerText = "DOM Update!"
}

// for changing content
function changeContent(){
document.getElementById("title").innerHTML = "New Text"
}



//Reading DOM Properties:
//DOM properties are values that let you read information from HTML elements using JavaScript. You can use them to get text, attributes, structure, and user input from the page.


// common DOM properties we can read is

// innerText---->visible text inside an element
// textContent----> all text(even hidden)
// innerHTML----> HTML inside an element
// Value---->input field value
// id, className---->attributes
// href,src----> link,image source
// style----> inline styles

//1. reading text Content
function readText(){
    let text = document.getElementById("title3").innerText
    document.getElementById("output").innerText = text
}

//2.reading input values
function showValue(){
    let val = document.getElementById("name").value
    document.getElementById("result").innerText = val
}

//3. reading attributes
function readLink(){
    let url = document.getElementById("link").href;
    document.getElementById("out").innerText = url
}

// 4. image source
function getSrc(){
    let src = document.getElementById("img1").src;
    document.getElementById("result1").innerText = src
}

//Selecting DOM Elements

//Common DOM Methods
//Method	                                            Description
//document.getElementById()          	              Selects an element by ID
//document.getElementsByClassName()	                  Selects elements by class
//document.getElementsByTagName()	                  Selects elements by tag name
//document.querySelector()	                          Selects the first matching CSS selector
//document.querySelectorAll()	                      Selects all matching CSS selectors


//1. getElementById: most common

let element = document.getElementById("title5");
console.log(element.innerText)

//2.getElementByClassName
let elements = document.getElementsByClassName("msg")
console.log(elements[0].innerText);
console.log(elements[1].innerText);

// getElementByTagName()
let paras = document.getElementsByTagName("p")
console.log(paras.length)

// querySelector():(modern method)
// selects first matching element

let el = document.querySelector(".text")
console.log(el.innerText)

// querySelectorAll():very important method
//Selects all matching elements
let all = document.querySelectorAll(".text1")
all.forEach(item => {
    console.log(item.innerText)
})