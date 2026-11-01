
export async function fetchEmployeesFromAPI() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch employees.");
    }

    const users = await response.json();

    return users.slice(0, 5).map((user, index) => ({
        id: "api-" + user.id,
        name: user.name,
        email: user.email,
        department: ["IT", "HR", "Design", "Sales", "Finance"][index],
        salary: 30000 + index * 5000
    }));
}
