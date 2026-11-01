
export function validateEmployee(employee, employees, editingId = null) {
    if (employee.name.length < 2) {
        return "Name must contain at least 2 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)) {
        return "Please enter a valid email address.";
    }

    if (!employee.department) {
        return "Please enter a department.";
    }

    if (!Number.isFinite(employee.salary) || employee.salary <= 0) {
        return "Salary must be greater than zero.";
    }

    const duplicate = employees.some(item =>
        item.email.toLowerCase() === employee.email.toLowerCase()
        && item.id !== editingId
    );

    if (duplicate) {
        return "This email already exists.";
    }

    return "";
}
