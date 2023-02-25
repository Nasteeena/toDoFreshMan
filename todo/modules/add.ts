import { STATUS, toDoArr } from "./elements.js";
import { render } from "../index.js";

function addTodo(text: string) {
    if(text !== '') {
        let task = text.trim();
        let newtask = new Task(task, Math.random(), false, STATUS.TO_DO);
        toDoArr.push(newtask);
        console.log(newtask)
    } else {
        return
    }
    render();
}

class Task {
    constructor(public text: string, public id: number, public checked: boolean, public status: string) {
        this.text = text,
        this.id = id,
        this.checked = checked, 
        this.status = status
    }
}

export {addTodo}