import { tasks } from './dataStructures'
import { removeAllTasksElements, createTaskElement } from './dom'
//SEARCH

export function searchByQuery(query) {
    //Parameters:QUERY WORD OR SENTNCE.
    //Returns:TASKS THAT CONTAINS IT.

    if (query === '') return tasks

    let lowerCasedQuery = query.toLowerCase() //for case-insensitively

    //creates "found" : replica of "tasks" contain only the matching tasks.

    let found = {
        todo: [],
        'in-progress': [],
        done: [],
    }
    for (let state in tasks) {
        for (let task of tasks[state]) {
            if (task.toLowerCase().includes(lowerCasedQuery)) {
                found[state].push(task)
            }
        }
    }
    return found
}

export function displayFounds(found) {
    //simulate generate tasks but with the found.

    removeAllTasksElements()
    for (let state in found) {
        for (let task of found[state]) {
            createTaskElement(task, state)
        }
    }
}
