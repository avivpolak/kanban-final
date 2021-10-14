import { tasks, taskExtraInfo } from './dataStructures'
import { addTask } from './add'
import { displayElements } from './dom'
import { sendToLocal } from './localStorage'
//task manipulation

export function moveTask(title, target) {
    //Parameters:tasks title, wanted target state.("todo"/"in-progress"/"done")
    //moves the task.

    removeTask(title)
    addTask(title, target)
}

export function rename(oldName, newName) {
    //Parameters:tasks oldName, and newName(titles)
    //renames the task.
    //updates localstorage and DOM

    for (let state in tasks) {
        let i = 0
        for (let task of tasks[state]) {
            if (task === oldName) {
                tasks[state].splice(i, 1, newName)
            }
            i++
        }
    }
    taskExtraInfo[newName] = Object.assign({}, taskExtraInfo[oldName])
    sendToLocal()
    displayElements()
}

export function removeTask(title) {
    //Parameters:tasks title.
    //removes this task from "tasks"
    //updates localstorage and DOM

    for (let state in tasks) {
        let i = 0
        for (let task of tasks[state]) {
            if (task === title) {
                tasks[state].splice(i, 1)
            }
            i++
        }
    }
    sendToLocal()
    displayElements()
}
