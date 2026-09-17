// JavaScript DOM

// The DOM allows JavaScript to access and change HTML elements dynamically.


// DOM Structure
// What is DOM?

// When a browser loads an HTML page, it converts the HTML into a tree-like structure called the DOM.



// | Term      | Meaning                            |
// | --------- | ---------------------------------- |
// | Document  | Entire webpage                     |
// | Element   | HTML tag such as `<p>`, `<div>`    |
// | Parent    | Element containing another element |
// | Child     | Element inside another element     |
// | Sibling   | Elements having the same parent    |
// | Text node | Text inside an element             |


// Selecting Elements

// Before JavaScript can modify an element, we generally need to select it.

// There are several ways.


// 1. getElementById:

const heading = document.getElementById("title");
console.log(heading);

// example
const price = document.getElementById("price");
console.log(price.textContent);

// getElementByClassName()

let products = document.getElementsByClassName("product");

console.log(products);
console.log(products[0].innerText);
console.log(products[1].innerText);
console.log(products[2].innerText);
//console.log(products[3].innerText);

// example
let msg1 = document.getElementsByClassName("msg1");

msg1[0].computedStyleMap.color = "red";
msg1[1].computedStyleMap.color = "blue";
msg1[2].computedStyleMap.color = "green";


// getElementsByTagName()

// getElementsByTagName() selects elements based on their HTML tag name.

// Syntax
// document.getElementsByTagName("tagName");

let paragraphs = document.getElementsByTagName("p");

        console.log(paragraphs);
        console.log(paragraphs[0].innerText);
        console.log(paragraphs[1].innerText);
        console.log(paragraphs[2].innerText);


// querySelector(): selects the first matching element

const msg = document.querySelector(".msg");
console.log(msg.textContent);
console.log(msg)


// querySelectorAll(): this selcts all matching elements

const a = document.querySelectorAll("li");
console.log(a);

// example
a.forEach(function(a){
    console.log(a.textContent)
} )


// Method	                 Selects
// getElementById()	        One element by ID
// querySelector()	        First matching element
// querySelectorAll()	    All matching elements
// getElementsByClassName()	Elements with class
// getElementsByTagName()	Elements by tag


// Reading DOM Properties

// Once we select an element, we can read its properties.


// 1. textContent

// textContent reads the text inside an element.

const heading1 = document.getElementById("heading1");
console.log(heading1.textContent);

// Updating textContent

// We can also change the text.

const u = document.getElementById("u");
u.textContext = "Hello Hai!!!";

// Updating Input Values

function changeName(){
    document.getElementById("username").value = "sulthana"
}


// textContent → text
// innerHTML   → HTML

//Updating CSS
const j = document.getElementById("j");
j.style.color = "blue";
j.style.fontSize = "40px";


// Creating Elements Dynamically

//Create a Paragraph

const container = document.getElementById("container")
const paragraph = document.createElement("p")
paragraph.textContent = "this is very beatutiful wrold by nature save it coserve ir and reuse it properly";
container.appendChild(paragraph);
container.style.border= "2px solid red"

// example
const p = document.getElementById("p");
const k  = document.createElement("div");
k.textContent = "Laptop - $55000";
p.appendChild(k); 


// Adding Elements

// There are several useful methods.

// appendChild()
// parent.appendChild(child);

const li = document.createElement("li");
li.textContent = "Orange";
document.querySelector("#fruits").appendChild(li)

// todo 

function addTask(){
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    const li = document.createElement("li")
    li.textContent = input.value;
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.onclick = function(){
        li.remove();
    };
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = "";
}


// Removing Elements:

const msg2 = document.getElementById("msg2");

msg2.remove();


// DOM Traversing

// DOM traversal means moving from one element to another through the DOM tree.

//parentElement
const text=document.getElementById("text");
console.log(text.parentElement);

//children

const box = document.getElementById("box");

console.log(box.children);

// firstElementChild

const box1 = document.getElementById("box1");
const first = box1.firstElementChild;
console.log(first.textContent);

//lastElementChild
const last = box1.lastElementChild;
console.log(last.textContent)

// nextElementSibling

const first1 = document.getElementById("first");
console.log(first1.nextElementSibling.textContent);

//previousElementSibling:
const fifth = document.getElementById("fifth");

console.log(fifth.previousElementSibling.textContent);

// | Method / Property        | Purpose             | Example                            |
// | ------------------------ | ------------------- | ---------------------------------- |
// | `getElementById()`       | Select by ID        | `document.getElementById("title")` |
// | `querySelector()`        | Select first match  | `document.querySelector(".box")`   |
// | `querySelectorAll()`     | Select all matches  | `document.querySelectorAll("p")`   |
// | `textContent`            | Read/change text    | `p.textContent = "Hello"`          |
// | `innerHTML`              | Read/change HTML    | `div.innerHTML = "<b>Hello</b>"`   |
// | `value`                  | Read input value    | `input.value`                      |
// | `style`                  | Change inline CSS   | `p.style.color = "red"`            |
// | `getAttribute()`         | Read attribute      | `img.getAttribute("src")`          |
// | `setAttribute()`         | Set attribute       | `img.setAttribute("alt","Photo")`  |
// | `removeAttribute()`      | Remove attribute    | `img.removeAttribute("alt")`       |
// | `createElement()`        | Create element      | `document.createElement("li")`     |
// | `appendChild()`          | Add child           | `ul.appendChild(li)`               |
// | `append()`               | Add content/element | `div.append(p)`                    |
// | `remove()`               | Remove element      | `li.remove()`                      |
// | `parentElement`          | Find parent         | `li.parentElement`                 |
// | `children`               | Find child elements | `div.children`                     |
// | `firstElementChild`      | First child         | `div.firstElementChild`            |
// | `lastElementChild`       | Last child          | `div.lastElementChild`             |
// | `nextElementSibling`     | Next sibling        | `p.nextElementSibling`             |
// | `previousElementSibling` | Previous sibling    | `p.previousElementSibling`         |
