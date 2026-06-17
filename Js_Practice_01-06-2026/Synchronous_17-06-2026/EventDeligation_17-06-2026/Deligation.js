// Event Deligation:it is technique where instead of adding event listeners to multiple child elements,we add one eventlistener to their parent element and handle events using event bubbling

// example
document.getElementById("menu").addEventListener("click", function(event){
    console.log(event.target.innerText)
})

// button deligation
document.getElementById("container").addEventListener("click", function(event){
    console.log("Clicked:", event.target.innerText);
});


//create dynamic elements

document.getElementById("addBtn").addEventListener("click", function(){
    let newButton = document.createElement("button")
    newButton.innerText = "new Button";
    document.getElementById("box").appendChild(newButton)
});
document.getElementById("box").addEventListener("click", function(event){
    console.log(event.target.innerText)
})


// to do application
document.getElementById("tasks").addEventListener("click", function(event){
    console.log("Task clicked:", event.target.innerText)
})


// e-commerce
document.getElementById("Button").addEventListener("click", function(event){
    console.log("product selected")
})
