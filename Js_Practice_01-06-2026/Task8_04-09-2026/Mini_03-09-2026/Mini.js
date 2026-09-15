// ========================================
// 1. DOM SELECTION
// ========================================

const searchInput = document.getElementById("searchInput");

const loadUsersBtn = document.getElementById("loadUsersBtn");

const userForm = document.getElementById("userForm");

const nameInput = document.getElementById("nameInput");

const emailInput = document.getElementById("emailInput");

const userList = document.getElementById("userList");

const message = document.getElementById("message");


// ========================================
// 2. ARRAY TO STORE USERS
// ========================================

let users = [];


// ========================================
// 3. LOAD USERS FROM LOCAL STORAGE
// ========================================

const savedUsers = localStorage.getItem("users");

if (savedUsers) {

    users = JSON.parse(savedUsers);

    displayUsers(users);

}


// ========================================
// 4. LOAD USERS FROM API
// ========================================

loadUsersBtn.addEventListener("click", getUsersFromAPI);


async function getUsersFromAPI() {

    try {

        message.textContent = "Loading users...";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // Check HTTP response
        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        const data = await response.json();


        // Store API users
        users = data;


        // Save to Local Storage
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


        // Display users
        displayUsers(users);


        message.textContent =
            "Users loaded successfully!";

    } catch (error) {

        console.error(error);

        message.textContent =
            "Failed to load users.";

    }

}


// ========================================
// 5. DISPLAY USERS
// ========================================

function displayUsers(userArray) {

    userList.innerHTML = "";


    if (userArray.length === 0) {

        userList.innerHTML =
            "<p>No users found.</p>";

        return;
    }


    userArray.forEach(function(user) {

        const userCard =
            document.createElement("div");


        userCard.className = "user-card";


        userCard.innerHTML = `
            <h3>${user.name}</h3>

            <p>Email: ${user.email}</p>

            <button
                class="delete-btn"
                data-id="${user.id}"
            >
                Delete
            </button>

            <hr>
        `;


        userList.appendChild(userCard);

    });

}


// ========================================
// 6. FORM HANDLING
// ========================================

userForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name = nameInput.value.trim();

        const email = emailInput.value.trim();


        // Validation
        if (name === "" || email === "") {

            message.textContent =
                "Please enter name and email.";

            return;
        }


        // Create new user
        const newUser = {

            id: Date.now(),

            name: name,

            email: email

        };


        // Add user to array
        users.push(newUser);


        // Save updated array
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


        // Display updated users
        displayUsers(users);


        // Clear form
        nameInput.value = "";

        emailInput.value = "";


        message.textContent =
            "User added successfully!";

    }
);


// ========================================
// 7. EVENT DELEGATION
// ========================================

userList.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "delete-btn"
            )
        ) {

            const userId =
                Number(event.target.dataset.id);


            deleteUser(userId);

        }

    }
);


// ========================================
// 8. DELETE USER
// ========================================

function deleteUser(userId) {

    users = users.filter(function(user) {

        return user.id !== userId;

    });


    // Update Local Storage
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    // Update DOM
    displayUsers(users);


    message.textContent =
        "User deleted successfully.";

}


// ========================================
// 9. SEARCH USERS
// ========================================

searchInput.addEventListener(
    "input",
    function() {

        const searchText =
            searchInput.value.toLowerCase();


        const filteredUsers =
            users.filter(function(user) {

                return user.name
                    .toLowerCase()
                    .includes(searchText);

            });


        displayUsers(filteredUsers);

    }
);