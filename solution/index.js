'use strict'

let tasks = {
    todo: [],
    'in-progress': [],
    done: [],
}
let taskExtraInfo = {}

if (!localStorage.tasks) {
    //if there is no info in local storage send the new empty one,
    localStorage.setItem('tasks', JSON.stringify(tasks))
} else tasks = JSON.parse(localStorage.getItem('tasks')) //otherwise use it.get info from local storage.

if (!localStorage.taskExtraInfo) {
    let itemToSend = Object.assign({}, taskExtraInfo) //cloning taskExtraInfo
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend)) //sending clone to local
} else {
    let itemFromLocal = JSON.parse(localStorage.getItem('taskExtraInfo')) //get the item.
    taskExtraInfo = Object.assign({}, itemFromLocal)
}
if (!localStorage.theme) setTheme('theme-inviting')
document.documentElement.className = localStorage.theme

displayElements()
//making the bottons work

document.getElementById('submit-add-to-do').addEventListener('click', handleaddToDoTask)
document.getElementById('submit-add-in-progress').addEventListener('click', handleaddInProgressTask)
document.getElementById('submit-add-done').addEventListener('click', handleaddDoneTask)
document.getElementById('todoAddInfo').addEventListener('click', showExtraTodo)
document.getElementById('inProgressAddInfo').addEventListener('click', showExtraInProgress)
document.getElementById('doneAddInfo').addEventListener('click', showExtraDone)
// document.getElementById('inProgressAddInfo').addEventListener('click')
// document.getElementById('doneAddInfo').addEventListener('click')

function showExtraTodo() {
    document.getElementById('extraTodo').classList.toggle('hide')
}

function showExtraInProgress() {
    document.getElementById('extraInProgress').classList.toggle('hide')
}

function showExtraDone() {
    document.getElementById('extraDone').classList.toggle('hide')
}
//addind events to inputs

function daysleft(title) {
    if (taskExtraInfo.hasOwnProperty(title)) {
        const deadline = new Date(taskExtraInfo[title].deadline)
        const presentDate = new Date()
        const oneDay = 1000 * 60 * 60 * 24
        let result = Math.round(deadline.getTime() - presentDate.getTime()) / oneDay
        return result.toFixed(0)
    }
    return
}
function importance(title) {
    if (taskExtraInfo.hasOwnProperty(title)) {
        const timeleft = daysleft(title)
        const timeEstimated = taskExtraInfo[title].timeEstimated
        const priority = taskExtraInfo[title].priority
        return (timeEstimated / timeleft) * priority
    }
    return
}
function howBusy() {
    tasks
}
function colorFromImportance(importance) {
    //when importance is more than 10 , you are for sure late.
    //red = 7-10 so it will be red.
    //green is between 3-7
    //gray will be the most none important-1-3.

    importance = importance / 10
    const r = importance * 120 + 135
    const g = (1 - importance) * 120 + 100 // this is a parabula , b(g), that have 3 known points.{0(0),150(127.5),0(255)}
    return `rgb(${r},${g},120)`
}

//other
function setTheme() {
    const themeName = document.getElementById('theme').value
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}
document.getElementById('submitTheme').addEventListener('click', setTheme)
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
    let itemToSend = Object.assign({}, taskExtraInfo) //sending to local
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend))
}
function taskState(title) {
    {
        for (let task of tasks.todo) {
            if (task === title) {
                return 'todo'
            }
        }
        for (let task of tasks['in-progress']) {
            if (task === title) {
                return 'in-progress'
            }
        }

        for (let task of tasks.done) {
            if (task === title) {
                return 'done'
            }
        }

        return 'not found'
    }
}
//add section
function stringToKabab(str) {
    let kabab = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            kabab += str[i]
        } else {
            if (kabab[length - 1] !== '-') {
                kabab += '-'
            }
        }
    }
    return kabab
}

