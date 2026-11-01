
import { getEmployees, saveEmployees } from "./storage.js";
import { validateEmployee } from "./validation.js";
import { generateId, debounce } from "./utils.js";
import { displayEmployees } from "./ui.js";
import { fetchEmployeesFromAPI } from "./api.js";

const form = document.getElementById("employeeForm");
const search = document.getElementById("search");
const employeeList = document.getElementById("employeeList");
const message = document.getElementById("message");
const loadApiButton = document.getElementById("loadApi");

let employees = getEmployees();
let editingId = null;

// Display employee data
function render() {
    const searchText = search.value.toLowerCase();

    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchText) ||
        employee.email.toLowerCase().includes(searchText) ||
        employee.department.toLowerCase().includes(searchText)
    );

    displayEmployees(filteredEmployees);
}

// Add or update an employee
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const employee = {
        id: editingId || generateId(),
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        department: document.getElementById("department").value.trim(),
        salary: Number(document.getElementById("salary").value)
    };

    const error = validateEmployee(
        employee,
        employees,
        editingId
    );

    if (error) {
        message.style.color = "red";
        message.textContent = error;
        return;
    }

    if (editingId) {
        employees = employees.map(item =>
            item.id === editingId ? employee : item
        );
        message.textContent = "Employee updated successfully!";
    } else {
        employees.push(employee);
        message.textContent = "Employee added successfully!";
    }

    if (!saveEmployees(employees)) {
        message.style.color = "red";
        message.textContent = "Unable to save employee data.";
        return;
    }

    editingId = null;
    form.reset();
    render();
});

// Edit and delete using event delegation
employeeList.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = button.dataset.id;
    const employee = employees.find(item => item.id === id);

    if (!employee) return;

    if (button.dataset.action === "edit") {
        document.getElementById("name").value = employee.name;
        document.getElementById("email").value = employee.email;
        document.getElementById("department").value = employee.department;
        document.getElementById("salary").value = employee.salary;

        editingId = id;
        message.textContent = "Edit the details and click Add Employee to save.";
    }

    if (button.dataset.action === "delete") {
        if (confirm("Delete " + employee.name + "?")) {
            employees = employees.filter(item => item.id !== id);
            saveEmployees(employees);
            render();
            message.textContent = "Employee deleted successfully!";
        }
    }
});

// Search after the user pauses typing
search.addEventListener("input", debounce(render, 300));

// Fetch sample employees from the API
loadApiButton.addEventListener("click", async function () {
    loadApiButton.disabled = true;
    loadApiButton.textContent = "Loading...";
    message.style.color = "green";
    message.textContent = "Loading sample employees...";

    try {
        const apiEmployees = await fetchEmployeesFromAPI();

        const existingEmails = new Set(
            employees.map(item => item.email.toLowerCase())
        );

        const newEmployees = apiEmployees.filter(
            item => !existingEmails.has(item.email.toLowerCase())
        );

        employees = [...employees, ...newEmployees];

        if (!saveEmployees(employees)) {
            throw new Error("Could not save the imported employees.");
        }

        render();
        message.textContent =
            newEmployees.length + " sample employees loaded!";
    } catch (error) {
        message.style.color = "red";
        message.textContent = error.message;
    } finally {
        loadApiButton.disabled = false;
        loadApiButton.textContent = "Load Sample API Data";
    }
});

// Initial page display
render();
