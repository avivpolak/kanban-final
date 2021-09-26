'use strict'

//

//DATA STRUCTURES-

//***"tasks" :
//will handle all of the tasks data structure and the work with the local storage and api */
//each array contains string's- the titles of the tasks.
//EVERY TITLE IS UNIQE! - the solution blocks the user from adding 2 same titles.

//

let tasks = {
    todo: [],
    'in-progress': [],
    done: [],
}

//***"taskExtraInfo":
//will handle all of the extra tasks data structure and the work with local storage
//EACH "tasks" TITLE IS A KEY TO ITS DATA IN "taskExtraInfo".
//FOR EXSAMPLE:
//
//   "laundry": {

//      description: "I have to do laundry because
//      it's already hard fo…et into a room with too
//      many clothes on the floor",

//      priority: '7',

//      deadline: '2021-09-27',

//      timeEstimated: '1',

//      parentTask: 'Housework'}

//each of the Fields can be null. this is nom mandatory to add in info.
//the Fields:

//description : for caricurize more spesific the task.

//priority(1-10):WHEN :
//              1- if i fill board and have nothin else important to do.
//              10- its a matter of life and death !

//deadline: when does this task have to be done.

//timeEstimated: Cumulative work days planned for this task

//parentTask:This task is a subtask of the given parent task.

let taskExtraInfo = {}

//THE WORK WITH LOCAL STORAGE:

//I USE IT FOR 3 DIFFERANT PARAMETERS TO SAVE:

//"tasks"

//"taskExtraInfo"

//"theme"

//all the workflows with localstorage are the same :

//-INIITALIZE THE EMPTY OBJECT

//-IF THERE IS DATA OF THIS PARAMETER IN LOCAL STORAGE, USE IT

//-ELSE SEND THE BASE STRUCTURE TO LOCAL STORAGE AND CONTINUE WITH EMPTY DATA.

if (!localStorage.tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
} else tasks = JSON.parse(localStorage.getItem('tasks'))

if (!localStorage.taskExtraInfo) {
    let itemToSend = Object.assign({}, taskExtraInfo) //cloning taskExtraInfo
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend)) //sending clone to local
} else {
    let itemFromLocal = JSON.parse(localStorage.getItem('taskExtraInfo')) //get the item.
    taskExtraInfo = Object.assign({}, itemFromLocal)
}
if (!localStorage.theme) setTheme('theme-inviting')
document.documentElement.className = localStorage.theme

//initialize page:

displayElements()

//bottons events handaling installation

document.getElementById('submit-add-to-do').addEventListener('click', handleaddToDoTask)
document.getElementById('submit-add-in-progress').addEventListener('click', handleaddInProgressTask)
document.getElementById('submit-add-done').addEventListener('click', handleaddDoneTask)
document.getElementById('todoAddInfo').addEventListener('click', showExtraTodo)
document.getElementById('inProgressAddInfo').addEventListener('click', showExtraInProgress)
document.getElementById('doneAddInfo').addEventListener('click', showExtraDone)
document.getElementById('inProgressTasks').addEventListener('click', handleRemove)
document.getElementById('toDoTasks').addEventListener('click', handleRemove)
document.getElementById('doneTasks').addEventListener('click', handleRemove)
document.getElementById('save-btn').addEventListener('click', handleSave)
document.getElementById('load-btn').addEventListener('click', handleLoad)

// task events handaling installation

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

//FUNCTIONS

//EXTRA-Data processing functions:

function daysleft(title) {
    //Parameters:tasks title
    //returns:days left till deadline

    if (taskExtraInfo.hasOwnProperty(title)) {
        const deadline = new Date(taskExtraInfo[title].deadline)
        const presentDate = new Date()
        const oneDay = 1000 * 60 * 60 * 24 //milliseconds in 1 day.
        let result = Math.round(deadline.getTime() - presentDate.getTime()) / oneDay
        return result.toFixed(0)
    }
    return
}
function importance(title) {
    //Parameters:tasks title
    //calculate the importance of evey task now:
    //
    //importance =  (timeEstimated / timeleft) * priority
    //
    //SO AS THE DEADLINE GETTING CLOSE, THE TASK GET HIGHER IMPORTANCE
    //
    //importance can be a number between 0 and 1
    //
    //1- means you are for sure late.(according to your time estimation.)
    //
    //it is different from priority!, it is dynamic and get change with time.
    //
    //
    //returns:importance

    if (taskExtraInfo.hasOwnProperty(title)) {
        const timeleft = daysleft(title)
        const timeEstimated = taskExtraInfo[title].timeEstimated
        const priority = taskExtraInfo[title].priority
        let importance = (timeEstimated / timeleft) * priority
        if (importance < 0) return 0
        if (importance > 10) return 1
        return importance / 10
    }
    return
}

