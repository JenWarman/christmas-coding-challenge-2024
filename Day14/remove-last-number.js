// removeLastNumber(numbers)

// Takes an array of numbers and returns a new array with the last number removed.

// Arguments
// numbers (Array): The array of numbers to be modified.

// Returns
// (Array): A new array of numbers, excluding the last element.

function removeLastNumber(array) {
    if (array.length <= 1) {
        return [];
    } else {
        // return array; <--- for mutate test. 
        let newArr = [...array];        
        return newArr.slice(0, -1);
    }   
}

module.exports = removeLastNumber;