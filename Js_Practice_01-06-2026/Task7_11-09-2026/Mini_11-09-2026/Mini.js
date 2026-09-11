const API_URL = "https://jsonplaceholder.typicode.com/users";

const message = document.getElementById("message");
const output = document.getElementById("output");


// =====================================================
// 1. GET REQUEST USING ASYNC/AWAIT
// =====================================================

async function getUsers() {

    message.innerText = "Loading users...";
    output.innerHTML = "";

    try {

        const response = await fetch(API_URL);

        // Check HTTP status
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        message.innerText = "Users received successfully!";

        users.forEach(user => {

            output.innerHTML += `
                <div class="user">
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>City: ${user.address.city}</p>
                </div>
            `;

        });

    } catch (error) {

        message.innerText = "Error: " + error.message;

    } finally {

        console.log("GET request completed");

    }
}


// =====================================================
// 2. POST REQUEST USING PROMISES
// =====================================================

function createUser() {

    message.innerText = "Creating user...";
    output.innerHTML = "";

    const newUser = {

        name: "Sana",
        username: "sana123",
        email: "sana@example.com"

    };


    fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(newUser)

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        return response.json();

    })

    .then(data => {

        message.innerText = "User created successfully!";

        output.innerHTML = `
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;

    })

    .catch(error => {

        message.innerText = "Error: " + error.message;

    })

    .finally(() => {

        console.log("POST request completed");

    });
}


// =====================================================
// 3. PUT REQUEST USING ASYNC/AWAIT
// =====================================================

async function updateUser() {

    message.innerText = "Updating user...";
    output.innerHTML = "";

    const updatedUser = {

        name: "Sana Updated",
        username: "sana_updated",
        email: "sana_updated@example.com"

    };


    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(updatedUser)

        });


        if (!response.ok) {
            throw new Error("Failed to update user");
        }


        const data = await response.json();


        message.innerText = "User updated successfully!";


        output.innerHTML = `
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;

    } catch (error) {

        message.innerText = "Error: " + error.message;

    } finally {

        console.log("PUT request completed");

    }
}


// =====================================================
// 4. PATCH REQUEST
// =====================================================

async function patchUser() {

    message.innerText = "Updating email...";
    output.innerHTML = "";


    const changes = {

        email: "newemail@example.com"

    };


    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(changes)

        });


        if (!response.ok) {
            throw new Error("Failed to patch user");
        }


        const data = await response.json();


        message.innerText = "User email updated successfully!";


        output.innerHTML = `
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;

    } catch (error) {

        message.innerText = "Error: " + error.message;

    } finally {

        console.log("PATCH request completed");

    }
}


// =====================================================
// 5. DELETE REQUEST
// =====================================================

async function deleteUser() {

    message.innerText = "Deleting user...";
    output.innerHTML = "";


    try {

        const response = await fetch(`${API_URL}/1`, {

            method: "DELETE"

        });


        if (!response.ok) {
            throw new Error("Failed to delete user");
        }


        message.innerText = "User deleted successfully!";


        output.innerHTML = `
            <h3>User 1 has been deleted.</h3>
        `;

    } catch (error) {

        message.innerText = "Error: " + error.message;

    } finally {

        console.log("DELETE request completed");

    }
}