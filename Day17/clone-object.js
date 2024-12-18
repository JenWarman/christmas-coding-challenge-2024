// cloneObject(target, source)

// Takes a target object and a source object, and mutates the target object by copying over all key-value pairs from the source object.

// This function has identical functionality to Object.assign().

// Arguments
// target (Object): The target object.

// source (Object): The source object.

// Returns
// (Object): The mutated target object with key-value pairs from the source object.

function cloneObject(target, source) {
    return Object.assign(target, source);
  }
  

module.exports = cloneObject

