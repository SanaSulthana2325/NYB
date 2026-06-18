// Normal Event:every typing function executes
function sayHello(){
    console.log("Button Clicked!")
}

// input event
function showText(event){
    console.log("you typed:" + event.target.value)
}

// load event(page load complete)

function pageLoaded(){
    console.log("Page fully loaded")
}

// mouse over event
function hoverMessage(){
    console.log("Mouse is over button!")
}

// submit button
function submitForm(event){
    event.preventDefault();
    console.log("Form submitted!")
}

// double click
function Message(){
    console.log("Button Double-clicked!")
}

// keydown events
function checkKey(event){
    console.log("key pressed: " + event.key)
}

// keyup event

function showText(){
    console.log("current value: " +event.target.value)
}

// Focus Event
function focused(){
    console.log("Input box is selected!")
}

// Blur event

function lostFocus(){
    console.log("input lost focus!")
}

// change event
function countryChanged(select) {
    console.log("Selected country: " + select.value)
}

// copy event

function copied(){
    console.log("Text copied!");
}

//scroll event
window.oncroll = function(){
    console.log("user is scrolling....");
}
