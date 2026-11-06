// What is Event Delegation?
// Event Delegation is a JavaScript technique in which we attach a single event listener to a parent element instead of attaching separate event listeners to each child element.

// It works because of a JavaScript concept called Event Bubbling.

let productList = document.getElementById("productList");

productList.addEventListener("click",function(event){

    if (event.target.matches(".product")){
        console.log( event.target.textContent + " Selected");
    }
});


// What is Event Propagation?
// Event Propagation is the process through which an event travels between HTML elements when a user performs an action, such as clicking a button.



// What is Event Bubbling?
// Child → Parent
// Event Bubbling is the process in which an event starts from the target element and travels upward to its parent elements.

document.getElementById("parent").addEventListener("click",function(){
    console.log("Parent Clicked")
});

//child

document.getElementById("child").addEventListener("click",function(){
    console.log("Child clicked");
});

// button

document.getElementById("btn").addEventListener("click",function(){
    console.log("Button Clicked")
});


// What is Event Capturing?
// Parent → Child
// Event Capturing is the process in which an event travels from the outermost ancestor element toward the target element.


document.getElementById("parent1").addEventListener("click",function(){
    console.log("parent clicked")
},true);

document.getElementById("child1").addEventListener("click",function(){
    console.log("child clicked");
},true);


document.getElementById("btn1").addEventListener("click",function(){
    console.log("Button Clicked");
},true);


// Event Bubbling	                         Event Capturing
// Child to Parent	                         Parent to Child
// Travels upward	                      Travels downward
// Default is enabled for click events	   Must be explicitly enabled
// Third parameter is false	           Third parameter is true
// Commonly used in Event Delegation	     Useful when handling events in the capture phase