function howBusy() {
    //return the sum of your tasks importance
    //min : 0
    //max : 1

    let howBusy = 0
    for (let state in tasks) {
        for (let title of tasks[state]) {
            if (taskExtraInfo.hasOwnProperty(title) && importance(title) && state !== 'done') {
                howBusy += importance(title)
            }
        }
    }
    if (howBusy < 0) return 0
    if (howBusy > 10) return 1
    return howBusy / 10
}
function colorFromImportance(importance) {
    //generates rgb color from given importance.
    //as said , when importance is more than 1 , you are for sure late.
    //red = 0.7-1 so it will be red.
    //green is between 0.3-0.7
    //gray will be the most none important-0.1-0.3.

    //this color will pe presented as the extra-info-bar back-ground color

    const r = importance * 120 + 135
    const g = (1 - importance) * 120 + 100 // this is a parabula , b(g), that have 3 known points.{0(0),150(127.5),0(255)}
    return `rgb(${r},${g},120)`
}

//databases

function sendToLocal() {
    //sending "tasks" & "taskExtraInfo" to local storage

    localStorage.setItem('tasks', JSON.stringify(tasks))
    let itemToSend = Object.assign({}, taskExtraInfo)
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend))
}

//"tasks" processing functions

function stringToKabab(str) {
    //Parameters:string with spaces
    //returns:kabab structued string("-" insted of space)

    let kabab = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            kabab += str[i]
        } else {
            kabab += '-'
        }
    }
    return kabab
}

function kababToString(kabab) {
    //Parameters:kabab structued string("-" insted of space)
    //returns:string with spaces

    let str = ''

    for (let i = 0; i < kabab.length; i++) {
        if (kabab[i] !== '-') {
            str += kabab[i]
        } else {
            str += ' '
        }
    }
    return str
}

//add data to "tasks" & "taskExtraInfo"

function addTask(title, state) {
    //Parameters:task title, state:"todo"/"in-progress"/"done"
    //adds a task to "tasks"
    //updates local storage.
    //updates DOM.

    tasks[state].unshift(title)
    sendToLocal()
    displayElements()
}

function addExtra(title, state) {
    //Parameters:task title, state:"todo"/"in-progress"/"done"
    //adds a task to "tasks"
    //updates local storage.

    taskExtraInfo[title] = {}
    taskExtraInfo[title].description = document.getElementById('description' + state).value
    taskExtraInfo[title].priority = document.getElementById('priority' + state).value
    taskExtraInfo[title].deadline = document.getElementById('deadline' + state).value
    taskExtraInfo[title].timeEstimated = document.getElementById('timeEstimated' + state).value
    taskExtraInfo[title].parentTask = document.getElementById('parentTask' + state).value
    sendToLocal()
}