function createExtraElement(title) {
    let propreties = ['description', 'priority', 'deadline', 'timeEstimated', 'parentTask']
    let extraInfoElement = createElement('div', [], ['info'], { 'data-title-exstra': stringToKabab(title) })
    extraInfoElement.appendChild(createElement('b', [title], [], {}))
    extraInfoElement.style.backgroundColor = colorFromImportance(importance(title))
    if (taskExtraInfo.hasOwnProperty(title)) {
        for (let proprety of propreties) {
            if (taskExtraInfo[title].hasOwnProperty(proprety) && taskExtraInfo[title][proprety]) {
                extraInfoElement.appendChild(createElement('div', [proprety + ':', taskExtraInfo[title][proprety]], [], {}))
            } else extraInfoElement.appendChild(createElement('div', [`(no ${proprety})`], [], {}))
        }
    } else extraInfoElement.appendChild(createElement('div', [`no extra information for ${title}`], [], {}))

    let kababTitle = stringToKabab(title)
    const parentGuest = document.querySelectorAll(`[data-title~="${kababTitle}"]`)[0]
    parentGuest.parentNode.insertBefore(extraInfoElement, parentGuest.nextSibling)
}

function addExtraTodo(title) {
    taskExtraInfo[title] = {}
    taskExtraInfo[title].description = document.getElementById('descriptionTodo').value
    taskExtraInfo[title].priority = document.getElementById('priorityTodo').value
    taskExtraInfo[title].deadline = document.getElementById('deadlineTodo').value
    taskExtraInfo[title].timeEstimated = document.getElementById('timeEstimatedTodo').value
    taskExtraInfo[title].parentTask = document.getElementById('parentTaskTodo').value

    let itemToSend = Object.assign({}, taskExtraInfo) //sending to local
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend))
}

function addExtraInProgress(title) {
    taskExtraInfo[title] = {}
    taskExtraInfo[title].description = document.getElementById('descriptionInProgress').value
    taskExtraInfo[title].priority = document.getElementById('priorityInProgress').value
    taskExtraInfo[title].deadline = document.getElementById('deadlineInProgress').value
    taskExtraInfo[title].timeEstimated = document.getElementById('timeEstimatedInProgress').value
    taskExtraInfo[title].parentTask = document.getElementById('parentTaskInProgress').value

    let itemToSend = Object.assign({}, taskExtraInfo) //sending to local
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend))
}

function addExtraDone(title) {
    taskExtraInfo[title] = {}
    taskExtraInfo[title].description = document.getElementById('descriptionDone').value
    taskExtraInfo[title].priority = document.getElementById('priorityDone').value
    taskExtraInfo[title].deadline = document.getElementById('deadlineDone').value
    taskExtraInfo[title].timeEstimated = document.getElementById('timeEstimatedDone').value
    taskExtraInfo[title].parentTask = document.getElementById('parentTaskDone').value

    let itemToSend = Object.assign({}, taskExtraInfo) //sending to local
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend))
}

function addTask(title, state) {
    tasks[state].unshift(title)
    sendToLocal()
    displayElements()
}

