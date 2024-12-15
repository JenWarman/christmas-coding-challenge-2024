// raiseSalaries(employees, percentageIncrease)

// Takes an array of employees and a number representing a percentage increase, and returns a new array of employees with their salaries increased by the specified percentage. The new salaries are rounded up to the nearest integer, and the original objects are not mutated.

// Arguments
// employees (Array): The array of employee objects, where each employee has a name and salary property.

// percentageIncrease (number): The percentage by which to increase each employee's salary.

// Returns
// (Array): A new array of employee objects with updated salaries.

function raiseSalaries(array, num) {
    if (array.length === 0) {
        return array;
    } 
    return [...array].map((employee) => {
        const newSalary = ((employee.salary / 100) * num ) + employee.salary;
        return {...employee, salary: newSalary};
    })

}
 module.exports = raiseSalaries;