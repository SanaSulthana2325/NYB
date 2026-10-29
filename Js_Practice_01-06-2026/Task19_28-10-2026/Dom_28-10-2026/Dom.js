// Introduction to DOM
// DOM stands for Document Object Model. When a browser loads an HTML page, it converts the HTML into a tree of objects that JavaScript can access and modify.

function changeHeading(){
    document.getElementById("heading").textContent = "welcome to wrold"
}


// DOM Tree
// The DOM tree represents HTML elements in a parent-child structure.

// Selecting Elements
// Before changing an HTML element, JavaScript usually needs to select it.


// Method	                           Purpose
// getElementById()	         Selects one element by its ID
// querySelector()	         Selects the first element matching a CSS selector
// querySelectorAll()	     Selects all elements matching a CSS selector

// selecting elements
const title = document.getElementById("title");
const firstInfo = document.querySelector(".info");
const allInfo = document.querySelectorAll(".info");

console.log(title.textContent);
console.log(firstInfo.textContent);
console.log(allInfo.length);


// getElementById()
// This method selects an HTML element using its unique id.

const employee = document.getElementById("employeeName");

employee.textContent = "vivek";
console.log(employee.textContent)

// querySelector()
// The querySelector() method selects only the first element that matches a CSS selector.

const message = document.querySelector(".notification");

console.log(message.textContent);

// querySelectorAll()
// This method selects all elements matching a CSS selector and returns a NodeList.

const tasks = document.querySelectorAll(".task");

tasks.forEach(function(task){
    console.log(task.textContent);
    console.log(task.length);
});

// Creating Elements
// The document.createElement() method creates a new HTML element in memory. It does not display the element until you add it to the document.

const message1 = document.createElement("p");
message1.textContent = "Your order has been shipped!";

console.log(message1.textContent);


// Adding Elements
// Use appendChild() or append() to add a newly created element to an existing element.

const list = document. getElementById("employeeList");

const newEmployee = document.createElement("li");

newEmployee.textContent = "Affu";

list.appendChild(newEmployee);

// Removing Elements
// Use remove() to remove an element from the webpage.

const task = document.getElementById("task1");

notifications.remove();

// Updating Content
// JavaScript allows you to update the content of existing HTML elements without rebuilding the whole page.

const cart = document.getElementById("cart");

cart.textContent = "Cart Items: 3";

console.log(cart.textContent);

// textContent
// The textContent property reads or changes the text inside an element. It treats assigned content as plain text, not HTML markup.

const UserName = "Ananya";

document.getElementById("welcome").textContent = "Welcome back, "+ UserName + "!";


// innerHTML
// The innerHTML property reads or changes the HTML markup inside an element.

document.getElementById("product").innerHTML = "<h3>Laptop</h3><p>Price: <b>₹50,000</b></p>";


// Difference between textContent and innerHTML

// textContent	                      innerHTML
// Handles plain text	              Handles HTML markup
// Displays <b>Hello</b> literally	  Renders Hello in bold
// Generally safer for text	      Can create security risks with untrusted input


// 13. Attributes
// HTML attributes provide additional information about an element. Examples include id, class, src, href, alt, and disabled.

// JavaScript can read, add, update, and remove attributes using methods such as:
// - getAttribute()
// - setAttribute()
// - removeAttribute()
// - hasAttribute()

const image = document.getElementById("profile");

image.setAttribute("src","nyb photo.jpg");

console.log(image.getAttribute("src"));


// classList
// The classList property allows you to add, remove, toggle, and check CSS classes using JavaScript.

// It is useful when you want to change an element's appearance dynamically.

// Common methods:
// Method	Purpose
// add()	Adds a CSS class
// remove()	Removes a CSS class
// toggle()	Adds a class if absent, otherwise removes it
// contains()	Checks whether a class exists


const status = document.getElementById("status");

status.textContent = "Employee status: Active";
status.classList.add("active");

console.log(status.classList.contains("active"));

// Inline Styles
// JavaScript can directly change an element's CSS using its style property.

const message2 = document.getElementById("message2")

message2.style.color = "red";
message2.style.backgroundColor = "Yellow";
message2.style.fontSize = "20px";
message2.style.padding = "10px"; 


// Dynamic UI Updates
// Dynamic UI updates mean changing what users see or interact with in response to actions such as clicks, typing, or form submissions.

// This combines several DOM concepts: selecting elements, reading input values, creating elements, updating content, and adding event listeners.
