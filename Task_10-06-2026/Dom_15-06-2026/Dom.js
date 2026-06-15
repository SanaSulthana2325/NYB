//Practice DOM traversing using parent, child, and sibling nodes.

//using parent:
function removeCard(btn){
    btn.parentElement.remove()
}
// using child:

let menu = document.getElementById("menu")
console.log(menu.children)
console.log(menu.firstElementChild)
console.log(menu.lastElementChild)
menu.firstElementChild.computedStyleMap.color = "red"

// using sibling trave


//ex
let task = document.getElementById("task")
console.log(task.firstElementChild)
console.log(task.lastElementChild)


//Create DOM elements dynamically using JavaScript.

// E-Commerce product card
let product = document.createElement("div");
product.innerHTML =`
<h2>laptop</h2>
<p>₹ 50000</p>
<button>Buy Now</button>`
;
document.body.appendChild(product)

// 1.parent---> child
let parent = document.getElementById("parent");
console.log(parent.children)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)
console.log(parent.previousElemenetChild)


//2.child-->parent
let child = document.getElementById("child2")
console.log(child.parentElement)
//3.sibling ---> sibling
let child2 = document.getElementById("child2")
console.log(child2.previousElementSibling);
console.log(child2.nextElementSibling);


//4.child--->child:there is no direct child to child property
let child1 = document.getElementById("child1");

let parent1 = child1.parentElement;
console.log(parent1.children[1]);

//5.parent--->parent: for this nested parents needed
let parent2 = document.getElementById("parent2");
console.log(parent2.parentElement);

//sibling ---> parent
let child3 = document.getElementById("child3")
console.log(child3.parentElement);

//7.parent ---> sibling : parent itself has no direct sibling property
let box1 = document.getElementById("box1")
console.log(box1.nextElementSibling);


//Add and remove elements from the DOM.

//add elements: create new HTML elements dynamically

// add paragraph

document.getElementById("addBtn").addEventListener("click", function(){
    let p2 = document.createElement("p2");
    p2.textContent = "hello sana";
    document.getElementById("container").appendChild(p2);
});

// Remove an elemnts
document.getElementById("removeBtn").addEventListener("click", function(){
    document.getElementById("msg").remove();
});


//Implement event listeners for button click, input, and mouse events.

// event handlers types
//1.click
let btn1 = document.createElement("button")
btn1.textContent = "click Me"
btn1.addEventListener("click",function(){
   console.log("button was clicked")
    btn1.textContent = "clicked"
    btn1.style.bakground = "green"

})
document.body.append(btn1)
console.log("finished")

// 2.single click button
let btn2 = document.createElement("button")
btn2.textContent = "single click me"
btn2.addEventListener("click",() =>{
    console.log("you clicked once")
    btn2.style.background = "lightgreen"
})
document.body.append(btn2)

// 3.doubleclick
let btn3 = document.createElement("button")
btn3.textContent = "Double click me"
btn3.addEventListener("dblclick",() => {
    console.log("you double clicked")
    btn3.textContent = "clicked twice"
})
document.body.append(btn3)

//4.mouseover// when mouse is on sana sulthana the turns orange
let btn4 = document.createElement("button")
btn4.textContent = "sana sulthana"
btn4.addEventListener("mouseover",() => {
    btn4.style.background = "orange"
    btn4.style.color = "white"
})
document.body.append(btn4)

//5.mouseout// when mouse goes from tasan it turns pink
let btn5 = document.createElement("button")
btn5.textContent = "tasan"
btn5.style.background = "red"
btn5.addEventListener("mouseout",() => {
    btn5.style.background = "pink"
    
})
document.body.append(btn5)

//onclick
let btn7 = document.createElement("button")
btn7.textContent = "sana - onclick"
btn7.onclick = function(){
    alert("button clicked using onclick")
    btn7.textContent = "sulthana"
}
document.body.append(btn7)


//mouse down and mouse up

// apply all these in one code
let btn6 = document.createElement("button")
btn6.textContent = "test me"

btn6.addEventListener("mousedown",() =>
console.log("1.Mouse Down"))
btn6.addEventListener("moused up",() =>
console.log("2.Mouse up"))
btn6.addEventListener("click",() =>
console.log("3.click fried"))
btn6.addEventListener("dblclick",() =>
console.log("4.Double Click"))
btn6.addEventListener("mouseover",() =>
console.log("5.Mouse Over"))
btn6.addEventListener("mouseout",() =>
console.log("6.Mouse Out"))

document.body.append(btn6)


//Build a simple dynamic to-do list application.

document.getElementById("addTask")
.addEventListener("click", function(){

   let task =
   document.getElementById("task").value;

   let li =
   document.createElement("li");

   li.textContent = task;

   let btn =
   document.createElement("button");

   btn.textContent = "Delete";

   btn.addEventListener("click", function(){

      li.remove();

   });

   li.appendChild(btn);

   document.getElementById("list")
   .appendChild(li);

});
