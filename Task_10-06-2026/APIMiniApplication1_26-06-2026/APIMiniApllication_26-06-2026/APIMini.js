//Create API-based mini applications.

async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    let output = "";
    users.forEach(user => {
        output +=`
        <div class="user-card">
        <h3>${user.name}</h3>
        <p>Email:${user.email}</p>
        <p>City: ${user.address.city}</p>
        </div>`;
    });
    document.getElementById("output").innerHTML = output;
}

// clear data
function clearUsers(){
    document.getElementById("output").innerHTML = "";
}































//Understand Git and GitHub fundamentals.
//Create a GitHub account and repositories.
//Practice repository creation, commits, pushes, and updates.
//Understand basic Git workflow and version control concepts.