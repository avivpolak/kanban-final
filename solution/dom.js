import { nitialization } from './gauge'
import { howBusy, colorFromImportance, importance, daysleft } from './extraData'
import { tasks, taskExtraInfo } from './dataStructures'
import { clickDrugAndDropHandler, dblClicked } from './dragAndDrop'
import { stringToKabab, kababToString } from './other'

//DOM

export function createElement(tagname, children = [], classes = [], attributes, events) {
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

export function createExtraElement(title) {
    //Parameters:tasks title.
    //TAKES INFORMATION FROM taskExtraInfo (IF IT EXSIST)
    //BUILDS A DOM ELEMNT OUT OF THIS DATA
    //APPENDS IT AFTER THE RELEVANT TASK ELEMNT
    //THIS FUNCTION Starts working ONLY when the user clicks the relevant task(openExtraInfo())
    //on the next click on the same task element, this element will be removed.

    title = kababToString(title)
    const removeBtn = createElement('button', ['remove task❌'], ['remove'], {
        name: 'remove',
        'data-title': stringToKabab(title),
    })
    let extraInfoElement = createElement('div', [removeBtn], ['info'], {
        'data-title-exstra': stringToKabab(title),
    })
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

export function openExtraInfo(event) {
    //adds a relevant extra info element after the task element
    //if its exsist already, removes it.(basiclly toggiling)
    setTimeout(function () {
        if (dblClicked === true) return
        const title = stringToKabab(event.target.firstChild.wholeText)
        if (event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0])
            event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0].remove()
        else {
            createExtraElement(title)
        }
    }, 300)
}

export function createTaskElement(title, state) {
    //uses createElement to creat an task elment
    //appends it to the matching <ul>

    let newTaskElement = createElement('li', [title], ['task', 'draggable'], { 'data-title': stringToKabab(title) }, {})
    newTaskElement.addEventListener('click', openExtraInfo)
    newTaskElement.addEventListener('mousedown', clickDrugAndDropHandler)

    if (state === 'todo') appendElement('toDoTasks', newTaskElement)
    if (state === 'in-progress') appendElement('inProgressTasks', newTaskElement)
    if (state === 'done') appendElement('doneTasks', newTaskElement)
}

export function appendElement(parentId, element) {
    //appends element child to parent

    document.getElementById(parentId).appendChild(element)
}

export function generateTasks() {
    //uses createTaskElement to create (and append to matching parent) an element for each "tasks" object.

    for (let state in tasks) {
        for (let task of tasks[state]) {
            createTaskElement(task, state)
        }
    }
}

export function removeAllchildrens(parentId) {
    //remove all the childrens from parant

    let parent = document.getElementById(parentId)
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

export function removeAllTasksElements() {
    //remove all tasks from the tasks <ul> elemnts.

    removeAllchildrens('toDoTasks')
    removeAllchildrens('inProgressTasks')
    removeAllchildrens('doneTasks')
}

export function displayElements() {
    //itialization the DOM PAGE:
    //sets the gauge according to howBusy().
    //remove parents from all childrens
    //fill them again from "tasks"

    nitialization(howBusy())
    removeAllTasksElements()
    generateTasks()
}

export function setTheme() {
    //get theme from selector.
    //set it to the page
    //send it to local storege.

    const themeName = document.getElementById('theme').value
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}
