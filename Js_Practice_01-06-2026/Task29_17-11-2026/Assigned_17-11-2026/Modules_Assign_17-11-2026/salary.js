export function calculateBonus(salary){
    return salary * 0.10;
}

export function calculateTotalSalary(salary){
    return salary + calculateBonus(salary);
}