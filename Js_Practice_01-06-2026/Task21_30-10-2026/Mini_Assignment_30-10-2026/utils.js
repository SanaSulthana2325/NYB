
export function generateId() {
    return crypto.randomUUID();
}

export function debounce(callback, delay = 300) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

export function formatSalary(salary) {
    return "₹" + Number(salary).toLocaleString("en-IN");
}
