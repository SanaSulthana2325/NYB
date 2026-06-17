// Event Capturing:the event starts from top parent element and travels downward to the target element
// this is opposite of event bubbling
// document-->parent-->child-->target element

// example
document.getElementById("parent").addEventListener("click", () =>{
    console.log("parent clicked")
}, true)

document.getElementById("child").addEventListener("click", ()=>{
    console.log("button clicked")
}, true)


// 

document.body.addEventListener("click", () =>{
    console.log("checking authentication.....")
}, true)


// analytical tracking
document.body.addEventListener("click", () =>{
    console.log("Tracking user click")
}, true)

document.getElementById("buyBtn").addEventListener("click", () =>{
    console.log("Buying product")
})

// form validation
document.getElementById("form").addEventListener("click", () =>{
    console.log("Validating form...");
}, true);

document.getElementById("SubmitBtn").addEventListener("click", () => {
    console.log("Submitting form");
});  


// prevent unauthorized action
//  document.body.addEventListener("click", function(event){
    // event.stopPropagation();
    // console.log("Blocked action")
//  }, true)



// capturing+ bubbling together
document.getElementById("parent1").addEventListener("click", () =>{
    console.log("parent capturing");
}, true);

document.getElementById("parent1").addEventListener("click", () =>{
    console.log("parent bubbling");
});


document.getElementById("child1").addEventListener("click", () => {
    console.log("Child Clicked");
});