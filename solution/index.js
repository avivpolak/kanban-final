if (!localStorage.tasks) {
    //if there is info in local storage use it , otherwise create a new, empty "tasks" & "taskIdcount"

    tasks = {
        todo: [],
        'in-progress': [],
        done: [],
    }

    sendToLocal()
}
tasks = JSON.parse(localStorage.getItem('tasks')) //get info from local storage.

//making the bottons work
document.getElementById('submit-add-to-do').addEventListener('click', addToDoTask)
document.getElementById('submit-add-in-progress').addEventListener('click', addInProgressTask)
document.getElementById('submit-add-done').addEventListener('click', addDoneTask)
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
function addTask(taskName, state) {
    tasks[state].unshift(taskName)
    sendToLocal()
    displayElements()
}

function addToDoTask() {
    if (document.getElementById('add-to-do-task').value === '') {
        alert('empty input')
        return null
    }
    addTask(getInputInfo('add-to-do-task'), 'todo')
}
function addInProgressTask() {
    if (document.getElementById('add-in-progress-task').value === '') {
        alert('empty input')
        return null
    }
    addTask(getInputInfo('add-in-progress-task'), 'in-progress')
}
function addDoneTask() {
    if (document.getElementById('add-done-task').value === '') {
        alert('empty input')
        return null
    }
    addTask(getInputInfo('add-done-task'), 'done')
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

function createTaskElement(taskName, state) {
    //uses createElement to creat an task elment
    //appends it to the match ul

    let newTaskElement = createElement('li', [], ['task'], {})
    newTaskElement.innerText = taskName

    if (state === 'todo') appendElement('toDoTasks', newTaskElement)
    if (state === 'in-progress') appendElement('inProgressTasks', newTaskElement)
    if (state === 'done') appendElement('doneTasks', newTaskElement)
}
function createTodoTaskElement(taskName) {
    createTaskElement(taskName, 'todo')
}
function createInProgressTaskElement(taskName) {
    createTaskElement(taskName, 'in-progress')
}
function createDoneTaskElement(taskName) {
    createTaskElement(taskName, 'done')
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
