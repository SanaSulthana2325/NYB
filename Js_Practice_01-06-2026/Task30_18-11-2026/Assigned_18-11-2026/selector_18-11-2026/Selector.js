// What is DOM?
// DOM stands for Document Object Model.

// It is a programming interface that allows JavaScript to access and modify HTML elements.

// What is the Document Object?
// The document object represents the webpage loaded in the browser.

// Using the document object, we can select, modify, create, and remove HTML elements.

console.log(document.title);

console.log(document.URL);

console.log(document.body);

console.log(document.head);

//getElementById:
let result = document.getElementById("heading")
console.log(result.textContent);


// querySelector(): selects first element that matches CSS selector

let result1 = document.querySelector(".info");
console.log(result1.textContent);

// querySelectorAll():
let r = document.querySelectorAll(".lu");
r.forEach(function(item){
    console.log(item.textContent);
})



// Method	Purpose	Result
// getElementById()	Selects using ID	One element
// querySelector()	First matching CSS selector	One element
// querySelectorAll()	All matching CSS selectors	NodeList



// What is Dynamic Content?
// Dynamic content means changing webpage content using JavaScript without manually modifying the HTML file or refreshing the page.

let list = document.getElementById("students");

// Create a new element
let newStudent = document.createElement("li");

// Add content
newStudent.textContent = "Kiran";

// Add to webpage
list.appendChild(newStudent);

// updating

let heading = document.getElementById("employee");

heading.style.color = "blue";

heading.style.backgroundColor = "lightyellow";

heading.style.padding = "10px";


// removing student
document.getElementById("student2").remove();