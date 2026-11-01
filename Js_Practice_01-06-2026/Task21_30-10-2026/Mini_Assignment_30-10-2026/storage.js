
const STORAGE_KEY = "employees";

export function getEmployees() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Unable to read employees:", error);
        return [];
    }
}

export function saveEmployees(employees) {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(employees)
        );
        return true;
    } catch (error) {
        console.error("Unable to save employees:", error);
        return false;
    }
}
