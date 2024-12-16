// updateTasks(person, ...newTasks)

// Takes a person object and one or more new tasks, and returns a new person object with the tasks array updated to include the new tasks. The original tasks array is not mutated.

// A person is an object with name and tasks properties.

// Arguments
// person (Object): The person object to process.

// ...newTasks (string): One or more new tasks to add to the person's task list.

// Returns
// (Object): A new person object with the updated tasks.

function updateTasks(person, newTasks) {
    return {...person, tasks: [...person.tasks, ...newTasks]};
}

module.exports = updateTasks


