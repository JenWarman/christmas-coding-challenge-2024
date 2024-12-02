// calculateDivisors(num)

// Takes a number num and returns the sum of all multiples of 3 and 5 below that number.

// Arguments
// num (number): A number representing the upper limit for finding multiples of 3 or 5.

// Returns
// (number): The sum of all multiples of 3 and 5 below num.


function calculateDivisors(num) {
    if (num === 0) {
      return num;
    }
  
    let result = 0;
    
    for (let i = 0; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        result += i;
      }
    }
  
    return result;
  }
  
  module.exports = calculateDivisors;
  