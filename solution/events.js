import { kababToString } from './other'
import { removeTask } from './task'
import { displayElements } from './dom'
import { searchByQuery, displayFounds } from './search'
import { sendToLocal } from './localStorage'

//EVENT HANDALING FUNCTIONS

export function handleSearchKeyup() {
    //when the user releses a key in the searchbar:

    displayFounds(searchByQuery(document.getElementById('search').value))
}

//toggle the extra information-adding section for each state:

export function showExtraTodo() {
    document.getElementById('extraTodo').classList.toggle('hide')
}

export function showExtraInProgress() {
    document.getElementById('extraInProgress').classList.toggle('hide')
}

export function showExtraDone() {
    document.getElementById('extraDone').classList.toggle('hide')
}

export function handleRemove(event) {
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

export function mouseOverParent(e) {
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

export function handleDubleClick() {
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

export function handleBlur() {
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

export function handleKeyDown(keyDownEvent) {
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
export function mouseleaveParent() {
    //when the mouse leave task <li> elemnt:
    //stop listening to key down.

    document.removeEventListener('keydown', handleKeyDown) //stop listen to keydown.
}
