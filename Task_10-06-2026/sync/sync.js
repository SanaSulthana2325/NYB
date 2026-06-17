//Create examples demonstrating event bubbling.
document.getElementById("parent").addEventListener("click", () => {
    console.log("parent clicked")
})

document.getElementById("child").addEventListener("click", () =>{
    console.log("Button clicked")
})


// multiple level bubbling

document.getElementById("grandparent").addEventListener("click", () =>{
    console.log("Grandparent clicked")
})

document.getElementById("parent1").addEventListener("click", () =>{
    console.log("parent clicked")
})


document.getElementById("child1").addEventListener("click", () =>{
    console.log("child clicked")
})


// stop event bubbling(change parent into button)
document.getElementById("parent").addEventListener("click", () =>{
    console.log("parent clicked");
});


document.getElementById("child").addEventListener("click", (event) =>{
    console.log("sana clicked");
    event.stopPropagation();
});


// example
document.getElementById("menu").addEventListener("click",(event) => {
    console.log("clicked:",event.target.textContent)

})

//Create examples demonstrating event capturing.

document.getElementById("parent3").addEventListener("click", () =>{
    console.log("parent clicked")
},true)


document.getElementById("child2").addEventListener("click",()=>{
    console.log("Button clicked");
},true);


// wesite navigation menu
document.getElementById("navbar").addEventListener("click",() =>{
    console.log("navbar checking click first")
}, true)


// form validation
document.getElementById("form").addEventListener("click",() =>{
    console.log("checking form before submit")
}, true)

// modal popup protection
document.getElementById("modal").addEventListener("click",() =>{
    console.log("Modal detected click first")
}, true)


//Compare the execution flow of bubbling and capturing.
// when an event occures the browser processes it in 3 phases
//-->capturing
//-->Target phase
//-->Bubbling phase

//1. event capturing: travels from top to bottom
// flow

//document--->html--->body--->grandparent--->parent--->child


//
grandparent1.addEventListener("click",()=> console.log("grandparent"),true)

parent4.addEventListener("click", ()=> console.log("parent"),true)

child6.addEventListener("click", ()=> console.log("child"),true)

//event bubbling:travels from bottom to top
// flow
//child--->parent--->grandparent--->body--->html--->document

// code example 

grandparent2.addEventListener("click",()=> console.log("grandparent"))

parent5.addEventListener("click",()=> console.log("parent"))

child7.addEventListener("click",()=> console.log("child"))



//Implement event delegation in dynamic HTML elements.

// dynamic buttons//
const container = document.getElementById("container");
const addBtn = document.getElementById("addBtn")
container.addEventListener("click",(event) => {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.textContent + " clicked")
    }
})

let count = 3;
addBtn.addEventListener("click", () =>{
    const newButton = document.createElement("button")
    newButton.textContent = "Button " + count;
    container.appendChild(newButton)
    count++
})

//Build a dynamic menu or list using event delegation.

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
  const li = document.createElement("li");

  li.innerHTML = `
    ${taskInput.value}
    <button class="delete">Delete</button>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    console.log("Task deleted");
  }
});


// Dynamic table rows


const tableBody = document.getElementById("tableBody");
const addRow = document.getElementById("addRow");

let number = 1;

addRow.addEventListener("click", () => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>User ${number}</td>
    <td><button class="remove">Remove</button></td>
  `;

  tableBody.appendChild(row);

  number++;
});

tableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    event.target.closest("tr").remove();

    console.log("Row removed");
  }
});
