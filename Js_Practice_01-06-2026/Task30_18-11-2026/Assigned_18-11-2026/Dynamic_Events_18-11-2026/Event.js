
let employees = [];

function addEmployee() {

    let name = document.getElementById("empName").value.trim();

    let department = document.getElementById("department").value.trim();

    let salary = document.getElementById("salary").value;

    if (name === "" || department === "" || salary === "" || Number(salary) <= 0) {
        alert("Please enter valid employee details");
        return;
    }

    let employee = {
        name: name,
        department: department,
        salary: Number(salary)
    };

    employees.push(employee);

    displayEmployees();

    document.getElementById("empName").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";

}

function displayEmployees() {

    let list = document.getElementById("employeeList");

    list.innerHTML = "";

    employees.forEach(function(emp, index) {

        let li = document.createElement("li");

        li.textContent =
            emp.name + " - " +
            emp.department + " - ₹" +
            emp.salary;

        let btn = document.createElement("button");

        btn.textContent = "Delete";

        btn.onclick = function() {

            employees.splice(index, 1);

            displayEmployees();

        };

        li.appendChild(btn);

        list.appendChild(li);

    });

    document.getElementById("count").textContent =
        "Total Employees: " + employees.length;

}



// Method / Property	Purpose
// getElementById()	Selects an HTML element
// textContent	Changes text content
// innerHTML	Changes HTML content
// style	Changes CSS styles
// createElement()	Creates a new HTML element
// appendChild()	Adds an element
// remove()	Removes an element
// addEventListener()	Handles user actions
// classList.add()	Adds a CSS class
// classList.remove()	Removes a CSS class
// classList.toggle()	Adds or removes a CSS class