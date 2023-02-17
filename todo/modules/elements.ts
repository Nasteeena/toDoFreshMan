const elements: {
    form: HTMLInputElement,
    inputMessage: HTMLInputElement, 
    list: HTMLElement 
} = {
    form: <HTMLInputElement>document.querySelector('.js-form'),
    inputMessage: <HTMLInputElement>document.querySelector('.js-todo-input'),
    list: <HTMLInputElement>document.querySelector('.js-todo-list'),
}

const STATUS = {
    TO_DO: 'To do',
    DONE: 'Done',
}

let toDoArr: Array<{text: string, id: number, checked: boolean, status: string}> = [];

/*interface task {
    text: string, id: number, checked: boolean, status: string
} */

export {elements, STATUS, toDoArr}