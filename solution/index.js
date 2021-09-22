//data
'use strict'
let tasks = {
    todo: [],
    'in-progress': [],
    done: [],
}
let taskIdcount = 0
// sendDataToLocal() //sets localstorage to none on every refresh!

function addTask(
    title,
    state,
    desctiption,
    priority,
    deadLine,
    parantTask,
    timeEstimated,
    dependsOnTasks,
    finishTime
) {
    let newTask = {
        priority,
        deadLine,
        title,
        desctiption,
        timeEstimated,
        dependsOnTasks,
        parantTask,
        finishTime,
        state,
    }

    getDataFromLocal()
    newTask.userId = 1
    newTask.taskId = taskIdcount
    updateTaskIdcount()
    if (state === 'todo') tasks.todo.unshift(newTask)
    if (state === 'in-progress') tasks['in-progress'].unshift(newTask)
    if (state === 'done') tasks.done.unshift(newTask)
    sendDataToLocal()
    console.log(localStorage.getItem('tasks'))
}
function updateTaskIdcount() {
    taskIdcount++
}
function getInputInfo(inputId) {
    return document.getElementById(inputId).value
}
function sendDataToLocal() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('taskIdcount', JSON.stringify(taskIdcount))
}
function getDataFromLocal() {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    taskIdcount = JSON.parse(localStorage.getItem('taskIdcount'))
}
document
    .getElementById('submit-add-to-do')
    .addEventListener('click', addToDoTask)
document
    .getElementById('submit-add-in-progress')
    .addEventListener('click', addInProgressTask)
document
    .getElementById('submit-add-done')
    .addEventListener('click', addDoneTask)
function addToDoTask() {
    addTask(getInputInfo('add-to-do-task'), 'todo')
}
function addInProgressTask() {
    addTask(getInputInfo('add-in-progress-task'), 'in-progress')
}
function addDoneTask() {
    addTask(getInputInfo('add-done-task'), 'done')
}
