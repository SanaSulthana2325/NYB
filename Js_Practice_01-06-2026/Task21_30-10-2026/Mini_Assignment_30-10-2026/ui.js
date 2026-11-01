
export function displayEmployees(employees) {
    const employeeList = document.getElementById("employeeList");

    employeeList.replaceChildren();

    employees.forEach(employee => {
        const row = document.createElement("tr");

        const values = [
            employee.name,
            employee.email,
            employee.department,
            "₹" + Number(employee.salary).toLocaleString("en-IN")
        ];

        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actions = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.dataset.action = "edit";
        editButton.dataset.id = employee.id;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.action = "delete";
        deleteButton.dataset.id = employee.id;

        actions.append(editButton, deleteButton);
        row.appendChild(actions);
        employeeList.appendChild(row);
    });
}
