const updateTasks = require('../update-tasks')

describe("updateTasks", () => {
    test('Returns new person object with updated tasks array', () => {
        const actual = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        const newTasks = ["read books", "tidy room"];
        const expected = {
            name: 'Anat',
            tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']
          }
        expect(updateTasks(actual, newTasks)).toEqual(expected);
      });
    })