function handleaddToDoTask() {
    if (!document.getElementById('extraTodo').classList.contains('')) document.getElementById('extraTodo').classList.add('hide')
    if (document.getElementById('add-to-do-task').value === '') {
        alert('empty input')
        return null
    }
    if (howManyTasksHaveThatName(document.getElementById('add-to-do-task').value) > 0) {
        alert('you cant have 2 tasks with the same name')
        return null
    }
    if (document.getElementById('add-to-do-task').value.includes('\n') || document.getElementById('add-to-do-task').value.includes('  ')) {
        alert('invalid title')
        displayElements()
        return null
    }
    let title = getInputInfo('add-to-do-task')
    addExtraTodo(title)
    addTask(title, 'todo')
}
function handleaddInProgressTask() {
    if (!document.getElementById('extraInProgress').classList.contains('')) document.getElementById('extraInProgress').classList.add('hide')
    if (document.getElementById('add-in-progress-task').value === '') {
        alert('empty input')
        return null
    }
    if (howManyTasksHaveThatName(document.getElementById('add-in-progress-task').value) > 0) {
        alert('you cant have 2 tasks with the same name')
        return null
    }
    if (
        document.getElementById('add-in-progress-task').value.includes('\n') ||
        document.getElementById('add-in-progress-task').value.includes('  ')
    ) {
        alert('invalid title')
        displayElements()
        return null
    }
    let title = getInputInfo('add-in-progress-task')
    addExtraInProgress(title)
    addTask(title, 'in-progress')
}
function handleaddDoneTask() {
    if (!document.getElementById('extraDone').classList.contains('')) document.getElementById('extraDone').classList.add('hide')
    if (document.getElementById('add-done-task').value === '') {
        alert('empty input')
        return null
    }
    if (howManyTasksHaveThatName(document.getElementById('add-done-task').value) > 0) {
        alert('you cant have 2 tasks with the same name')
        return null
    }
    if (document.getElementById('add-done-task').value.includes('\n') || document.getElementById('add-done-task').value.includes('  ')) {
        alert('invalid title')
        displayElements()
        return null
    }
    let title = getInputInfo('add-done-task')
    addExtraDone(title)
    addTask(title, 'done')
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
    taskExtraInfo[newName] = Object.assign({}, taskExtraInfo[oldName])
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

    let el = document.createElement(tagname)

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
function appendElement(parentId, element) {
    //appends element child to parent

    document.getElementById(parentId).appendChild(element)
}
function openExtraInfo(event) {
    const title = stringToKabab(event.target.firstChild.wholeText)
    if (event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0])
        event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0].remove()
    else {
        createExtraElement(title)
    }
}

function createTaskElement(title, state) {
    //uses createElement to creat an task elment
    //appends it to the match ul

    let newTaskElement = createElement('li', [title], ['task', 'draggable'], { 'data-title': stringToKabab(title) }, {})
    newTaskElement.addEventListener('click', openExtraInfo)

    if (state === 'todo') appendElement('toDoTasks', newTaskElement)
    if (state === 'in-progress') appendElement('inProgressTasks', newTaskElement)
    if (state === 'done') appendElement('doneTasks', newTaskElement)
    //createExtraElement(title)
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

    if (wasJustFocused.innerText.includes('\n') || wasJustFocused.innerText.includes('  ')) {
        alert('invalid title')
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
    document.getElementById('loader').classList.toggle('hide')
    let response = await loadData()
    tasks = response.tasks
    document.getElementById('loader').classList.toggle('hide')
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
    document.getElementById('loader').classList.toggle('hide')
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
    document.getElementById('loader').classList.toggle('hide')
    if (response.status > 400) {
        //response is having a kind of problem.
        document.getElementById('errorBar').innerText = response.status + ':' + response.statusText
    } else document.getElementById('errorBar').innerText = 'saved!'
}

//drag&drop
let currentDroppable = null

ball.onmousedown = function (event) {
    let shiftX = event.clientX - ball.getBoundingClientRect().left
    let shiftY = event.clientY - ball.getBoundingClientRect().top

    ball.style.position = 'absolute'
    ball.style.zIndex = 1000
    document.body.append(ball)

    moveAt(event.pageX, event.pageY)

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px'
        ball.style.top = pageY - shiftY + 'px'
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY)

        ball.hidden = true
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
        ball.hidden = false

        if (!elemBelow) return

        let droppableBelow = elemBelow.closest('.droppable')
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) {
                // null when we were not over a droppable before this event
                leaveDroppable(currentDroppable)
            }
            currentDroppable = droppableBelow
            if (currentDroppable) {
                // null if we're not coming over a droppable now
                // (maybe just left the droppable)
                enterDroppable(currentDroppable)
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove)

    ball.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove)
        ball.onmouseup = null
    }
}

function enterDroppable(elem) {
    elem.style.background = 'pink'
}

function leaveDroppable(elem) {
    elem.style.background = ''
}

ball.ondragstart = function () {
    return false
}
