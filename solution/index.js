//data
'use strict'
let tasks
let taskIdcount
if (!localStorage.tasks) {
    //if there is info in local storage use it , otherwise create a new, empty "tasks" & "taskIdcount"

    tasks = {
        todo: [],
        'in-progress': [],
        done: [],
    }
    taskIdcount = 0
    sendDataToLocal()
} else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    taskIdcount = JSON.parse(localStorage.getItem('taskIdcount'))
}

displayElements(tasks) //show what you have got

//making the bottons work
document.getElementById('submit-add-to-do').addEventListener('click', addToDoTask)
document.getElementById('submit-add-in-progress').addEventListener('click', addInProgressTask)
document.getElementById('submit-add-done').addEventListener('click', addDoneTask)

function addTask(title, state, desctiption, priority, deadLine, parantTask, timeEstimated, dependsOnTasks, finishTime) {
    //GENERIC add a new task to "tasks"
    //add 1 to "taskIdcount"
    //sends "tasks" & "taskIdcount" to localstorage
    //display "tasks" on the screen.

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
    //adds 1 to taskIdcount.
    //used only in addTask() and  being sent to local there.

    taskIdcount++
}
function getInputInfo(inputId) {
    //returns this input value
    //set input value to "".

    const value = document.getElementById(inputId).value
    document.getElementById(inputId).value = ''
    return value
}
function sendDataToLocal() {
    //sends "tasks" & "taskIdcount" to localstorage
    //should display only throgh here!

    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('taskIdcount', JSON.stringify(taskIdcount))
}

function updateTask(taskId, newProps) {
    //generic update "tasks" function.

    let newTask = taskFromId(taskId)

    for (let prop in newProps) {
        newTask[prop] = newProps[prop]
    }
    //should return the new or doing with it something!   -->comeback
    //should send to local & display
}

function taskFromId(taskId) {
    //returns the task with that id

    taskId = parseInt(taskId)
    for (let task of tasks.todo) {
        if (task.taskId === taskId) return task
    }
    for (let task of tasks['in-progress']) {
        if (task.taskId === taskId) return task
    }
    for (let task of tasks.done) {
        if (task.taskId === taskId) return task
    }
    throw new Error("no such task's id")
}
function updateState(taskId, newState) {
    //uses updateTask moveATask to update the task state.
    //-->whats moveATask
    //displays-->should not, because its already displays in updateTask

    let from = taskFromId(taskId).state
    updateTask(taskId, { state: newState })
    let to = taskFromId(taskId).state
    moveATask(taskId, from, to)
    displayElements(tasks)
}

//aplying "handleMouseOverParent" on the wanted parents
//should be moved to iniatilazing

handleMouseOverParent('toDoTasks')
handleMouseOverParent('inProgressTasks')
handleMouseOverParent('doneTasks')
let isKeyPressed = {
    //an real-time updated object that indicates the keys pressing.
    1: false,
    2: false,
    3: false,
    Alt: false,
}
let correntTaskIdBelow = null //an real-time updated object that indicates the the tops element below mouse

