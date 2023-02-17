import { render } from "../main.js";
import { toDoArr } from "./elem.js";

function deleteTask(task) {
    let res = toDoArr.findIndex(function(item) {
        return item.text === task;
    })

    toDoArr.splice(res, 1);
    render();
}

export {deleteTask}