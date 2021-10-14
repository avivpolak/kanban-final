import { tasks, taskExtraInfo } from './dataStructures'

export function sendToLocal() {
    //sending "tasks" & "taskExtraInfo" to local storage

    localStorage.setItem('tasks', JSON.stringify(tasks))
    let itemToSend = Object.assign({}, taskExtraInfo)
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend))
}
