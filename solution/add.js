import { tasks, taskExtraInfo } from './dataStructures'
import { displayElements } from './dom'
import { inputCheck } from './validate.js'
import { sendToLocal } from './localStorage'
//add data to "tasks" & "taskExtraInfo"

export function getExtraInput(state) {
    //gets data from input

    let extraInfo = {}
    extraInfo.description = document.getElementById('description' + state).value
    extraInfo.priority = document.getElementById('priority' + state).value
    extraInfo.deadline = document.getElementById('deadline' + state).value
    extraInfo.timeEstimated = document.getElementById('timeEstimated' + state).value
    extraInfo.parentTask = document.getElementById('parentTask' + state).value
    return extraInfo
}

export function addTask(title, state) {
    //Parameters:task title, state:"todo"/"in-progress"/"done"
    //adds a task to "tasks"
    //updates local storage.
    //updates DOM.

    tasks[state].unshift(title)
    sendToLocal()
    displayElements()
}

export function addExtra(title, state) {
    //Parameters:task title, state:"todo"/"in-progress"/"done"
    //adds a task to "tasks"
    //updates local storage.
    taskExtraInfo[title] = Object.assign({}, getExtraInput(state))
    sendToLocal()
}

export function handleAddToDoTask() {
    //when "add todo task" button is pressed:
    //take the relavant input value
    //send it to addTask() &  addExtra()

    const title = document.getElementById('add-to-do-task').value
    if (!document.getElementById('extraTodo').classList.contains('')) document.getElementById('extraTodo').classList.add('hide')
    if (inputCheck(title)) {
        addExtra(title, 'Todo')
        addTask(title, 'todo')
    }
}

export function handleaddInProgressTask() {
    //when "add In-Progress task" button is pressed:
    //take the relavant input value
    //send it to addTask() &  addExtra()

    const title = document.getElementById('add-in-progress-task').value
    if (!document.getElementById('extraInProgress').classList.contains('')) document.getElementById('extraInProgress').classList.add('hide')
    if (inputCheck(title)) {
        addExtra(title, 'InProgress')
        addTask(title, 'in-progress')
    }
}

export function handleaddDoneTask() {
    //when "add done task" button is pressed:
    //take the relavant input value
    //send it to addTask() &  addExtra()

    const title = document.getElementById('add-done-task').value
    if (!document.getElementById('extraDone').classList.contains('')) document.getElementById('extraDone').classList.add('hide')
    if (inputCheck(title)) {
        addExtra(title, 'Done')
        addTask(title, 'done')
    }
}
