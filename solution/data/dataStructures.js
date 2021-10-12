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