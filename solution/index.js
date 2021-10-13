'use strict'
import style from './styles.css'
import { daysleft, importance, howBusy, colorFromImportance } from './extraData'
import { getExtraInput, addTask, addExtra, handleAddToDoTask, handleaddInProgressTask, handleaddDoneTask } from './add'
import { moveTask, rename, removeTask } from './task'
import {
    createExtraElement,
    openExtraInfo,
    createTaskElement,
    appendElement,
    generateTasks,
    removeAllchildrens,
    removeAllTasksElements,
    displayElements,
    setTheme,
} from './dom'

// import tasks from "./data/dataStructures"
// import taskExtraInfo from "./data/dataStructures"

//DATA STRUCTURES-

//***"tasks" :
//will handle all of the tasks data structure and the work with the local storage and api */
//each array contains string's- the titles of the tasks.
//EVERY TITLE IS UNIQE! - the solution blocks the user from adding 2 same titles.

//

export let tasks = {
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

export let taskExtraInfo = {}
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

document.getElementById('submit-add-to-do').addEventListener('click', handleAddToDoTask)
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

//databases

export function sendToLocal() {
    //sending "tasks" & "taskExtraInfo" to local storage

    localStorage.setItem('tasks', JSON.stringify(tasks))
    let itemToSend = Object.assign({}, taskExtraInfo)
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend))
}

//"tasks" processing functions

export function stringToKabab(str) {
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

export function kababToString(kabab) {
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

// //DOM

// function createElement(tagname, children = [], classes = [], attributes, events) {
//     //the most generic element builder.
//     //we will build all the elements here.

//     let element = document.createElement(tagname)

//     //children

//     for (let child of children) {
//         if (typeof child === 'string' || typeof child === 'number') {
//             child = document.createTextNode(child)
//         }
//         element.appendChild(child)
//     }

//     //classes

//     for (const cls of classes) {
//         element.classList.add(cls)
//     }

//     //attrubutes

//     for (const attr in attributes) {
//         element.setAttribute(attr, attributes[attr])
//     }

//     //attrubutes

//     for (const event in events) {
//         element.addEventListener(event, events[event])
//     }

//     return element
// }

// function createExtraElement(title) {
//     //Parameters:tasks title.
//     //TAKES INFORMATION FROM taskExtraInfo (IF IT EXSIST)
//     //BUILDS A DOM ELEMNT OUT OF THIS DATA
//     //APPENDS IT AFTER THE RELEVANT TASK ELEMNT
//     //THIS FUNCTION Starts working ONLY when the user clicks the relevant task(openExtraInfo())
//     //on the next click on the same task element, this element will be removed.

//     title = kababToString(title)
//     const removeBtn = createElement('button', ['remove task❌'], ['remove'], {
//         name: 'remove',
//         'data-title': stringToKabab(title),
//     })
//     let extraInfoElement = createElement('div', [removeBtn], ['info'], {
//         'data-title-exstra': stringToKabab(title),
//     })
//     extraInfoElement.appendChild(createElement('b', [title], [], {}))
//     extraInfoElement.style.backgroundColor = colorFromImportance(importance(title))

//     if (taskExtraInfo.hasOwnProperty(title)) {
//         let days = createElement(
//             'div',
//             ['days left (Estimated time):' + daysleft(title) + '(' + taskExtraInfo[title].timeEstimated] + ')',
//             ['coldInfo'],
//             {}
//         )
//         let deadline = createElement('div', ['deadline:' + taskExtraInfo[title]['deadline']], ['coldInfo'], {})
//         let calcPriority = createElement('div', ['calculated priority:' + importance(title) * 10], ['coldInfo'], {})
//         let right = createElement('div', [deadline, days, calcPriority], ['right'], {})
//         let description = createElement('div', [taskExtraInfo[title].description], ['description'], {})
//         let infoSec = createElement('div', [description, right], ['infoSec'], {})
//         extraInfoElement.appendChild(infoSec)
//     } else extraInfoElement.appendChild(createElement('div', [`no extra information for ${title}`], [], {}))

//     let kababTitle = stringToKabab(title)
//     const parentGuest = document.querySelectorAll(`[data-title~="${kababTitle}"]`)[0]
//     parentGuest.parentNode.insertBefore(extraInfoElement, parentGuest.nextSibling)
// }

// function openExtraInfo(event) {
//     //adds a relevant extra info element after the task element
//     //if its exsist already, removes it.(basiclly toggiling)
//     setTimeout(function () {
//         if (dblClicked === true) return
//         const title = stringToKabab(event.target.firstChild.wholeText)
//         if (event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0])
//             event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0].remove()
//         else {
//             createExtraElement(title)
//         }
//     }, 300)
// }

// function createTaskElement(title, state) {
//     //uses createElement to creat an task elment
//     //appends it to the matching <ul>

//     let newTaskElement = createElement('li', [title], ['task', 'draggable'], { 'data-title': stringToKabab(title) }, {})
//     newTaskElement.addEventListener('click', openExtraInfo)
//     newTaskElement.addEventListener('mousedown', clickDrugAndDropHandler)

//     if (state === 'todo') appendElement('toDoTasks', newTaskElement)
//     if (state === 'in-progress') appendElement('inProgressTasks', newTaskElement)
//     if (state === 'done') appendElement('doneTasks', newTaskElement)
// }

// function appendElement(parentId, element) {
//     //appends element child to parent

//     document.getElementById(parentId).appendChild(element)
// }

// function generateTasks() {
//     //uses createTaskElement to create (and append to matching parent) an element for each "tasks" object.

//     for (let state in tasks) {
//         for (let task of tasks[state]) {
//             createTaskElement(task, state)
//         }
//     }
// }

// function removeAllchildrens(parentId) {
//     //remove all the childrens from parant

//     let parent = document.getElementById(parentId)
//     while (parent.firstChild) {
//         parent.removeChild(parent.lastChild)
//     }
// }

// function removeAllTasksElements() {
//     //remove all tasks from the tasks <ul> elemnts.

//     removeAllchildrens('toDoTasks')
//     removeAllchildrens('inProgressTasks')
//     removeAllchildrens('doneTasks')
// }

// export function displayElements() {
//     //itialization the DOM PAGE:
//     //sets the gauge according to howBusy().
//     //remove parents from all childrens
//     //fill them again from "tasks"

//     nitialization(howBusy())
//     removeAllTasksElements()
//     generateTasks()
// }

// function setTheme() {
//     //get theme from selector.
//     //set it to the page
//     //send it to local storege.

//     const themeName = document.getElementById('theme').value
//     localStorage.setItem('theme', themeName)
//     document.documentElement.className = themeName
// }

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

    const range = document.createRange()
    const sel = window.getSelection()
    const length = correntTaskElementBelow.innerText.length
    correntTaskElementBelow.innerText = ''
    range.setStart(correntTaskElementBelow.firstChild, length)
    range.collapse(true)
    sel.removeAllRanges()
    sel.addRange(range)
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
