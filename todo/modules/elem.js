const elements = {
    form: document.querySelector('.js-form'),
    inputMessage: document.querySelector('.js-todo-input'),
    list: document.querySelector('.js-todo-list'),
}

const STATUS = {
    TO_DO: 'To do',
    DONE: 'Done',
}

let toDoArr = [];

export {elements, STATUS, toDoArr}