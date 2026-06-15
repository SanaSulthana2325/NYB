//DOM Traversing: means moving through the HTML elements(nodes)of a webpage to find parent,child or sibling  elements

//1. Parent Traversing: gets the parent element

let child = document.getElementById("child")
console.log(child.parentElement)
//
let parent = document.getElementById("parent")
console.log(parent.parentElement)



//2. child traversing:Gets all chils elements:

let menu = document.getElementById("menu")
console.log(menu.child)
console.log(menu.firstElementChild)
console.log(menu.lastElementChild)

//3. sibling traversing: Moves to next sibling
let first = document.getElementById("first")
console.log(first.nextElementSibling)

//let second = document.getElementById("second")
//console.log(second.nextElementSibling)

// previousElemengSibling: Moves to previous sibling

// querySelectorAll() // grab all matches using css selector
let third = document.querySelectorAll("p")[2]
console.log(third.previousElementSibling)

let second = document.querySelectorAll("p")[3]
console.log(second.previousElementSibling)

// compare of Dom traversing

let box = document.getElementById("box")
console.log(box.children)
console.log(box.firstElementChild)
console.log(box.lastElementChild)

//e-commerce cart
function removeProduct(btn){
    btn.parentElement.remove()
}

// form Validation:

let input = document.getElementById("name");
input.nextElementSibling.style.color = "red";


//Creating DOM Elements Dynamically: means creating Html elements using javascript insted of writing them directly in HTML


// append // means add at the end
//parentElement.appendChild(newElement)
 //prepend// means add at the start or first

 //parentElement.prepend(newElement)

// example
let p = document.createElement("p")
p.textContent = "hello World"
document.body.appendChild(p)


// example:
let heading = document.createElement("h1")
heading.textContent = "welcome"
document.body.appendChild(heading)

// creating a paragraph

let para = document.createElement("P")
para.textContent = "Lulu is awesome"
document.body.appendChild(para)

// create a button
let btn = document.createElement("button")
btn.textContent = "click me"
document.body.appendChild(btn)


//create an image:
let img = document.createElement("img")
img.src = "nyb photo.jpg"
Image.width = 200
document.body.appendChild(img)


// creating a list dynamically
let ul = document.createElement("ul");
ul.textContent = "Names";

let li1 = document.createElement("li");
li1.textContent = "Sana";

let li2 = document.createElement("li");
li2.textContent = "Tasan";

let li3 = document.createElement("li");
li3.textContent = "sulthana";

ul.append(li1, li2, li3);

document.body.appendChild(ul);


// notification system
let notification = document.createElement("div")
notification.textContent = "your order has been placed successfully";
document.body.appendChild(notification);

// adding attributes dynamically:

// setAttribute()

let link = document.createElement("a");
link.setAttribute(
    "href",
    "https://google.com"
);
link.textContent = "Google";
document.body.appendChild(link)

// a clickable google link appears


//adding fonts dynamically
let box1 = document.createElement("div")
box1.textContent = "Sana Sulthana"

box1.style.backgroundColor = "yellow";
box1.style.padding = "20px";
document.body.appendChild(box1)

// adding event listeners
let btn1 = document.createElement("button")
btn1.textContent = "click"
btn1.addEventListener("click", function(){
    alert("Button clicked")
})
document.body.appendChild(btn1)


// add and delete task

function addTask(){
    let task = document.getElementById("text").value;
    if (task.trim() === ""){
        alert("please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("list").appendChild(li);
    document.getElementById("text").value = "";
}

//Adding Elements to the DOM:means creating HTML elements using javascript and displaying them on the webpage.

//1.addinga heading

let heading1 = document.createElement("h1")
heading1.textContent = "welcome to wrold"
document.body.appendChild(heading1)

//2.adding a paragraph
let para1 = document.createElement("p")
para1.textContent = "learning Dom Manipulation"
document.body.appendChild(para1)

//3. adding a button
let btn2 = document.createElement("button");
btn2.textContent = "submit";
document.body.appendChild(btn2);

//4.adding a link

let link1 = document.createElement("a");
link1.href = "https://www.amazon.in/deals?ref_=nav_cs_gb";

link1.textContent = "Amazon";
document.body.appendChild(link1);

//5. adding a  list item

let li = document.createElement("li");
li.textContent = "HTML";
document.body.appendChild(li)


// student management system 
function addStudent(){

    let li = document.createElement("li");
    
    li.textContent = "Sana";
    
    document.getElementById("students") .appendChild(li);

}

// dynamic employee card

let employee = document.createElement("div");
employee.innerHTML = `
<h3>Sana sulthana</h3>
<p>software developer</p>`;

document.body.appendChild(employee)

// adding Multiple elements togeather:
let div = document.createElement("div")

let h1 = document.createElement("h1")

let p1 =  document.createElement("P1")

h1.textContent = "profile"
p1.textContent = "frontend developer"

div.appendChild(h1)
div.appendChild(p1)

document.body.appendChild(div)


//document.createElement():creates new element
//appenedChild(): adds element to page
//append(): adds multiple elements
//remove(): removes elements
//textContent(): adds text
//innerHTML: add HTML content
// addEventListener(): adds clicks and other events



// addEventListener(): it is used to make a webpage respond to user action like:
//clicking a button
// typing in an input box
//moving the mouse
// pressing a key

// example
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(){
    alert("hello sana");
});

// change text:
let btn5 = document.getElementById("changeBtn");
btn5.addEventListener("click",function(){
    document.getElementById("msg").textContent = "Text Changed Successfully";
});

// change background color
let btn6= document.getElementById("colorBtn");
btn6.addEventListener("click",function(){
    document.body.style.backgroundColor ="pink";
});

// input typing event 
let input1 = document.getElementById("name");
input1.addEventListener("keyup",function(){
    console.log(input1.value);
});

// mouse hover events
let title = document.getElementById("title");
title.addEventListener("mouseover", function(){
    title.style.color = "red";
});

// counter app
let count = 0
document.getElementById("plus").addEventListener("click", function(){
    count++;
    document.getElementById("count").textContent = count;
});


//onclick-->user click
//dbclick--> double click
//mouseover--> mouse enters
//mouseout-->mouse leaves
//keyup--> key realse
//keydown-->key pressed
//change-->value changes
//submit-->form sumbitted
//focus-->input selected
// blur input loses focus
