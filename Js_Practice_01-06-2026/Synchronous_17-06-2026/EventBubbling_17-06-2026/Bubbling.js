// synchronous: code executed in order line by line in numbers

console.log("task 1 started")
console.log("task 2 started")
console.log("task 3 started")

//example  : after one execution completes then other starts its execution
console.log("start")
for(let i=0;i<4;i++){
    console.log("processing:", i)
}
console.log("End")


//Event Bubbling: this event travels from child to parent element
 document.getElementById("grandparent").addEventListener("click", function(){
    console.log("Grandparent clicked");
 });

  document.getElementById("Parent").addEventListener("click", function(){
    console.log("Parent clicked");
 });

  document.getElementById("Child").addEventListener("click", function(){
    console.log("Child Clicked");
 });

 //example
document.getElementById("parent1").addEventListener("click", () =>{
    console.log("parent clicked")
});

document.getElementById("child1").addEventListener("click", () =>{
    console.log("Button clicked")
})

// clicking different elemnets
document.getElementById("box").addEventListener("click", () =>{
    console.log("Box clicked")
})
document.getElementById("btn").addEventListener("click", () =>{
    console.log("button clicked")
})

// using event.target

document.getElementById("menu").addEventListener("click", function(event){
    console.log("you clicked:", event.target.innerText);
})
