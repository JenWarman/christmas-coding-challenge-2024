// Create a function called findMostRepeated that looks through a flat array and returns an object that describes the most repeated element or elements in the array.

// The object will be in the format:

// {
//   elements: ['foo'],
//   repeats: 3
// }
// If the passed array is empty, or there are no repeated elements, the function should return:

// {
//   elements: [],
//   repeats: null
// }


const findMostRepeated = (arr) => {
    if (arr.length === 0) {
      return { elements: [], repeats: null };
    }
    let wordArr = [];
    let repeats = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++
        }
      }
      if (count > repeats) {
        repeats = count;
        wordArr.push(arr[i]);
      } else if (count === repeats && !wordArr.includes(arr[i])) {
        wordArr.push(arr[i]);
      }
      if (repeats === 1) {
        return { elements: [], repeats: null }
      }
  
      return { elements: wordArr, repeats: repeats || null }
    }
  }
  
  module.exports = { findMostRepeated }