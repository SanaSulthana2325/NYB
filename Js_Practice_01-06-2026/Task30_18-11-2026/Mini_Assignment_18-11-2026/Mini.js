
// =====================================
// TASK MANAGEMENT APPLICATION
// =====================================


// Get saved tasks from Local Storage
let tasks = [];

try {
    let savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (Array.isArray(savedTasks)) {

        // Remove invalid task records
        tasks = savedTasks.filter(function(task) {
            return task &&
                   typeof task.name === "string";
        });

    }

} catch (error) {
    tasks = [];
}


// =====================================
// 1. ADD TASK
// =====================================

function addTask() {

    let input = document.getElementById("taskInput");

    let taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task object
    let task = {
        id: Date.now(),
        name: taskName,
        completed: false
    };

    // Add task to array
    tasks.push(task);

    // Save and display
    saveTasks();

    displayTasks();

    // Clear input
    input.value = "";
}


// =====================================
// 2. SAVE TASKS IN LOCAL STORAGE
// =====================================

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}


// =====================================
// 3. DISPLAY TASKS
// =====================================

function displayTasks() {

    let taskList = document.getElementById("taskList");

    let searchInput = document.getElementById("searchInput");

    let filterInput = document.getElementById("filter");

    let taskCount = document.getElementById("taskCount");

    // Check HTML elements
    if (!taskList || !searchInput || !filterInput || !taskCount) {
        console.error("Check your HTML element IDs!");
        return;
    }

    let search = searchInput.value.toLowerCase();

    let filter = filterInput.value;

    // Clear previous tasks
    taskList.innerHTML = "";


    // Filter and search tasks
    let filteredTasks = tasks.filter(function(task) {

        let taskName = (task.name || "").toLowerCase();

        // Search condition
        let searchMatch = taskName.includes(search);

        // Filter condition
        let filterMatch =
            filter === "all" ||
            (filter === "pending" && !task.completed) ||
            (filter === "completed" && task.completed);

        return searchMatch && filterMatch;

    });


    // =====================================
    // 4. CREATE TASK ELEMENTS
    // =====================================

    filteredTasks.forEach(function(task) {

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.textContent = task.name;

        span.className = "task-name";


        // Completed task styling
        if (task.completed) {

            span.classList.add("completed");

        }


        // =====================================
        // 5. COMPLETE / UNDO BUTTON
        // =====================================

        let completeBtn = document.createElement("button");

        completeBtn.textContent =
            task.completed ? "Undo" : "Complete";

        completeBtn.className = "complete";

        completeBtn.onclick = function() {

            task.completed = !task.completed;

            saveTasks();

            displayTasks();

        };


        // =====================================
        // 6. EDIT BUTTON
        // =====================================

        let editBtn = document.createElement("button");

        editBtn.textContent = "Edit";

        editBtn.className = "edit";

        editBtn.onclick = function() {

            let newTask = prompt(
                "Edit your task:",
                task.name
            );

            if (newTask !== null && newTask.trim() !== "") {

                task.name = newTask.trim();

                saveTasks();

                displayTasks();

            }

        };


        // =====================================
        // 7. DELETE BUTTON
        // =====================================

        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.className = "delete";

        deleteBtn.onclick = function() {

            let confirmDelete = confirm(
                "Are you sure you want to delete this task?"
            );

            if (confirmDelete) {

                tasks = tasks.filter(function(item) {

                    return item.id !== task.id;

                });

                saveTasks();

                displayTasks();

            }

        };


        // =====================================
        // 8. ADD ELEMENTS TO HTML
        // =====================================

        li.appendChild(span);

        li.appendChild(completeBtn);

        li.appendChild(editBtn);

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });


    // =====================================
    // 9. DISPLAY TASK COUNTS
    // =====================================

    let totalTasks = tasks.length;

    let completedTasks = tasks.filter(function(task) {
        return task.completed;
    }).length;

    let pendingTasks = totalTasks - completedTasks;

    taskCount.textContent =
        "Total Tasks: " + totalTasks +
        " | Completed: " + completedTasks +
        " | Pending: " + pendingTasks;

}


// =====================================
// 10. DISPLAY SAVED TASKS ON PAGE LOAD
// =====================================

displayTasks();
