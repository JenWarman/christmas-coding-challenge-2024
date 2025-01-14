
// The challenge is to implement a function that updates missing location info for students attending Northcoders.

// This function will be called with an array of objects, each object representing a student on a Northcoders bootcamp. Some of the students have a specified location property which is a string of the office they will be attending during their time on the course, but for some students that property is missing.

// Your function should return a new array, where all objects that were missing a location have been updated so that they now have a location property with a value of "remote". All other properties should remain as they were.

function updateRemoteStudents (str) {
    if (str.length === 1) {
      let updatedStudentArray = [...str];
    updatedStudentArray[0].location = 'remote'
    return updatedStudentArray;
    } 
  
      if (str.length > 1) {
       return str.map((student) => {
          if (student.location === undefined) {
            return {
              ...student,
              location: 'remote'
            }
          }
          return student;
         })
      }
      
    }
    
  module.exports = updateRemoteStudents;

