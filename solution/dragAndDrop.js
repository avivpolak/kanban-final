import { moveTask } from './task'
import { displayElements } from './dom'
import { kababToString } from './index'

export let dblClicked = false // later used to determine if to start drag and drop
let mouseDown = false // later used to determine if to start drag and drop
export function clickDrugAndDropHandler(event) {
    const target = event.target

    event.preventDefault() // to prevent the selecting action of click

    mouseDown = true

    function onMouseUp(event) {
        if (event.target === target) {
            mouseDown = false
        }
    }

    document.addEventListener('mouseup', onMouseUp)

    // the main drag and drop section!
    // we set a time out so the user can make a dblclick without starting to drag
    // I found that the best time is 300 ms. microsoft says its 500 ms ;)

    setTimeout(() => {
        if (dblClicked === true || mouseDown === false) return

        event.preventDefault()

        target.classList.add('taskOnTheMove')

        let shiftX = event.clientX - target.getBoundingClientRect().left
        let shiftY = event.clientY - target.getBoundingClientRect().top

        target.style.position = 'absolute'
        target.style.zIndex = 1000
        document.body.append(target)

        moveAt(event.pageX, event.pageY)

        // moves the task at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
            target.style.left = pageX - shiftX + 'px'
            target.style.top = pageY - shiftY - 5 + 'px' // small adjustment for better performance
        }

        let currentDroppable = null

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)

            target.style.display = 'none'
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
            target.style.display = ''

            // mousemove events may trigger out of the window (when the ball is dragged off-screen)
            // if clientX/clientY are out of the window, then elementFromPoint returns null
            if (!elemBelow) return

            // potential droppable are labeled with the class "droppable" (can be other logic)
            let droppableBelow = elemBelow.closest('.droppable')

            if (currentDroppable != droppableBelow) {
                // we're flying in or out...
                // note: both values can be null
                //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
                //   droppableBelow=null if we're not over a droppable now, during this event

                if (currentDroppable) {
                    // the logic to process "flying out" of the droppable (remove highlight)
                    leaveDroppable(currentDroppable)
                }
                currentDroppable = droppableBelow
                if (currentDroppable) {
                    // the logic to process "flying in" of the droppable
                    enterDroppable(currentDroppable)
                }
            }
        }

        // move the task on mousemove
        document.addEventListener('mousemove', onMouseMove)

        // drop the task, remove unneeded handlers

        // drop the task, remove unneeded handlers
        target.onmouseup = function () {
            if (currentDroppable) {
                moveTask(kababToString(target.dataset.title), currentDroppable.dataset.state)
                currentDroppable.classList.remove('waitingForDrop')
                document.removeEventListener('mousemove', onMouseMove)
                target.onmouseup = null
                target.remove()
                displayElements()
            } else {
                document.removeEventListener('mousemove', onMouseMove)
                target.onmouseup = null
                target.remove()
                displayElements()
                return
            }
        }
    }, 300)
}

function enterDroppable(droppableElement) {
    if (droppableElement.tagName === 'LI') {
        droppableElement.classList.add('below-drag')
    }
}

function leaveDroppable(droppableElement) {
    if (droppableElement.tagName === 'LI') {
        droppableElement.classList.remove('below-drag')
    }
}
