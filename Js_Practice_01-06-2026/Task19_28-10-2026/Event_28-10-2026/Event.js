// Event Handling
// Event handling means writing JavaScript code that runs when a particular event occurs.

// The most common way to handle events is with addEventListener().

const button = document.getElementById("welcomeBtn");
const msg = document.getElementById("msg");

button.addEventListener("click",function(){
    msg.textContent = "welcome to wrold!!";
});


// Click Events
// A click event occurs when a user clicks an element, such as a button, link, or image.


let totalItems = 0;

const cart = document.getElementById("cart1");
const button1 = document.getElementById("addBtn")

button1.addEventListener("click",function(){
    totalItems++;
    cart.textContent = "Cart Items: "+ totalItems;
});


// Input Events
// The input event fires whenever the value of an input field changes through user input, such as typing, pasting, or deleting text.

const username = document.getElementById("username");
  const preview = document.getElementById("preview");

  username.addEventListener("input", function() {
    preview.textContent = "Hello, " + username.value;
  });


//   Change Events
// The change event fires when a value is committed. For a text input, it usually fires after the value has changed and the user leaves the field. For a dropdown, it generally fires when a selection changes.

const department = document.getElementById("department");
const result = document.getElementById("result");

department.addEventListener("change",function(){
    result.textContent = "selected Department: " + department.value;
});


// Difference between input and change:
// input event	                    change event
// Responds as text is edited	    For text inputs, usually responds when the edit is committed
// Useful for live search	        Useful for confirmed selections
// Often fires many times while 
// typing	                          Usually fires less frequently



// Submit Events
// The submit event occurs when a form is submitted, such as when a user clicks a submit button or presses Enter in a form field.

const form = document.getElementById("loginForm");
const username1 = document.getElementById("username1");
const result1 = document.getElementById("result1");

form.addEventListener("submit",function(event){
    event.preventDefault();

    if(username1.value.trim() === ""){
        result.textContent = "please enter your name";
    }else{
        result1.textContent = "welcome, " + username1.value + "!";
    }
});


// Why use event.preventDefault()?

// A normal form submission may reload the page or navigate to another URL. Calling preventDefault() stops that default browser behavior so the JavaScript can show the result on the same page.

// Note: this is a demonstration, not a secure authentication system. Real login systems must verify credentials on a server.


// Keyboard Events
// Keyboard events allow JavaScript to respond when users press or release keys.

// Common keyboard events:
// - keydown — when a key is pressed.
// - keyup — when a key is released.

const input = document.getElementById("chatInput");

const output = document.getElementById("chatOutput");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        output.textContent = "message sent: " + input.value;
        input.value ="";
    }
});


// Mouse Events
// Mouse events let you respond to actions involving a mouse or similar pointing device.

// Common           mouse events:
// Event	              Meaning
// click	             Element is clicked
// dblclick	             Element is double-clicked
// mouseover	          Pointer moves onto an element or one of its descendants
// mouseout             	Pointer leaves an element or moves to one of its descendants
// mousedown	            Mouse button is pressed
// mouseup	              Mouse button is released
// mousemove	           Pointer moves


const pro = document.getElementById("pro");
pro.addEventListener("mouseover", function(){
    pro.style.backgroundColor = "lightblue";
});

pro.addEventListener("mouseout",function(){
    pro.style.backgroundColor = "red";
});


// Event Object
// When an event occurs, the browser provides an event object containing information about that event.

// Developers commonly name it event or e.

// It can provide information such as:
// - event.type — the event type.
// - event.target — the element where the event originated.
// - event.currentTarget — the element whose listener is currently running.
// - event.key — the key involved in a keyboard event.
// - event.clientX and event.clientY — pointer coordinates relative to the viewport for mouse events.


document.querySelectorAll("button").forEach(function(button){
    button.addEventListener("click",function(event){
        console.log("Event:", event.type);
        console.log("Clicked:",event.target.textContent);
    });
});


// Event Bubbling
// Event bubbling means that an event starts at the element where it occurs and then propagates upward through its ancestors.

// For example, clicking a button inside a div can trigger click listeners on both the button and the surrounding div.

document.getElementById("buyBtn").addEventListener("click",function(){
    console.log("Button Clicked");
});

document.getElementById("cartPanel").addEventListener("click", function(){
    console.log("Cart panel clicked");
});


// Event Capturing
// Event capturing is the propagation phase in which the event travels from outer ancestors toward the target element.

// To register a listener for capturing, pass true as the third argument to addEventListener().

document.getElementById("profile").addEventListener("click",function(){
    console.log("Profile capturing");
},true);

document.getElementById("viewBtn").addEventListener("click",function(){
    console.log("view button clicked");
});


// Event Delegation
// Event delegation means adding one event listener to a parent element to handle events from multiple child elements.

// It works because many events bubble up from their target elements to their parents.

const cartList = document.getElementById("cartList");

cartList.addEventListener("click",function(event){
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove()
    }
});



// Why is event delegation useful?
// - It reduces the number of event listeners.
// - It works for child elements added dynamically, provided their events bubble to the parent.
// - It is commonly used for product lists, tables, menus, and task managers.


// preventDefault()
// The preventDefault() method prevents the browser's default action for an event.

// Common examples of default browser behavior include:
// - Navigating to a URL when a link is clicked.
// - Reloading or navigating when a form is submitted.
// - Performing a normal form submission.

const form1 = document.getElementById("registerForm");
const nameInput = document.getElementById("name");

const result2 = document.getElementById("result2");

form1.addEventListener("submit", function(event){
    event.preventDefault();
    result2.textContent = "Registarion submitted for " + nameInput.value;
});


// stopPropagation()
// The stopPropagation() method stops the current event from continuing to propagate to other elements in the capturing or bubbling path.


const card = document.getElementById("employeeCard");
const delBtn = document.getElementById("delBtn");

card.addEventListener("click",function(){
    console.log("Employee card clicked");
});

delBtn.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("Delete button clicked")
});



// Difference between preventDefault() and stopPropagation()
// preventDefault()	                              stopPropagation()
// Prevents the default browser   action	    Stops further propagation of the event
// Does not automatically stop bubbling	       Does not automatically prevent the default action
// Useful for forms and links	                Useful for nested clickable elements



// No.	Concept	           Main purpose
// 1	Event Handling	   Respond to user actions
// 2	Click Events	   Handle button and element clicks
// 3	Input Events	   Respond immediately to input edits
// 4	Change Events	   Respond to committed value changes
// 5	Submit Events	    Handle form submissions
// 6	Keyboard Events	    Respond to key presses and releases
// 7	Mouse Events	    Respond to mouse actions
// 8	Event Object	     Access information about an event
// 9	Event Bubbling	      Propagate from target to ancestors
// 10	Event Capturing	     Propagate from ancestors toward target
// 11	Event Delegation	Handle child events through a parent
// 12	preventDefault()	Prevent the default browser action
// 13	stopPropagation()	Stop event propagation