function handleMouseOverParent(parentId) {
    //do this to parent:

    document.getElementById(parentId).addEventListener('mouseenter', mouseEnterParent) //start listen to mouse enter

    function mouseEnterParent() {
        //when the mouse enter parent
        //start listen to mouse over/leave and keydown.

        document.getElementById(parentId).addEventListener('mouseover', mouseOverParent) //start listen to mouse over
        document.getElementById(parentId).addEventListener('mouseleave', mouseLeaveParent) //start listen to mouse leave
        document.addEventListener('keydown', handleKeyDown) //start listen to keydown.
    }

    function mouseOverParent(e) {
        //when the mouse over parent
        //-->update corrent element below(if its LI)

        correntTaskIdBelow = null
        if (e.target.tagName === 'LI') {
            correntTaskIdBelow = e.target.dataset.id
        }
    }

    function handleKeyDown(keyDownEvent) {
        //when a key is down
        //start listen to keyup
        //set its corrisponding isKeyPressed key to true
        //search for alt+(1-3)-->if found update the state of the corrent below

        document.addEventListener('keyup', handleKeyUp) //start listen to keyup.
        keyDownEvent.preventDefault()
        isKeyPressed[keyDownEvent.key] = true
        if (isKeyPressed['Alt'] && correntTaskIdBelow) {
            if (isKeyPressed[1]) {
                updateState(correntTaskIdBelow, 'todo', tasks)
            }
            if (isKeyPressed[2]) {
                updateState(correntTaskIdBelow, 'in-progress', tasks)
            }
            if (isKeyPressed[3]) {
                updateState(correntTaskIdBelow, 'done', tasks)
            }
        }
    }
    function handleKeyUp(KeyUpEvent) {
        //when a key is up
        //stop listen to keyup.
        //set its corrisponding isKeyPressed key to false

        document.removeEventListener('keyup', handleKeyUp) //stop listen to keyup.
        KeyUpEvent.preventDefault()
        isKeyPressed[KeyUpEvent.key] = false
    }
    function mouseLeaveParent() {
        //when the mouse leave parent
        //stop listen to keydown and mouse over

        document.getElementById(parentId).removeEventListener('mouseover', mouseOverParent) //stop listen to mouse over
        document.removeEventListener('keydown', handleKeyDown) //stop listen to keydown
    }
}

function addToDoTask() {
    //uses addTask to add a To Do Task(if input not empty)

    if (document.getElementById('add-to-do-task').value === '') {
        alert('empty input')
        return null
    }
    addTask(getInputInfo('add-to-do-task'), 'todo')
}
function addInProgressTask() {
    //uses addTask to add a in-progress Task(if input not empty)

    if (document.getElementById('add-in-progress-task').value === '') {
        alert('empty input')
        return null
    }
    addTask(getInputInfo('add-in-progress-task'), 'in-progress')
}
function addDoneTask() {
    //uses addTask to add a done Task(if input not empty)

    if (document.getElementById('add-done-task').value === '') {
        alert('empty input')
        return null
    }
    addTask(getInputInfo('add-done-task'), 'done')
}
function moveATask(taskId, origin, target) {
    //copy this task(?)
    //use remove to remove from origin "state"
    //use addTask (GENERIC) to add to target "state"

    let task = taskFromId(taskId)
    removeTask(taskId, origin)
    addTask(task.title, target)
}
function removeTask(taskId, origin) {
    //remove this task from "tasks"
    //should send and display!

    if (taskIndexById(taskId, origin) === -1) {
        throw new Error('non-existent ID')
    }
    tasks[origin].splice(taskIndexById(taskId, origin), 1)
}
function taskIndexById(taskId, origin) {
    //parameters: task id  and where to check for it(state)
    //returns the index of it in this state of "tasks"

    taskId = parseInt(taskId)

    for (let i = 0; i < tasks[origin].length; i++) {
        console.log(tasks[origin][i].taskId, taskId)
        if (tasks[origin].taskId === taskId) {
            return i
        }
    }
    return -1
}

function addElement(parentId, element) {
    //appends element child to parent

    document.getElementById(parentId).appendChild(element)
}
function generateTasks() {
    //uses createTaskElement to create (and append to matching parent) an element for each task object.

    console.log(tasks.todo)
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
function displayElements() {
    //remove parents from all childrens, and fill them again from "tasks"
    removeAllchildrens('toDoTasks')
    removeAllchildrens('inProgressTasks')
    removeAllchildrens('doneTasks')
    generateTasks()
}
function createTaskElement(task) {
    //uses createElement to creat an task elment

    let newElement = createElement('li', [], ['task'], { 'data-id': task.taskId })
    newElement.innerText = task.title

    if (task.state === 'todo') addElement('toDoTasks', newElement)
    if (task.state === 'in-progress') addElement('inProgressTasks', newElement)
    if (task.state === 'done') addElement('doneTasks', newElement)
}
function createElement(tagname, children = [], classes = [], attributes, events) {
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
