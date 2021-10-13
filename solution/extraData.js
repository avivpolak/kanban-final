import { tasks, taskExtraInfo } from './index.js'
//EXTRA-Data processing functions:

export function daysleft(title) {
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
export function importance(title) {
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

export function howBusy() {
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
export function colorFromImportance(importance) {
    //generates rgb color from given importance.
    //as said , when importance is more than 1 , you are for sure late.
    //red = 0.7-1 so it will be red.
    //green is between 0.3-0.7
    //gray will be the most none important-0.1-0.3.

    //this color will pe presented as the extra-info-bar back-ground color

    const r = importance * 120 + 135
    const g = (1 - importance) * 120 + 100
    return `rgb(${r},${g},120)`
}
