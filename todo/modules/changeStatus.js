import { STATUS } from "./elem.js";

function changeStatus(status, element, checkbox) {
    if(status === STATUS.DONE) {
        element.style.color = 'black';
        element.style.textDecoration = 'line-through';
        checkbox.checked = true;
    } else if(status === STATUS.TO_DO) {
        element.style.color = 'grey';
        element.style.textDecoration = 'none';
        checkbox.checked = false;
    }
}

export {changeStatus}