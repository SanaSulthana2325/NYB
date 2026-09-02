// ========================================
// SAVE USER DETAILS
// ========================================

function saveUser() {

    try {

        // Get values from HTML
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let email = document.getElementById("email").value;


        // Validate name
        if (name === "") {
            throw new Error("Name is required");
        }


        // Validate age
        if (age === "") {
            throw new Error("Age is required");
        }

        if (age < 18) {
            throw new Error("Age must be 18 or above");
        }


        // Validate email
        if (!email.includes("@")) {
            throw new Error("Please enter a valid email");
        }


        // Create user object
        let user = {
            name: name,
            age: age,
            email: email
        };


        // Convert object into JSON string
        let userData = JSON.stringify(user);


        // Store data in Local Storage
        localStorage.setItem("user", userData);


        // Display success message
        document.getElementById("message").textContent =
            "User information saved successfully!";

    }

    catch (error) {

        // Handle error
        document.getElementById("message").textContent =
            "Error: " + error.message;
    }
}


// ========================================
// DISPLAY USER
// ========================================

function displayUser() {

    try {

        // Get data from Local Storage
        let userData = localStorage.getItem("user");


        // Check if data exists
        if (userData === null) {
            throw new Error("No user information found");
        }


        // Convert JSON string back into object
        let user = JSON.parse(userData);


        // Display user information
        document.getElementById("userDetails").innerHTML =
            "Name: " + user.name + "<br>" +
            "Age: " + user.age + "<br>" +
            "Email: " + user.email;

    }

    catch (error) {

        document.getElementById("userDetails").textContent =
            "Error: " + error.message;
    }
}


// ========================================
// CLEAR USER
// ========================================

function clearUser() {

    try {

        // Remove user from Local Storage
        localStorage.removeItem("user");


        // Clear displayed information
        document.getElementById("userDetails").textContent = "";

        document.getElementById("message").textContent =
            "User information cleared.";

    }

    catch (error) {

        document.getElementById("message").textContent =
            "Error: " + error.message;
    }
}