function handleaddToDoTask() {
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

function handleaddInProgressTask() {
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

function handleaddDoneTask() {
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

function inputCheck(input) {
    //checks if "input" is valid.

    if (input === '' || howManyTasksHaveThatName(input) > 0 || input.includes('\n') || input.includes('  ')) {
        alert('invalid input')
        return false
    }
    return true
}

function howManyTasksHaveThatName(title) {
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

//task manipulation

function moveTask(title, target) {
    //Parameters:tasks title, wanted target state.("todo"/"in-progress"/"done")
    //moves the task.

    removeTask(title)
    addTask(title, target)
}

function rename(oldName, newName) {
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

function removeTask(title) {
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

//create DOM elements

function createElement(tagname, children = [], classes = [], attributes, events) {
    //the most generic element builder.
    //we will build all the elements here.

    let element = document.createElement(tagname)

    //children

    for (let child of children) {
        if (typeof child === 'string' || typeof child === 'number') {
            child = document.createTextNode(child)
        }
        element.appendChild(child)
    }

    //classes

    for (const cls of classes) {
        element.classList.add(cls)
    }

    //attrubutes

    for (const attr in attributes) {
        element.setAttribute(attr, attributes[attr])
    }

    //attrubutes

    for (const event in events) {
        element.addEventListener(event, events[event])
    }

    return element
}

function createExtraElement(title) {
    //Parameters:tasks title.
    //TAKES INFORMATION FROM taskExtraInfo (IF IT EXSIST)
    //BUILDS A DOM ELEMNT OUT OF THIS DATA
    //APPENDS IT AFTER THE RELEVANT TASK ELEMNT
    //THIS FUNCTION Starts working ONLY when the user clicks the relevant task(openExtraInfo())
    //on the next click on the same task element, this element will be removed.

    title = kababToString(title)
    const removeBtn = createElement('button', ['remove task❌'], ['remove'], { name: 'remove', 'data-title': stringToKabab(title) })
    let extraInfoElement = createElement('div', [removeBtn], ['info'], { 'data-title-exstra': stringToKabab(title) })
    extraInfoElement.appendChild(createElement('b', [title], [], {}))
    extraInfoElement.style.backgroundColor = colorFromImportance(importance(title))

    if (taskExtraInfo.hasOwnProperty(title)) {
        let days = createElement(
            'div',
            ['days left (Estimated time):' + daysleft(title) + '(' + taskExtraInfo[title].timeEstimated] + ')',
            ['coldInfo'],
            {}
        )
        let deadline = createElement('div', ['deadline:' + taskExtraInfo[title]['deadline']], ['coldInfo'], {})
        let calcPriority = createElement('div', ['calculated priority:' + importance(title) * 10], ['coldInfo'], {})
        let right = createElement('div', [deadline, days, calcPriority], ['right'], {})
        let description = createElement('div', [taskExtraInfo[title].description], ['description'], {})
        let infoSec = createElement('div', [description, right], ['infoSec'], {})
        extraInfoElement.appendChild(infoSec)
    } else extraInfoElement.appendChild(createElement('div', [`no extra information for ${title}`], [], {}))

    let kababTitle = stringToKabab(title)
    const parentGuest = document.querySelectorAll(`[data-title~="${kababTitle}"]`)[0]
    parentGuest.parentNode.insertBefore(extraInfoElement, parentGuest.nextSibling)
}

function openExtraInfo(event) {
    //adds a relevant extra info element after the task element
    //if its exsist already, removes it.(basiclly toggiling)

    const title = stringToKabab(event.target.firstChild.wholeText)
    if (event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0])
        event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0].remove()
    else {
        createExtraElement(title)
    }
}

function createTaskElement(title, state) {
    //uses createElement to creat an task elment
    //appends it to the matching <ul>

    let newTaskElement = createElement('li', [title], ['task', 'draggable'], { 'data-title': stringToKabab(title) }, {})
    newTaskElement.addEventListener('click', openExtraInfo)

    if (state === 'todo') appendElement('toDoTasks', newTaskElement)
    if (state === 'in-progress') appendElement('inProgressTasks', newTaskElement)
    if (state === 'done') appendElement('doneTasks', newTaskElement)
}

function appendElement(parentId, element) {
    //appends element child to parent

    document.getElementById(parentId).appendChild(element)
}

function generateTasks() {
    //uses createTaskElement to create (and append to matching parent) an element for each "tasks" object.

    for (let state in tasks) {
        for (let task of tasks[state]) {
            createTaskElement(task, state)
        }
    }
}

function removeAllchildrens(parentId) {
    //remove all the childrens from parant

    let parent = document.getElementById(parentId)
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

function removeAllTasksElements() {
    //remove all tasks from the tasks <ul> elemnts.

    removeAllchildrens('toDoTasks')
    removeAllchildrens('inProgressTasks')
    removeAllchildrens('doneTasks')
}

function displayElements() {
    //itialization the DOM PAGE:
    //sets the gauge according to howBusy().
    //remove parents from all childrens
    //fill them again from "tasks"

    nitialization(howBusy())
    removeAllTasksElements()
    generateTasks()
}

function setTheme() {
    //get theme from selector.
    //set it to the page
    //send it to local storege.

    const themeName = document.getElementById('theme').value
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}

//SEARCH

function searchByQuery(query) {
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

function displayFounds(found) {
    //simulate generate tasks but with the found.

    removeAllTasksElements()
    for (let state in found) {
        for (let task of found[state]) {
            createTaskElement(task, state)
        }
    }
}

//EVENT HANDALING FUNCTIONS

function handleSearchKeyup() {
    //when the user releses a key in the searchbar:

    displayFounds(searchByQuery(document.getElementById('search').value))
}

//toggle the extra information-adding section for each state:

function showExtraTodo() {
    document.getElementById('extraTodo').classList.toggle('hide')
}

function showExtraInProgress() {
    document.getElementById('extraInProgress').classList.toggle('hide')
}

function showExtraDone() {
    document.getElementById('extraDone').classList.toggle('hide')
}

function handleRemove(event) {
    //handles remove a task

    const title = kababToString(event.target.parentElement.firstChild.dataset.title)
    if (event.target.name === 'remove') {
        removeTask(title)
        sendToLocal()
        displayElements()
    }
}

//move task by alt+(1-3) & rename by doubleclick :
//im am truely ashemed this is the way im am doing it.
//i have strugged it too much time and i could not find a better way(wich im sure there is),
//but i hade to go on so this is my solution it now:

let correntTaskBelow = null //an real-time updated variable indicates the task name below mouse
let correntTaskElementBelow = null //an real-time updated object that indicates the the tops element below mouse
let wasJustFocused = null //a variable to save the last focused element.
let wasJustFocusedOldName = null //a variable to save the last focused element oldName.

function mouseOverParent(e) {
    //when the mouse over parent
    //-->update corrent element below(if its LI)
    //-->start listen to keydown.

    document.addEventListener('keydown', handleKeyDown)
    correntTaskElementBelow = null
    correntTaskBelow = null
    if (e.target.tagName === 'LI') {
        correntTaskBelow = e.target.innerText
        correntTaskElementBelow = e.target
    }
}

function handleDubleClick() {
    //when a task <li> is double clicked:
    //-->start listen to the corrent task <li> below's blur.
    //-->make the  task <li> "contentEditable"
    //-->focus on the task <li>
    //--> update wasJustFocused to the task <li>(will be used soon in handleBlur())

    correntTaskElementBelow.addEventListener('blur', handleBlur)
    correntTaskElementBelow.contentEditable = true
    wasJustFocusedOldName = correntTaskElementBelow.innerText
    correntTaskElementBelow.focus()
    wasJustFocused = correntTaskElementBelow
}

function handleBlur() {
    //-->remove the  task <li> "contentEditable" attribute
    //-->check the new name, if its valid rename the task and updated DOM & local storage.

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
    //when hovering above task <li> and pressing down the keys alt+1/2/3:
    //move the task to the wanted state.

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
    //when the mouse leave task <li> elemnt:
    //stop listening to key down.

    document.removeEventListener('keydown', handleKeyDown) //stop listen to keydown.
}

//API

async function handleLoad() {
    //when "load" button is pressed:
    //-->create a loader spinner animation
    //-->send (GET) requset to api
    //-->set tasks to the answer.
    //-->updates the DOM & local storage.
    //-->remove the loader spinner animation

    loader('create')
    let response = await loadData()
    tasks = response.tasks
    sendToLocal()
    displayElements()
    loader('remove')
}
async function handleSave() {
    //when "save" button is pressed:
    //-->create a loader spinner animation
    //-->send "tasks" as (PUT) requset to api
    //-->remove the loader spinner animation

    loader('create')
    await saveData()
    loader('remove')
}

function loader(state) {
    //create or remove loader spinner animation

    if (state === 'create') {
        let wrapper = createElement('section', [], ['loader'], { id: 'spinner' }, {})
        let loader = createElement('div', [], ['ldio-6cpvji16g73'], {}, {})
        let spinner = createElement('div', [], [], {}, {})
        loader.appendChild(spinner)
        wrapper.appendChild(loader)
        document.getElementById('loader').appendChild(wrapper)
    }
    if (state === 'remove') {
        document.getElementById('spinner').remove()
    }
}

async function loadData() {
    //-->sends GET to api.
    //-->stets the errorbar element to the "loaded!" if succses , and to the error massage if not.
    //-->try converting it to an object using json.
    //-->if succsed, return the converted object.

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

async function saveData() {
    //-->convert tasks to json format
    //-->sends it via PUT request to api.
    //-->stets the errorbar element to the "saved!" if succses , and to the error massage if not.

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

// The Gauge-- not my writing! its imported and modified to my needs

function Gauge(el) {
    //Private Properties and Attributes

    let element, // Containing element for the info component
        data, // `.gauge__data` element
        needle, // `.gauge__needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop // Style for transform

    //Private Methods and Functions

    let setElement = function (el) {
        // Keep a reference to the various elements and sub-elements
        element = el
        data = element.querySelector('.gauge__data')
        needle = element.querySelector('.gauge__needle')
    }

    let setValue = function (x) {
        value = x
        let turns = -0.5 + x * 0.5
        data.style[prop] = 'rotate(' + turns + 'turn)'
        needle.style[prop] = 'rotate(' + turns + 'turn)'
    }

    //Object to be Returned

    function exports() {}

    //Public API Methods

    exports.element = function (el) {
        if (!arguments.length) {
            return element
        }
        setElement(el)
        return this
    }

    exports.value = function (x) {
        if (!arguments.length) {
            return value
        }
        setValue(x)
        return this
    }

    //nitialization

    let body = document.getElementsByTagName('body')[0]
    ;['webkitTransform', 'mozTransform', 'msTransform', 'oTransform', 'transform'].forEach(function (p) {
        if (typeof body.style[p] !== 'undefined') {
            prop = p
        }
    })

    if (arguments.length) {
        setElement(el)
    }

    return exports
}

function nitialization(howBusy) {
    let gauge = new Gauge(document.getElementById('gauge'))
    gauge.value(howBusy)
}
