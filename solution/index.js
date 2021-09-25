'use strict'

let taskExtraInfo = {
    task1: {
        description: 'description task 1',
        priority: 1,
        createTime: undefined,
        deadline: undefined,
        timeEstimated: undefined,
        dependsOnTasks: ['task3', 'task22'],
        parentTask: 'task0',
        finishTime: undefined,
    },
}

if (!localStorage.tasks) {
    //if there is info in local storage use it , otherwise create a new, empty "tasks" & "taskIdcount"

    let tasks = {
        todo: [],
        'in-progress': [],
        done: [],
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
}
let tasks = JSON.parse(localStorage.getItem('tasks')) //get info from local storage.
displayElements()
//making the bottons work
document.getElementById('submit-add-to-do').addEventListener('click', handleaddToDoTask)
document.getElementById('submit-add-in-progress').addEventListener('click', handleaddInProgressTask)
document.getElementById('submit-add-done').addEventListener('click', handleaddDoneTask)

//other
function getInputInfo(inputId) {
    //returns this input value
    //set input value to "".

    const value = document.getElementById(inputId).value
    document.getElementById(inputId).value = ''
    return value
}
//databases
function sendToLocal() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//add section
function addTask(title, state) {
    tasks[state].unshift(title)
    sendToLocal()
    displayElements()
}

function handleaddToDoTask() {
    if (document.getElementById('add-to-do-task').value === '') {
        alert('empty input')
        return null
    }
    if (howManyTasksHaveThatName(document.getElementById('add-to-do-task').value) > 0) {
        alert('you cant have 2 tasks with the same name')
        return null
    }

    addTask(getInputInfo('add-to-do-task'), 'todo')
}
function handleaddInProgressTask() {
    if (document.getElementById('add-in-progress-task').value === '') {
        alert('empty input')
        return null
    }
    if (howManyTasksHaveThatName(document.getElementById('add-in-progress-task').value) > 0) {
        alert('you cant have 2 tasks with the same name')
        return null
    }
    addTask(getInputInfo('add-in-progress-task'), 'in-progress')
}
function handleaddDoneTask() {
    if (document.getElementById('add-done-task').value === '') {
        alert('empty input')
        return null
    }
    if (howManyTasksHaveThatName(document.getElementById('add-done-task').value) > 0) {
        alert('you cant have 2 tasks with the same name')
        return null
    }
    addTask(getInputInfo('add-done-task'), 'done')
}

function howManyTasksHaveThatName(title) {
    let i = 0
    for (let task of tasks.todo) {
        if (task === title) {
            i++
        }
    }
    for (let task of tasks['in-progress']) {
        if (task === title) {
            i++
        }
    }

    for (let task of tasks.done) {
        if (task === title) {
            i++
        }
    }

    return i
}

//move task
function moveTask(title, target) {
    removeTask(title)
    addTask(title, target)
}
//rename
function rename(oldName, newName) {
    let i = 0
    for (let task of tasks.todo) {
        if (task === oldName) {
            tasks['todo'].splice(i, 1, newName)
        }
        i++
    }
    i = 0
    for (let task of tasks['in-progress']) {
        if (task === oldName) {
            tasks['in-progress'].splice(i, 1, newName)
        }
        i++
    }
    i = 0
    for (let task of tasks.done) {
        if (task === oldName) {
            tasks['done'].splice(i, 1, newName)
        }
        i++
    }
    sendToLocal()
    displayElements()
}
//remove
function removeTask(title) {
    let i = 0
    for (let task of tasks.todo) {
        if (task === title) {
            tasks['todo'].splice(i, 1)
        }
        i++
    }
    i = 0
    for (let task of tasks['in-progress']) {
        if (task === title) {
            tasks['in-progress'].splice(i, 1)
        }
        i++
    }
    i = 0
    for (let task of tasks.done) {
        if (task === title) {
            tasks['done'].splice(i, 1)
        }
        i++
    }
}

//DOM
function createElement(tagname, children = [], classes = [], attributes, events) {
    //the most generic element builder.
    //we will build all the elements here.

    const el = document.createElement(tagname)

    //children

    for (let child of children) {
        if (typeof child === 'string' || typeof child === 'number') {
            child = document.createTextNode(child)
        }
        el.appendChild(child) //dosent work!
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
function appendElement(parentId, element) {
    //appends element child to parent

    document.getElementById(parentId).appendChild(element)
}

function createTaskElement(title, state) {
    //uses createElement to creat an task elment
    //appends it to the match ul
    const newNameInput = createElement('input', [], ['hide'], { type: 'text', placeholder: title })
    let newTaskElement = createElement('li', [newNameInput], ['task', 'draggable'], {})

    newNameInput.value = title
    newTaskElement.innerText = title
    newTaskElement.appendChild(newNameInput)

    if (state === 'todo') appendElement('toDoTasks', newTaskElement)
    if (state === 'in-progress') appendElement('inProgressTasks', newTaskElement)
    if (state === 'done') appendElement('doneTasks', newTaskElement)
}
function createTodoTaskElement(title) {
    createTaskElement(title, 'todo')
}
function createInProgressTaskElement(title) {
    createTaskElement(title, 'in-progress')
}
function createDoneTaskElement(title) {
    createTaskElement(title, 'done')
}
function generateTasks() {
    //uses createTaskElement to create (and append to matching parent) an element for each task object.

    for (let task of tasks.todo) {
        createTodoTaskElement(task)
    }
    for (let task of tasks['in-progress']) {
        createInProgressTaskElement(task)
    }
    for (let task of tasks.done) {
        createDoneTaskElement(task)
    }
}
function removeAllchildrens(Id) {
    //remove all the childrens from parant

    let parent = document.getElementById(Id)
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}
function displayElements() {
    //remove parents from all childrens, and fill them again from "tasks"
    removeAllchildrens('toDoTasks')
    removeAllchildrens('inProgressTasks')
    removeAllchildrens('doneTasks')
    generateTasks()
}
//events handaling
document.getElementById('save-btn').addEventListener('click', handleSave)
document.getElementById('load-btn').addEventListener('click', handleLoad)
document.getElementById('search').addEventListener('keyup', handleSearchKeyup)
document.getElementById('toDoTasks').addEventListener('mouseover', mouseOverParent)
document.getElementById('inProgressTasks').addEventListener('mouseover', mouseOverParent)
document.getElementById('doneTasks').addEventListener('mouseover', mouseOverParent)
document.getElementById('toDoTasks').addEventListener('mouseleave', mouseleaveParent)
document.getElementById('inProgressTasks').addEventListener('mouseleave', mouseleaveParent)
document.getElementById('doneTasks').addEventListener('mouseleave', mouseleaveParent)
document.getElementById('toDoTasks').addEventListener('dblclick', handleDubleClick)
document.getElementById('inProgressTasks').addEventListener('dblclick', handleDubleClick)
document.getElementById('doneTasks').addEventListener('dblclick', handleDubleClick)
// document.getElementById('toDoTasks').addEventListener('blur', handleBlur)
// document.getElementById('inProgressTasks').addEventListener('blur', handleBlur)
// document.getElementById('doneTasks').addEventListener('blur', handleBlur)

let correntTaskBelow = null
let correntTaskElementBelow = null
let wasJustFocused = null
let wasJustFocusedOldName = null

function mouseOverParent(e) {
    //when the mouse over parent
    //-->update corrent element below(if its LI)
    document.addEventListener('keydown', handleKeyDown) //start listen to keydown.

    correntTaskBelow = null //an real-time updated object that indicates the the tops element below mouse
    if (e.target.tagName === 'LI') {
        correntTaskBelow = e.target.innerText
    }

    correntTaskElementBelow = null //an real-time updated object that indicates the the tops element below mouse
    if (e.target.tagName === 'LI') {
        correntTaskElementBelow = e.target
    }
}
function handleDubleClick(event) {
    correntTaskElementBelow.addEventListener('blur', handleBlur)

    correntTaskElementBelow.contentEditable = true
    wasJustFocusedOldName = correntTaskElementBelow.innerText
    correntTaskElementBelow.focus()

    wasJustFocused = correntTaskElementBelow
}
function handleBlur(event) {
    wasJustFocused.contentEditable = false

    if (wasJustFocused.innerText === '') {
        alert('empty input')
        displayElements()
        return null
    }
    if (wasJustFocused.innerText === wasJustFocusedOldName) {
        return null
    }
    if (howManyTasksHaveThatName(wasJustFocused.innerText) >= 1) {
        alert('there is already a task named like that')
        displayElements()
        return null
    }
    rename(wasJustFocusedOldName, wasJustFocused.innerText)
    sendToLocal()
    displayElements()
}
function handleKeyDown(keyDownEvent) {
    //keyDownEvent.preventDefault()
    if (keyDownEvent.altKey) {
        if (keyDownEvent.key === '1') {
            moveTask(correntTaskBelow, 'todo')
        }
        if (keyDownEvent.key === '2') {
            moveTask(correntTaskBelow, 'in-progress')
        }
        if (keyDownEvent.key === '3') {
            moveTask(correntTaskBelow, 'done')
        }
    }
}
function mouseleaveParent() {
    document.removeEventListener('keydown', handleKeyDown) //stop listen to keydown.
}

function searchByQuery(query) {
    //Parameters:QUERY WORD OR SENTNCE.
    //Returns: CLOSEST PLAYLIST/SONG TO IT.
    if (query === '') return tasks

    let lowerCasedQuery = query.toLowerCase()
    let found = {
        todo: [],
        'in-progress': [],
        done: [],
    }
    console.log(tasks.todo)
    for (let task of tasks.todo) {
        //searching for matching todo.
        console.log(task)
        if (task.toLowerCase().includes(lowerCasedQuery)) {
            found.todo.push(task)
        }
    }
    for (let task of tasks['in-progress']) {
        //searching for matching todo.
        if (task.toLowerCase().includes(lowerCasedQuery)) {
            found['in-progress'].push(task)
        }
    }
    for (let task of tasks.done) {
        //searching for matching todo.
        if (task.toLowerCase().includes(lowerCasedQuery)) {
            found.done.push(task)
        }
    }

    return found
}
function displayFounds(found) {
    removeAllchildrens('toDoTasks')
    removeAllchildrens('inProgressTasks')
    removeAllchildrens('doneTasks')
    for (let task of found.todo) {
        createTodoTaskElement(task)
    }
    for (let task of found['in-progress']) {
        createInProgressTaskElement(task)
    }
    for (let task of found.done) {
        createDoneTaskElement(task)
    }
}

function handleSearchKeyup() {
    displayFounds(searchByQuery(document.getElementById('search').value))
}

async function handleLoad() {
    let response = await loadData()
    tasks = response.tasks
    sendToLocal()
    displayElements()
}

async function loadData() {
    let response = await fetch('https://json-bins.herokuapp.com/bin/614b11e14021ac0e6c080cdf')
    if (response.status > 400) {
        document.getElementById('errorBar').innerText = response.status + ':' + response.statusText
    } else document.getElementById('errorBar').innerText = 'loaded!'
    try {
        return response.json()
    } catch {
        return null
    }
}

async function handleSave() {
    await saveData()
}

async function saveData() {
    //-->sends post to "https://json-bins.herokuapp.com/bin/614b11e14021ac0e6c080cdf".
    //-->gets response.

    let tasksTosend = {}
    tasksTosend.tasks = tasks
    let response = await fetch('https://json-bins.herokuapp.com/bin/614b11e14021ac0e6c080cdf', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tasksTosend),
    })
    if (response.status > 400) {
        //response is having a kind of problem.
        document.getElementById('errorBar').innerText = response.status + ':' + response.statusText
    } else document.getElementById('errorBar').innerText = 'saved!'
}
