import { STATUS, toDoArr } from "./elem.js";
import { render } from "../main.js";

function addTodo(text) {
    if(text !== '') {
        let task = text.trim();
        let newtask = new Task(task);
        toDoArr.push(newtask);
        console.log(toDoArr)
    } else {
        return
    }
    render();
}

function Task(text) {
    this.text = text,
    this.id = Date.now(),
    this.checked = false, 
    this.status = STATUS.TO_DO
}

export {addTodo}