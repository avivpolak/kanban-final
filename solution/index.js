//data
'use strict'
let tasks = {
    todo: [],
    'in-progress': [],
    done: [],
}
let taskIdcount = 0
//sendDataToLocal() //sets localstorage to none on every refresh!
getDataFromLocal()
displayElements(tasks)

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
    displayElements(tasks)
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
function addElement(parentId, element) {
    document.getElementById(parentId).appendChild(element)
}
function generateTasks(tasks) {
    for (let task of tasks.todo) {
        createTaskElement(task)
    }
    for (let task of tasks['in-progress']) {
        createTaskElement(task)
    }
    for (let task of tasks.done) {
        createTaskElement(task)
    }
}
function removeAllchildrens(Id) {
    //remove all the childrens from parant

    let parent = document.getElementById(Id)
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}
function displayElements(tasks) {
    removeAllchildrens('toDoTasks')
    removeAllchildrens('inProgressTasks')
    removeAllchildrens('doneTasks')
    generateTasks(tasks)
}
function createTaskElement(task) {
    let newElement = createElement('li', [], ['task'], {})
    newElement.innerText = task.title
    if (task.state === 'todo') addElement('toDoTasks', newElement)
    if (task.state === 'in-progress') addElement('inProgressTasks', newElement)
    if (task.state === 'done') addElement('doneTasks', newElement)
}
function createElement(
    tagname,
    children = [],
    classes = [],
    attributes,
    events
) {
    //the most generic element builder.
    //we will build all the elements here.

    const el = document.createElement(tagname)

    //children

    for (let child of children) {
        if (typeof child === 'string' || typeof child === 'number') {
            child = document.createTextNode(child)
        }
        el.appendChild(child)
    }

    //classes

    for (const cls of classes) {
        el.classList.add(cls)
    }

    //attrubutes

    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr])
    }

    //attrubutes

    for (const event in events) {
        el.addEventListener(event, events[event])
    }

    return el
}
