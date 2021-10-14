import { createElement } from './dom'
import { tasks } from './dataStructures'
import { sendToLocal } from './localStorage'
import { displayElements } from './dom'

//API

export async function handleLoad() {
    //when "load" button is pressed:
    //-->create a loader spinner animation
    //-->send (GET) requset to api
    //-->set tasks to the answer.
    //-->updates the DOM & local storage.
    //-->remove the loader spinner animation

    loader('create')
    let response = await loadData()
    let tasksResponse = response.tasks
    sendToLocal()
    displayElements()
    loader('remove')
    return tasksResponse
}

export async function handleSave() {
    //when "save" button is pressed:
    //-->create a loader spinner animation
    //-->send "tasks" as (PUT) requset to api
    //-->remove the loader spinner animation

    loader('create')
    await saveData()
    loader('remove')
}

export function loader(state) {
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
