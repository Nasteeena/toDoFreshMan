import { render } from "../index.js";
import { toDoArr } from "./elements.js";

function deleteTask(task: string) {
    let res = toDoArr.findIndex(function(item) {
        return item.text === task;
    })

    toDoArr.splice(res, 1);
    render();
}

export {deleteTask}

