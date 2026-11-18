// What is DOM?
// DOM stands for Document Object Model.

// It is a programming interface that allows JavaScript to access, change, add, or remove HTML elements, content, and styles.

// In simple words:
// - HTML creates the structure of a webpage.
// - CSS adds styling to the webpage.
// - JavaScript makes the webpage interactive.
// - DOM helps JavaScript communicate with HTML.

//
function changeText(){
    document.getElementById("heading").innerHTML =
     "Welcome to Dom!!";
}


//  What is a DOM Tree?
// The browser converts HTML code into a tree-like structure called the DOM Tree.

// Every HTML element becomes a node.


// Term	Meaning
// Document	Entire HTML webpage
// Element	HTML tag like h1, p, div
// Parent	Element containing another element
// Child	Element inside another element
// Sibling	Elements having the same parent
// Node	Individual item in the DOM tree


// Method	                Purpose
// getElementById()	Selects an element using ID
// getElementsByClassName()	Selects elements using class
// getElementsByTagName()	Selects elements using tag name
// querySelector()	Selects the first matching CSS selector
// querySelectorAll()	Selects all matching CSS selectors

// select by ID
let heading = document.getElementById("title");
console.log(heading.textContent);

//selecr by class

let p = document.getElementsByClassName("info");

console.log(p[0].textContent);
console.log(p[1].textContent);

// by tag name

let buttons = document.getElementsByTagName("button1");
console.log(buttons[0].textContent);

// querySelector

let firstPara = document.querySelector(".info");
console.log(firstPara.textContent);

// query selector all
let para = document.querySelectorAll(".info");
para.forEach(function(item){
    console.log(item.textContent);
});


// example

let emp = document.getElementById("emp");
console.log(emp.textContent);


// What is DOM Manipulation?
// DOM manipulation means changing the HTML content, attributes, styles, or structure of a webpage using JavaScript.

// For example:
// - Changing text.
// - Changing colors.
// - Hiding elements.
// - Showing elements.

// Important DOM manipulation properties
// Property	              Purpose
// innerHTML	Gets or changes HTML content
// textContent	Gets or changes text content
// innerText	Gets or changes visible text
// style	Changes CSS styling
// classList	Adds, removes, or toggles CSS classes
// setAttribute()	Sets an HTML attribute

// inner HTML

function updateEmployee(){
    document.getElementById("name").textContent = "Employee:Sara";

    document.getElementById("salary").textContent = "Salary:30000";

    document.getElementById("name").style.color = "blue";
}


// Creating and Removing HTML Elements
// Sometimes we need to add new elements or delete existing elements dynamically without refreshing the webpage.

// For this, JavaScript provides:
// Method	Purpose
// createElement()	Creates a new HTML element
// appendChild()	Adds an element inside another element
// append()	Adds elements or text
// remove()	Removes an element
// removeChild()	Removes a child element


//
function addStudent() {

    let name =
    document.getElementById("studentName").value;

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    // Create new element
    let li = document.createElement("li");

    // Add text
    li.textContent = name;

    // Add to student list
    document.getElementById("studentList")
    .appendChild(li);

    // Clear input
    document.getElementById("studentName").value = "";
}

// remove
function removeStudent() {

    let list =
    document.getElementById("studentList");

    list.lastElementChild.remove();
}