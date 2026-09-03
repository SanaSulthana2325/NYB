// API URL
const apiURL =
    "https://jsonplaceholder.typicode.com/users";


// Get HTML elements
const loadButton =
    document.getElementById("loadButton");

const loading =
    document.getElementById("loading");

const error =
    document.getElementById("error");

const userContainer =
    document.getElementById("userContainer");


// Add click event to button
loadButton.addEventListener("click", getUsers);


// Function to get users
async function getUsers() {

    try {

        // Clear old data and errors
        userContainer.innerHTML = "";
        error.textContent = "";


        // Disable button
        loadButton.disabled = true;


        // Show loading message
        loading.style.display = "block";


        // Wait for 3 seconds
        await new Promise(resolve => {
            setTimeout(resolve, 1000);
        });


        // Fetch users from API
        const response = await fetch(apiURL);


        // Check response
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }


        // Convert response to JSON
        const users = await response.json();


        // Hide loading message
        loading.style.display = "none";


        // Display users
        users.forEach(user => {

            const userCard =
                document.createElement("div");

            userCard.className = "user-card";


            userCard.innerHTML = `

                <h2>${user.name}</h2>

                <p>
                    <strong>Username:</strong>
                    ${user.username}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${user.email}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${user.phone}
                </p>

                <p>
                    <strong>City:</strong>
                    ${user.address.city}
                </p>

            `;


            userContainer.appendChild(userCard);

        });


        // Enable button again
        loadButton.disabled = false;

    }

    catch (err) {

        // Hide loading
        loading.style.display = "none";


        // Show error
        error.textContent =
            "Unable to load users. Please try again.";


        // Enable button again
        loadButton.disabled = false;


        console.log(err);

    }

}