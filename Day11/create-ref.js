// Objects can be really helpful data structures when we want to look up data without having to iterate through every element.

// Create a function called createRef which takes an array of Northcoders employees and returns an object mapping the value of one property to another.

function createRef(arrayOfEmployees, keyField, valueField) {
    const employeeResult = {};
    arrayOfEmployees.forEach((employee) => {
        employeeResult[employee[keyField]] = employee[valueField];
    });
    return employeeResult;
}



module.exports = createRef;