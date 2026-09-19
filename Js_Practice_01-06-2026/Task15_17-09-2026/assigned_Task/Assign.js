// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const filterButtons = document.querySelectorAll(".filterBtn");

// Get todos from Local Storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Current filter
let currentFilter = "all";

// Display todos when page loads
displayTodos();

// -----------------------------
// ADD TODO
// -----------------------------

addBtn.addEventListener("click", function () {


const task = taskInput.value.trim();

if (task === "") {
    alert("Please enter a task");
    return;
}

const todo = {
    id: Date.now(),
    text: task,
    completed: false
};

todos.push(todo);

saveTodos();

taskInput.value = "";

displayTodos();


});

// -----------------------------
// DISPLAY TODOS
// -----------------------------

function displayTodos() {


// Clear old list
todoList.innerHTML = "";

// Filter todos
let filteredTodos = todos;

if (currentFilter === "completed") {
    filteredTodos = todos.filter(function (todo) {
        return todo.completed === true;
    });
}

if (currentFilter === "pending") {
    filteredTodos = todos.filter(function (todo) {
        return todo.completed === false;
    });
}

// Display each todo
filteredTodos.forEach(function (todo) {

    const li = document.createElement("li");

    // Todo text
    const span = document.createElement("span");
    span.textContent = todo.text;

    // Completed style
    if (todo.completed) {
        span.style.textDecoration = "line-through";
    }

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = todo.completed
        ? "Undo"
        : "Complete";

    completeBtn.addEventListener("click", function () {
        toggleTodo(todo.id);
    });

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function () {
        editTodo(todo.id);
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        deleteTodo(todo.id);
    });

    // Add elements to li
    li.appendChild(span);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(completeBtn);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(editBtn);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(deleteBtn);

    // Add li to ul
    todoList.appendChild(li);
});


}

// -----------------------------
// COMPLETE / UNCOMPLETE TODO
// -----------------------------

function toggleTodo(id) {


todos = todos.map(function (todo) {

    if (todo.id === id) {
        todo.completed = !todo.completed;
    }

    return todo;
});

saveTodos();

displayTodos();


}

// -----------------------------
// EDIT TODO
// -----------------------------

function editTodo(id) {


const todo = todos.find(function (todo) {
    return todo.id === id;
});

const newTask = prompt("Edit your task:", todo.text);

if (newTask === null) {
    return;
}

if (newTask.trim() === "") {
    alert("Task cannot be empty");
    return;
}

todo.text = newTask.trim();

saveTodos();

displayTodos();


}

// -----------------------------
// DELETE TODO
// -----------------------------

function deleteTodo(id) {


todos = todos.filter(function (todo) {
    return todo.id !== id;
});

saveTodos();

displayTodos();


}

// -----------------------------
// FILTER TODOS
// -----------------------------

filterButtons.forEach(function (button) {


button.addEventListener("click", function () {

    currentFilter = button.dataset.filter;

    displayTodos();
});


});

// -----------------------------
// LOCAL STORAGE
// -----------------------------

function saveTodos() {


localStorage.setItem("todos", JSON.stringify(todos));


}
