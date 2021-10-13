import { tasks } from './index.js'
export function inputCheck(input) {
    //checks if "input" is valid.

    if (input === '' || howManyTasksHaveThatName(input) > 0 || input.includes('\n') || input.includes('  ')) {
        alert('invalid input')
        return false
    }
    return true
}

export function howManyTasksHaveThatName(title) {
    //Parameters:title
    //returns:the number of times "title" apper in "tasks"

    let i = 0
    for (let state in tasks) {
        for (let task of tasks[state]) {
            if (task === title) {
                i++
            }
        }
    }
    return i
}
