import { STATUS, toDoArr } from "./elements.js";
import { render } from "../index.js";

function addTodo(text: string) {
    if(text !== '') {
        let task = text.trim();
        let newtask = new Task(task);
        toDoArr.push(newtask);
    } else {
        return
    }
    render();
}

function Task(text: string) {
    this.text = text,
    this.id = Date.now(),
    this.checked = false, 
    this.status = STATUS.TO_DO
}

export {addTodo}