// tillAddition(cashContents)

// Takes an object representing the cash contents of a till, where the keys are denomination names and the values are the quantity of each denomination, and returns the total amount in the till as a string formatted into pounds and pence.

// Arguments
// cashContents (Object): An object where the keys represent denominations and the values represent the quantity of each denomination.

// Returns
// (string): The total amount of money in the till, formatted as a string.

const coinVales = {
    "1p": 1,
    "2p": 2,
    "5p": 5,
    "10p": 10,
    "20p" : 20,
    "50p": 50,
    "£1": 100,
  }
  
  function tillAddition (cash) {
    if (!Object.keys(cash).length) {
      return "0";
    } else {
      const tillTotal = Object.keys(cash).map((k) => {
        return coinVales[k] * cash[k]
      }).reduce((a, b) => a + b, 0) ;
      return "£" + (tillTotal / 100).toFixed(2)
    }
  };
  
  module.exports = tillAddition;
  